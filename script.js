// ====================================================================
// 🎛️ CONFIGURATION SECTION - EDIT THIS FOR SCHEDULE CHANGES 
// ====================================================================

// A. TIME SLOTS & SHIFT ROTATION
const SCHEDULE_CONFIG = {
    morning: {
        shiftNameKey: "morningShift",
        shiftTimes: "(08:00 - 11:30)",
        time_slots: [
            { start: "08:00", end: "08:45" },
            { start: "08:50", end: "09:35" },
            { start: "09:35", end: "09:55", type: "break" }, // Big Break
            { start: "09:55", end: "10:40" },
            { start: "10:45", end: "11:30" }
        ]
    },
    afternoon: {
        shiftNameKey: "afternoonShift",
        shiftTimes: "(14:00 - 17:30)",
        time_slots: [
            { start: "14:00", end: "14:45" },
            { start: "14:50", end: "15:35" },
            { start: "15:35", end: "15:55", type: "break" }, // Big Break
            { start: "15:55", end: "16:40" },
            { start: "16:45", end: "17:30" }
        ]
    }
};
// Date that determines the starting shift (Every 2 weeks it alternates)
const SHIFT_START_DATE = new Date("2024-09-01T00:00:00");

// B. SUBJECT KEY-TO-NAME MAPPING (Easy to edit subject names across all languages)
const SUBJECT_NAMES = {
    bhs: { bs: "BHS Jezik i Književnost", en: "BCS Language and Literature", tr: "Boşnak Dili ve Edebiyatı", it: "Lingua e Letteratura BHS", sq: "Gjuha dhe Letërsia BHS" },
    eng: { bs: "Engleski Jezik", en: "English Language", tr: "İngilizce", it: "Lingua Inglese", sq: "Gjuha Angleze" },
    math: { bs: "Matematika", en: "Mathematics", tr: "Matematik", it: "Matematica", sq: "Matematikë" },
    pe: { bs: "Tjelesni i Zdravstveni Odgoj", en: "Physical and Health Education", tr: "Beden Eğitimi", it: "Educazione Fisica e Sanitaria", sq: "Edukatë Fizike dhe Shëndetësore" },
    art: { bs: "Likovna Kultura", en: "Art Culture", tr: "Resim", it: "Cultura Artistica", sq: "Kulturë Artistike" },
    soc: { bs: "Društvo / Kultura", en: "Society / Culture", tr: "Toplum ve Kültür", it: "Società / Cultura", sq: "Shoqëri / Kulturë" },
    info: { bs: "Informatika", en: "Informatics", tr: "Bilişim", it: "Informatica", sq: "Informatikë" },
    music: { bs: "Muzička/Glazbena Kultura", en: "Music Culture", tr: "Müzik", it: "Cultura Musicale", sq: "Kulturë Muzikore" },
    env: { bs: "Moja Okolina", en: "My Environment", tr: "Çevre Bilgisi", it: "Il Mio Ambiente", sq: "Mjedisi Im" },
    empty: { bs: "", en: "", tr: "", it: "", sq: "" } // Placeholder for empty slots
};

// C. MASTER TIMETABLE (Use the keys from SUBJECT_NAMES)
// Structure: [Period 1, Period 2, Period 3, Period 4]
// Days: [Monday, Tuesday, Wednesday, Thursday, Friday]
const MASTER_TIMETABLE = [
    // Period 1 (Morning: 08:00)
    [ "eng", "pe", "math", "art", "bhs" ], 
    // Period 2 (Morning: 08:50)
    [ "bhs", "soc", "info", "bhs", "math" ],
    // Period 3 (Morning: 09:55)
    [ "music", "bhs", "env", "pe", "art" ],
    // Period 4 (Morning: 10:45)
    [ "math", "env", "eng", "empty", "music" ] 
];

// D. EXAM SCHEDULE
const EXAMS = [
    { date: "2025-09-11", time: "09:55", subjectKey: "bhs" },
    { date: "2025-10-21", time: "08:50", subjectKey: "bhs" },
    { date: "2025-10-27", time: "08:00", subjectKey: "eng" },
    { date: "2025-12-01", time: "09:55", subjectKey: "math" },
    { date: "2025-12-09", time: "10:45", subjectKey: "bhs" },
    { date: "2025-12-22", time: "08:50", subjectKey: "eng" }
];

// ====================================================================
// 🌐 LANGUAGE TRANSLATIONS - EDIT THIS FOR TEXT/PHRASE CHANGES
// ====================================================================

