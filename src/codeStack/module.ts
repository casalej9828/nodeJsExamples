
let height: number = 72;
let pose: string = "sitting";
const stand = (pose: string) => {
    pose = "stand";
    return pose
}

module.exports = { stand, pose }