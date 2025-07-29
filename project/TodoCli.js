import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todos = [];

const handleOptions = (option) => {
    if (option === '1') {
        rl.question('Enter your Task: ', (ans) => {
            todos.push(ans);
            console.log('✅ Task Added');
            showMenu();
        });
    } else if (option === '2') {
        if (todos.length === 0) {
            console.log('❌ No Tasks Found');
        } else {
            console.log('\n📝 Your Tasks:');
            todos.forEach((item, i) => {
                console.log(`${i + 1}: ${item}`);
            });
        }
        showMenu();
    } else if (option === '3') {
        console.log('👋 Good Bye');
        rl.close();
    } else {
        console.log('❌ Invalid Option');
        showMenu();
    }
};

const showMenu = () => {
    console.log('\n📋 Todo Menu');
    console.log('1: Add your Task');
    console.log('2: View Tasks');
    console.log('3: Exit');
    rl.question('Choose an Option: ', handleOptions);
};

showMenu();