const TRANSLATIONS = {
    bs: {
        mainTitle: "Dorian's Timetable", dark: "Tamni", light: "Svijetli", viewToggleWeekly: "Prikaz sedmice", viewToggleDaily: "Prikaz dana", currentTitle: "Trenutni raspored", fullTitle: "Cijeli Sedmični Raspored", mobileTitle: "Današnji Raspored", timeHeader: "Vrijeme", days: ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak"], lessonStatus: "Trenutni Čas", breakName: "PAUZA", breakStatus: "Pauza", firstLessonIs: "Današnji prvi čas je", beforeSchoolStatus: "Nastava počinje uskoro", beforeSchoolCountdown: "Nastava počinje za", finishedStatus: "Nastava je završila!", fridayFinishedTitle: "Nastava je završila!", fridayFinishedSubtitle: "Ugodan vikend! Ne zaboravite završiti zadaću za sljedeću sedmicu i ponoviti ono što ste naučili.", morningShift: "Prva smjena", afternoonShift: "Druga smjena", weekendMessage: "Uživajte u vikendu, pripremite se za nadolazeću sedmicu!",
        breakNextLesson: "Sljedeći čas: <strong>{lessonName}</strong>",
        breakCountdownPrefix: "za",
        weekendPreviewTitle: "Sedmica je gotova!", weekendPreviewSubtitle: "Sljedeće sedmice nastava je u", examTitle: "Raspored Ispita",
        examInDays: "za {days} dana", examInOneDay: "za 1 dan", examToday: "danas",
        examPopup: {
            title: "🚨 Upozorenje o Ispitu 🚨",
            body: "Ispit iz predmeta {subject} je {countdown}!<br><br>Ponavljaj i uči intenzivnije za uspjeh!",
            closeButton: "U redu"
        }
    },
    en: {
        mainTitle: "Dorian's Timetable", dark: "Dark", light: "Light", viewToggleWeekly: "Weekly View", viewToggleDaily: "Daily View", currentTitle: "Current Schedule", fullTitle: "Full Weekly Schedule", mobileTitle: "Today's Schedule", timeHeader: "Time", days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], lessonStatus: "Current Lesson", breakName: "BREAK", breakStatus: "Break", firstLessonIs: "Today's first lesson is", beforeSchoolStatus: "Classes start soon", beforeSchoolCountdown: "Classes start in", finishedStatus: "Classes have finished!", fridayFinishedTitle: "Classes have finished!", fridayFinishedSubtitle: "Have a nice weekend! Don't forget to finish homework for next week and repeat what you have learned.", morningShift: "First shift", afternoonShift: "Second shift", weekendMessage: "Enjoy your weekend, get ready for the upcoming week!",
        breakNextLesson: "Next Lesson: <strong>{lessonName}</strong>",
        breakCountdownPrefix: "in",
        weekendPreviewTitle: "The week is over!", weekendPreviewSubtitle: "Next week's classes are in the", examTitle: "Exam Schedule",
        examInDays: "in {days} days", examInOneDay: "in 1 day", examToday: "today",
        examPopup: {
            title: "🚨 Exam Alert 🚨",
            body: "The {subject} exam is {countdown}!<br><br>Please repeat and study more intensely for success!",
            closeButton: "Okay"
        }
    },
    tr: {
        mainTitle: "Dorian's Timetable", dark: "Karanlık", light: "Aydınlık", viewToggleWeekly: "Haftalık Görünüm", viewToggleDaily: "Günlük Görünüm", currentTitle: "Mevcut Ders", fullTitle: "Haftalık Ders Programı", mobileTitle: "Bugünün Ders Programı", timeHeader: "Saat", days: ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma"], lessonStatus: "Mevcut Ders", breakName: "TENEFÜS", breakStatus: "Tenefüs", firstLessonIs: "Bugünün ilk dersi", beforeSchoolStatus: "Dersler yakında başlıyor", beforeSchoolCountdown: "Derslerin başlamasına", finishedStatus: "Dersler bitti!", fridayFinishedTitle: "Dersler bitti!", fridayFinishedSubtitle: "İyi hafta sonları! Gelecek haftanın ödevlerini bitirmeyi ve öğrendiklerinizi tekrar etmeyi unutmayın.", morningShift: "Sabahçı", afternoonShift: "Öğlenci", weekendMessage: "Hafta sonunun tadını çıkarın, yeni haftaya hazırlanın!",
        breakNextLesson: "Sonraki Ders: <strong>{lessonName}</strong>",
        breakCountdownPrefix: "",
        weekendPreviewTitle: "Hafta bitti!", weekendPreviewSubtitle: "Gelecek haftaki dersler", examTitle: "Sınav Takvimi",
        examInDays: "{days} gün içinde", examInOneDay: "1 gün içinde", examToday: "bugün",
        examPopup: {
            title: "🚨 Sınav Uyarısı 🚨",
            body: "{subject} sınavı {countdown}!<br><br>Başarı için lütfen daha yoğun tekrar yap ve çalış!",
            closeButton: "Tamam"
        }
    },
    it: {
        mainTitle: "Orario di Dorian", dark: "Scuro", light: "Chiaro", viewToggleWeekly: "Vista Settimanale", viewToggleDaily: "Vista Giornaliera", currentTitle: "Lezione Corrente", fullTitle: "Orario Settimanale Completo", mobileTitle: "Orario di Oggi", timeHeader: "Ora", days: ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì"], lessonStatus: "Lezione in Corso", breakName: "PAUSA", breakStatus: "Pausa", firstLessonIs: "La prima lezione di oggi è", beforeSchoolStatus: "Le lezioni iniziano a breve", beforeSchoolCountdown: "Le lezioni iniziano tra", finishedStatus: "Le lezioni sono finite!", fridayFinishedTitle: "Le lezioni sono finite!", fridayFinishedSubtitle: "Buon fine settimana! Non dimenticate di finire i compiti per la prossima settimana e di ripassare ciò che avete imparato.", morningShift: "Turno Mattutino", afternoonShift: "Turno Pomeridiano", weekendMessage: "Goditi il fine settimana, preparati per la prossima!",
        breakNextLesson: "Prossima Lezione: <strong>{lessonName}</strong>",
        breakCountdownPrefix: "tra",
        weekendPreviewTitle: "La settimana è finita!", weekendPreviewSubtitle: "Le lezioni della prossima settimana sono nel", examTitle: "Calendario Esami",
        examInDays: "tra {days} giorni", examInOneDay: "tra 1 giorno", examToday: "oggi",
        examPopup: {
            title: "🚨 Avviso Esame 🚨",
            body: "L'esame di {subject} è {countdown}!<br><br>Per favore, ripassa e studia più intensamente per avere successo!",
            closeButton: "OK"
        }
    },
    sq: {
        mainTitle: "Orari i Dorianit", dark: "Errët", light: "Ndritshëm", viewToggleWeekly: "Pamja Javore", viewToggleDaily: "Pamja Ditore", currentTitle: "Ora Aktuale", fullTitle: "Orari i Plotë Javor", mobileTitle: "Orari i Sotëm", timeHeader: "Koha", days: ["E Hënë", "E Martë", "E Mërkurë", "E Enjte", "E Premte"], lessonStatus: "Ora në Vazhdim", breakName: "PUSHIM", breakStatus: "Pushim", firstLessonIs: "Ora e parë e sotme është", beforeSchoolStatus: "Mësimi fillon së shpejti", beforeSchoolCountdown: "Mësimi fillon për", finishedStatus: "Mësimi ka përfunduar!", fridayFinishedTitle: "Mësimi ka përfunduar!", fridayFinishedSubtitle: "Fundjavë të këndshme! Mos harroni të përfundoni detyrat e shtëpisë për javën e ardhshme dhe të përsërisni atë që keni mësuar.", morningShift: "Ndërrimi i Paradites", afternoonShift: "Ndërrimi i Pasdites", weekendMessage: "Shijoni fundjavën, bëhuni gati për javën e ardhshme!",
        breakNextLesson: "Ora Tjetër: <strong>{lessonName}</strong>",
        breakCountdownPrefix: "në",
        weekendPreviewTitle: "Java ka mbaruar!", weekendPreviewSubtitle: "Orët e javës së ardhshme janë në", examTitle: "Orari i Provimeve",
        examInDays: "për {days} ditë", examInOneDay: "për 1 ditë", examToday: "sot",
        examPopup: {
            title: "🚨 Alarm Provimi 🚨",
            body: "Provimi i {subject} është {countdown}!<br><br>Ju lutemi përsërisni dhe studioni më intensivisht për sukses!",
            closeButton: "Në rregull"
        }
    }
};

