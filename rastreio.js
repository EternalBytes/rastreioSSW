const docu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAbxQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhygLbQAAAJR0Uk5TADnK+9tVFuKUPHTxQY+xwneQzYof7bnLqJGlyOrZyS/9amNUxItl7NivvGkk632a6Nfk+juJqph5GTrVggwHZq2mCFdAJilMNzQqE95xjQKS7rfgEC2ZXT4FEl5gTjEXiHZNUISHSUOFR2Ks+PX5bGHQlX4heB2nZ0QOWhRKUTPGjDX0809b8noDU8Wf1nxk/P7/tMDdgwUAAAHzSURBVHicY2SAAkYQ+M2AEzBCaTawQsYvBBTyANV8FGD8xv0fKszE+AarQlGgwheSjEjCjIwwxkNkhQoPFb6/QNav9IcVpvA2hkI1RsbvD2EK2a9DGBJCjIxX0BTqAm2/iKFQgpHxHJpCY6DDTqErNGc8Kf8ATaGkwh/GU1aM3xh+XgMr1GPmPsJgy3gYVaEd4wEGBkGD/U6H7RgY94AVuv5j3sXgzrgTVaHHGdNt3oyMmzHcaLYZVaEfKF7+M60JvfKUwWMVWKHaC9mrmAr/+1+wYGRczhAFDGnGxWCFcf/ebseikAEF4Lb6fzzjUZgqm/lghUmH7eZiUcgWB4/qF5vBCtP+/51HidWYCtMZGacTpTCL8cpBsq02tGZEVch4/DRWhfk7n6Aq/Gt6CKtC7TcvGbADLAoLGBn7XM/GI6ti6sWmsGSdxDE72eMoDnhIkdVJV+y7yxj3I6v6cAubQi89xvaqNUHICjv/U2Q1Y7pwa80BHagC0WacCiO+yUyL32INVWjQxFB/BEjbMjYQsrqJcR0DQ3B9Uw0hhW1bjzJ42C9X3ESEQh7pRMZyRsIKee/bzQaqIKgQmG8rGNAUds39jKGwsEI7uhxdof8Vn4Mxj9FUznXeyICuEAh6GXdhGAoG7owFKAolKxixK/zPlAuiANgv9ymXX+zwAAAAAElFTkSuQmCC";
const truck = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAfhQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0/oNRwAAAKh0Uk5TAC6118tZt1BOfP8v/krzVknxV5LMW+LTz5ESLKR15ZwoOoAZGCIHD+nw7PeIBP38Z0YRduQNHSkJORrvWAGWA0xSR/grINXIFImL7aUIv9Emd7j1FsTHlB8CU7G0Cs2Hg8MOqaF9ne6zExfqmQWBKiOglYqyrt829iHF4PIyaJitvS2726ev9BwQ6z9f+diajd6mBuYLWjE+VGRpPHRBxnr7M+fQvBXWzyXXqQAAAehJREFUeJxjZCASMA4FhUCAQ+I3Kp+ZGbtKoAFfUfg8jJ+x28XH+BFFIRfbB+wKBRnfka9QGOFKxtdwhayMcNc+gyrk/QNXKPQUrpAbqvCNKONDAlYrQJQyvhe6i1CogmT9LYhCUVgYMzJegSvUfSUOV8d4AaKQQ4AdppDxNNxEMyQTT8AU8h8HC1gxMh7B50a4QlvGI/8gCu0R0cj49yCGQgYFZUaIQtfLeggX7kAo/KQLE2TEZ7X1eSO49jdERqHAr4FSGMC4kyiFtqKM22EKQ77yAINgBZrCSEbGlRE7JS7HrmCFKnS64wBUd/L2bxSFSYzrgkFByDgd5sYsIOf2HVPRBYkTkRUKi2rIMm8z2hfdD1TIY3KAgaHoiTjbzH/pe9wZu5EURizXZzGaIhJ5yJ5x+i/Gqjv8SxiKPr/6vckWmEjO7oMrtFKQWXmjgZHxE39tCyPjBEYrzY0MDMWnnvG4gl3TjuSdqhddjXynzEv++DvttYWkmknXtE/qcR2y79LfhKSw8tYO05ep76Qe8wlkQsueGU9kLxgyzg/ccAq5HLF3Of0qBVhgnHQ+NxlWSC1gnGupvVev5zlKmFdqJfBzqiUfvrsHXprZMqfeZ7hruvIgauwsyzW2Uz567hjDEClxiVUIAE51ou8LKS6fAAAAAElFTkSuQmCC";
const shiped = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAPYQAAD2EBqD+naQAAAfVQTFRFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEbjUCwAAAKd0Uk5TAAWFtIEBSfGTl/NKVt8I4mEQCurjiQaLT2n0YIJBv6UygAL/JOGrA132VDfmoQtXknieLdy1iMgo7KwpPPAVLNs74KL179ZrVbJaW2cdem8bPdn+/HYEzD7eRyBNGqfTuzRCLhzCy/s6z+mfuDHJ9xQWZBPaUJkOY7cvGUZLppESTP2p7Qw2+a3Ae52a0qPltit3MGgPs84j+HOxB9QzcfLN6CduJpAoQwVTAAACFUlEQVR4nGNkIBIwjlSFjIy4VDMy/kZWyIZLIdCEr8gKeRg/Y1fIB7GL8R1hhT94IAa/IqSQgxGi8CkhhbyMELc+xKFQgZHxHlghyy8gxSTy5SV2hSpAy26CFUoCHcfwX4LxGqpC9d8gcxi0geouQaxWuAii5YQuoCo0ZPwDVGDMyPjzEgOyQjPGc79RFFowMr64Z/0PSDCgKLRhZDyE6kZ7xq88jIyvL8F9bQr29Y9nyoy3gSyPo3DPaDP+VXgKUwdUqCgFZjCe0uAHKvQ98xzhYa0HcHUMrF6MG8CMwJ87BYlKZkEnGCwZGcRtoVzG1WjyYYyMK8CMSMaNEowM0TBDGRejKYT5miGOkfEwYyJY3a2j/8V83/3Z8Zsh+T9MHdMqoEIxTUnmVR67Y/cxpq3U0lvBYCjNy3jAcUPg4Us5cHPtDzAq2AETOet7oQncEoyCCYxzkxiY/rL028hJbAjsKv8FUziXgTFzjyswPle6zWIDupGhdm4KA8OHG3csVIGCdxQQbmQ9KKrNeHdZMTdQfBZQoVgJkGipLWmZ/7B4jVAYsneYGBvE/yns7Wf83QPzstHFv/Ifcve/yMtHVjhpqfydRyIvf3bmwvO1wvPevg/NjIzd95AVzmBk7H3N0LnHNQWukNVTcUqnYMHEJNSgnM94U1iUcdsK5JJicWqDzMdstDBnWMr4iOtpJ8NAF1KDXiEAxy6d57sjP6oAAAAASUVORK5CYII=";

