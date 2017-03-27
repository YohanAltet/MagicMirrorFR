![MagicMirror²: The open source modular smart mirror platform. ](https://github.com/MichMich/MagicMirror/blob/master/.github/header.png)

**MagicMirror²FR** est un repos pour paramétrer simplement **MagicMirror²** en français. Il créé ou remplace le fichier config.js d'origine ainsi que d'autres fichiers nécessitant une traduction.

## Procédure

### Installation de MagicMirror²
Avant toute chose il est nécessaire d'installer **MagicMirror²**. Pour Raspberry Pi entrez la commande d'installation automatique suivante :
````
curl -sL https://raw.githubusercontent.com/MichMich/MagicMirror/master/installers/raspberry.sh | bash
````

(Vous trouverez la procédure d'installation complète en anglais sur le repos original [ici](https://github.com/MichMich/MagicMirror))

### Installation des réglages français
Partie en cours d'écriture

## Modifications

Vous trouverez ci-dessous la liste des changements par rapport aux fichiers d'origine.

| **Fichier -> paramètre** | **Description** |
| --- | --- |
| `MagicMirror/config/config.js -> language` | Changement de la langue en français |
| `MagicMirror/config/config.js -> calendar/header` | Remplacement du titre "US Holidays" par "Calendrier" |
| `MagicMirror/config/config.js -> calendar/url` | Remplacement du calendrier des jours feriés américains par ceux français |
| `MagicMirror/config/config.js -> currentweather/location` | Remplacement de "New-York" par "Aix-en-Provence" |
| `MagicMirror/config/config.js -> currentweather/locationID` | Remplacement de l'ID de "New-York" par celui de "Aix-en-Provence" |
| `MagicMirror/config/config.js -> weatherforecast/header` | Remplacement de "Xeather Forecast" par "Prévisions Météo" |
| `MagicMirror/config/config.js -> weatherforecast/location` | Remplacement de "New-York" par "Aix-en-Provence" |
| `MagicMirror/config/config.js -> weatherforecast/locationID` | Remplacement de l'ID de "New-York" par celui de "Aix-en-Provence" |
| `MagicMirror/config/config.js -> newsfeed/title` | Remplacement du titre "New-York Times" par "Le Monde" |
| `MagicMirror/config/config.js -> newsfeed/url` | Remplacement du flux RSS du "New-York Times" par celui de "Le Monde" |
| `MagicMirror/modules/default/compliments/compliments.js -> morning` | Traduction des phrases d'origine |
| `MagicMirror/modules/default/compliments/compliments.js -> afternoon` | Traduction des phrases d'origine |
| `MagicMirror/modules/default/compliments/compliments.js -> evening` | Traduction des phrases d'origine |
