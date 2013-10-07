var shuffleSequence = seq(anyType);
var practiceItemTypes = ["practice"];

var defaults = [
    "Separator", {
        hideProgressBar: true,
	transfer: 1000,
        normalMessage: "Please wait for the next sentence.",
        errorMessage: "Wrong. Please wait for the next sentence."
    },
    "DashedSentence", {
        hideProgressBar: true, 
	mode: "self-paced reading"
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "Use number keys or click boxes to answer.",
        leftComment: "(Bad)", rightComment: "(Good)"
    },
    "Question", {
	as: ["Yes", "No"],
	hideProgressBar: true,
	hasCorrect: true
    },
    "Message", {
        hideProgressBar: true
    },
    
    "FlashSentence", {
	hideProgressBar: true
   
    },
    "Form", {
	hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var items = [

   //DashedSentence Controller separates at |

      ["intro", "Form", {
          html: { include: "example_intro.html" },} ],
	
	
    [["itemF11a1",1],"FlashSentence",{s: "yacht ----- watt ----- squat"},"DashedSentence", {s: "The essayist|remarked|that|the plot|enraged|the buddhist|at the story|reading."},"Question",{q: "Did the plot enraged the buddhist?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF117a1",2],"FlashSentence",{s: "string ----- arrow ----- poison"},"DashedSentence", {s: "It was the cowboy|who|was handsome|that|twirled|the lucky rope|during the rodeo event."},"Question",{q: "Was the rope twirled by the cowboy?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF100d3",3],"DashedSentence", {s: "The ranger|realized|that|the guide|knew|that|the cliff frightened|the hikers."},"Question",{q: "Was it the ranger who was frightened?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF80c1",4],"DashedSentence", {s: "The businessmen|noticed|that|the conductor|acknowledged|that|the train startled|the passenger."},"Question",{q: "Was it the businessmen who noticed the startled passenger?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF29b3",5],"FlashSentence",{s: "carpet ----- wallpaper ----- latch"},"DashedSentence", {s: "The renters|acknowledged|that|the apartment|shocked|the owner|after the renovation."},"Question",{q: "Did the apartment shock the couple?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF111a1",6],"FlashSentence",{s: "basket ----- ornament ----- bench"},"DashedSentence", {s: "It was the marine|who|was brave|that|carried|the national flag|at the summer parade."},"Question",{q: "Was the parade in the summer?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF97d3",7],"DashedSentence", {s: "The administration|supposed|that|the demonstrators|mistrusted|the legislation|that would raise taxes."},"Question",{q: "Was the legislation to build a new stadium?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF141d3",8],"DashedSentence", {s: "It was the actor|who|starred in the movie|who|supported|the charity|during the T.V. telethon."},"Question",{q: "Was the model arrested today?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF105d3",9],"DashedSentence", {s: "The guard|remarked|that|the confession|revealed|that|the bracelet interested|the thief."},"Question",{q: "Was it the guard who was interested by the confession?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF83d3",10],"DashedSentence", {s: "The soldiers|imagined|that|the shield|intrigued|the warrior|of the bellicose village."},"Question",{q: "Did the sword intrigue the warrior?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF1a1",11],"FlashSentence",{s: "topper ----- shopper ----- proper"},"DashedSentence", {s: "The count|theorized|that|the princess|relished|the potion|that turned copper|into gold."},"Question",{q: "Did the princess relish the potion?"},"Form",{ html: { include: "recall.html" }},],	
	
	
	
    [["itemF90d3",12],"DashedSentence", {s: "The parent|admitted|that|the nanny abhorred|the shrieks|of the offspring."},"Question",{q: "Was it the parent that abhorred the shrieks?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF92d3",13],"DashedSentence", {s: "The curator|proclaimed|that|the patron|appreciated|the sculpture|at the art gallery."},"Question",{q: "Was the sculpture in the courtyard?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF2a1",14],"FlashSentence",{s: "wine ----- boots ----- stapler"},"DashedSentence", {s: "The executive|confirmed|that|the clerk|deplored|the salary|that was too scant|to live on."},"Question",{q: "Was the salary scant?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF21a1",15],"FlashSentence",{s: "mooch ----- hooch ----- smooch"},"DashedSentence", {s: "The sergeant|perceived|that|the criminal|realized|that|the victim detested|the motive."},"Question",{q: "Was it the victim who detested the motive?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF139d3",16],"DashedSentence", {s: "It was the girl|who|was terrified|that|fled|the violent tornado|that the weatherman predicted."},"Question",{q: "Was the tornado unexpected?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF96d3",17],"DashedSentence", {s: "The physician|verified|that|the epileptic|abhorred|the convulsions|that he frequently|experienced."},"Question",{q: "Did the manic-depressive patient abhor the convulsions?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF81c1",18],"DashedSentence", {s: "The hikers|supposed|that|the ranger|understood|that|the bench comforted the straggler."},"Question",{q: "Did the bench comfort the straggler?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF25a1",19],"FlashSentence",{s: "sing ----- fling ----- ring"},"DashedSentence", {s: "The student|remarked|that|the subject|noticed|that|the experiment panicked|the psychologist."},"Question",{q: "Did the subject notice the panic?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["itemF136d3",20],"DashedSentence", {s: "It was the princess|who|was the eldest|that|wore|the prettiest necklace|at the king's ball."},"Question",{q: "Did the youngest princess wear the prettiest necklace?"},"Form",{ html: { include: "recall.html" }},],	
    [["item3c1",21],"DashedSentence", {s: "It was the gun|that the actor|who|posed|for a photo|fired|during the robbery scene.|"},"Question",{q: "Was it an actor who posed for a photo?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF89d3",22],"DashedSentence", {s: "The magician|explained|that|the children|liked|the trick|at the county fair."},"Question",{q: "Were the children vexed by the magician's trick?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item2b3",23],"FlashSentence",{s: "glue ----- key ----- heart"},"DashedSentence", {s: "It was the dress|that the mother|who|worked|at the diner|wore|to the cocktail party.|"},"Question",{q: "Did the mother go to a restaurant?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF140d3",24],"DashedSentence", {s: "It was the gentleman|who|was stylish|that|identified|the priceless vase|at the state auction."},"Question",{q: "Did a stylish lady identify the vase?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF20a1",25],"FlashSentence",{s: "calculator ----- clarinet ----- ritual"},"DashedSentence", {s: "The police|contended|that|the gangster|grumbled|that|the prohibitionist deplored|the whiskey."},"Question",{q: "Did the gangster grumble about the prohibitionist?"},"Form",{ html: { include: "recall.html" }},],	
    [["item5b1",26],"FlashSentence",{s: "wave ----- party ----- crib"},"DashedSentence", {s: "It was the check|that the manager|who|presented|the sales figures|cashed|at the credit union.|"},"Question",{q: "Did the manager visit a credit union?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["itemF31b3",27],"FlashSentence",{s: "flat ----- lot ----- space"},"DashedSentence", {s: "The coach|noted|that|the trophy|annoyed|the loser|after the reward ceremony."},"Question",{q: "Did the trophy annoy the winner?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF138d3",28],"DashedSentence", {s: "It was the model|who|was picky|that|rejected|the tacky ensemble|for her runway show."},"Question",{q: "Did the model like the ensemble?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF110a1",29],"FlashSentence",{s: "answer ----- prancer ----- cancer"},"DashedSentence", {s: "It was the belly dancer|who|was spectacular|that|sported|the coin belt|that was purchased|that day."},"Question",{q: "Did the belly dancer sport a coin belt?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF18a1",30],"FlashSentence",{s: "locket ----- orchard ----- spatula"},"DashedSentence", {s: "The sailors|exclaimed|that|the treasure|astounded|the pirate|on the vast ship."},"Question",{q: "Was it the treasure that was astounding?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF91d3",31],"DashedSentence", {s: "The statistician|confirmed|that|the mathematicians|mistrusted|the formula|that refuted|the theory."},"Question",{q: "Did the physicists mistrust the formula?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF104d3",32],"DashedSentence", {s: "The defector|hoped|that|the agent|thought|that|the passport pleased the official."},"Question",{q: "Did the passport aggravate the official?"},"Form",{ html: { include: "recall.html" }},],	
    [["item7a1",33],"FlashSentence",{s: "beach ----- teach ----- peach"}, "DashedSentence", {s: "It was the speech|that the candidate|who|registered|the new vehicle|delivered|to a crowded auditorium."},"Question",{q: "Was it a vehicle that the candidate registered?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item1a1",34],"FlashSentence",{s: "coat ----- vote ----- note"},"DashedSentence", {s: "It was the boat|that the guy|who|drank|some hot coffee|sailed|on two sunny days.|"},"Question",{q: "Did the guy drink hot coffee?"},"Form",{ html: { include: "recall.html" }},],	
    [["item4a3",35],"FlashSentence",{s: "dumb ----- burn ----- thumb"}, "DashedSentence", {s: "It was the gum|that the camper|who|forgot|to bring sunscreen|chewed|during the morning hike.|"},"Question",{q: "Did the camper forget to bring sandwiches?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF134c1",36],"DashedSentence", {s: "It was the stock broker|who|took a business trip|that|transported|the metal briefcase|for his lazy boss."},"Question",{q: "Was the briefcase metal?"},"Form",{ html: { include: "recall.html" }},],	
	
    
    [["item10a3",37],"FlashSentence",{s: "loan ----- bone ----- stone"},"DashedSentence", {s: "It was the phone|that the salesman|who|earned|a big commission|dialed|after the last appointment.|"},"Question",{q: "Was the salesman given a warning?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF3a1",38],"FlashSentence",{s: "mule ----- pool ----- drool"},"DashedSentence", {s: "The janitor|mumbled|that|the plumber|detested|the drain|in the elementary school."},"Question",{q: "Was the drain in the school?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF102d3",39],"DashedSentence", {s: "The producers|knew|that|the parents|worried|that|the violence would harm|the youths."},"Question",{q: "Did the violence worry the youths?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF116a1",40],"FlashSentence",{s: "handy ----- brandy ----- candy"},"DashedSentence", {s: "It was the barmaid|who|was friendly|that|served|the strong cocktail|to the handsome man."},"Question",{q: "Was the barmaid friendly?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF8a1",41],"FlashSentence",{s: "place ----- skates ----- fastener"},"DashedSentence", {s: "The faction|proclaimed|that|the bomb|astonished|the president|of the small|republic."},"Question",{q: "Was the president astonished?"},"Form",{ html: { include: "recall.html" }},],	
    [["item8b3",42],"FlashSentence",{s: "flood ----- chart ----- drink"},"DashedSentence", {s: "It was the hair|that the cheerleader|who|listened|to the radio|shampooed|before the homecoming dance.|"},"Question",{q: "Was the cheerleader getting ready for the prom?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["item11b1",43],"FlashSentence",{s: "iron ----- mind ----- rum"},"DashedSentence", {s: "It was the rug|that the employee|who|slept|through the meeting|swept|on a rainy afternoon.|"},"Question",{q: "Did the employee sleep through a meeting?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["item14b3",44],"FlashSentence",{s: "team ----- shock ----- grass"},"DashedSentence", {s: "It was the pie|that the father|who|bought|a new condo|baked|for the cooking contest.|"},"Question",{q: "Was the pie baked for a Christmas party?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF142d3",45],"DashedSentence", {s: "It was the head priest|who|visited from Italy|that|delivered|the weekly sermon|at the local chapel."},"Question",{q: "Did the parishioner deliver the sermon?"},"Form",{ html: { include: "recall.html" }},],	
    [["item13a1",46],"FlashSentence",{s: "boot ----- cute ----- fruit"},"DashedSentence", {s: "It was the suit|that the accountant|who|purchased|a new computer|ironed|before the formal dinner.|"},"Question",{q: "Did the accountant buy a new computer?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF135c1",47],"DashedSentence", {s: "It was the woman|who|was reclusive|that|visited|the tropical island|where she summered|annually."},"Question",{q: "Was it the island that the woman visited?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item17b1",48],"FlashSentence",{s: "van ----- piano ----- stain"},"DashedSentence", {s: "It was the horse|that the visitor|who|paid|the parking ticket|rode|over a grassy hill."},"Question",{q: "Did the visitor ride over a hill?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF30b3",49],"FlashSentence",{s: "band ----- sand ----- land"},"DashedSentence", {s: "The professor|discovered|that|the question|delighted|the pupil|who instantly raised|his hand."},"Question",{q: "Was the pupil intimidated by the question?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF78c1",50],"DashedSentence", {s: "The diva|bragged|that|the review|noted|that|the critic admired the performance."},"Question",{q: "Did the critic admire the performance?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF109a1",51],"FlashSentence",{s: "tree ----- fortune ----- toothpaste"},"DashedSentence", {s: "It was the grandson|who|was devoted|that|inherited|the dilapidated cabin next to|the station."},"Question",{q: "Did the grandson inherit a house?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF9a1",52],"FlashSentence",{s: "faced ----- traced ----- chased"},"DashedSentence", {s: "The biologist|asserted|that|the jar|restrained|the scorpion|that he placed|in it."},"Question",{q: "Was the scorpion placed in a jar?"},"Form",{ html: { include: "recall.html" }},],	
    [["item6c3",53],"DashedSentence", {s: "It was the song|that the student|who|attended|a private school|sang|during the evening performance.|"},"Question",{q: "Was it a teacher who sang a song?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF106d3",54],"DashedSentence", {s: "The zookeeper|heard|that|the biologist|complained|that|the parrot feared the cage."},"Question",{q: "Was it the cage that the zookeeper feared?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF99d3",55],"DashedSentence", {s: "The scientist|imagined|that|the gerbil|adored|the wheel|that was placed|in its cage."},"Question",{q: "Was it the rat that adored the wheel?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF22a1",56],"FlashSentence",{s: "tote ----- leaflet ----- elevator"},"DashedSentence", {s: "The builders|confirmed|that|the order|specified|that|the carpenter preferred|the oak."},"Question",{q: "Did the carpenter prefer the oak?"},"Form",{ html: { include: "recall.html" }},],	
    [["item20b3",57],"FlashSentence",{s: "menu ----- gown ----- trunk"},"DashedSentence", {s: "It was the plane|that the brother|who|moved|to the suburbs|piloted|until the unfortunate crash.|"},"Question",{q: "Did the brother always land the plane safely?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF119b3",58],"FlashSentence",{s: "cold ----- jersey ----- wire"},"DashedSentence", {s: "It was the fireman|who|was a rookie|that|fought|the hazardous inferno|that a teenager ignited."},"Question",{q: "Was it an experienced fireman that fought the inferno?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF101d3",59],"DashedSentence", {s: "The committee|knew|that|the members|hoped|that|the reply would intrigue|the applicant."},"Question",{q: "Did the committee hope for the reply to be intriguing?"},"Form",{ html: { include: "recall.html" }},],	
    [["item16a3",60],"FlashSentence",{s: "hook ----- cook ----- nook"}, "DashedSentence", {s: "It was the book|that the lady|who|attended|church last Sunday|read|at the local library.|"},"Question",{q: "Did the lady attend a town hall meeting last Sunday?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF132c1",61],"DashedSentence", {s: "It was the salesman|who|was bald|that|sold|the baby carriage|before the closing of his store."},"Question",{q: "Was the salesman bald?"},"Form",{ html: { include: "recall.html" }},],	
    [["item23b1",62],"FlashSentence",{s:"game ----- tent ----- smile"},"DashedSentence", {s: "It was the drug|that the physician|who|graduated|with high honors|injected|into the anxious patient.|"},"Question",{q: "Was the patient calm and relaxed?"},"Form",{ html: { include: "recall.html" }},],	
    [["item19a1",63],"DashedSentence","FlashSentence",{s: "year ----- deer ----- gear"},{s: "It was the beer|that the woman|who|won|the state lottery|drank|before the rock concert.|"},"Question",{q: "Was it the lottery that the woman won?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF85d3",64],"DashedSentence", {s: "The unionists|believed|that|the map|infuriated|the rebels|who opposed the land|divisions."},"Question",{q: "Did the map infuriate the unionists?"},"Form",{ html: { include: "recall.html" }},],	
    [["item9c1",65],"DashedSentence", {s: "It was the car|that the husband|who|applied|for a loan|drove|to the important interview.|"},"Question",{q: "Did the husband drive a car?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item12c3",66],"DashedSentence", {s: "It was the food|that the boy|who|collected|rare baseball cards|cooked|for the Thanksgiving holiday.|"},"Question",{q: "Did the sister cook the food?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF16a1",67],"FlashSentence",{s: "tag ----- cavern ----- bottle"},"DashedSentence", {s: "The innkeeper|remarked|that|the flame|fascinated|the moth|who was dancing|around it."},"Question",{q: "Was the moth dancing around the flame?"},"Form",{ html: { include: "recall.html" }},],	
    [["item15c1",68],"DashedSentence", {s: "It was the lease|that the student|who|attended|the state college|signed|before the Fall semester."},"Question",{q: "Was it a student who signed the lease?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF137d3",69],"DashedSentence", {s: "It was the daughter|who|was sleepy|that|ignored|the alarm clock|that rang for five minutes."},"Question",{q: "Did the alarm clock ring for ten minutes?"},"Form",{ html: { include: "recall.html" }},],	
    [["item18c3",70],"DashedSentence", {s: "It was the flower|that the wife|who|purchased|the new necklace|planted|after the heavy rainfall.|"},"Question",{q: "Was it a shrub that the wife planted?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["item21c1",71],"DashedSentence", {s: "It was the code|that the scientist|who|received|very generous funding|cracked|at the computer lab.|"},"Question",{q: "Did a scientist crack the code?"},"Form",{ html: { include: "recall.html" }},],	
	
	
	
    [["item24c3",72], {s: "It was the kite|that the girl|who|turned|twelve years old|flew|at the sandy beach.|"},"Question",{q: "Did the girl fly a remote-controlled airplane?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item22a3",73],"FlashSentence",{s: "fender ----- tender     gender"}, "DashedSentence", {s: "It was the blender|that the adolescent|who|lived|by the ocean|unplugged|after the boring chores.|"},"Question",{q: "Did the adolescent live by the mountains?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item25a1",74],"FlashSentence",{s: "dough ----- glow ----- crow"},"DashedSentence", {s: "It was the snow|that the teenager|who|finished|the homework assignment|shoveled|after the sudden blizzard.|"},"Question",{q: "Did the teenager finish the homework?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF118b3",75],"FlashSentence",{s: "coast ----- toast ----- host"},"DashedSentence", {s: "It was the waitress|who|was cheerful|that|made|the decaffeinated coffee|at the neighborhood|diner."},"Question",{q: "Was the waitress upset?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["item28a3",76],"FlashSentence",{s: "bunny ----- funny ----- honey"},"DashedSentence", {s: "It was the money|that the clerk|who|filed|the monthly reports|deposited|at the local bank.|"},"Question",{q: "Did the clerk send the monthy reports to the main office?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["itemF28b3",77],"FlashSentence",{s: "brave ----- shave ----- pave"},"DashedSentence", {s: "The knave|exclaimed|that|the mirror|scared|the queen|of the French chateau."},"Question",{q: "Did the darkness scare the queen?"},"Form",{ html: { include: "recall.html" }},],	
    [["item26b3",78],"FlashSentence",{s: "lion ----- page ----- hand"},"DashedSentence", {s: "It was the cake|that the secretary|who|commuted|by city bus|baked|before the office party.|"},"Question",{q: "Was the cake baked for a birthday party?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF93d3",79],"DashedSentence", {s: "The parents|deduced|that|the girl|enjoyed|the dance|at the school gymnasium."},"Question",{q: "Did the boy enjoy the school dance?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF27a1",80],"FlashSentence",{s: "tanner ----- manner ----- scanner"},"DashedSentence", {s: "The patriots|concluded|that|the monarchists|suspected|that|the banner disgusted|the anarchist."},"Question",{q: "Was it the monarchists who suspected that the banner was disgusting?"},"Form",{ html: { include: "recall.html" }},],	
    [["item27c1",81],"DashedSentence", {s: "It was the bride|that the man|who|arrived|later than scheduled|married|before the expensive reception.|"},"Question",{q: "Did the man marry the bride?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF7a1",82],"FlashSentence",{s: "stash ----- cash ----- trash"},"DashedSentence", {s: "The bride|commented|that|the arrangement|panicked|the florist|who was inexperienced."},"Question",{q: "Was the florist inexperienced?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF84d3",83],"DashedSentence", {s: "The teenager|presumed|that|the pistol|alarmed|the classmates|at whom it was pointed."},"Question",{q: "Did the teenager point a knife at his classmates?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["itemF77c1",84],"DashedSentence", {s: "The pusher|alleged|that|the dealer|indicated|that|the druggies appreciated the pills."},"Question",{q: "Was it the druggies that appreciated the pills?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF69c1",85],"DashedSentence", {s: "The friend|remarked|that|the portrait|comforted|the widow|during her deepest grief."},"Question",{q: "Did the friend remark about the portrait?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF62c1",86],"DashedSentence", {s: "The exterminator|presumed|that|the trap|caught|the mice|hiding in the walls."},"Question",{q: "Was it the mice who were hiding in the walls?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF88d3",87],"DashedSentence", {s: "The archeologist|sensed|that|the gravedigger|feared|the coffin|that he excavated."},"Question",{q: "Did the archeologist fear the coffin?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["item29b1",88],"FlashSentence",{s: "navy ----- broom ----- wheel"},"DashedSentence", {s: "It was the cheese|that the waiter|who|hummed|a cheerful melody|grated|for the polite customers."},"Question",{q: "Was it cheese that the waiter brought to the customers?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF143d3",89],"DashedSentence", {s: "It was the debutante|who|was nervous|that|opened|the expensive champagne|at her New Year's gathering."},"Question",{q: "Was the debutante confident?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF14a1",90],"FlashSentence",{s: "index ----- menu ----- recliner"},"DashedSentence", {s: "The residents|theorized|that|the rubbish|frustrated|the housekeeper|on the fifteenth|floor."},"Question",{q: "Was the housekeeper on the fifteenth floor?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF6a1",91],"FlashSentence",{s: "sausage ----- log ----- boulder"},"DashedSentence", {s: "The renegade|reported|that|the rebels|desired|the ammunition|that the enemies used."},"Question",{q: "Was the ammunition desired?"},"Form",{ html: { include: "recall.html" }},],	
    [["item30c3",92],"DashedSentence", {s: "It was the lotion|that the baby|who|crawled|into the bathroom|squirted|across the tiled floor."},"Question",{q: "Did the baby squirt lotion on the carpet?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF108d3",93],"DashedSentence", {s: "The tenor|perceived|that|the conductor|realized|that|the violist abhorred the solo."},"Question",{q: "Was the solo appreciated by the violist?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF19a1",94],"FlashSentence",{s: "cedar ----- feeder ----- leader"},"DashedSentence", {s: "The cynic|remarked|that|the journalist|theorized|that|the reader relished|the article."},"Question",{q: "Did the journalist theorize about the reader?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF112a1",95],"FlashSentence",{s: "pest ----- test ----- west"},"DashedSentence", {s: "It was the salesgirl|who|was talkative|that|sprayed|the spicy cologne|that eventually leaked|behind the counter."},"Question",{q: "Was the salesgirl talkative?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF26a1",96],"FlashSentence",{s: "honey ----- summons ----- pouch"},"DashedSentence", {s: "The judge|noticed|that|the juror|concluded|that|the verdict astonished|the defendant."},"Question",{q: "Was the verdict astonishing to the defendant?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF113a1",97],"FlashSentence",{s: "battery ----- telegram ----- festival"},"DashedSentence", {s: "It was the seasoned congresswoman|who|was elected|that|carried|the digital organizer|that she updated daily."},"Question",{q: "Was the organizer digital?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF122b3",98],"FlashSentence",{s: "trifle ----- stifle ----- rifle"},"DashedSentence", {s: "It was the teenage boy|who|was disobedient|that|built|the pipe bomb|in his cousin's garage."},"Question",{q: "Did the adult build the pipe bomb?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF115a1",99],"FlashSentence",{s: "town ----- woods ----- vehicle"},"DashedSentence", {s: "It was the fisherman|who|was tanned|that|used|the trawling net|that he borrowed|from his uncle."},"Question",{q: "Did the fisherman use a net?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF94d3",100],"DashedSentence", {s: "The schoolgirl|inferred|that|the lad|feared|the spanking|that the schoolmaster|administered."},"Question",{q: "Did the lad give the spanking?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF4a1",101],"FlashSentence",{s: "soap ----- chimney ----- scanner"},"DashedSentence", {s: "The gentleman|remarked|that|the lady|fancied|the reception|that he arranged|for her."},"Question",{q: "Did the lady fancy the reception?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF95d3",102],"DashedSentence", {s: "The onlookers|commented|that|the cobra|liked|the melody|composed by the genie."},"Question",{q: "Did the onlookers compose the melody?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF86d3",103],"DashedSentence", {s: "The maestro|discovered|that|the score|pleased|the orchestra|that performed at|Carnegie Hall."},"Question",{q: "Did the score bore the orchestra?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF17a1",104],"FlashSentence",{s: "grumbled ----- crumbled ----- tumbled"},"DashedSentence", {s: "The barkeeper|noticed|that|the beggar|enraged the alcoholic|who stumbled into|the bar."},"Question",{q: "Was it the bar that the alcoholic stumbled into?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF114a1",105],"FlashSentence",{s: "praised ----- dazed ----- phrased"},"DashedSentence", {s: "It was the lion tamer|who|was fearless|that|raised|the wooden chair|during the circus|performance."},"Question",{q: "Did the lion tamer raise the chair?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF10a1",106],"FlashSentence",{s: "jeans ----- shower ----- ketchup"},"DashedSentence", {s: "The adventurer|inferred|that|the riddle|fascinated|the villain|who kidnapped|the empress."},"Question",{q: "Was the empress kidnapped by the villain?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF15a1",107],"FlashSentence",{s: "flap ----- wrap ----- slap"},"DashedSentence", {s: "The designer|grumbled|that|the shoes|disgusted|the ballerina|who snagged|the leading role."},"Question",{q: "Was the role snagged by the ballerina?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF12a1",108],"FlashSentence",{s: "goal ----- baseball ----- subway"},"DashedSentence", {s: "The opponent|muttered|that|the touchdown|astounded|the quarterback|of the opposing|team."},"Question",{q: "Was it the touchdown that astounded the quarterback?"},"Form",{ html: { include: "recall.html" }},],	
	
	
    [["itemF23a1",109],"FlashSentence",{s: "rant ----- chant ----- plant"},"DashedSentence", {s: "The herbalist|whispered|that|the pharmacist|complained|that|the nurse rejected|the remedies."},"Question",{q: "Were the remedies rejected by the nurse?"},"Form",{ html: { include: "recall.html" }},],	
	
	
	
	
    [["itemF98d3",110],"DashedSentence", {s: "The speculator|believed|that|the investor|approved of|the capital|that the company gained."},"Question",{q: "Did the company lose capital?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF103d3",111],"DashedSentence", {s: "The existentialist|remembered|that|the radical|said|that|the argument infuriated|the logician."},"Question",{q: "Did the argument infuriate the existentialist?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF79c1",112],"DashedSentence", {s: "The priest|presumed|that|the hedonist|understood|that|the lifestyle offended the nun."},"Question",{q: "Was the lifestyle offensive to the nun?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF24a1",113],"FlashSentence",{s: "shake ----- urn ----- pajamas"},"DashedSentence", {s: "The officer|recalled|that|the teenager|noticed|that|the baby desired|the bottle."},"Question",{q: "Was it the officer who recalled?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF5a1",114],"FlashSentence",{s: "squirt ----- blurt ----- skirt"},"DashedSentence", {s: "The seeker|suspected|that|the pagan|worshipped|the idea|that he read about."},"Question",{q: "Was the seeker suspicious?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF133c1",115],"DashedSentence", {s: "It was the headmaster|who|was peevish|that|ignored|the paper airplane|that the rascal threw."},"Question",{q: "Did the headmaster ignore the airplane?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF82d3",116],"DashedSentence", {s: "The mariner|recalled|that|the net|frightened|the dolphin|in the rough waves."},"Question",{q: "Did the net frighten the mariner?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF13a1",117],"FlashSentence",{s: "nuzzle ----- guzzle ----- puzzle"},"DashedSentence", {s: "The model|believed|that|the scandal|panicked|the celebrity|whom he was dating."},"Question",{q: "Was the celebrity dating the model?"},"Form",{ html: { include: "recall.html" }},],	
	
    [["itemF87d3",118],"DashedSentence", {s: "The boss|remembered|that|the advertisement|amused|the copywriter|who noticed it|in the magazine."},"Question",{q: "Was the advertisement seen on television?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF144d3",119],"DashedSentence", {s: "It was the son|who|was rambunctious|that|smashed|the Lego tower|that nearly reached the ceiling."},"Question",{q: "Was the Lego tower tiny?"},"Form",{ html: { include: "recall.html" }},],	
    [["itemF107d3",120],"DashedSentence", {s: "The chief|recalled|that|the obituary|stated|that|the firefighter liked the challenge."},"Question",{q: "Did the firefighter hate the job?"},"Form",{ html: { include: "recall.html" }},],	
    
    
	
	
    ];	
