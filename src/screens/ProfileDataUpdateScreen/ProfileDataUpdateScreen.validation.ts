import * as Yup from 'yup';

export const ProfileUpdateValidationSchema = Yup.object().shape({
	username: Yup.string(),
	email: Yup.string().email('Invalid email'),
	birthDate: Yup.date(),
	created: Yup.date(),
	lastUpdate: Yup.date(),
	profileImage: Yup.string(),
	description: Yup.string()
});

export default ProfileUpdateValidationSchema;