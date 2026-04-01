const button = document.querySelector(".alamin-btn");
const output = document.getElementById("pamahiinOutput");

const pamahiinList = [
    "Huwag magwalis sa gabi.",
    "Bawal maligo pagkatapos magtrabaho.",
    "Kapag may kumakain at dumating ka, kailangan mong kumain din kahit kaunti.",
    "Huwag dumiretso ng uwi galing burol, baka sumama ang espiritu.",
    "Bawal maggupit ng kuko sa gabi.",
    "Huwag mag-iiwan ng sapatos na nakabaliktad o may darating na away sa bahay.",
    "Huwag magturo gamit ang daliri sa gabi, baka may masamang elemento.",
   "Huwag sumipol sa gabi o maaaring makatawag ng masamang espiritu.",
    "Bawal matulog nang basa ang buhok.",
    "Huwag maglakad nang tuloy-tuloy sa bahay ng iba sa gabi o maaaring may sumunod na malas.",
    "Huwag maglakad sa ilalim ng hagdan.",
    "Bawal umuwi agad pagkatapos ng lamay, kailangan magpagpag muna.",
    "Kapag nahulog ang kutsara o tinidor, may bisitang darating.",
    "Huwag magsuot ng pula sa lamay.",
    "Bawal tumanggi sa alok na pagkain sa handaan."
];

button.addEventListener("click", function(e) {
    e.preventDefault();

    output.style.opacity = 0;

    setTimeout(() => {
        const random = Math.floor(Math.random() * pamahiinList.length);
        output.textContent = pamahiinList[random];
        output.style.opacity = 1;
    }, 200);
});
