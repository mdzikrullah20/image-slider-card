(function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('.customer-name');
    const customerText = document.querySelector('#customer-text');

    const btn = document.querySelectorAll('.btn');
    let index = 1;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img,name,text) {
        let Img = `./img/${img}.jpg`;
        let customer = new Customer(Img,name,text);
        customers.push(customer);
    }
 
    createCustomer(0, 'Jack', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum aspernatur temporibus ab deserun dolore minima corrupti possimus quasi culpa voluptate odit placeat doloribus, impedit sint eligendi. Labore, quis voluptatem?');
    createCustomer(1, 'James', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  laboris nisi ut aliquip ex ea commodo consequat');
    createCustomer(2, 'Aiden', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, earum aspernatur temporibus ab deserun dolore minima corrupti possimus quasi culpa voluptate odit placeat doloribus, impedit sint eligendi. Labore, quis voluptatem?');
    createCustomer(3, 'Sophia', 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat  laboris nisi ut aliquip ex ea commodo consequat ');

    btn.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('prevBtn')){
                if (index === 0) {
                    index = customers.length;
                    
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text; 

            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name;
                customerText.textContent = customers[index].text; 
            }
        });
    });
})();
