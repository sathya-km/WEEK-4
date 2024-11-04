function greetInLanguage(languageCode) {
    let greeting;

    switch (languageCode) {
        case 'en':
            greeting = "Hello!";
            break;
        case 'fr':
            greeting = "Bonjour!";
            break;
        case 'es':
            greeting = "¡Hola!";
            break;
        case 'de':
            greeting = "Hallo!";
            break;
        case 'it':
            greeting = "Ciao!";
            break;
        case 'ja':
            greeting = "こんにちは (Konnichiwa)!";
            break;
        case 'zh':
            greeting = "你好 (Nǐ hǎo)!";
            break;
        default:
            greeting = "Hello! (Default greeting in English)";
            break;
    }

    console.log(greeting);
}

// Example usage
let languageCode = prompt("Enter a language code (en, fr, es, de, it, ja, zh):");
greetInLanguage(languageCode);
