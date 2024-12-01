const rastreio1 = document.getElementById("rastreio");

const docu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAbxQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhygLbQAAAJR0Uk5TADnK+9tVFuKUPHTxQY+xwneQzYof7bnLqJGlyOrZyS/9amNUxItl7NivvGkk632a6Nfk+juJqph5GTrVggwHZq2mCFdAJilMNzQqE95xjQKS7rfgEC2ZXT4FEl5gTjEXiHZNUISHSUOFR2Ks+PX5bGHQlX4heB2nZ0QOWhRKUTPGjDX0809b8noDU8Wf1nxk/P7/tMDdgwUAAAHzSURBVHicY2SAAkYQ+M2AEzBCaTawQsYvBBTyANV8FGD8xv0fKszE+AarQlGgwheSjEjCjIwwxkNkhQoPFb6/QNav9IcVpvA2hkI1RsbvD2EK2a9DGBJCjIxX0BTqAm2/iKFQgpHxHJpCY6DDTqErNGc8Kf8ATaGkwh/GU1aM3xh+XgMr1GPmPsJgy3gYVaEd4wEGBkGD/U6H7RgY94AVuv5j3sXgzrgTVaHHGdNt3oyMmzHcaLYZVaEfKF7+M60JvfKUwWMVWKHaC9mrmAr/+1+wYGRczhAFDGnGxWCFcf/ebseikAEF4Lb6fzzjUZgqm/lghUmH7eZiUcgWB4/qF5vBCtP+/51HidWYCtMZGacTpTCL8cpBsq02tGZEVch4/DRWhfk7n6Aq/Gt6CKtC7TcvGbADLAoLGBn7XM/GI6ti6sWmsGSdxDE72eMoDnhIkdVJV+y7yxj3I6v6cAubQi89xvaqNUHICjv/U2Q1Y7pwa80BHagC0WacCiO+yUyL32INVWjQxFB/BEjbMjYQsrqJcR0DQ3B9Uw0hhW1bjzJ42C9X3ESEQh7pRMZyRsIKee/bzQaqIKgQmG8rGNAUds39jKGwsEI7uhxdof8Vn4Mxj9FUznXeyICuEAh6GXdhGAoG7owFKAolKxixK/zPlAuiANgv9ymXX+zwAAAAAElFTkSuQmCC";
const truck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAfhQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/oNRwAAAKh0Uk5TAC6118tZt1BOfP8v/krzVknxV5LMW+LTz5ESLKR15ZwoOoAZGCIHD+nw7PeIBP38Z0YRduQNHSkJORrvWAGWA0xSR/grINXIFImL7aUIv9Emd7j1FsTHlB8CU7G0Cs2Hg8MOqaF9ne6zExfqmQWBKiOglYqyrt829iHF4PIyaJitvS2726ev9BwQ6z9f+diajd6mBuYLWjE+VGRpPHRBxnr7M+fQvBXWzyXXqQAAAehJREFUeJxjZCASMA4FhUCAQ+I3Kp+ZGbtKoAFfUfg8jJ+x28XH+BFFIRfbB+wKBRnfka9QGOFKxtdwhayMcNc+gyrk/QNXKPQUrpAbqvCNKONDAlYrQJQyvhe6i1CogmT9LYhCUVgYMzJegSvUfSUOV8d4AaKQQ4AdppDxNNxEMyQTT8AU8h8HC1gxMh7B50a4QlvGI/8gCu0R0cj49yCGQgYFZUaIQtfLeggX7kAo/KQLE2TEZ7X1eSO49jdERqHAr4FSGMC4kyiFtqKM22EKQ77yAINgBZrCSEbGlRE7JS7HrmCFKnS64wBUd/L2bxSFSYzrgkFByDgd5sYsIOf2HVPRBYkTkRUKi2rIMm8z2hfdD1TIY3KAgaHoiTjbzH/pe9wZu5EURizXZzGaIhJ5yJ5x+i/Gqjv8SxiKPr/6vckWmEjO7oMrtFKQWXmjgZHxE39tCyPjBEYrzY0MDMWnnvG4gl3TjuSdqhddjXynzEv++DvttYWkmknXtE/qcR2y79LfhKSw8tYO05ep76Qe8wlkQsueGU9kLxgyzg/ccAq5HLF3Of0qBVhgnHQ+NxlWSC1gnGupvVev5zlKmFdqJfBzqiUfvrsHXprZMqfeZ7hruvIgauwsyzW2Uz567hjDEClxiVUIAE51ou8LKS6fAAAAAElFTkSuQmCC";
const shiped = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAfVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbjUCwAAAKd0Uk5TAAWFtIEBSfGTl/NKVt8I4mEQCurjiQaLT2n0YIJBv6UygAL/JOGrA132VDfmoQtXknieLdy1iMgo7KwpPPAVLNs74KL179ZrVbJaW2cdem8bPdn+/HYEzD7eRyBNGqfTuzRCLhzCy/s6z+mfuDHJ9xQWZBPaUJkOY7cvGUZLppESTP2p7Qw2+a3Ae52a0qPltit3MGgPs84j+HOxB9QzcfLN6CduJpAoQwVTAAACFUlEQVR4nGNkIBIwjlSFjIy4VDMy/kZWyIZLIdCEr8gKeRg/Y1fIB7GL8R1hhT94IAa/IqSQgxGi8CkhhbyMELc+xKFQgZHxHlghyy8gxSTy5SV2hSpAy26CFUoCHcfwX4LxGqpC9d8gcxi0geouQaxWuAii5YQuoCo0ZPwDVGDMyPjzEgOyQjPGc79RFFowMr64Z/0PSDCgKLRhZDyE6kZ7xq88jIyvL8F9bQr29Y9nyoy3gSyPo3DPaDP+VXgKUwdUqCgFZjCe0uAHKvQ98xzhYa0HcHUMrF6MG8CMwJ87BYlKZkEnGCwZGcRtoVzG1WjyYYyMK8CMSMaNEowM0TBDGRejKYT5miGOkfEwYyJY3a2j/8V83/3Z8Zsh+T9MHdMqoEIxTUnmVR67Y/cxpq3U0lvBYCjNy3jAcUPg4Us5cHPtDzAq2AETOet7oQncEoyCCYxzkxiY/rL028hJbAjsKv8FUziXgTFzjyswPle6zWIDupGhdm4KA8OHG3csVIGCdxQQbmQ9KKrNeHdZMTdQfBZQoVgJkGipLWmZ/7B4jVAYsneYGBvE/yns7Wf83QPzstHFv/Ifcve/yMtHVjhpqfydRyIvf3bmwvO1wvPevg/NjIzd95AVzmBk7H3N0LnHNQWukNVTcUqnYMHEJNSgnM94U1iUcdsK5JJicWqDzMdstDBnWMr4iOtpJ8NAF1KDXiEAxy6d57sjP6oAAAAASUVORK5CYII=";

