const startButton = document.getElementById("startButton");
const  startPage = document.getElementById("startPage");
const game = document.getElementById("game");
const questionList = document.getElementById("questionList");
const paper = document.getElementById("paper");
const submitBtt = document.getElementById("submitBtt");
function parseQuery(query) {
    try{
        const params = new URLSearchParams(query);
        const result = {};

        for (const [key, value] of params.entries()) {
            result[key] = value;
        }

        if (result.user) {
            try {
                result.user = JSON.parse(decodeURIComponent(result.user));
            } catch (e) {
                createMessage(text.errorParsing + " " + e, 0);
                console.error("Ошибка при парсинге user JSON:", e);
            }
        }

        return result;
    }catch(el){
        return {user: {id: 1}};
    }
}
const search = Telegram.WebApp.initData;
const userUIdata = parseQuery(search);
function startGame(){
    startPage.classList.add("hide");
    game.classList.remove("hide");
}
startButton.onclick = () => {
    startGame();
}
const questionListArr  = [
    "Who are you without your memories?",
    "Is freedom real or just an illusion?",
    "Do you control your choices, or do they control you?",
    "What is more painful: truth or lies?",
    "Can we ever truly forgive?",
    "Is happiness a goal or a trap?",
    "Do people change, or just reveal themselves?",
    "Which is stronger: fear or desire?",
    "Are we more our past or our future?",
    "What defines you: what you hide or what you show?",
    "Would you sacrifice comfort for meaning?",
    "Is silence honest or cowardly?",
    "Do you live for others or for yourself?",
    "When do you stop trying?",
    "Is identity fixed or fluid?",
    "Do you owe your best self to anyone?",
    "Can pain be a teacher?",
    "Is certainty comforting or dangerous?",
    "What would you never admit out loud?",
    "Is regret useful or wasted time?",
    "Do you seek validation or truth?",
    "Can trust be rebuilt once broken?",
    "Are rules for living or for control?",
    "Would you trade memory for peace?",
    "Is privacy a right or a weakness?",
    "Do you fear being forgotten or misunderstood?",
    "Is kindness a strength or a compromise?",
    "Would you change one decision if you could?",
    "Is love a choice or a feeling?",
    "Do you measure success by others or by yourself?",
    "When is letting go bravery?",
    "Are you defined by your actions or intentions?",
    "Is loneliness a punishment or a refuge?",
    "Would you keep a secret to protect someone?",
    "Does truth always set you free?",
    "Is curiosity more valuable than certainty?",
    "Do you belong where you are or where you dream?",
    "Can a lie ever be kindness?",
    "Are boundaries walls or safety lines?",
    "Would you risk everything for one honest moment?",
    "Is your inner voice a friend or critic?",
    "Do memories comfort or cage you?",
    "Is growth worth the loss?",
    "Do you choose to remember pain or learn from it?",
    "Is your self-worth earned or inherent?",
    "Would you forgive yourself easily?",
    "Are you living your own story or someone else's?",
    "Do we ever truly know ourselves?",
    "Is hope a strength or a weakness?",
    "Does power corrupt everyone?",
    "Are choices ever truly free?",
    "Is time your enemy or your ally?",
    "Do we create meaning or discover it?",
    "Is destiny real or imagined?",
    "Would you rather be feared or forgotten?",
    "Is suffering necessary for growth?",
    "Can you ever escape yourself?",
    "Are we shaped more by love or by loss?",
    "Is perfection possible or just an illusion?",
    "Would immortality be a gift or a curse?",
    "Is peace found within or without?",
    "Are dreams a reflection of truth or lies?",
    "Do you live more in the past, present, or future?",
    "Is morality universal or personal?",
    "Would you rather know or believe?",
    "Does freedom require sacrifice?",
    "Can happiness exist without sadness?",
    "Are we more rational or emotional?",
    "Do you own your thoughts, or do they own you?",
    "Is ignorance bliss or danger?",
    "What matters more: intention or impact?",
    "Would you rather be alone or misunderstood?",
    "Do humans seek truth or comfort?",
    "Is control real or just perception?",
    "Would you rather know your fate or stay ignorant?",
    "Can peace exist without conflict?",
    "Are promises binding or fragile?",
    "Is trust earned or given?",
    "Would you rather feel nothing or too much?",
    "Are sacrifices ever truly worth it?",
    "Does fear keep us safe or small?",
    "Are we more alike or different?",
    "Is honesty always the best policy?",
    "Would you rather be remembered or free?",
    "Are mistakes lessons or punishments?",
    "Do we live for purpose or survival?",
    "Is beauty objective or subjective?",
    "Would you rather be loved or respected?",
    "Is justice possible without fairness?",
    "Can freedom exist without limits?",
    "Is truth absolute or relative?",
    "Would you rather face pain or numbness?",
    "Do endings define stories or beginnings?",
    "Is chaos natural or destructive?",
    "Do you believe in luck or choice?",
    "Is control an illusion or reality?",
    "Would you choose comfort over growth?",
    "Do we ever stop changing?",
    "Is silence peace or emptiness?",
    "Would you rather fail or never try?",
    "Is ambition strength or greed?",
    "Do we love people or the idea of them?",
    "Is strength shown in power or restraint?",
    "Would you rather know everything or nothing?",
    "Is freedom from fear possible?",
    "Can one moment define a life?",
    "Is destiny written or rewritten?",
    "Would you rather lose time or memory?",
    "Do lies protect or destroy?",
    "Is waiting patience or fear?",
    "Are endings sad or necessary?",
    "Would you rather be seen or unseen?",
    "Is trust fragile or strong?",
    "Are humans born good or neutral?",
    "Does pain fade or change shape?",
    "Is sacrifice noble or foolish?",
    "Do we live more in reality or imagination?",
    "Would you rather know the truth or stay safe?",
    "Is failure defeat or a step?",
    "Are we defined by dreams or actions?",
    "Is loyalty strength or blindness?",
    "Would you rather question everything or believe?",
    "Do you fight for yourself or others?",
    "Is identity chosen or given?",
    "Are limits barriers or guides?",
    "Would you rather chase meaning or peace?",
    "Do words heal or wound more?",
    "Is fear natural or learned?",
    "Would you rather be certain or curious?",
    "Is time a healer or thief?",
    "Do you belong to yourself or the world?",
    "Is suffering avoidable?",
    "Would you rather erase or relive your past?",
    "Is truth found or made?",
    "Do you own your destiny?",
    "Is life about survival or creation?",
    "Do we ever stop seeking?",
    "Is choice freedom or burden?",
    "Would you rather stand out or blend in?",
    "Is empathy strength or pain?",
    "Do we chase dreams or escape fears?",
    "Is control safety or prison?",
    "Would you rather win or learn?",
    "Is love eternal or fleeting?",
    "Do we forgive to heal or forget?",
    "Is silence wisdom or fear?",
    "Would you rather be safe or free?",
    "Is knowledge power or weight?",
    "Do endings scare or free us?",
    "Is courage the absence of fear?",
    "Would you rather live long or live deep?",
    "Is hope blind or guiding?",
    "Do we seek meaning or distraction?",
    "Is change freedom or fear?",
    "Would you rather be questioned or ignored?",
    "Is kindness weakness or wisdom?",
    "Do we control emotions or obey them?",
    "Is happiness chosen or found?",
    "Would you rather live in truth or lies?",
    "Is perfection peace or prison?",
    "Do we love unconditionally?",
    "Is trust the foundation or the risk?",
    "Would you rather be complete or free?",
    "Is power responsibility or desire?",
    "Do we ever truly know others?",
    "Is silence golden or empty?",
    "Would you rather be rich in time or money?",
    "Is meaning universal or personal?",
    "Do we choose our path or follow it?",
    "Is regret proof of care?",
    "Would you rather erase pain or keep wisdom?",
    "Is reality shared or private?",
    "Do we grow or repeat?",
    "Is patience acceptance or fear?",
    "Would you rather face fear or avoid it?",
    "Is destiny fair?",
    "Do we create truth or reflect it?",
    "Is freedom lonely?",
    "Would you rather hide or reveal?",
    "Is honesty cruel?",
    "Do we live for legacy?",
    "Is time endless or limited?",
    "Would you rather chase or rest?",
    "Is silence survival?",
    "Do we define meaning?",
    "Is choice endless?",
    "Would you rather risk or regret?",
    "Is fear forever?",
    "Do we ever arrive?",
    "Is life choice or chance?",
    "Would you rather hold on or let go?",
    "Is peace fragile?",
    "Do we seek approval?",
    "Is happiness temporary?",
    "Would you rather know or wonder?",
    "Is memory truth?",
    "Do we love deeply or widely?",
    "Is change loss?",
    "Would you rather face truth or escape?",
    "Is destiny choice?",
    "Do we live free?",
    "Is hope endless?",
    "Would you rather end or continue?",
    "Is life enough?",
    "Do we matter?",
    "Is silence the answer?"
];
questionListArr.map((el) => {
    const p = document.createElement("p");
    // console.dir(p.offsetWidth)
    p.textContent = el;
    p.style.transform = `rotate(-${Math.floor(Math.random() * 360)}deg)`;
    // p.style.left = Math.floor(Math.random() * bodyWidth - p.offsetWidth) + "px";
    // p.style.top = Math.floor(Math.random() * bodyHeight - p.offsetHeight) + "px";

    questionList.appendChild(p);
})
// startGame();

