// URL query parameter handling for article content.
const queryString = window.location.search; // Get the query string from the URL.
const articleIndex = new URLSearchParams(queryString).get("content"); // Default article content is present.

// Define all article titles as a map.
// This map associates article indices with their corresponding titles.
const articleTitles = new Map([
    [
        "article1",
        "💥 Breaking News: Senior Deputy Head Resigns After Bunsen Burner Incident Singes Dignity (and Hair)",
    ],
    [
        "article2",
        "🏡 Man Cited by HOA for Lawn Gnome “With Aggressive Facial Expression”",
    ],
    [
        "article3",
        "📺 New TV Licensing Law Requires Citizens to Register Dreams as “Unlicensed Viewing”",
    ],
    [
        "article4",
        "📸 Photographer Arrested After Breaking Into Buckingham Palace “For The Perfect Candid”",
    ],
    [
        "article5",
        "💻 65-Year-Old IT Guru Robs Bank Using Whipped Cream Launcher, Escapes with $1 Million",
    ],
]);

// Define all article contents as a map.
// This map associates article indices with their corresponding content.
const articleContents = new Map([
    [
        "article1",
        "<p>Andy Drews, the long-serving Senior Deputy Headteacher at Harris Franklin High School in Houston, Texas, has officially stepped down following what staff are calling “a regrettable yet slightly hilarious laboratory accident.”</p><br /><p>The incident unfolded during a Year 10 chemistry demonstration when teacher Mr. Blunt attempted to showcase the “safe and responsible” use of open flame. Unfortunately, Mr. Drews wandered too close to the action just as Mr. Blunt ignited a Bunsen burner with unexpected enthusiasm.</p><br /><p>Witnesses report a brief but dramatic flare-up, followed by the unmistakable scent of burning hair. “It was like a firework display, but more... personal,” one student commented, still visibly shaken. “Sir just froze with his clipboard while his fringe vanished in a puff of smoke.”</p><br /><p>Though physically unharmed, Mr. Drews has cited the incident as “the last straw” in a long career of educational chaos. “I’ve dealt with food fights, rogue raccoons in the gym, and even a parent who tried to enroll their child’s emotional support goat,” Drews stated. “But nothing prepared me for losing my hair in front of Year 10 Chemistry.”</p><br /><p>He plans to spend retirement “growing it back” and launching a birdhouse business on Etsy.</p><br /><p>In response, the chemistry department has been restricted to paper-based demonstrations until further notice. Mr. Blunt, though remorseful, has reportedly been nominated for a staff talent show under the category “Accidental Pyrotechnics.”</p>",
    ],
    [
        "article2",
        "<p>Residents of the quiet suburban neighborhood of Cactus Pines were left stunned this week after local homeowner Jeremy Whittaker was cited by the HOA for a “hostile-looking lawn gnome” that allegedly caused distress to passing joggers.</p><br /> <p>The gnome in question — a 10-inch ceramic figure known as “Gary the Grumpy” — was described in the official complaint as having “a menacing glare and an unneighborly smirk.” The HOA demanded immediate removal, citing violation 14B: “All outdoor décor must promote a welcoming environment.”</p><br /> <p>Instead of complying, Whittaker retaliated by purchasing 200 additional gnomes, positioning them around his lawn in “various emotional states.” Reports indicate several are wearing tiny protest signs reading “Gnome Lives Matter” and “Free Gary.”</p><br /> <p>“It’s art,” Whittaker claimed in an interview. “They can’t ban expression. Especially not ceramic expression.”</p><br /> <p>HOA officials called an emergency meeting, which was promptly overrun by gnomes placed on all the chairs. Chaos ensued after a board member accidentally kicked one and was shouted down by local residents chanting “Gnome justice now!”</p><br /> <p>As of today, negotiations remain tense. The HOA has threatened legal action, while Whittaker has hinted at launching a “Gnome Liberation Festival” featuring face painting and angry kazoo music.</p><br /> <p>Gary the Grumpy remains on the lawn, unfazed and unblinking.</p>",
    ],
    [
        "article3",
        "<p>In a baffling new policy, the Department of Media and Licensing has announced that all UK citizens must now declare and register any vivid or lucid dreams that involve watching television — citing “unauthorised internal broadcasting.”</p><br /> <p>The change, introduced without warning under the Sleep Content Regulation Bill, requires dreamers to file a “Subconscious Viewing Disclosure Form” if they recall watching a show, movie, or advert in their sleep. Failure to comply could result in fines of up to £1,200 and “possible dream audits.”</p><br /> <p>“Just because the viewing occurs in your mind doesn’t mean it’s exempt,” said Licensing Enforcement Director Sandra Pitkin. “If you remember watching <em>EastEnders</em> in your dream, you’ve technically accessed BBC content without a valid license.”</p><br /> <p>Early morning raids have already begun, targeting citizens who admitted on social media to dreaming about “binging old sitcoms.” One man in Manchester was reportedly fined after tweeting: “Had a dream I was watching <em>Top Gear</em> with a talking dog.”</p><br /> <p>Critics have condemned the law as unenforceable and absurd. “How do they even plan to track dream-based viewing?” asked one MP. “Are they hiring psychic inspectors?”</p><br /> <p>Despite backlash, the department insists the policy is fair. A spokesperson clarified: “If you’re mentally streaming content, you’re mentally obligated to pay.”</p><br /> <p>Meanwhile, citizens are reportedly shifting to non-visual dreams, such as “dreaming of smells” or “just floating through voids.” Sales of dream journals and sleep helmets have surged.</p><br /> <p>TV Licensing officials are now rumored to be piloting a subscription plan for “premium dream access” starting at £6.99/month.</p>",
    ],
    [
        "article4",
        "<p>Professional photographer and self-proclaimed “authenticity hunter” Jennifer Johnrock has been arrested following an elaborate break-in at Buckingham Palace, where she hoped to capture “the raw, unfiltered daily lives” of the royal family for her photography blog on X.com.</p><br /> <p>The 34-year-old creative reportedly disguised herself as a decorative vase delivery person before slipping through a side entrance early Tuesday morning. Sources say she carried nothing but a Canon EOS R5, three lenses, and a hand-stitched camera strap reading “#NoFilterQueen.”</p><br /> <p>According to palace security, Johnrock made it as far as the royal breakfast room, where she was spotted lying prone beneath a tea trolley attempting to snap “natural, golden-hour portraits” of Princess Anne buttering a scone.</p><br /> <p>“She said she didn’t want to stage anything — just real life in natural light,” said one baffled guard. “She kept whispering, ‘Let them crumb. Let it be real.’”</p><br /> <p>Upon arrest, Johnrock allegedly insisted she wasn’t trespassing, but “documenting tradition in motion.” Police found over 400 photos on her SD card, including blurry shots of corgis, a royal gardener yawning, and what appears to be Prince William loading a dishwasher.</p><br /> <p>“My followers need to see this,” she reportedly told officers. “They deserve to know the monarchy uses regular jam.”</p><br /> <p>Johnrock is currently facing charges of trespassing, unlawful photography, and “intent to excessively vignette.” Her X.com blog, titled *Behind The Velvet Rope*, has since gone viral, with the last post captioned: “They can take my freedom, but they’ll never take my ISO.”</p><br /> <p>The Royal Family has not commented publicly, though palace windows are now said to be lined with blackout curtains “just in case.”</p>",
    ],
    [
        "article5",
        "<p>In what police are calling “the stickiest robbery of the decade,” 65-year-old retired IT consultant Keith Gibbon executed a daring $1 million bank heist in downtown Chicago — armed with nothing but a custom-built whipped cream launcher and decades of system admin experience.</p><br /> <p>According to eyewitnesses, Gibbon entered the WestFirst Trust branch wearing a trench coat, ski goggles, and a Bluetooth headset, before brandishing what staff initially assumed was a malfunctioning fire extinguisher. Within seconds, he had flooded the lobby with high-pressure dairy foam, shouting: “Nobody move! This cream’s non-dairy but fully operational!”</p><br /> <p>Surveillance footage shows the former tech guru disabling security systems using a Raspberry Pi duct-taped to an old PalmPilot. “It was like watching your grandpa go full Mission Impossible,” said one stunned bank teller. “Except with more lactose.”</p><br /> <p>Gibbon, who previously ran a YouTube channel called *Ctrl+Alt+Defy*, reportedly planned the entire operation using vintage software and left behind a printed ransom note in Comic Sans that read: “Thanks for the funds — I’m off to finally upgrade my router.”</p><br /> <p>He escaped the scene in a modified mobility scooter fitted with NOS boosters and a license plate reading “404CASH.” Authorities say he disappeared into a nearby farmer’s market where he “blended in seamlessly with other bearded men carrying pastries.”</p><br /> <p>Police are baffled. “We’ve never seen a suspect so thoroughly moisturized,” said the lead investigator. “It’s hard to chase someone when you’re slipping on aerosol dessert topping.”</p><br /> <p>A manhunt is now underway, but online communities have begun hailing Gibbon as a folk hero. Stickers reading “Keith Did Nothing Mousse-worthy” have begun appearing across the city.</p><br /> <p>Gibbon remains at large. His last known message, posted cryptically to a tech forum: “brb – rebooting the system... with sprinkles.”</p>",
    ],
]);

