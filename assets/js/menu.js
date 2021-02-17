$(function () {
	var Accordion = function (el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)
	}

	Accordion.prototype.dropdown = function (e) {
		var $el = e.data.el;
		$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}

	var accordion = new Accordion($('#accordion'), false);
});

$('body').on("click", ".dropdown-menu", function (e) {
	$(this).parent().is(".show") && e.stopPropagation();
});

$(function () {
	$('[data-toggle="popover"]').popover()
})

var mydata = JSON.parse(data);
var elements = '';
let map = new Map();

$.each(mydata, function (key, data) {

	let datos = "";

	if (data.cliente) {
		datos += `- Cliente: ${data.cliente.toUpperCase()}<br>`
	} if (data.tel) {
		datos += `- Teléfono: ${data.tel.toUpperCase()}<br>`
	} if (data.direccion) {
		datos += `- Direccion:${data.direccion.toUpperCase()}<br>`
	} if (data.ciudad) {
		datos += `- Ciudad: ${data.ciudad.toUpperCase()}<br>`
	} if (data["pagina web"]) {
		datos += `- Pagina Web: <span class="title" title="${data["pagina web"].toLowerCase()}">${data["pagina web"].toUpperCase()}</span><br>`
	} if (data.instagram) {
		datos += `- Instagram: <span class="title" title="${data.instagram.toLowerCase()}">${data.instagram.toUpperCase()}</span><br>`
	} if (data.facebook) {
		datos += `- Facebook: <span class="title" title="${data.facebook.toLowerCase()}">${data.facebook.toUpperCase()}</span><br>`
	} if (data["celular de ventas"]) {
		datos += `- Celular de ventas: ${data["celular de ventas"].toUpperCase()}<br>`
	}



	if (map.get(data.depto.toLowerCase()) === undefined) {
		map.set(data.depto.toLowerCase(), 1);

		let li = `<li class="depto" id="${data.depto.toUpperCase()}"><div class="link text-uppercase"><i class="fa fa-paint-brush"></i><span class="text"> ${data.depto.toUpperCase()}</span><i class="fa fa-chevron-down"></i></div>
					<ul class="submenu">
						<li class="submenu-li text-uppercase">
						${data.fantasia.toUpperCase()}
							<div class="bubble">
								<div class="data-box">
									${datos}
								</div>
							</div>
						</li>
					</ul>
				</li>`;
		$('#accordion').append(li);
	} else {

		if (data.fantasia) {
			$(`#${data.depto.toUpperCase()} ul.submenu`).append(`
			<li class="submenu-li">
				${data.fantasia.toUpperCase()}
					<div class="bubble">
						<div class="data-box">
							${datos}
						</div>
					</div>
			</li>
	   `)
		}
	}
})