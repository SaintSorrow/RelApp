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

export async function insertRoute(route) {
  try {
    await db.collection(Collections.routes).doc().set(route);
  } catch (err) {
    console.log(err);
    throw err;
  } 
}

export async function addRouteAsFavorite(userId, routeId) {
  try {
    const doc = await db.collection(Collections.routes).doc(routeId).get();
    const data = doc.data();
    let favorites = data.userFavorite;
    if (!favorites.contains(userId)) {
      favorites.push(userId);
      await db.collection(Collections.routes).doc(routeId).update(favorites);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
}