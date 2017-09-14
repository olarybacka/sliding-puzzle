import Board from './components/board'
// const MOVIE_LIST = 'movie-list'

export default () => ([
    {component: Board, name: "game-board"},
].forEach((el) => window.customElements.define(el.name, el.component)))