// ====================================================================
// ⚙️ CORE LOGIC - AVOID EDITING BELOW THIS LINE
// ====================================================================

const BOSNIAN_MONTHS = ["januar", "februar", "mart", "april", "maj", "juni", "juli", "august", "septembar", "oktobar", "novembar", "decembar"];
const BOSNIAN_DAYS = ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"];
let currentLang = 'bs';
let isWeeklyView = false;
let simulatedDate = null;
let mainInterval; // Variable to hold the interval ID

function getCurrentTime() {
    return simulatedDate ? new Date(simulatedDate) : new Date();
}

function getShift(date) {
    const today = date || getCurrentTime();
    const diffTime = Math.abs(today - SHIFT_START_DATE);
    const diffWeeks = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 7));
    return diffWeeks % 2 === 0 ? SCHEDULE_CONFIG.afternoon : SCHEDULE_CONFIG.morning;
}

function getSubjectName(key) {
    return SUBJECT_NAMES[key] ? SUBJECT_NAMES[key][currentLang] : key;
}

function getEffectiveDisplayInfo() {
    const now = getCurrentTime();

    const currentShift = getShift(now);
    const lastSlot = currentShift.time_slots[currentShift.time_slots.length - 1];
    const [endHour, endMinute] = lastSlot.end.split(':').map(Number);
    const endOfDayMinutes = endHour * 60 + endMinute;

    const dayOfWeek = now.getDay();
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();

    const isWeekOver =
        (dayOfWeek === 5 && currentTimeInMinutes >= endOfDayMinutes) ||
        dayOfWeek === 6 ||
        dayOfWeek === 0;

    if (isWeekOver) {
        const nextMonday = new Date(now);
        const daysToAdd = (8 - dayOfWeek) % 7;
        nextMonday.setDate(now.getDate() + (daysToAdd === 0 ? 7 : daysToAdd));
        nextMonday.setHours(8, 0, 0, 0);
        return { dateForShift: nextMonday, isPreview: true };
    }

    return { dateForShift: now, isPreview: false };
}

