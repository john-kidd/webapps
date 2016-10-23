interface HomeSection {
    heading: string;
    items: string[];
    imageUrl: string;
}

export interface Home {
    pageTitle: string;
    sections: HomeSection[];
}