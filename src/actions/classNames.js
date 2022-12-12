function classNames(...listClasses) {
    listClasses = listClasses.filter(className => className);
    return listClasses.join(' ');
};

export default classNames;