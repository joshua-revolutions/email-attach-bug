import * as ImagePicker from 'expo-image-picker';


/**
 * Allows user to pick photo from gallery
 * @returns filepath of selected picture
 */
async function pickPhoto() {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false
    });
    if (!result.canceled) {
        return result.assets[0].uri
    } else {
        return null;
    }
}

export const imageUtil = {
    pickPhoto: pickPhoto
}