function updateDateTime() {
    const now = getCurrentTime();
    let dateStr;
    if (currentLang === 'bs') {
        const dayName = BOSNIAN_DAYS[now.getDay()];
        dateStr = `${dayName}, ${now.getDate()}. ${BOSNIAN_MONTHS[now.getMonth()]}. ${now.getFullYear()}.`;
    } else {
        dateStr = now.toLocaleDateString(currentLang, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    const timeStr = now.toLocaleTimeString(currentLang, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    document.getElementById('datetime-display').textContent = `${dateStr}, ${timeStr}`;
}

function updateExams() {
    const examListContainer = document.getElementById('exam-list');
    examListContainer.innerHTML = '';
    const t = TRANSLATIONS[currentLang];
    const now = getCurrentTime();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const sortedExams = EXAMS.sort((a, b) => new Date(a.date) - new Date(b.date));

    sortedExams.forEach(exam => {
        const [year, month, day] = exam.date.split('-').map(Number);
        const examDate = new Date(year, month - 1, day);

        const examItem = document.createElement('div');
        examItem.classList.add('exam-item');

        const diffTime = examDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (examDate < today) {
            examItem.classList.add('past');
        } else if (diffDays >= 0 && diffDays <= 7) {
            examItem.classList.add('upcoming');
        }

        const subjectSpan = document.createElement('span');
        subjectSpan.classList.add('exam-subject');
        subjectSpan.textContent = getSubjectName(exam.subjectKey);

        const infoContainer = document.createElement('div');
        infoContainer.classList.add('exam-info');

        let formattedDate;
        if (currentLang === 'bs') {
            const dayName = BOSNIAN_DAYS[examDate.getDay()];
            formattedDate = `${dayName}, ${examDate.getDate()}. ${BOSNIAN_MONTHS[examDate.getMonth()]}. ${examDate.getFullYear()}.`;
        } else {
            formattedDate = examDate.toLocaleDateString(currentLang, {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
            });
        }

        const dateTimeSpan = document.createElement('span');
        dateTimeSpan.textContent = `${formattedDate} @ ${exam.time}`;
        infoContainer.appendChild(dateTimeSpan);

        if (diffDays >= 0) {
            const countdownSpan = document.createElement('span');
            countdownSpan.classList.add('countdown');
            if (diffDays === 0) {
                countdownSpan.textContent = `(${t.examToday.charAt(0).toUpperCase() + t.examToday.slice(1)}!)`;
            } else {
                const text = (diffDays === 1) ? t.examInOneDay : t.examInDays.replace('{days}', diffDays);
                countdownSpan.textContent = `(${text})`;
            }
            infoContainer.appendChild(countdownSpan);
        }

        examItem.appendChild(subjectSpan);
        examItem.appendChild(infoContainer);
        examListContainer.appendChild(examItem);
    });
}

function updateTimetable() {
    const { dateForShift, isPreview } = getEffectiveDisplayInfo();
    const activeShift = getShift(dateForShift);
    const now = getCurrentTime();
    // Adjust getDay(): 0=Sun, 1=Mon, ..., 5=Fri, 6=Sat -> 0=Mon, 1=Tue, ..., 4=Fri
    const dayOfWeek = now.getDay() === 0 ? 6 : now.getDay() - 1;
    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    const t = TRANSLATIONS[currentLang];

    const progressBarContainer = document.querySelector('.progress-bar-container');
    const progressBarFill = document.querySelector('.progress-bar-fill');
    progressBarContainer.style.display = 'none';

    document.querySelector('.shift-info').textContent = `${t[activeShift.shiftNameKey]} ${activeShift.shiftTimes}`;
    let currentLesson = null;

    const lessonTimeSlots = activeShift.time_slots.filter(slot => !slot.type);
    let breakRowIndex = -1;

    // Logic to find if we are currently in a break between periods
    if (!isPreview && dayOfWeek < 5) {
        for (let i = 0; i < activeShift.time_slots.length - 1; i++) {
            const currentSlot = activeShift.time_slots[i];
            const nextSlot = activeShift.time_slots[i + 1];

            const [currentEndHour, currentEndMinute] = currentSlot.end.split(":").map(Number);
            const currentEndTimeInMinutes = currentEndHour * 60 + currentEndMinute;

            const [nextStartHour, nextStartMinute] = nextSlot.start.split(":").map(Number);
            const nextStartTimeInMinutes = nextStartHour * 60 + nextStartMinute;

            // Check if current time is between the end of a lesson and the start of the next
            if (currentTimeInMinutes >= currentEndTimeInMinutes && currentTimeInMinutes < nextStartTimeInMinutes) {
                // This is the break after the lesson we just finished
                const lessonIndex = lessonTimeSlots.findIndex(lesson => lesson.start === currentSlot.start);
                if (lessonIndex > -1) {
                    breakRowIndex = lessonIndex;
                }
                break;
            }
        }
    }

    if (isPreview) {
        let lessonName = `${t.weekendPreviewSubtitle} ${t[activeShift.shiftNameKey].toLowerCase()}`;
        currentLesson = {
            status: t.weekendPreviewTitle,
            name: lessonName,
            time: t.weekendMessage
        };
        document.querySelector('.lesson-time').classList.add('weekend-message');
    } else {
        document.querySelector('.lesson-time').classList.remove('weekend-message');
        if (dayOfWeek >= 5) { // Weekend (Saturday/Sunday)
            currentLesson = { status: "🎉", name: t.weekendMessage, time: "" };
        } else { // Weekday
            let foundLesson = false;
            for (let i = 0; i < activeShift.time_slots.length; i++) {
                const timeSlot = activeShift.time_slots[i];
                const [startHour, startMinute] = timeSlot.start.split(":").map(Number);
                const startTimeInMinutes = startHour * 60 + startMinute;
                const [endHour, endMinute] = timeSlot.end.split(":").map(Number);
                const endTimeInMinutes = endHour * 60 + endMinute;

                // 1. We are currently in a lesson/break slot
                if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes < endTimeInMinutes) {
                    foundLesson = true;

                    // Progress calculation
                    const startTimeInSeconds = startHour * 3600 + startMinute * 60;
                    const endTimeInSeconds = endHour * 3600 + endMinute * 60;
                    const currentTimeInSeconds = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
                    const totalDuration = endTimeInSeconds - startTimeInSeconds;
                    const elapsed = currentTimeInSeconds - startTimeInSeconds;
                    const progress = (elapsed / totalDuration) * 100;

                    progressBarContainer.style.display = 'block';
                    progressBarFill.style.width = `${Math.min(100, Math.max(0, progress))}%`;

                    // If it's a dedicated break slot
                    if (timeSlot.type === "break") {
                        const nextLessonIndex = activeShift.time_slots.findIndex((slot, idx) => idx > i && !slot.type);

                        if (nextLessonIndex !== -1) {
                            // Calculate next lesson details
                            const nextLessonPeriodIdx = activeShift.time_slots.filter((_, idx) => idx < nextLessonIndex && !activeShift.time_slots[idx].type).length;
                            const nextLessonKey = MASTER_TIMETABLE[nextLessonPeriodIdx][dayOfWeek];
                            const nextLessonName = getSubjectName(nextLessonKey);

                            if (nextLessonKey === 'empty') {
                                currentLesson = { status: t.finishedStatus, name: t.finishedStatus, time: "" };
                                progressBarContainer.style.display = 'none';
                            } else {
                                const nextLessonSlot = activeShift.time_slots[nextLessonIndex];
                                const [nextStartHour, nextStartMinute] = nextLessonSlot.start.split(":").map(Number);
                                const nextLessonStartTime = new Date(now);
                                nextLessonStartTime.setHours(nextStartHour, nextStartMinute, 0, 0);
                                const diffInSeconds = Math.floor((nextLessonStartTime - now) / 1000);

                                const timeToNextLesson = `${Math.floor(diffInSeconds / 60)} min. ${diffInSeconds % 60} sec.`;

                                currentLesson = {
                                    status: t.breakStatus,
                                    name: t.breakNextLesson.replace('{lessonName}', nextLessonName),
                                    time: `${t.breakCountdownPrefix} ${timeToNextLesson}`
                                };
                            }
                        } else {
                            // No more lessons after this break
                            currentLesson = { status: t.finishedStatus, name: t.finishedStatus, time: "" };
                            progressBarContainer.style.display = 'none';
                        }
                    } else {
                        // It's a regular lesson slot
                        const lessonIndex = activeShift.time_slots.filter((_, idx) => idx < i && !activeShift.time_slots[idx].type).length;
                        const lessonKey = MASTER_TIMETABLE[lessonIndex][dayOfWeek];
                        const lessonName = getSubjectName(lessonKey);

                        if (lessonKey === "empty") {
                            if (dayOfWeek === 4) {
                                currentLesson = { status: "🎉", name: t.fridayFinishedTitle, time: t.fridayFinishedSubtitle };
                                document.querySelector('.lesson-time').classList.add('weekend-message');
                            } else {
                                currentLesson = { status: t.finishedStatus, name: t.finishedStatus, time: "" };
                            }
                            progressBarContainer.style.display = 'none';
                        } else {
                            currentLesson = { status: t.lessonStatus, name: lessonName, time: `${timeSlot.start} - ${timeSlot.end}` };
                        }
                    }
                    break;
                }
            }

            // 2. We are before or after school hours
            if (!foundLesson) {
                const firstSlot = activeShift.time_slots[0];
                const [startHour, startMinute] = firstSlot.start.split(":").map(Number);
                const startTimeInMinutes = startHour * 60 + startMinute;
                const lastSlot = activeShift.time_slots[activeShift.time_slots.length - 1];
                const [endHour, endMinute] = lastSlot.end.split(":").map(Number);
                const endTimeInMinutes = endHour * 60 + endMinute;

                if (currentTimeInMinutes < startTimeInMinutes) {
                    // Before School
                    const schoolStartTime = new Date(now);
                    schoolStartTime.setHours(startHour, startMinute, 0, 0);
                    const diffInSeconds = Math.floor((schoolStartTime - now) / 1000);
                    let statusText = (diffInSeconds > 3600) ? t.firstLessonIs : t.beforeSchoolStatus;
                    const hours = Math.floor(diffInSeconds / 3600);
                    const minutes = Math.floor((diffInSeconds % 3600) / 60);
                    const seconds = diffInSeconds % 60;
                    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

                    const firstLessonKey = MASTER_TIMETABLE[0][dayOfWeek];

                    currentLesson = {
                        status: statusText,
                        name: getSubjectName(firstLessonKey),
                        time: `${t.beforeSchoolCountdown} ${formattedTime}`
                    };
                } else if (currentTimeInMinutes >= endTimeInMinutes) {
                    // After School
                    if (dayOfWeek === 4) {
                        currentLesson = { status: "🎉", name: t.fridayFinishedTitle, time: t.fridayFinishedSubtitle };
                        document.querySelector('.lesson-time').classList.add('weekend-message');
                    } else {
                        currentLesson = { status: t.finishedStatus, name: t.finishedStatus, time: "" };
                    }
                } else {
                    // In a micro-break between classes
                    const nextUpcomingSlot = activeShift.time_slots.find(slot =>
                        !slot.type &&
                        (slot.start.split(':').map(Number)[0] * 60 + slot.start.split(':').map(Number)[1]) > currentTimeInMinutes
                    );

                    if (nextUpcomingSlot) {
                        const nextSlotIndex = activeShift.time_slots.indexOf(nextUpcomingSlot);
                        const nextLessonPeriodIdx = activeShift.time_slots.filter((_, idx) => idx < nextSlotIndex && !activeShift.time_slots[idx].type).length;
                        const nextLessonKey = MASTER_TIMETABLE[nextLessonPeriodIdx][dayOfWeek];
                        const nextLessonName = getSubjectName(nextLessonKey);

                        const [nextStartHour, nextStartMinute] = nextUpcomingSlot.start.split(":").map(Number);
                        const nextLessonStartTime = new Date(now);
                        nextLessonStartTime.setHours(nextStartHour, nextStartMinute, 0, 0);
                        const diffInSeconds = Math.floor((nextLessonStartTime - now) / 1000);
                        const timeToNextLesson = `${Math.floor(diffInSeconds / 60)} min. ${diffInSeconds % 60} sec.`;

                        currentLesson = {
                            status: t.breakStatus,
                            name: t.breakNextLesson.replace('{lessonName}', nextLessonName),
                            time: `${t.breakCountdownPrefix} ${timeToNextLesson}`
                        };
                    } else {
                        currentLesson = { status: t.finishedStatus, name: t.finishedStatus, time: "" };
                    }
                }
            }
        }
    }

    document.querySelector('.status-label').textContent = currentLesson.status;
    document.querySelector('.lesson-name').innerHTML = currentLesson.name;
    document.querySelector('.lesson-time').innerHTML = currentLesson.time;

    const tableHeaderCells = document.getElementById('table-header').querySelectorAll('th');
    tableHeaderCells.forEach(th => th.classList.remove('current-day-column'));
    if (!isPreview && dayOfWeek >= 0 && dayOfWeek < 5) {
        tableHeaderCells[dayOfWeek + 1].classList.add('current-day-column');
    }

    const tableBody = document.getElementById('timetable-body');
    tableBody.innerHTML = '';

    // Loop through lesson time slots and days
    for (let i = 0; i < lessonTimeSlots.length; i++) {
        const row = document.createElement('tr');
        const lessonTime = lessonTimeSlots[i];
        const timeCell = document.createElement('td');
        timeCell.textContent = `${lessonTime.start} - ${lessonTime.end}`;
        row.appendChild(timeCell);

        for (let j = 0; j < t.days.length; j++) {
            const lessonKey = MASTER_TIMETABLE[i][j];
            const lesson = getSubjectName(lessonKey);
            const cell = document.createElement('td');
            cell.textContent = lesson;

            if (!isPreview && j === dayOfWeek) {
                cell.classList.add('current-day-column');
            }

            if (i === breakRowIndex && j === dayOfWeek) {
                cell.classList.add('current-break-cell');
            }

            const [startHour, startMinute] = lessonTime.start.split(":").map(Number);
            const [endHour, endMinute] = lessonTime.end.split(":").map(Number);

            if (!isPreview && j === dayOfWeek && currentTimeInMinutes >= (startHour * 60 + startMinute) && currentTimeInMinutes < (endHour * 60 + endMinute)) {
                if (lessonKey !== "empty") {
                    cell.classList.add('current-lesson');
                    const totalDurationInSeconds = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute)) * 60;
                    const elapsedSecondsInLesson = (currentTimeInMinutes - (startHour * 60 + startMinute)) * 60 + now.getSeconds();
                    const highlight = document.createElement('div');
                    highlight.classList.add('lesson-highlight');
                    highlight.style.height = `${Math.max(0, 1 - (elapsedSecondsInLesson / totalDurationInSeconds)) * 100}%`;
                    highlight.style.transitionDuration = '1s';
                    cell.appendChild(highlight);
                }
            }
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
}

function updateMobileTimetable() {
    const { dateForShift, isPreview } = getEffectiveDisplayInfo();
    const activeShift = getShift(dateForShift);
    const now = getCurrentTime();
    const dayToDisplay = isPreview ? 1 : now.getDay();
    const dayOfWeek = dayToDisplay === 0 ? 6 : dayToDisplay - 1;

    const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes();
    const t = TRANSLATIONS[currentLang];
    document.getElementById('mobile-time-header').textContent = t.timeHeader;
    const mobileDayHeader = document.getElementById('mobile-day-header');
    const mobileTimetableBody = document.getElementById('mobile-timetable-body');

    const lessonTimeSlots = activeShift.time_slots.filter(slot => !slot.type);
    let breakRowIndex = -1;
    if (!isPreview && dayOfWeek < 5) {
        for (let i = 0; i < activeShift.time_slots.length - 1; i++) {
            const currentSlot = activeShift.time_slots[i];
            const nextSlot = activeShift.time_slots[i + 1];
            const [currentEndHour, currentEndMinute] = currentSlot.end.split(":").map(Number);
            const currentEndTimeInMinutes = currentEndHour * 60 + currentEndMinute;
            const [nextStartHour, nextStartMinute] = nextSlot.start.split(":").map(Number);
            const nextStartTimeInMinutes = nextStartHour * 60 + nextStartMinute;
            if (currentTimeInMinutes >= currentEndTimeInMinutes && currentTimeInMinutes < nextStartTimeInMinutes) {
                if (!currentSlot.type) {
                    const lessonIndex = lessonTimeSlots.findIndex(lesson => lesson.start === currentSlot.start);
                    if (lessonIndex > -1) {
                        breakRowIndex = lessonIndex;
                    }
                }
                break;
            }
        }
    }

    if (dayOfWeek >= 5 && !isPreview) {
        mobileDayHeader.textContent = '';
        mobileTimetableBody.innerHTML = `<tr><td colspan="2" style="text-align: center;">${t.weekendMessage}</td></tr>`;
    } else {
        mobileDayHeader.textContent = t.days[dayOfWeek];
        mobileTimetableBody.innerHTML = '';
        for (let i = 0; i < lessonTimeSlots.length; i++) {
            const row = document.createElement('tr');
            const lessonTime = lessonTimeSlots[i];
            const timeCell = document.createElement('td');
            timeCell.textContent = `${lessonTime.start} - ${lessonTime.end}`;
            row.appendChild(timeCell);

            const lessonCell = document.createElement('td');
            const lessonKey = MASTER_TIMETABLE[i][dayOfWeek];
            const lesson = getSubjectName(lessonKey);
            lessonCell.textContent = lesson;

            if (i === breakRowIndex) {
                lessonCell.classList.add('current-break-cell');
            }

            const [startHour, startMinute] = lessonTime.start.split(":").map(Number);
            const [endHour, endMinute] = lessonTime.end.split(":").map(Number);

            if (!isPreview && (now.getDay() === 0 ? 6 : now.getDay() - 1) === dayOfWeek && currentTimeInMinutes >= (startHour * 60 + startMinute) && currentTimeInMinutes < (endHour * 60 + endMinute)) {
                if (lessonKey !== "empty") {
                    lessonCell.classList.add('current-lesson');
                    const totalDurationInSeconds = ((endHour * 60 + endMinute) - (startHour * 60 + startMinute)) * 60;
                    const elapsedSecondsInLesson = (currentTimeInMinutes - (startHour * 60 + startMinute)) * 60 + now.getSeconds();
                    const highlight = document.createElement('div');
                    highlight.classList.add('lesson-highlight');
                    highlight.style.height = `${Math.max(0, 1 - (elapsedSecondsInLesson / totalDurationInSeconds)) * 100}%`;
                    highlight.style.transitionDuration = '1s';
                    lessonCell.appendChild(highlight);
                }
            }
            row.appendChild(lessonCell);
            mobileTimetableBody.appendChild(row);
        }
    }
}

function forceUpdateAll() {
    updateDateTime();
    updateTimetable();
    updateMobileTimetable();
    updateExams();
}

function updateModeButtonText() {
    const button = document.getElementById('mode-toggle');
    const t = TRANSLATIONS[currentLang];
    if (document.body.classList.contains('light-mode')) { button.textContent = `🌙 ${t.light}`; } else { button.textContent = `☀️ ${t.dark}`; }
}

function setLanguage(lang) {
    currentLang = lang;

    document.getElementById('language-selector').value = lang;
    document.getElementById('exam-modal-language-selector').value = lang;

    const t = TRANSLATIONS[lang];
    document.getElementById('main-title').textContent = t.mainTitle;
    document.getElementById('current-title').textContent = t.currentTitle;
    document.getElementById('full-title').textContent = t.fullTitle;
    document.getElementById('mobile-title').textContent = t.mobileTitle;
    document.getElementById('exam-title').textContent = t.examTitle;
    const tableHeader = document.getElementById('table-header').querySelectorAll('th');
    tableHeader[0].textContent = t.timeHeader;
    for (let i = 1; i < tableHeader.length; i++) { tableHeader[i].textContent = t.days[i - 1]; }
    updateModeButtonText();
    updateViewToggleText();
    forceUpdateAll();

    const modalOverlay = document.getElementById('exam-modal-overlay');
    if (modalOverlay.classList.contains('visible')) {
        // Re-show popup with new language if it was open
        checkForUpcomingExamPopup(true);
    }
}
function updateViewToggleText() {
    const viewToggleBtn = document.getElementById('view-toggle');
    if (isWeeklyView) { viewToggleBtn.textContent = TRANSLATIONS[currentLang].viewToggleDaily; } else { viewToggleBtn.textContent = TRANSLATIONS[currentLang].viewToggleWeekly; }
}
function toggleMode() {
    document.body.classList.toggle('light-mode');
    updateModeButtonText();
}
function toggleView() {
    const fullSchedule = document.getElementById('full-schedule');
    const mobileSchedule = document.getElementById('mobile-schedule');
    isWeeklyView = !isWeeklyView;
    fullSchedule.style.display = isWeeklyView ? 'block' : 'none';
    mobileSchedule.style.display = isWeeklyView ? 'none' : 'block';
    updateViewToggleText();
}

function checkForUpcomingExamPopup(forceShow = false) {
    const t = TRANSLATIONS[currentLang];
    const now = getCurrentTime();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    const popupShownKey = `examPopupShown_${today.toISOString().split('T')[0]}`;

    const modalOverlay = document.getElementById('exam-modal-overlay');

    if (!forceShow && sessionStorage.getItem(popupShownKey)) {
        return;
    }

    // Hide the modal first if we are checking again (e.g., on language change)
    modalOverlay.classList.remove('visible');

    const upcomingExams = EXAMS.filter(exam => {
        const [year, month, day] = exam.date.split('-').map(Number);
        const examDate = new Date(year, month - 1, day);
        const diffTime = examDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays >= 0 && diffDays <= 7;
    });

    if (upcomingExams.length > 0) {
        upcomingExams.sort((a, b) => new Date(a.date) - new Date(b.date));
        const soonestExam = upcomingExams[0];

        const [year, month, day] = soonestExam.date.split('-').map(Number);
        const examDate = new Date(year, month - 1, day);
        const diffTime = examDate.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let countdownText = '';
        if (diffDays === 0) {
            countdownText = t.examToday;
        } else {
            countdownText = (diffDays === 1) ? t.examInOneDay : t.examInDays.replace('{days}', diffDays);
        }

        const subjectName = getSubjectName(soonestExam.subjectKey);

        const modalTitle = document.getElementById('exam-modal-title');
        const modalBody = document.getElementById('exam-modal-body');
        const modalCloseBtn = document.getElementById('exam-modal-close-btn');

        modalTitle.textContent = t.examPopup.title;
        modalBody.innerHTML = t.examPopup.body
            .replace('{subject}', subjectName)
            .replace('{countdown}', countdownText);
        modalCloseBtn.textContent = t.examPopup.closeButton;

        modalOverlay.classList.add('visible');
        if (!forceShow) {
            sessionStorage.setItem(popupShownKey, 'true');
        }
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const mainTitle = document.getElementById('main-title');
    const simControls = document.getElementById('simulation-controls');
    const modeToggleButton = document.getElementById('mode-toggle');

    const modalOverlay = document.getElementById('exam-modal-overlay');
    const modalCloseBtn = document.getElementById('exam-modal-close-btn');

    const closeModal = () => modalOverlay.classList.remove('visible');

    modalCloseBtn.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    checkForUpcomingExamPopup();

    modeToggleButton.addEventListener('click', toggleMode);

    let clickCount = 0;
    let firstClickTime = 0;

    mainTitle.addEventListener('click', () => {
        const now = Date.now();
        if (now - firstClickTime > 2000) {
            clickCount = 1;
            firstClickTime = now;
        } else {
            clickCount++;
        }

        if (clickCount === 5) {
            simControls.classList.toggle('visible');
            clickCount = 0;
        }
    });

    document.getElementById('sim-apply-btn').addEventListener('click', () => {
        const pickerValue = document.getElementById('sim-datetime-picker').value;
        if (pickerValue) {
            simulatedDate = new Date(pickerValue);
            forceUpdateAll();
            if (mainInterval) clearInterval(mainInterval);
        }
    });

    document.getElementById('sim-reset-btn').addEventListener('click', () => {
        simulatedDate = null;
        document.getElementById('sim-datetime-picker').value = '';
        if (mainInterval) clearInterval(mainInterval);
        mainInterval = setInterval(forceUpdateAll, 1000);
        forceUpdateAll();
    });

    document.getElementById('language-selector').addEventListener('change', (event) => setLanguage(event.target.value));
    document.getElementById('view-toggle').addEventListener('click', toggleView);

    const mainLangSelector = document.getElementById('language-selector');
    const modalLangSelector = document.getElementById('exam-modal-language-selector');

    modalLangSelector.innerHTML = mainLangSelector.innerHTML;
    modalLangSelector.value = currentLang;

    modalLangSelector.addEventListener('change', (event) => setLanguage(event.target.value));

    // Initial view based on screen size
    if (window.innerWidth <= 768) {
        isWeeklyView = false;
        document.getElementById('full-schedule').style.display = 'none';
        document.getElementById('mobile-schedule').style.display = 'block';
    } else {
        isWeeklyView = true;
        document.getElementById('full-schedule').style.display = 'block';
        document.getElementById('mobile-schedule').style.display = 'none';
    }

    setLanguage(currentLang);

    mainInterval = setInterval(forceUpdateAll, 1000);
});