export default function Contacts() {
    return (
        <div className="flex flex-col py-[120px] px-[136px]">
            <div className="flex flex-col mb-12 pb-8 border-b border-[#ffffff52]">
                <h1 className="mb-1 text-[--text-color-secondary]">
                    квесты в Санкт-Петербурге
                </h1>
                <p className="text-6xl font-bold">Контакты</p>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="mb-2 font-bold">Адрес</p>
                    <p className="mb-9">
                        Санкт-Петербург, Набережная реки Карповка, д 5П
                    </p>
                    <p className="mb-2 font-bold">Режим работы</p>
                    <p className="mb-9">Ежедневно, с 9:00 до 20:00</p>
                    <p className="mb-2 font-bold">Телефон</p>
                    <p className="mb-9">8 (800) 333-55-99</p>
                    <p className="mb-2 font-bold">E-mail</p>
                    <p>info@escape-room.ru</p>
                </div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1996.8578677371338!2d30.32583204037068!3d59.9676811202899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469631377cb39823%3A0xe4e7fe70674ac509!2sNaberezhnaya%20Reki%20Karpovki!5e0!3m2!1ses!2sbg!4v1711055867608!5m2!1ses!2sbg"
                    width="650"
                    height="336"
                    loading="lazy"
                />
            </div>
        </div>
    );
}
