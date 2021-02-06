import * as postService from '../services/posts';
import * as userService from '../services/users';

export default {
  namespace: 'post',
  state: {
    posts: [],
  },
  effects: {
    *query({ payload }, { call, put }) {
      const posts = yield call(postService.query);
      yield posts.map(post => {
        call(userService.query.bind(post.userId));
      });
      yield put({ type: 'save', payload: posts });
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        posts: action.payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {});
    },
  },
};

export const getPosts = state => state.post.posts;
export const getLoading = state => state.loading.models.post;