getData().then(j => {
    const data = JSON.parse(j);

    const ras = new rastreio(data);
    ras.start("container");
    ras.setHeader();
    ras.genUnList();
    ras.genListItem();
    ras.addListItem();
    ras.append();

})

class rastreio {
    constructor(data){
        this.element = null;
        this.ul = null;
        this.data = data;
        this.liList = null;
    }

    start(containerName){
        const container = document.getElementById(containerName);
        const rastreio1 = document.createElement("div");
        this.element = rastreio1;
        rastreio1.style.boxSizing = "border-box";
        rastreio1.style.position = "absolute";
        rastreio1.style.left = "0px";
        rastreio1.style.top = "0px";
        rastreio1.style.width = "100%";

        const closer = document.createElement("div");
        const xclose = "data:image/png;base64,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";
        closer.style.backgroundImage = `url(${ xclose })`;
        closer.style.backgroundPosition = "center";
        closer.style.backgroundSize = "cover";
        closer.style.width = "23px";
        closer.style.height = "23px";
        closer.style.position = "absolute";
        closer.style.right = "10px";
        closer.style.top = "10px";
        closer.addEventListener("click", function(e){
            rastreio1.style.display = "none";
        }, false);
        rastreio1.appendChild(closer);
        container.appendChild(rastreio1);
    }

    setHeader(){
        const header = document.createElement("div");
        header.style.fontSize = "14px";
        header.style.fontFamily = "sans-serif";
        header.style.lineHeight = "1.3";
        const hremdest = document.createElement("div");
        const remetente = this.data.header.remetente;
        const destinatario = this.data.header.destinatario;
        const success = this.data.success;

        if(success === true){
            hremdest.innerHTML = `<table style="text-align:left;padding:10px 10px;margin:10px 5px;"><tr><td><strong>Remetente:</strong></td><td>${ remetente }</td></tr><tr><td><strong>Destinátario:</strong></td><td>${ destinatario }</td></tr></table>`;
            header.appendChild(hremdest);
            this.element.appendChild(header);
        } else {
            hremdest.innerHTML = `<p style="text-align:left;padding:10px 10px;margin:10px 5px;background-color:#ffcbd1;border-radius:5px"><strong>Erro: </strong>${ this.data.message }</p>`;
            header.appendChild(hremdest);
            this.element.appendChild(header);
        }
    }

    genListItem(){
        const num = this.data.tracking.length;
        const data = this.data.tracking;
        let list = [];
        for (let i = 0; i < num; i++) {
            ////////////////////////////////////////////////////
            let container = document.createElement("div");
            container.style.fontSize = "14px";
            container.style.fontFamily = "sans-serif";
            container.style.lineHeight = "1.3";

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
            li.style.margin = "5px";
            li.style.padding = "5px";
            li.style.borderRadius = "5px";
            li.style.backgroundColor = "#f3f4f9";
            li.style.listStylePosition = "inside";
            
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

        this.liList = list;
    }

    genUnList(){
        this.ul = document.createElement("ul");
        this.ul.style.width = "100%"; ////
        this.ul.style.padding = "0px";
        this.ul.style.margin = "0px";
    }

    addListItem(){
        this.ul.append(...this.liList);
    }

    append(){
        this.element.append(this.ul);
    }
}

function getData(){
    const json = fetch("./data.json").then(json => json.text())
    return json;
}