// Define all article images as a map.
// This map associates article indices with their corresponding image paths.
const articleImages = new Map([
    ["article1", "images/headteacher.webp"],
    ["article2", "images/gnomes.jpg"],
    ["article3", "images/tv.webp"],
    ["article4", "images/camera.jpg"],
    ["article5", "images/bank.jpg"],
]);

// Use correct article conetent based on the URL parameter.
document.addEventListener("DOMContentLoaded", () => {
    // Ensure the DOM is fully loaded before executing the script.
    // Select the article title element.
    const articleTitleElement = document.getElementById("article_title");
    if (articleTitleElement) {
        // Check if the article title element exists.
        // Set the inner HTML of the article title element based on the article index.
        articleTitleElement.innerHTML =
            articleTitles.get(articleIndex) ||
            "No content available for this article.";
    } else {
        // If the article title element is not found, log an error.
        // This is a fallback in case the title element is not found.
        console.error("Article title element not found.");
    }

    // Select the article content element.
    const articleContentElement = document.getElementById("article_text");
    if (articleContentElement) {
        // Check if the article content element exists.
        // Set the inner HTML of the article content element based on the article index.
        articleContentElement.innerHTML =
            articleContents.get(articleIndex) ||
            "No content available for this article.";
    } else {
        // If the article content element is not found, log an error.
        // This is a fallback in case the content element is not found.
        console.error("Article content element not found.");
    }

    // Select the article image element.
    const articleImageElement = document.getElementById("article_image");
    if (articleImageElement) {
        // Check if the article image element exists.
        // Set the source of the article image element based on the article index.
        const imageSrc = articleImages.get(articleIndex); // Get the image source from the map.
        // If the image source exists, set it; otherwise, log an error.
        if (imageSrc) {
            articleImageElement.src = imageSrc;
        } else {
            console.error("No image available for this article.");
        }
    } else {
        console.error("Article image element not found.");
    }
});
