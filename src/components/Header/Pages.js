import PageButton from './PageButton';

function Pages({listPages}) {
    return listPages.map((page, ind) => <PageButton key={ind} page={page}/>);
};

export default Pages;