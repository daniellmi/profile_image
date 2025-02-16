"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Img {
    constructor() {
        this.count = 0;
        this.fileInput = document.querySelector("#fileInput");
        this.img = document.querySelector("#profileimage");
        this.img.src = localStorage.getItem('image') || '';
    }
    sendImage() {
        return __awaiter(this, void 0, void 0, function* () {
            const file = this.fileInput.files[0];
            if (!file) {
                alert("select an image first.");
                return;
            }
            const formData = new FormData();
            formData.append("image", file);
            try {
                const response = yield fetch("http://localhost:3000/upload", {
                    method: "POST",
                    body: formData
                }).then(res => { return res.json(); });
                localStorage.setItem('image', response.imageUrl);
                this.img.src = localStorage.getItem('image');
            }
            catch (error) {
                console.error("Erro:", error);
            }
        });
    }
    imageClickEvent() {
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
        });
    }
}
const image = new Img();
image.imageClickEvent();
const button = document.querySelector("#buttonImage");
button.addEventListener("click", () => image.sendImage());
