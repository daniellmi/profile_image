
class Img {
    private count: number;
    private fileInput: HTMLInputElement | any;
    private img: HTMLImageElement | any;

    public constructor() {
        this.count = 0;
        this.fileInput = document.querySelector("#fileInput");
        this.img = document.querySelector("#profileimage");
        this.img.src = localStorage.getItem('image') || '';

    }

    public async sendImage() {

        const file: any = this.fileInput.files[0];
        if (!file) {
            alert("select an image first.");
            return;
        }

        const formData: FormData = new FormData();
        formData.append("image", file);

        try {
            const response = await fetch("/upload", {
                method: "POST",
                body: formData
            }).then(res => { return res.json() });

            localStorage.setItem('image', response.imageUrl);
            this.img.src = localStorage.getItem('image');

        } catch (error) {
            console.error("error:", error);
        }
    }

    public imageClickEvent() {

        this.img.addEventListener("click", () => {
            ++this.count;
            if (this.count != 1) {
                this.fileInput.style.display = 'none';
                button.style.display = 'none';
            }
            else {
                this.fileInput.style.display = 'block';
                button.style.display = 'block';
            }

            this.count > 1 ? this.count = 0 : this.count;
        })
    }

}

const image: Img = new Img();
image.imageClickEvent();

const button = document.querySelector("#buttonImage") as HTMLButtonElement;
button.addEventListener("click", () => image.sendImage());
