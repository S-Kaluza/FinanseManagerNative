import React, { useContext } from 'react';
import { TextInput } from 'react-native';
import { useFormik } from 'formik';
import { styles } from './ProfileDataUpdateScreen.styles';
import { ProfileUpdateValidationSchema } from './ProfileDataUpdateScreen.validation';
import { View, Text, Pressable } from 'react-native';
import { authContext } from '../../providers/AuthProvider/AuthProvider';

function ProfileDataUpdateScreen() {
	const { profileData, setProfileData } = useContext(authContext);
	const { handleSubmit, values, handleChange } = useFormik({
		initialValues: profileData,
		validationSchema: ProfileUpdateValidationSchema,
		onSubmit: () => {
			setProfileData(values);
			console.warn(profileData);
		},
	});

	return <View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>userName</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('username')} value={values.username} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>email</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('email')} value={values.email} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>birthdate</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('birthDate')} value={values.birthDate? values.birthDate.toISOString() : 'brak danych'} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>image</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('profileImage')} value={values.profileImage} />
		</View>
		<View style={styles.dataAndLabelWrapper}>
			<Text>description</Text>
			<TextInput selectionColor={'green'} style={styles.inputField} onChangeText={handleChange('description')} value={values.description} multiline numberOfLines={10} />
		</View>
		<View style={styles.buttonWrapper}>
			<Pressable style={styles.button} onPress={() => handleSubmit()}><Text style={styles.buttonText}>save</Text></Pressable>
			<Pressable style={styles.button} onPress={() => console.warn(profileData)}><Text style={styles.buttonText}>show</Text></Pressable>
		</View>
	</View>;
}

export default ProfileDataUpdateScreen;