import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyD16raturUzZamTKu8ZXmMBCO_5J1SCIqg",
	authDomain: "clothing-app-16400.firebaseapp.com",
	databaseURL: "https://clothing-app-16400.firebaseio.com",
	projectId: "clothing-app-16400",
	storageBucket: "clothing-app-16400.appspot.com",
	messagingSenderId: "470532532712",
	appId: "1:470532532712:web:1202897689b66d454f9c5d"
};

firebase.initializeApp(config);

//function to add collection into firebase
export const addCollectionAndDocuments = async (
	collectionKey,
	objectsToAdd
) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
	const transformedCollection = collections.docs.map(doc => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