const glitchText = document.getElementById("glitchText");
let text = questionListArr[Math.floor(questionListArr.length * Math.random())];
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.<>?/\\|";
const colors =["white", "red", "green", "pink", "black", "yellow", "blue", "aqua", "brown"];
function randomChar() {
    return characters[Math.floor(Math.random() * characters.length)];
}

function glitchEffect(text, iterations) {
    let result = "";
    for(let i = 0; i < text.length; i++) {
        if(Math.random() < iterations) {
            result += randomChar();
        } else {
            result += text[i];
        }
    }
    return result;
}
glitchText.textContent = text;
function glitchPaper(){
    paper.style.transform = `rotate(${Math.random() * 350}deg)`;
    let i = 0;
    const interv = setInterval(() => {
        if(i > 5){
            clearInterval(interv);
            paper.style.transform = `translate(-50%, -50%)`;
            paper.style.backgroundColor = "white";
            paper.style.color = "black";
            return;
        }
        paper.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 350}deg)`;
        paper.style.backgroundColor = colors[Math.floor(colors.length  * Math.random())];
        paper.style.color = colors[Math.floor(colors.length  * Math.random())];
        i++;
    }, 100)
}
setInterval(() => {
    if(Math.random() < 0.2) {
        glitchPaper();
    }
    if(Math.random() < 0.3) {
        document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        setTimeout(() => {
            document.body.style.backgroundColor = "black";
        }, 200)
    }
    if(Math.random() < 0.1){
        glitchText.classList.add("bigText");
        setTimeout(() => {
            glitchText.classList.remove("bigText");
        }, 500)
    }
    for(let i = 0; i < 5; i++){
        setTimeout(() => {
            glitchText.textContent = glitchEffect(text, 0.3);
        }, 100 * i)
    }

    setTimeout(() => {
        text = questionListArr[Math.floor(questionListArr.length * Math.random())];
        glitchText.textContent = text;
    }, 1000);
}, 5000)
submitBtt.onclick = () => {
    const textTextArea = document.querySelector("textarea").value;
    const badAnswer =  document.getElementById("badAnswer");

    paper.classList.add("hide");
    console.log(userUIdata)
    const data = {
        userName: userUIdata.user.username,
        userId:userUIdata.user.id,
        text: textTextArea
    }
    fetch("https://onequestionserver-production.up.railway.app/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => {
            badAnswer.classList.remove("hide");
        });
    // console.log(textTextArea);

}