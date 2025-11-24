import React from 'react';

import {Text, View} from 'react-native';
import {GalleryPreviewData} from "@/models/AffirmationCategory";


interface GuidedAffirmationsGalleryProps {
    title: string;
    products: GalleryPreviewData[];
}
const GuidedAffirmationsGallery = ({
                                                                title,
                                                                products,}: GuidedAffirmationsGalleryProps) => {
    return (
        <View>
            <Text>
                
            </Text>
        </View>
    );
};

export default GuidedAffirmationsGallery;