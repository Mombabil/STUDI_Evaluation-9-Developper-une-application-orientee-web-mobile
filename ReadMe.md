# Documentation Technique du developpement de l'application

1. Creation d'un Trello <https://trello.com/b/xIOT8uzE/d%C3%A9velopper-une-application-orient%C3%A9e-web-mobile>
2. Creation des wireframes et charte graphique et import au format pdf dans le projet (wireframes/)
3. Creation d'une app symfony --webapp et import des dependances **symfony/ux-react** et **symfony/security-bundle**
4. A partir des wireframes, création du header et du bouton de connexion
5. Mise en place d'une sécurité qui redirige vers la page d'accueil si l'utilisateur saisie un url non valide (config/services.yaml et src/EventListener/Redirect404ToHomeListener.php)
6. Création en local de la db via php bin/console doctrine:database:create
7. Création du diagramme de classe pour les User et les Post (recettes) et recherche des différents type de régime alimentaire (<https://larecolteenvrac.com/articles/les-differents-regimes-alimentaires>) et allergènes (wireframes/detailprojet2.pdf)
8. Création du processus d'authentification (import de symfony/security-bundle et modification de config/package/security.yaml) et de l'entité User
