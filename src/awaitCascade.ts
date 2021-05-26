
async function OneButtonWillOneDayDoItAll(): Promise<string> {
    console.log(`OneButtonWillOneDayDoItAll fired`);
    const dpof = await DownloadPreviousOutputFiles();
    console.log(`dpof = ${dpof}`);

    const upof = await UploadPreviousOutputFiles();
    console.log(`upof = ${upof}`);

    return `OneButtonWillOneDayDoItAll finished`;
}

const DownloadPreviousOutputFiles = async (): Promise<string> => {
    // simulate 3 seconds of async processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    return "DownloadPreviousOutputFiles fired";
}

const UploadPreviousOutputFiles = async (): Promise<string> => {
    // simulate 2 seconds of async processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "UploadPreviousOutputFiles fired";
}

const execute = async () => {
    const result = await OneButtonWillOneDayDoItAll();
    console.log(`passed var from OneButtonWillOneDayDoItAll: ${result}`);
}

execute();

// expected console.log()
// OneButtonWillOneDayDoItAll fired
// dpof = DownloadPreviousOutputFiles fired
// upof = UploadPreviousOutputFiles fired
// passed var from OneButtonWillOneDayDoItAll: OneButtonWillOneDayDoItAll finished