getData().then(j => {
    const js = JSON.parse(j);
    const len = js.tracking.length;
    const tracking = js.tracking;

    const ras = new rastreio(rastreio1);
    ras.genUnList();
    const liArr = ras.genListItem(len, tracking);

    for (let i = 0; i < len; i++) {
        ras.addListItem(liArr[i])
    }

    ras.append();

})

class rastreio {
    constructor(element){
        this.element = element;
        this.ul;
    }

    genListItem(num, data){
        let list = [];
        for (let i = 0; i < num; i++) {
            ////////////////////////////////////////////////////
            let container = document.createElement("div");
            container.className = "container";
            container.style.width = "600px"
    
            let header = document.createElement("div");
            header.className = "header";
    
            let ocorrencia = document.createElement("div");
            ocorrencia.className = "ocorrencia";
            ocorrencia.style.padding = "5px";
    
            let filialDate = document.createElement("div");
            filialDate.className = "filialDate";
            filialDate.style.display = "flex";
            filialDate.style.padding = "5px";
            filialDate.style.gap = "15px"
    
            let filial = document.createElement("div");
            filial.className = "filial";

            let cidade = document.createElement("div");
            cidade.className = "cidade";
    
            let date = document.createElement("div");
            date.className = "date";
    
            filialDate.appendChild(filial);
            filialDate.appendChild(cidade);
            filialDate.appendChild(date);
            header.appendChild(ocorrencia);
            header.appendChild(filialDate);
    
            let descricao = document.createElement("div");
            descricao.className = "descricao";
            descricao.style.padding = "5px";
    
            container.appendChild(header);
            container.appendChild(descricao);

            /// FORMAT DATE AND HOUR
            const event = new Date(Date.parse(data[i].data_hora_efetiva));
            const options = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric', 
            minute: 'numeric'
            };
            let dataHora = event.toLocaleDateString('pt-BR', options);
    
            ocorrencia.innerText = data[i].ocorrencia;
            filial.innerText = data[i].filial;
            cidade.innerText = data[i].cidade;
            date.innerText = dataHora;
            descricao.innerText = data[i].descricao;
    
            //////////////////////////////////////////////////
            const li = document.createElement("li");
            li.style.margin = "10px";
            li.style.padding = "10px";
            li.style.borderRadius = "5px";
            li.style.backgroundColor = "#f3f4f9";
            
            if(data[i].tipo === "Entrega") {

                li.style.backgroundColor = "#d0ffa5";
                li.style.listStyleImage = `url("${shiped}")`;

            } else if(data[i].tipo === "") {

                li.style.listStyleImage = `url("${docu}")`;

            } else if(data[i].tipo === "Informativo") {

                li.style.listStyleImage = `url("${truck}")`;

            }
            li.appendChild(container);
            list.push(li);
        }

        return list;
    }

    genUnList(){
        this.ul = document.createElement("ul");
        this.ul.style.width = "fit-content";
        this.ul.style.lineHeight = "1"
    }

    addListItem(li){
        this.ul.appendChild(li);
    }

    append(){
        this.element.append(this.ul);
    }
}

function getData(){
    const json = fetch("./data.json").then(json => json.text())
    return json;
}