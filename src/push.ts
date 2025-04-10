// // Importujemy bibliotekę web-push – pozwala wysyłać push notyfikacje w stylu Firebase
// import webpush from 'web-push';

// // Ustawiamy dane identyfikacyjne nadawcy i klucze VAPID (public/private)
// webpush.setVapidDetails(
//   'mailto:kontakt@twojadomena.pl',      // Adres kontaktowy właściciela aplikacji
//   process.env.VAPID_PUBLIC_KEY!,        // Klucz publiczny do autoryzacji
//   process.env.VAPID_PRIVATE_KEY!        // Klucz prywatny – podpisuje notyfikacje
// );

// // Tworzymy lokalną listę subskrypcji (można też trzymać w bazie)
// const subscriptions: webpush.PushSubscription[] = [];

// // Eksportujemy funkcję do rejestrowania nowych subskrypcji (np. z frontendów)
// export const registerSubscription = (sub: webpush.PushSubscription) => {
//   subscriptions.push(sub); // Dodajemy subskrypcję do listy
// };

// // Wysyłamy notyfikację push do wszystkich subskrybentów z listy
// export const sendNotificationToAll = async (title: string, body: string) => {
//   for (const sub of subscriptions) {
//     // Tworzymy treść notyfikacji i wysyłamy
//     await webpush.sendNotification(sub, JSON.stringify({ title, body }));
//   }
// };
