import { firestore as db } from '../firebaseServices/Firebase';
import { getCurrentUser } from '../firebaseServices/Authorization';
import { Collections } from './Collections';

export async function getAllRoutes() {
  try {
    const routes = [];
    const routesSnapshot = await db.collection(Collections.routes).get();
    const currentUser = await getCurrentUser();

    routesSnapshot.forEach(doc => {
      const route = formatRoute(doc.data(), currentUser.uid);
      routes.push(route);
    });

    return routes;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function getRouteById(routeId) {
  try {
    const doc = await db.collection(Collections.routes).doc(routeId).get();
    const currentUser = await getCurrentUser();
    const route = formatRoute(doc.data(), currentUser.uid)

    return route;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function formatRoute(data, userId) {
  const isFavorite = data.userFavorite.contains(userId);
  const route = {
    id: doc.id,
    name: data.name,
    description: data.description,
    ownerId: data.ownerId,
    isFavorite: isFavorite
  };

  return route;
}

export async function getRouteComments(routeId) {
  try {
    const comments = [];
    const commentsSnapshot = db.collection(Collections.routes).where('routeId', '==', routeId);

    commentsSnapshot.forEach(doc => {
      const data = doc.data();
      const comment = {
        id: doc.id,
        comment: data.comment,
        routeId: data.routeId,
        username: data.username
      };

      comments.push(comment);
    }) 
  } catch (err) {
    console.log(err);
    throw err;
  }
}