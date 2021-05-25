
export class Human {
    height: number = 72
    pose: string = "sitting"
    stand = () => {
        this.pose = "stand"
    }
}