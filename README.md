# Projet : Pokédex

## Introduction

Ce projet de Vue.js à été réalisé par Adrien BASSAIL et Henri BOULNOIS. Ce projet s'inscrit dans le cadre du cours de Framework Web de licence 3 Sceinces du Numérique.<br/>
Le but de ce projet est de présenter un pokédex qui répertorie tous les pokémons existants. Il permet de voir plus de détails sur un pokémon donné, ou de rechercher un pokémon via un champ de recherche. <br/>

## Plus d'informations

La page d'accueil charge les pokémons par groupe de 10, et en charge 10 supplémentaires quand l'utilisateur appuie sur le bouton suivant.<br/>
Tous les pokémons qui ont été chargés sont stockés dans un store, afin de permettre un affichage plus rapide, et éviter de faire de nombreuses requêtes pour rien. L'affichage d'informations supplémentaires sur un pokémon ne nécésite pas de requête supplémentaires car toutes les informations sont déjà stockées dans le store. 
Une variable présente dans le store permet également de savoir combien de pokémons ont été chargés en local dans la liste. 
La page index permet d'avoir le nom en anglais et français d'un pokémon afin d'utiliser le champ de recherche. (requêtes non stockées dans le store)


## Autres classes

Nous avons fait le choix de laisser certaines classes qui nous ont aidé dans notre développent, même si elles ne sont plus utilisées et ne sont pas forcément optimisées.
La classe HelloWorld possède un compteur stocké dans le store. 
La classe PeuImporte était notre première page de recherche qui doit faire deux requêtes axios imbriquées.

## Difficultés rencontrées

Les informations retournées par l'API sont en anglais et nous forcent a faire des requêtes supplémentaires pour avoir par exemple le nom des pokémons en français. 
A cause de cela, le champ de recherche ne fonctionne qu'avec des noms de pokémons en anglais. ex : "pikachu" / "mareep"
