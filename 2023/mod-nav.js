// https://www.redditstatic.com/desktop2x/mod-nav.42231b60360ea0552b4d.js
// Retrieved at 8/2/2023, 10:40:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["mod-nav"], {
		"./node_modules/@reddit/shreddit.components.mod-nav/dist/index.js": function(e, t, i) {
			"use strict";
			i.r(t), i.d(t, "ModNav", (function() {
				return x
			}));
			var o = i("./node_modules/lit/index.js"),
				n = i("./node_modules/@lit/localize/lit-localize.js"),
				s = i("./node_modules/lit/decorators.js"),
				l = i("./node_modules/@reddit/shreddit.styles/dist/index.js"),
				a = i("./node_modules/@reddit/shreddit.lib.client-telemetry/dist/eventV2JSONUtils.js"),
				c = i("./node_modules/lit-html/directive.js"),
				r = i("./node_modules/lit-html/lit-html.js");
			class d extends c.a {
				constructor(e) {
					if (super(e), this.it = r.d, e.type !== c.b.CHILD) throw Error(this.constructor.directiveName + "() can only be used in child bindings")
				}
				render(e) {
					if (e === r.d || null == e) return this._t = void 0, this.it = e;
					if (e === r.c) return e;
					if ("string" != typeof e) throw Error(this.constructor.directiveName + "() called with a non-string value");
					if (e === this.it) return this._t;
					this.it = e;
					const t = [e];
					return t.raw = t, this._t = {
						_$litType$: this.constructor.resultType,
						strings: t,
						values: []
					}
				}
			}
			d.directiveName = "unsafeHTML", d.resultType = 1;
			Object(c.c)(d);
			class h extends d {}
			h.directiveName = "unsafeSVG", h.resultType = 2;
			const p = Object(c.c)(h);
			var v = i("./node_modules/tslib/tslib.es6.js"),
				m = i("./node_modules/@reddit/faceplate-ui/lib/IconSize.js");
			const g = "2.2.0";
			class u extends(function(e) {
				var t;
				return (t = class extends e {}).VERSION = g, t
			}(o.a)) {}
			const w = o.b`
  :host {
    display: inline-block;
    fill: currentColor;
    vertical-align: middle;
    line-height: 1em;
  }

  svg {
    fill: currentColor;
    width: auto;
  }

  :host([size='sm']) > svg {
    height: 1em;
  }

  :host([size='md']) > svg {
    height: 1.25em;
  }

  :host([size='lg']) > svg {
    height: 1.5em;
  }

  :host([size='xl']) > svg {
    height: 2em;
  }
`;

			function f(e, t, i, o = w) {
				if (i) {
					class n extends u {
						constructor() {
							super(...arguments), this.size = m.a.Small, this.fill = !1
						}
						static get styles() {
							return o
						}
						render() {
							return this.fill ? i : t
						}
					}
					Object(v.h)([Object(s.b)({
						type: String,
						reflect: !0
					})], n.prototype, "size", void 0), Object(v.h)([Object(s.b)({
						type: Boolean
					})], n.prototype, "fill", void 0), window.customElements.define(e, n)
				} else {
					class i extends u {
						constructor() {
							super(...arguments), this.size = m.a.Small
						}
						static get styles() {
							return o
						}
						render() {
							return t
						}
					}
					Object(v.h)([Object(s.b)({
						type: String,
						reflect: !0
					})], i.prototype, "size", void 0), window.customElements.define(e, i)
				}
			}
			f("icon-mod-queue", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M11.5 15.521l-.158-.042C11.206 15.444 8 14.581 8 12.25V8.393l3.5-.914 3.5.914v3.857c0 2.331-3.206 3.194-3.342 3.229l-.158.042zM9.25 9.357v2.893c0 1.147 1.713 1.8 2.249 1.972.536-.177 2.251-.83 2.251-1.972V9.357l-2.25-.586-2.25.586zM17.375 19H5.625A1.627 1.627 0 014 17.375V5.625A1.627 1.627 0 015.625 4h11.75A1.627 1.627 0 0119 5.625v11.75A1.627 1.627 0 0117.375 19zM5.625 5.25a.375.375 0 00-.375.375v11.75a.375.375 0 00.375.375h11.75a.375.375 0 00.375-.375V5.625a.375.375 0 00-.375-.375H5.625zm-3 9.5a.375.375 0 01-.375-.375V2.624a.375.375 0 01.375-.374h11.75a.375.375 0 01.375.374H16A1.627 1.627 0 0014.375 1H2.625A1.627 1.627 0 001 2.624v11.751A1.627 1.627 0 002.625 16v-1.25z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M2.625 15.375V16A1.627 1.627 0 011 14.375V2.624A1.627 1.627 0 012.625 1h11.75A1.627 1.627 0 0116 2.624H5.629a3.008 3.008 0 00-3 3l-.004 9.751zM19 5.625v11.75A1.627 1.627 0 0117.375 19H5.625A1.627 1.627 0 014 17.375V5.625A1.627 1.627 0 015.625 4h11.75A1.627 1.627 0 0119 5.625zm-4 2.768l-3.5-.914-3.5.914v3.857c0 2.331 3.206 3.194 3.342 3.229l.158.042.158-.042c.136-.035 3.342-.9 3.342-3.229V8.393z"/></svg>')}`);
			f("icon-external", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15.75 13H17v3.375A2.63 2.63 0 0114.375 19H3.625A2.63 2.63 0 011 16.375V5.625A2.629 2.629 0 013.625 3H7v1.25H3.625A1.377 1.377 0 002.25 5.625v10.75a1.377 1.377 0 001.375 1.375h10.75a1.377 1.377 0 001.375-1.375V13zm2.625-12h-5v1.25h3.491l-8.433 8.433.884.884 8.433-8.433v3.491H19v-5A.625.625 0 0018.375 1z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15 13h2v3.35A2.653 2.653 0 0114.35 19H3.65A2.653 2.653 0 011 16.35V5.653A2.656 2.656 0 013.653 3H7v2H3.653A.654.654 0 003 5.653v10.7a.65.65 0 00.65.65h10.7a.65.65 0 00.65-.65V13zm3.375-12h-5.438a.625.625 0 00-.422 1.085L14.591 4l-6.423 6.418 1.414 1.414 6.483-6.483 1.887 1.736A.626.626 0 0019 6.625v-5A.625.625 0 0018.375 1z"/></svg>')}`);
			f("icon-mod-mail", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_0)"><path d="M19.987 3.636a1.627 1.627 0 00-1.624-1.623L1.626 2A1.627 1.627 0 000 3.625v12.75A1.627 1.627 0 001.625 18h16.749A1.629 1.629 0 0020 16.373l-.013-12.737zM1.625 3.25l16.738.013a.375.375 0 01.374.375v1L14 8.767V6.454l-4-1.037-4 1.037v2.318L1.25 4.579v-.954a.375.375 0 01.375-.375zM12.75 7.421v3.454c0 1.423-2.144 2.215-2.75 2.41-.606-.2-2.75-.987-2.75-2.41V7.421L10 6.708l2.75.713zm5.889 9.219a.376.376 0 01-.265.11H1.625a.375.375 0 01-.375-.375V6.246L6 10.438v.437c0 2.641 3.686 3.627 3.843 3.668l.157.04.157-.04C10.314 14.5 14 13.516 14 10.875v-.451L18.739 6.3l.01 10.078a.376.376 0 01-.11.262z"/></g><defs><clipPath id="clip0_474_0"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 6.362l3.5.875v3.938c0 2.187-3.5 3.062-3.5 3.062s-3.5-.875-3.5-3.062V7.237l3.5-.875zm9.989-.918L15 9.757v1.418c0 3.264-4.162 4.4-4.636 4.518-.239.06-.489.06-.728 0C9.162 15.574 5 14.439 5 11.175V9.741l-5-4.35v10.984A1.627 1.627 0 001.625 18h16.749A1.629 1.629 0 0020 16.373l-.011-10.929zm-13.853.338l3.5-.875c.24-.059.489-.059.728 0l3.5.875A1.5 1.5 0 0115 7.238v.537l4.971-4.3a1.622 1.622 0 00-1.608-1.463L1.626 2a1.621 1.621 0 00-1.6 1.421L5 7.754v-.516a1.5 1.5 0 011.136-1.456z"/></svg>')}`);
			f("icon-calendar", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.374 2H16V.25h-1.25V2h-9.5V.251H4V2H2.626A1.627 1.627 0 001 3.626v13.748A1.627 1.627 0 002.626 19h14.748A1.627 1.627 0 0019 17.374V3.626A1.627 1.627 0 0017.374 2zM2.626 3.25H4v1h1.25v-1h9.5v1H16v-1h1.374a.377.377 0 01.376.376V7H2.25V3.626a.377.377 0 01.376-.376zm14.748 14.5H2.626a.377.377 0 01-.376-.376V8.25h15.5v9.124a.378.378 0 01-.376.376z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M1 8.5h18v8.874A1.627 1.627 0 0117.374 19H2.626A1.627 1.627 0 011 17.374V8.5zM17.374 2H16V.25h-2V2H6V.251H4V2H2.626A1.627 1.627 0 001 3.626V7h18V3.626A1.627 1.627 0 0017.374 2z"/></svg>')}`);
			f("icon-profile", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_35)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM4.866 17.07a3.99 3.99 0 013.991-2.77h2.286a3.99 3.99 0 013.991 2.766 8.685 8.685 0 01-10.268 0v.004zm11.3-.87a5.354 5.354 0 00-5.024-3.146H8.857A5.354 5.354 0 003.833 16.2a8.75 8.75 0 1112.334 0h-.001zM10.059 5a3.229 3.229 0 100 6.458 3.229 3.229 0 000-6.458zm0 5.208a1.98 1.98 0 110-3.959 1.98 1.98 0 010 3.959z"/></g><defs><clipPath id="clip0_473_35"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_29)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zm.059 5a3.229 3.229 0 110 6.458 3.229 3.229 0 010-6.458zM3.85 16.216a5.32 5.32 0 015.007-3.162h2.286a5.323 5.323 0 015.008 3.161 8.73 8.73 0 01-12.3 0l-.001.001z"/></g><defs><clipPath id="clip0_473_29"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-statistics", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 16H1.75v-6H3v6zm5-9H6.75v9H8V7zm5-3h-1.25v12H13V4zm5-3h-1.25v15H18V1zM1.01 17.75V19h17.9v-1.25H1.01z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M3 16H1v-6h2v6zm5-9H6v9h2V7zm5-3h-2v12h2V4zm5-3h-2v15h2V1zm1 16H1v2h18v-2z"/></svg>')}`);
			f("icon-rules", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_797_61)"><path d="M7.35 7.333H5.733V6.77h.48V5.23a1.232 1.232 0 01-.47.111v-.507c.178.01.353-.05.487-.167h.7v2.1h.419l.003.566zm-.767 1.92c.164 0 .258.082.258.23 0 .22-.115.276-.516.522-.7.422-.768.806-.768 1.185v.143h1.975v-.564H6.374c.039-.106.149-.236.483-.424.538-.29.659-.581.659-.878 0-.488-.3-.8-.916-.8a1.171 1.171 0 00-1.05.633l.479.345a.708.708 0 01.554-.392zm.536 4.66a.544.544 0 00.383-.545c0-.438-.313-.7-.9-.7a1.435 1.435 0 00-1.01.4l.369.427a.824.824 0 01.588-.26c.178 0 .275.081.275.211 0 .156-.1.253-.448.253h-.218v.482h.205c.356 0 .507.086.507.307 0 .162-.1.28-.383.28a.7.7 0 01-.566-.334L5.5 14.8a1.22 1.22 0 001.047.529c.626 0 1.036-.286 1.036-.826a.581.581 0 00-.464-.59zm1.88-3.288h6v-1.25H9v1.25zm0 4h6v-1.25H9v1.25zm0-8h6v-1.25H9v1.25zm9-5.014v17.271A1.123 1.123 0 0116.876 20h-12.7a1.123 1.123 0 01-1.125-1.118V4.25h-.875A1.127 1.127 0 011.05 3.125v-1.5A1.627 1.627 0 012.675 0h13.7A1.62 1.62 0 0118 1.611zM2.3 3h.75V1.625a.375.375 0 10-.75 0V3zm14.45-1.389a.369.369 0 00-.374-.361H4.252a1.6 1.6 0 01.048.375V18.75h12.45V1.611z"/></g><defs><clipPath id="clip0_797_61"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_797_62)"><path d="M16.375 0h-13.7A1.627 1.627 0 001.05 1.625v1.5A1.127 1.127 0 002.175 4.25h.875v14.632A1.123 1.123 0 004.175 20h12.7A1.123 1.123 0 0018 18.882V1.611A1.62 1.62 0 0016.375 0zM5.732 6.77h.48V5.23a1.232 1.232 0 01-.47.111v-.507c.178.01.353-.05.487-.167h.7v2.1h.419v.563H5.732v-.56zm.868 1.9c.619 0 .916.312.916.8 0 .3-.121.588-.66.878-.333.188-.443.318-.482.424h1.158v.564H5.557v-.146c0-.379.07-.763.768-1.185.4-.246.516-.3.516-.522 0-.148-.094-.23-.258-.23a.708.708 0 00-.554.395L5.55 9.3A1.171 1.171 0 016.6 8.667v.003zm-.053 6.666A1.22 1.22 0 015.5 14.8l.42-.367a.7.7 0 00.567.334c.287 0 .383-.118.383-.28 0-.221-.151-.307-.507-.307h-.205v-.48h.216c.345 0 .448-.1.448-.253 0-.13-.1-.211-.275-.211a.825.825 0 00-.588.26l-.368-.427c.27-.26.633-.404 1.009-.4.589 0 .9.263.9.7a.544.544 0 01-.383.545.58.58 0 01.464.594c.002.539-.408.825-1.034.825v.003zM15 15H9v-2h6v2zm0-4H9V9h6v2zm0-4H9V5h6v2z"/></g><defs><clipPath id="clip0_797_62"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-tag", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M7.973 19.844a1.624 1.624 0 01-1.15-.472L.629 13.177A1.632 1.632 0 01.61 10.9l9.107-9.4a1.631 1.631 0 011.168-.5h6.49A1.627 1.627 0 0119 2.625v6.491a1.633 1.633 0 01-.5 1.168l-9.4 9.1c-.301.294-.706.46-1.127.46zM10.885 2.25a.38.38 0 00-.271.114l-9.1 9.4a.375.375 0 000 .525l6.194 6.195a.377.377 0 00.526 0l9.4-9.106a.374.374 0 00.114-.269V2.625a.375.375 0 00-.375-.375h-6.488zM14.5 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.375 1h-6.49a1.632 1.632 0 00-1.168.5L.61 10.9a1.632 1.632 0 00.019 2.28l6.194 6.2a1.634 1.634 0 002.28.017l9.4-9.1A1.633 1.633 0 0019 9.116V2.625A1.627 1.627 0 0017.375 1zm-3.289 6.914a2 2 0 110-4 2 2 0 010 4z"/></svg>')}`);
			f("icon-list-bulleted", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 10.625H7v-1.25h12v1.25zm0-7.25H7v1.25h12v-1.25zm0 12H7v1.25h12v-1.25zM3 2.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 6a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19 11H7V9h12v2zm0-8H7v2h12V3zm0 12H7v2h12v-2zM3 2a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4zm0 6a2 2 0 100 4 2 2 0 000-4z"/></svg>')}`);
			f("icon-blockchain", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 20a1.63 1.63 0 01-.8-.21l-7.376-4.2A1.628 1.628 0 011 14.18V5.819a1.628 1.628 0 01.821-1.412L9.2.21A1.642 1.642 0 0110.8.21l7.376 4.2A1.628 1.628 0 0119 5.818v8.364a1.627 1.627 0 01-.821 1.412l-7.375 4.2A1.628 1.628 0 0110 20zm0-18.751a.378.378 0 00-.187.048l-7.374 4.2a.376.376 0 00-.189.326v8.364a.376.376 0 00.189.325l7.375 4.2a.379.379 0 00.373 0l7.374-4.194a.376.376 0 00.189-.327V5.819a.375.375 0 00-.189-.326L10.186 1.3A.374.374 0 0010 1.249zm5.6 6.24l-.625-1.082L10 9.279 5.026 6.407 4.4 7.489l4.974 2.872v5.506h1.25V10.36L15.6 7.49z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_3322_31)"><path d="M18.179 4.406L10.8.21a1.637 1.637 0 00-1.6.001L1.821 4.406A1.628 1.628 0 001 5.818v8.364a1.628 1.628 0 00.821 1.412L9.2 19.79a1.639 1.639 0 001.607 0l7.375-4.2A1.628 1.628 0 0019 14.182V5.818a1.627 1.627 0 00-.821-1.412zM11 10.578v5.29H9v-5.29L4.213 7.814 4.4 7.49l.812-1.407L10 8.845l4.787-2.763.812 1.407.188.325L11 10.578z"/></g><defs><clipPath id="clip0_3322_31"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-bot", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18.376 4H1.624A1.618 1.618 0 000 5.607v11.786A1.618 1.618 0 001.624 19h16.752A1.618 1.618 0 0020 17.393V5.607A1.618 1.618 0 0018.376 4zm.374 13.393a.366.366 0 01-.374.357H1.624a.366.366 0 01-.374-.357V5.607a.366.366 0 01.374-.357h16.752a.366.366 0 01.374.357v11.786zM6 14.529h.014A2.049 2.049 0 008.07 16.3h3.858A1.854 1.854 0 0014 14.529V12H6v2.529zm1.249-1.279h5.5v1.279c0 .47-.574.521-.821.521H8.07a.79.79 0 01-.821-.75v-1.05zM8.624 3h-1.25a2.625 2.625 0 015.25 0h-1.25a1.375 1.375 0 00-2.75 0zM7 10H5V8h2v2zm6-2h2v2h-2V8z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_95)"><path d="M9 3H7a3 3 0 116 0h-2a1 1 0 00-2 0zm11 2.607v11.786A1.618 1.618 0 0118.376 19H1.624A1.618 1.618 0 010 17.393V5.607A1.618 1.618 0 011.624 4h16.752A1.618 1.618 0 0120 5.607zM5 10h2V8H5v2zm8.375 2.625h-6.75V14.3a1.412 1.412 0 001.446 1.375h3.858c.8 0 1.446-.386 1.446-1.146v-1.904zM15 8h-2v2h2V8z"/></g><defs><clipPath id="clip0_474_95"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-text-post", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M6 13h8v1.25H6V13zm0-2.75h8V9H6v1.25zm13-7.625v14.75A1.627 1.627 0 0117.375 19H2.625A1.627 1.627 0 011 17.375V2.625A1.627 1.627 0 012.625 1h14.75A1.627 1.627 0 0119 2.625zm-1.25 0a.375.375 0 00-.375-.375H2.625a.375.375 0 00-.375.375v14.75a.375.375 0 00.375.375h14.75a.375.375 0 00.375-.375V2.625zM6 6.25h8V5H6v1.25z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M17.375 1H2.625A1.627 1.627 0 001 2.625v14.75A1.627 1.627 0 002.625 19h14.75A1.627 1.627 0 0019 17.375V2.625A1.627 1.627 0 0017.375 1zM14 15H6v-2h8v2zm0-4H6V9h8v2zm0-4H6V5h8v2z"/></svg>')}`);
			f("icon-privacy", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.083 0a6.862 6.862 0 00-6.854 6.854c0 .825.149 1.643.442 2.414L0 15.939v4h5V17h3v-3h5.083a7.1 7.1 0 006.854-7.146A6.862 6.862 0 0013.083 0zm0 12.75H6.75v3h-3v2.938h-2.5v-2.231l6.906-6.906-.178-.395a5.554 5.554 0 01-.5-2.3 5.604 5.604 0 0111.208 0 5.833 5.833 0 01-5.603 5.894zm2.7-6.934a1.664 1.664 0 11-3.332 0 1.664 1.664 0 013.334 0h-.002z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M13.083 0a6.862 6.862 0 00-6.854 6.854c0 .825.149 1.643.442 2.414L0 15.939v4h5V17h3v-3h5.083a7.1 7.1 0 006.854-7.146A6.862 6.862 0 0013.083 0zm1.039 7.654a1.838 1.838 0 110-3.676 1.838 1.838 0 010 3.676z"/></svg>')}`);
			f("icon-filter", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M15.5 9a3.5 3.5 0 10-3.437-4.125H1v1.25h11.063A3.5 3.5 0 0015.5 9zm0-5.75a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM4.5 11a3.5 3.5 0 103.437 4.125H18.96v-1.25H7.937A3.5 3.5 0 004.5 11zm0 5.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M12.162 6.5H1v-2h11.162a3.5 3.5 0 110 2zM4.5 11a3.5 3.5 0 103.337 4.5h11.122v-2H7.837A3.494 3.494 0 004.5 11z"/></svg>')}`);
			f("icon-admin", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_17)"><path d="M19.94 9.211a3.25 3.25 0 00-3.177-2.642c-.45 0-.895.102-1.3.3a10.814 10.814 0 00-4.839-1.379l.811-3.741 2.444.519a1.492 1.492 0 10.2-1.235L11.573.5a1.13 1.13 0 00-1.333.862L9.344 5.5a10.773 10.773 0 00-4.792 1.357 3.215 3.215 0 00-1.315-.289A3.249 3.249 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.567l.006-.138.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.81-.016-1.208zm-1.22 1c-.076.42-.282.805-.59 1.1l-.393.407-.024.625c-.06 3-3.45 5.354-7.717 5.354-4.267 0-7.66-2.353-7.718-5.371l-.024-.6-.4-.433c-.3-.293-.5-.674-.57-1.087a2.138 2.138 0 01.011-.765 2 2 0 011.942-1.623c.353.003.699.102 1 .286l.337.216.335-.22a9.437 9.437 0 014.758-1.381h.72a9.43 9.43 0 014.726 1.4l.347.225.343-.232a1.7 1.7 0 01.96-.3 2 2 0 011.95 1.629c.048.253.05.512.006.766v.004z"/></g><defs><clipPath id="clip0_474_17"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_474_39)"><path d="M19.94 9.212a3.25 3.25 0 00-3.177-2.643 2.936 2.936 0 00-1.3.3 10.808 10.808 0 00-4.839-1.38l.811-3.741 2.444.519a1.493 1.493 0 10.2-1.235L11.573.5a1.128 1.128 0 00-1.333.862L9.344 5.5a10.781 10.781 0 00-4.793 1.357 3.207 3.207 0 00-1.314-.289A3.25 3.25 0 00.064 9.2c-.079.4-.085.812-.018 1.214a3.23 3.23 0 00.912 1.754l.066.071v.127c.076 3.69 4.014 6.582 8.976 6.582 4.962 0 8.892-2.889 8.966-6.566l.006-.139.044-.046a3.252 3.252 0 00.94-1.778c.067-.4.062-.809-.016-1.207z"/></g><defs><clipPath id="clip0_474_39"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-settings", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_79)"><path d="M10 20c-.401 0-.802-.027-1.2-.079a1.145 1.145 0 01-.992-1.137v-1.073a.97.97 0 00-.627-.878A.98.98 0 006.1 17l-.755.753a1.149 1.149 0 01-1.521.1 10.16 10.16 0 01-1.671-1.671 1.149 1.149 0 01.1-1.523L3 13.906a.97.97 0 00.176-1.069.98.98 0 00-.887-.649H1.216A1.145 1.145 0 01.079 11.2a9.1 9.1 0 010-2.393 1.145 1.145 0 011.137-.992h1.073a.97.97 0 00.878-.627A.979.979 0 003 6.1l-.754-.754a1.15 1.15 0 01-.1-1.522 10.16 10.16 0 011.673-1.676 1.155 1.155 0 011.522.1L6.1 3a.966.966 0 001.068.176.98.98 0 00.649-.887V1.216A1.145 1.145 0 018.8.079a9.129 9.129 0 012.393 0 1.144 1.144 0 01.991 1.137v1.073a.971.971 0 00.628.878A.977.977 0 0013.905 3l.754-.754a1.152 1.152 0 011.522-.1c.62.49 1.18 1.05 1.671 1.671a1.15 1.15 0 01-.1 1.522L17 6.1a.967.967 0 00-.176 1.068.98.98 0 00.887.649h1.073a1.145 1.145 0 011.137.991 9.096 9.096 0 010 2.392 1.145 1.145 0 01-1.137.992h-1.073A1.041 1.041 0 0017 13.905l.753.755a1.149 1.149 0 01.1 1.521c-.49.62-1.05 1.18-1.671 1.671a1.149 1.149 0 01-1.522-.1L13.906 17a.97.97 0 00-1.069-.176.981.981 0 00-.65.887v1.073a1.144 1.144 0 01-.99 1.137A9.431 9.431 0 0110 20zm-.938-1.307a7.638 7.638 0 001.875 0v-.982a2.292 2.292 0 013.853-1.6l.693.694a8.796 8.796 0 001.326-1.326l-.694-.694a2.29 2.29 0 011.6-3.851h.982a7.746 7.746 0 000-1.876h-.982a2.213 2.213 0 01-2.034-1.4 2.223 2.223 0 01.438-2.451l.694-.693a8.76 8.76 0 00-1.327-1.326l-.692.694a2.219 2.219 0 01-2.434.445 2.221 2.221 0 01-1.419-2.041v-.979a7.638 7.638 0 00-1.875 0v.982a2.213 2.213 0 01-1.4 2.034 2.23 2.23 0 01-2.456-.438l-.693-.694a8.757 8.757 0 00-1.326 1.327l.694.692a2.216 2.216 0 01.445 2.434 2.22 2.22 0 01-2.041 1.418h-.982a7.746 7.746 0 000 1.876h.982a2.213 2.213 0 012.034 1.4 2.223 2.223 0 01-.438 2.451l-.694.693c.394.488.838.933 1.326 1.326l.694-.694a2.218 2.218 0 012.433-.445 2.22 2.22 0 011.418 2.041v.983zM10 13.229a3.23 3.23 0 110-6.458 3.23 3.23 0 010 6.458zm0-5.208a1.979 1.979 0 100 3.958 1.979 1.979 0 000-3.958z"/></g><defs><clipPath id="clip0_473_79"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_76)"><path d="M19.921 8.8a1.145 1.145 0 00-1.137-.991h-1.073a.98.98 0 01-.887-.649A.969.969 0 0117 6.1l.754-.754a1.15 1.15 0 00.1-1.522 10.16 10.16 0 00-1.671-1.671 1.152 1.152 0 00-1.522.1L13.905 3a.975.975 0 01-1.09.167.97.97 0 01-.628-.878V1.216A1.144 1.144 0 0011.2.079a9.129 9.129 0 00-2.4 0 1.145 1.145 0 00-.991 1.137v1.073a.98.98 0 01-.649.887A.966.966 0 016.1 3l-.754-.754a1.152 1.152 0 00-1.522-.1 10.16 10.16 0 00-1.676 1.673 1.15 1.15 0 00.1 1.522L3 6.1a.979.979 0 01.167 1.09.97.97 0 01-.878.627H1.216A1.145 1.145 0 00.079 8.8a9.1 9.1 0 000 2.393 1.145 1.145 0 001.137.991h1.073a.98.98 0 01.887.649A.97.97 0 013 13.906l-.751.752a1.149 1.149 0 00-.1 1.523c.49.62 1.05 1.18 1.671 1.671a1.148 1.148 0 001.521-.1L6.1 17a.98.98 0 011.09-.167.97.97 0 01.627.878v1.073a1.145 1.145 0 00.983 1.137 9.103 9.103 0 002.393 0 1.144 1.144 0 00.99-1.137v-1.073a.981.981 0 01.65-.887.968.968 0 011.073.176l.753.753a1.149 1.149 0 001.522.1c.62-.49 1.18-1.05 1.671-1.671a1.149 1.149 0 00-.1-1.521L17 13.905a1.04 1.04 0 01.711-1.717h1.073a1.145 1.145 0 001.137-.992 9.096 9.096 0 000-2.392V8.8zM11.979 10a1.98 1.98 0 11-3.958 0 1.98 1.98 0 013.958 0z"/></g><defs><clipPath id="clip0_473_76"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-appearance", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.755 6.12A14.556 14.556 0 0013.77.133a1.16 1.16 0 00-1.357.205L6.436 6.317 4.349 8.4a2.1 2.1 0 000 2.963l.55.55-3.872 3.1a2.737 2.737 0 103.846 3.846l3.1-3.873.55.551a2.142 2.142 0 002.963 0l2.087-2.087 5.977-5.973a1.16 1.16 0 00.205-1.358zM10.6 14.657a.862.862 0 01-1.194 0L7.868 13.12 3.9 18.082a1.486 1.486 0 11-2.09-2.09l4.964-3.972-1.542-1.538a.847.847 0 010-1.194l1.646-1.645 5.369 5.368-1.647 1.646zm2.529-2.53L7.762 6.76l5.487-5.488a13.311 13.311 0 015.368 5.37l-5.488 5.487z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M5.993 6.76l7.136 7.14-1.645 1.646a2.141 2.141 0 01-2.962 0l-.551-.55-3.1 3.873a2.737 2.737 0 11-3.846-3.846l3.873-3.1-.551-.552a2.1 2.1 0 010-2.962L5.993 6.76zm13.76-.64A14.555 14.555 0 0013.77.133a1.16 1.16 0 00-1.357.205L6.877 5.876l7.136 7.136 5.536-5.535a1.159 1.159 0 00.205-1.358z"/></svg>')}`);
			f("icon-notification", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_472_1138)"><path d="M11 18h1a2 2 0 01-4 0h3zm8-3.792v.673A1.12 1.12 0 0117.883 16H2.117A1.12 1.12 0 011 14.881v-.673a3.947 3.947 0 011.738-3.277A2.706 2.706 0 003.926 8.7V7.087a6.07 6.07 0 0112.138 0l.01 1.613a2.7 2.7 0 001.189 2.235A3.949 3.949 0 0119 14.208zm-1.25 0a2.7 2.7 0 00-1.188-2.242A3.956 3.956 0 0114.824 8.7V7.088a4.819 4.819 0 10-9.638 0v1.615a3.956 3.956 0 01-1.738 3.266 2.7 2.7 0 00-1.198 2.239v.542h15.5v-.542z"/></g><defs><clipPath id="clip0_472_1138"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_472_1153)"><path d="M11 18h1a2 2 0 01-4 0h3zm6.263-7.07a2.699 2.699 0 01-1.189-2.23l-.005-1.61a6.069 6.069 0 10-12.138 0v1.613a2.7 2.7 0 01-1.193 2.227A3.949 3.949 0 001 14.208v.672A1.119 1.119 0 002.117 16h15.766A1.119 1.119 0 0019 14.88v-.672a3.952 3.952 0 00-1.737-3.278z"/></g><defs><clipPath id="clip0_472_1153"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-ratings-everyone", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M14.375 19h-8.75A4.631 4.631 0 011 14.375v-8.75A4.631 4.631 0 015.625 1h8.75A4.631 4.631 0 0119 5.625v8.75A4.631 4.631 0 0114.375 19zM5.625 2.25A3.379 3.379 0 002.25 5.625v8.75a3.379 3.379 0 003.375 3.375h8.75a3.38 3.38 0 003.375-3.375v-8.75a3.38 3.38 0 00-3.375-3.375h-8.75zM7.2 15V4.924h5.9v2H9.443v2.012h3.028v1.935H9.443V13H13.1v2H7.2z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M14.375 1h-8.75A4.631 4.631 0 001 5.625v8.75A4.631 4.631 0 005.625 19h8.75A4.631 4.631 0 0019 14.375v-8.75A4.631 4.631 0 0014.375 1zM13.1 6.92H9.443v2.016h3.028v1.935H9.443V13H13.1v2H7.2V4.924h5.9V6.92z"/></svg>')}`);
			f("icon-emoji", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_125)"><path d="M10 20a10 10 0 1110-10 10.011 10.011 0 01-10 10zm0-18.75A8.75 8.75 0 1018.75 10 8.76 8.76 0 0010 1.25zm3.511 12.109l-1.022-.718A3.046 3.046 0 0110 13.829a3.045 3.045 0 01-2.489-1.188l-1.022.718A4.252 4.252 0 0010 15.079a4.252 4.252 0 003.511-1.72zM6 7.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm8 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></g><defs><clipPath id="clip0_473_125"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_473_146)"><path d="M10 0a10 10 0 1010 10A10.011 10.011 0 0010 0zM4.5 9a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm5.5 6.454a4.63 4.63 0 01-3.818-1.878l1.635-1.151A2.669 2.669 0 0010 13.454a2.666 2.666 0 002.182-1.029l1.636 1.15A4.626 4.626 0 0110 15.454zm4-4.954a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"/></g><defs><clipPath id="clip0_473_146"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-down-arrow", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_4084_297)"><path d="M10.442 19.442l9-9-.884-.884-7.933 7.933V1h-1.25v16.491L1.442 9.558l-.884.884 9 9a.624.624 0 00.884 0z"/></g><defs><clipPath id="clip0_4084_297"><path d="M0 0h20v20H0z" transform="rotate(90 10 10)"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_4084_301)"><path d="M10.707 19.207l9-9-1.414-1.414L11 16.086V1H9v15.086L1.707 8.793.293 10.207l9 9a1 1 0 001.414 0z"/></g><defs><clipPath id="clip0_4084_301"><path d="M0 0h20v20H0z" transform="rotate(90 10 10)"/></clipPath></defs></svg>')}`);
			f("icon-search", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_480_0)"><path d="M19.442 18.558l-4.513-4.513a8.525 8.525 0 10-.884.884l4.513 4.513.884-.884zM1.252 8.5A7.25 7.25 0 118.5 15.75 7.258 7.258 0 011.251 8.5z"/></g><defs><clipPath id="clip0_480_0"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_784_291)"><path d="M19.707 18.293l-4.539-4.539a8.527 8.527 0 10-1.414 1.414l4.539 4.539 1.414-1.414zM8.5 15A6.5 6.5 0 1115 8.5 6.508 6.508 0 018.5 15z"/></g><defs><clipPath id="clip0_784_291"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`);
			f("icon-topic", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.567 18.683l-2.194-2.194a3.508 3.508 0 10-.884.885l2.194 2.193.884-.884zM14.5 16.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM5.5 2a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5.75a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM12.125 9h4.75A1.127 1.127 0 0018 7.875v-4.75A1.127 1.127 0 0016.875 2h-4.75A1.127 1.127 0 0011 3.125v4.75A1.127 1.127 0 0012.125 9zm.125-5.75h4.5v4.5h-4.5v-4.5zM7.875 11h-4.75A1.127 1.127 0 002 12.125v4.75A1.127 1.127 0 003.125 18h4.75A1.127 1.127 0 009 16.875v-4.75A1.127 1.127 0 007.875 11zm-.125 5.75h-4.5v-4.5h4.5v4.5z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M19.832 18.418l-2.266-2.266A3.45 3.45 0 0018 14.5a3.5 3.5 0 10-3.5 3.5 3.45 3.45 0 001.652-.434l2.266 2.266 1.414-1.414zM14.5 12.725a1.775 1.775 0 110 3.55 1.775 1.775 0 010-3.55zM9 5.5a3.5 3.5 0 11-7 0 3.5 3.5 0 017 0zm2 2.375v-4.75A1.127 1.127 0 0112.125 2h4.75A1.127 1.127 0 0118 3.125v4.75A1.127 1.127 0 0116.875 9h-4.75A1.127 1.127 0 0111 7.875zm-2 4.25v4.75A1.127 1.127 0 017.875 18h-4.75A1.127 1.127 0 012 16.875v-4.75A1.127 1.127 0 013.125 11h4.75A1.127 1.127 0 019 12.125z"/></svg>')}`);
			f("icon-predictions", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><g clip-path="url(#clip0_1578_253)"><path d="M15.255 15.712c-.353.23-.72.436-1.1.619l.735 1.978a.424.424 0 01-.038.375c-.015.019-.051.066-.09.066H5.142c-.038 0-.075-.047-.09-.066a.418.418 0 01-.037-.375l.735-1.978a9.754 9.754 0 01-1.1-.619l-.8 2.161a1.656 1.656 0 00.176 1.527 1.352 1.352 0 001.116.6h9.618a1.351 1.351 0 001.115-.6 1.657 1.657 0 00.184-1.523l-.803-2.165zM6.288 8A3.666 3.666 0 019.95 4.338v-1.25A4.917 4.917 0 005.038 8h1.25z"/><path d="M16.562 9.562a6.762 6.762 0 11-2.515-6.942l.208-.372c.14-.24.326-.452.546-.623a7.992 7.992 0 103.162 7.107 2.212 2.212 0 01-1.401.83z"/><path d="M18.646 4.6l-1.08-.6-.6-1.075a.864.864 0 00-1.508-.002L14.853 4l-1.082.6a.866.866 0 000 1.509l1.08.6.6 1.078a.867.867 0 001.191.323.865.865 0 00.317-.324l.6-1.077 1.08-.6a.865.865 0 000-1.51l.007.001zm-1.78 1.073a.877.877 0 00-.337.335l-.32.571-.316-.567a.876.876 0 00-.335-.337l-.574-.321.576-.321a.864.864 0 00.33-.331l.32-.571.323.578c.078.137.192.25.33.326l.573.32-.57.318z"/></g><defs><clipPath id="clip0_1578_253"><path d="M0 0h20v20H0z"/></clipPath></defs></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M10 17.384a9.32 9.32 0 005.271-1.628l.787 2.117a1.655 1.655 0 01-.184 1.523 1.351 1.351 0 01-1.115.6H5.141a1.352 1.352 0 01-1.116-.6 1.656 1.656 0 01-.183-1.523l.81-2.173A9.314 9.314 0 0010 17.384zm7.963-8.652A8.02 8.02 0 1114.8 1.625c-.22.171-.405.383-.546.623l-.413.739-.737.412a2.24 2.24 0 000 3.912l.74.413.412.739v.006a2.242 2.242 0 001.952 1.14h.006a2.221 2.221 0 001.75-.877zM9.95 3.088A4.917 4.917 0 005.038 8h1.25A3.666 3.666 0 019.95 4.338v-1.25zm8.7 1.513L17.567 4l-.6-1.077a.864.864 0 00-1.509-.002L14.852 4l-1.078.6a.863.863 0 000 1.509l1.08.6.6 1.079a.868.868 0 001.19.321.864.864 0 00.317-.323l.6-1.078 1.081-.6a.864.864 0 000-1.509l.008.002z"/></svg>')}`);
			f("icon-wiki", o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M16.875 0H4.625A2.625 2.625 0 002 2.618v14.708h.018c0 .061-.018.118-.018.18A2.5 2.5 0 004.5 20h12.375A1.125 1.125 0 0018 18.878V1.122A1.125 1.125 0 0016.875 0zm-.125 18.753H4.5a1.247 1.247 0 010-2.494h12.25v2.494zM4.5 15.012c-.44.002-.872.122-1.25.347V2.618a1.375 1.375 0 011.375-1.371H16.75v13.765H4.5z"/></svg>')}`, o.g`${p('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M4.5 13.625a3.841 3.841 0 00-2.5.939V2.625A2.629 2.629 0 014.625 0h12.25A1.127 1.127 0 0118 1.125v12.5H4.5zM4.5 15a2.5 2.5 0 000 5h12.375A1.126 1.126 0 0018 18.875V15H4.5z"/></svg>')}`);
			var z, b = i("./node_modules/@reddit/faceplate/lib/custom-event.js"),
				A = function(e, t, i, o) {
					var n, s = arguments.length,
						l = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
					if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, i, o);
					else
						for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (l = (s < 3 ? n(l) : s > 3 ? n(t, i, l) : n(t, i)) || l);
					return s > 3 && l && Object.defineProperty(t, i, l), l
				};
			! function(e) {
				e.ModQueue = "ModQueue", e.Modmail = "Modmail", e.ScheduledPosts = "ScheduledPosts", e.UserManagement = "UserManagement", e.Insights = "Insights", e.RulesAndRemovalReasons = "RulesAndRemovalReasons", e.UserFlair = "UserFlair", e.ContentControls = "ContentConrols", e.ModLog = "ModLog", e.Automod = "Automod", e.Safety = "Safety", e.Wiki = "Wiki", e.PostFlair = "PostFlair", e.Predictions = "Predictions", e.InstalledApps = "InstalledApps", e.BrowseApps = "BrowseApps", e.GeneralSettings = "GeneralSettings", e.PostsAndComments = "PostsAndComments", e.CommunityAppearance = "CommunityAppearance", e.Notifications = "Notifications", e.ContentRating = "ContentRating", e.AwardsAndEmojis = "AwardsAndEmojis", e.ModHelpCenter = "ModHelpCenter", e.ModCodeOfConduct = "ModCodeOfConduct", e.ModSupport = "ModSupport", e.ModHelp = "ModHelp", e.ContactReddit = "ContactReddit", e.Automations = "Automations"
			}(z || (z = {}));
			let x = class extends o.a {
				constructor() {
					super(...arguments), this.subredditName = "", this.currentUrl = "", this.modPermissions = void 0, this.isDevPlatformEnabled = !1, this.isPostGuidanceEnabled = !1, this.isPredictionsTournamentAllowed = !1, this.isAwardsSunsetEnabled = !1, this.isBanEvasionAdoptionCampaignEnabled = !1, this.isResponsive = !1, this.onClickLink = (e, t) => {
						if (this.dispatchEvent(new CustomEvent("mod-nav-click", {
								bubbles: !0,
								composed: !0,
								detail: e
							})), t) {
							const e = Object(a.a)({
									source: "moderator",
									action: "click",
									noun: t
								}, {
									action_info: {
										pane_name: "left_nav"
									},
									subreddit: {
										name: this.subredditName
									}
								}),
								i = Object(b.a)("track-event", {
									bubbles: !0,
									composed: !0,
									details: e
								});
							this.dispatchEvent(i)
						}
					}, this.renderLink = (e, t, i) => {
						const n = t[e],
							s = !!n.href.find(e => this.currentUrl.includes(e)),
							l = "/" !== n.href[0].charAt(0);
						return o.c`
      <li class="mx-0 p-0 flex items-center z-10 text-neutral-content-weak w-100">
        <a
          class="flex items-center text-neutral-content-weak w-100 no-underline ${s?"relative":""}"
          href="${n.href[0]}"
          target="${l?"_blank":"_self"}"
          rel="${l?"noopener nofollow":""}"
          @click="${()=>this.onClickLink(n.href[0],n.eventNoun)}"
        >
          <div
            class="w-xs h-2xl mr-md ${s?"selected":""}"
            style="${s?"background-color: #FF4500;":""}"
          ></div>
          <span class="inline-flex text-neutral-content-weak">
            ${s?n.iconFill:n.iconOutline}
          </span>
          <span
            class="ml-md whitespace-nowrap items-center w-100 gap-xs ${this.isResponsive?"hidden m:flex":"flex"}"
          >
            ${n.text} ${i}
            ${l?o.c`<icon-external class="ml-auto pl-xs" size="md"></icon-external>`:""}
          </span>
        </a>
      </li>
    `
					}
				}
				render() {
					var e, t, i, s, l, a, c, r, d, h, p, v, m, g, u, w;
					const f = ((e, t) => ({
							[z.ModQueue]: {
								eventNoun: "queue",
								href: [`/r/${e}/about/modqueue`, `/r/${e}/about/reports`, `/r/${e}/about/spam`, `/r/${e}/about/edited`, `/r/${e}/about/unmoderated`],
								iconOutline: o.c`<icon-mod-queue size="md"></icon-mod-queue>`,
								iconFill: o.c`<icon-mod-queue fill size="md"></icon-mod-queue>`,
								text: Object(n.b)("Queues", {
									desc: "Link: to modqueue"
								})
							},
							[z.Modmail]: {
								eventNoun: "modmail",
								href: ["https://mod.reddit.com"],
								iconOutline: o.c`<icon-mod-mail size="md"></icon-mod-mail>`,
								iconFill: o.c`<icon-mod-mail fill size="md"></icon-mod-mail>`,
								text: Object(n.b)("Modmail", {
									desc: "Link: to modmail"
								})
							},
							[z.ScheduledPosts]: {
								eventNoun: "scheduled-posts",
								href: [`/r/${e}/about/scheduledposts`],
								iconOutline: o.c`<icon-calendar size="md"></icon-calendar>`,
								iconFill: o.c`<icon-calendar fill></icon-calendar>`,
								text: Object(n.b)("Scheduled Posts", {
									desc: "Link: to scheduled posts page"
								})
							},
							[z.UserManagement]: {
								eventNoun: "user-management",
								href: [`/r/${e}/about/banned`, `/r/${e}/about/muted`, `/r/${e}/about/contributors`, `/r/${e}/about/talkhosts`, `/r/${e}/about/moderators`],
								iconOutline: o.c`<icon-profile size="md"></icon-profile>`,
								iconFill: o.c`<icon-profile fill size="md"></icon-profile>`,
								text: Object(n.b)("User Management", {
									desc: "Link: to user management pages"
								})
							},
							[z.Insights]: {
								eventNoun: "insights",
								href: [`/mod/${e}/insights`],
								iconOutline: o.c`<icon-statistics size="md"></icon-statistics>`,
								iconFill: o.c`<icon-statistics fill size="md"></icon-statistics>`,
								text: Object(n.b)("Insights", {
									desc: "Link: to mod insights pages"
								})
							},
							[z.RulesAndRemovalReasons]: {
								eventNoun: "rules-removal-reasons",
								href: [`/r/${e}/about/rules`, `/r/${e}/about/removal`],
								iconOutline: o.c`<icon-rules size="md"></icon-rules>`,
								iconFill: o.c`<icon-rules fill size="md"></icon-rules>`,
								text: Object(n.b)("Rules and Removal Reasons", {
									desc: "Link: to rules and removal reason pages"
								})
							},
							[z.UserFlair]: {
								eventNoun: "user_flair",
								href: [`/r/${e}/about/userflair`, `/r/${e}/about/flair`],
								iconOutline: o.c`<icon-tag size="md"></icon-tag>`,
								iconFill: o.c`<icon-tag fill size="md"></icon-tag>`,
								text: Object(n.b)("User Flair", {
									desc: "Link: to user flair settings page"
								})
							},
							[z.ContentControls]: {
								eventNoun: "content-controls",
								href: [`/r/${e}/about/settings`],
								iconOutline: o.c`<icon-filter size="md"></icon-filter>`,
								iconFill: o.c`<icon-filter fill size="md"></icon-filter>`,
								text: Object(n.b)("Content Controls", {
									desc: "Link: to user flair settings page"
								})
							},
							[z.ModLog]: {
								eventNoun: "modlog",
								href: [`/r/${e}/about/log`],
								iconOutline: o.c`<icon-list-bulleted size="md"></icon-list-bulleted>`,
								iconFill: o.c`<icon-list-bulleted fill size="md"></icon-list-bulleted>`,
								text: Object(n.b)("Mod Log", {
									desc: "Link: to mod log page"
								})
							},
							[z.Automod]: {
								eventNoun: "automod",
								href: [`/r/${e}/about/wiki/config/automoderator/`],
								iconOutline: o.c`<icon-bot size="md"></icon-bot>`,
								iconFill: o.c`<icon-bot fill size="md"></icon-bot>`,
								text: Object(n.b)("Automod", {
									desc: "Link: to automod page"
								})
							},
							[z.Safety]: {
								eventNoun: "safety",
								href: [`/r/${e}/about/edit?page=safety`],
								iconOutline: o.c`<icon-privacy size="md"></icon-privacy>`,
								iconFill: o.c`<icon-privacy fill size="md"></icon-privacy>`,
								text: Object(n.b)("Safety", {
									desc: "Link: to safety pages"
								})
							},
							[z.Wiki]: {
								eventNoun: "wiki",
								href: [`/r/${e}/about/wiki/`],
								iconOutline: o.c`<icon-wiki size="md"></icon-wiki>`,
								iconFill: o.c`<icon-wiki fill size="md"></icon-wiki>`,
								text: Object(n.b)("Wiki", {
									desc: "Link: to wiki pages"
								})
							},
							[z.PostFlair]: {
								eventNoun: "post-flair",
								href: [`/r/${e}/about/postflair`],
								iconOutline: o.c`<icon-tag size="md"></icon-tag>`,
								iconFill: o.c`<icon-tag fill size="md"></icon-tag>`,
								text: Object(n.b)("Post Flair", {
									desc: "Link: to post flair settings page"
								})
							},
							[z.Predictions]: {
								eventNoun: "predictions",
								href: [`/r/${e}/about/predictions`],
								iconOutline: o.c`<icon-predictions size="md"></icon-predictions>`,
								iconFill: o.c`<icon-predictions fill size="md"></icon-predictions>`,
								text: Object(n.b)("Predictions", {
									desc: "Link: to predictions settings page"
								})
							},
							[z.InstalledApps]: {
								eventNoun: "installed_apps",
								href: [`https://developers.reddit.com/r/${e}/apps`],
								iconOutline: o.c`<icon-topic size="md"></icon-topic>`,
								iconFill: o.c`<icon-topic fill size="md"></icon-topic>`,
								text: Object(n.b)("Installed Apps", {
									desc: "Link: to dev platform installed apps page"
								})
							},
							[z.BrowseApps]: {
								eventNoun: "browse_apps",
								href: ["https://developers.reddit.com/apps"],
								iconOutline: o.c`<icon-search size="md"></icon-search>`,
								iconFill: o.c`<icon-search search size="md"></icon-search>`,
								text: Object(n.b)("Browse Apps", {
									desc: "Link: to dev platform apps page"
								})
							},
							[z.GeneralSettings]: {
								eventNoun: "general-settings",
								href: [`/r/${e}/about/edit?page=community`],
								iconOutline: o.c`<icon-settings size="md"></icon-settings>`,
								iconFill: o.c`<icon-settings fill size="md"></icon-settings>`,
								text: Object(n.b)("General Settings", {
									desc: "Link: to general settings page"
								})
							},
							[z.PostsAndComments]: {
								eventNoun: "posts-and-comments",
								href: [`/r/${e}/about/edit?page=posts`],
								iconOutline: o.c`<icon-text-post size="md"></icon-text-post>`,
								iconFill: o.c`<icon-text-post fill size="md"></icon-text-post>`,
								text: Object(n.b)("Posts and Comments", {
									desc: "Link: to posts and comments settings page"
								})
							},
							[z.CommunityAppearance]: {
								eventNoun: "community-appearance",
								href: [`/r/${e}?styling=true`],
								iconOutline: o.c`<icon-appearance size="md"></icon-appearance>`,
								iconFill: o.c`<icon-appearance fill size="md"></icon-appearance>`,
								text: Object(n.b)("Community Appearance", {
									desc: "Link: to styling blade experience"
								})
							},
							[z.Notifications]: {
								eventNoun: "notifications",
								href: [`/r/${e}/about/edit?page=notifications`],
								iconOutline: o.c`<icon-notification size="md"></icon-notification>`,
								iconFill: o.c`<icon-notification fill size="md"></icon-notification>`,
								text: Object(n.b)("Notifications", {
									desc: "Link: to notification settings page"
								})
							},
							[z.ContentRating]: {
								eventNoun: "content-rating",
								href: [`/r/${e}/about/edit?page=content_tag`],
								iconOutline: o.c`<icon-ratings-everyone size="md"></icon-ratings-everyone>`,
								iconFill: o.c`<icon-ratings-everyone fill size="md"></icon-ratings-everyone>`,
								text: Object(n.b)("Content Rating", {
									desc: "Link: to content rating settings page"
								})
							},
							[z.AwardsAndEmojis]: {
								eventNoun: "awards_badges_and_emojis",
								href: [t ? "" : `/r/${e}/about/awards`, `/r/${e}/about/emojis`, `/r/${e}/about/badges`, `/r/${e}/about/emotes`].filter(Boolean),
								iconOutline: o.c`<icon-emoji size="md"></icon-emoji>`,
								iconFill: o.c`<icon-emoji fill size="md"></icon-emoji>`,
								text: t ? Object(n.b)("Emojis", {
									desc: "Link: to emoji pages"
								}) : Object(n.b)("Awards and Emojis", {
									desc: "Link: to awards and emoji pages"
								})
							},
							[z.ModHelpCenter]: {
								eventNoun: "mod-help-center",
								href: ["https://mods.reddithelp.com/"],
								iconOutline: o.c`<icon-admin size="md"></icon-admin>`,
								iconFill: o.c`<icon-admin fill size="md"></icon-admin>`,
								text: Object(n.b)("Mod Help Center", {
									desc: "Link: to mod help center"
								})
							},
							[z.ModCodeOfConduct]: {
								eventNoun: "mod-code-of-conduct",
								href: ["https://www.reddit.com/help/healthycommunities/"],
								iconOutline: o.c`<icon-admin size="md"></icon-admin>`,
								iconFill: o.c`<icon-admin fill size="md"></icon-admin>`,
								text: Object(n.b)("Mod Code of Conduct", {
									desc: "Link: to mod code of conduct"
								})
							},
							[z.ModSupport]: {
								eventNoun: "mod-support",
								href: ["https://www.reddit.com/r/ModSupport/"],
								iconOutline: o.c`<icon-admin size="md"></icon-admin>`,
								iconFill: o.c`<icon-admin fill size="md"></icon-admin>`,
								text: Object(n.b)("ModSupport", {
									desc: "Link: to mod support subreddit"
								})
							},
							[z.ModHelp]: {
								eventNoun: "mod-help",
								href: ["https://www.reddit.com/r/modhelp/"],
								iconOutline: o.c`<icon-admin size="md"></icon-admin>`,
								iconFill: o.c`<icon-admin fill size="md"></icon-admin>`,
								text: Object(n.b)("ModHelp", {
									desc: "Link: to mod help subreddit"
								})
							},
							[z.ContactReddit]: {
								eventNoun: "contact-reddit",
								href: ["https://www.reddithelp.com/hc/en-us/requests/new"],
								iconOutline: o.c`<icon-admin size="md"></icon-admin>`,
								iconFill: o.c`<icon-admin fill size="md"></icon-admin>`,
								text: Object(n.b)("Contact Reddit", {
									desc: "Link: to reddit help request page"
								})
							},
							[z.Automations]: {
								eventNoun: "post-guidance",
								href: [`/mod/${e}/automations`],
								iconOutline: o.c`<icon-blockchain size="md"></icon-blockchain>`,
								iconFill: o.c`<icon-blockchain fill size="md"></icon-blockchain>`,
								text: Object(n.b)("Automations", {
									desc: "Link: to automations pages"
								})
							}
						}))(this.subredditName, this.isAwardsSunsetEnabled),
						b = (new Date).getFullYear(),
						A = o.c`<span
      class="text-brand-onBackground font-bold text-12 rounded-sm uppercase px-xs bg-brand-background"
    >
      ${Object(n.b)("New",{id:"new-link-label",desc:"Label for a link that is being highlighted as having new features available."})}
    </span>`,
						x = this.isBanEvasionAdoptionCampaignEnabled ? A : o.e;
					return o.c`
      <div
        class="h-100 box-border bg-neutral-background text-neutral-content-weak overscroll-none flex flex-col items-start"
        data-faceplate-tracking-context="${JSON.stringify({action_info:{pane_name:"mod_nav"}})}"
      >
        <a
          class="flex mb-sm p-xs no-underline text-neutral-content-weak ml-xs"
          href="/r/${this.subredditName}"
          @click="${()=>this.onClickLink(`/r/${this.subredditName}`)}"
        >
          <span><icon-down-arrow size="md" class="rotate-90"></icon-down-arrow></span>
          <span
            class="pl-md whitespace-nowrap m:flex w-100 items-center ${this.isResponsive?"hidden":""}"
            >${Object(n.b)("Exit mod tools",{desc:"Link: to subreddit feed page"})}</span
          >
        </a>
        <slot name="subreddit-selector"></slot>
        <span
          class="uppercase font-semibold text-12 leading-4 pt-[20px] pb-[6px] whitespace-nowrap ml-md"
          >${Object(n.b)("Overview",{desc:"Section: mod nav section for general pages"})}</span
        >
        ${null!==(e=this.modPermissions)&&void 0!==e&&e.isPostEditingAllowed?this.renderLink(z.ModQueue,f):""}
        ${null!==(t=this.modPermissions)&&void 0!==t&&t.isMailEditingAllowed?this.renderLink(z.Modmail,f):""}
        ${this.renderLink(z.ScheduledPosts,f)}
        ${null!==(i=this.modPermissions)&&void 0!==i&&i.isAccessEnabled?this.renderLink(z.UserManagement,f):""}
        ${this.renderLink(z.Insights,f)}
        <hr />
        <span class="uppercase font-semibold text-12 leading-4 py-[6px] whitespace-nowrap ml-md"
          >${Object(n.b)("Moderation",{desc:"Section: mod nav section for moderation settings"})}</span
        >
        ${this.renderLink(z.RulesAndRemovalReasons,f)}
        ${null!==(s=this.modPermissions)&&void 0!==s&&s.isFlairEditingAllowed?this.renderLink(z.UserFlair,f):""}
        ${null!==(l=this.modPermissions)&&void 0!==l&&l.isConfigEditingAllowed?this.renderLink(z.ContentControls,f):""}
        ${this.renderLink(z.ModLog,f)}
        ${null!==(a=this.modPermissions)&&void 0!==a&&a.isConfigEditingAllowed?this.renderLink(z.Automod,f):""}
        ${this.renderLink(z.Safety,f,x)}
        ${this.isPostGuidanceEnabled?this.renderLink(z.Automations,f):""}
        ${null!==(c=this.modPermissions)&&void 0!==c&&c.isWikiEditingAllowed||null!==(r=this.modPermissions)&&void 0!==r&&r.isFlairEditingAllowed&&null!==(d=this.modPermissions)&&void 0!==d&&d.isConfigEditingAllowed?o.c` <hr />
              <span
                class="uppercase font-semibold text-12 leading-4 py-[6px] whitespace-nowrap ml-md"
                >${Object(n.b)("Content",{desc:"Section: mod nav section for content settings"})}</span
              >`:""}
        ${null!==(h=this.modPermissions)&&void 0!==h&&h.isWikiEditingAllowed?this.renderLink(z.Wiki,f):""}
        ${null!==(p=this.modPermissions)&&void 0!==p&&p.isFlairEditingAllowed&&null!==(v=this.modPermissions)&&void 0!==v&&v.isConfigEditingAllowed?this.renderLink(z.PostFlair,f):""}
        ${this.isDevPlatformEnabled?o.c` <hr />
              <span
                class="uppercase font-semibold text-12 leading-4 py-[6px] whitespace-nowrap ml-md"
                >${Object(n.b)("Community Apps",{desc:"Section: mod nav section for dev platform settings"})}</span
              >
              ${this.renderLink(z.InstalledApps,f)}
              ${this.renderLink(z.BrowseApps,f)}`:""}
        <hr />
        <span class="uppercase font-semibold text-12 leading-4 py-[6px] whitespace-nowrap ml-md"
          >${Object(n.b)("Settings",{desc:"Section: mod nav section for general settings"})}</span
        >
        ${null!==(m=this.modPermissions)&&void 0!==m&&m.isConfigEditingAllowed?this.renderLink(z.GeneralSettings,f):""}
        ${null!==(g=this.modPermissions)&&void 0!==g&&g.isConfigEditingAllowed?this.renderLink(z.PostsAndComments,f):""}
        ${null!==(u=this.modPermissions)&&void 0!==u&&u.isConfigEditingAllowed?this.renderLink(z.CommunityAppearance,f):""}
        ${this.renderLink(z.Notifications,f)}
        ${this.renderLink(z.ContentRating,f)}
        ${null!==(w=this.modPermissions)&&void 0!==w&&w.isConfigEditingAllowed?this.renderLink(z.AwardsAndEmojis,f):""}
        ${this.isPredictionsTournamentAllowed?this.renderLink(z.Predictions,f):""}
        <hr />
        <span class="uppercase font-semibold text-12 leading-4 py-[6px] whitespace-nowrap ml-md"
          >${Object(n.b)("Support",{desc:"Section: mod nav section for support links"})}</span
        >
        ${this.renderLink(z.ModHelpCenter,f)}
        ${this.renderLink(z.ModCodeOfConduct,f)}
        ${this.renderLink(z.ModSupport,f)}
        ${this.renderLink(z.ModHelp,f)}
        ${this.renderLink(z.ContactReddit,f)}
        <div class="m-lg text-12 leading-4">
          <div>
            ${Object(n.b)(o.c`Reddit Inc © ${b}`,{desc:"Copyright footer"})}
          </div>
          <div>${Object(n.b)("All rights reserved",{desc:"Copyright footer"})}</div>
        </div>
      </div>
    `
				}
			};
			x.styles = [o.b`
      hr {
        border: 0.5px solid rgba(255, 255, 255, 0.1);
        width: calc(100% - 80px);
        height: 0px;
        margin: 10px 40px 20px;
      }

      .selected {
        border-radius: 0 4px 4px 0;
      }
    `, l.a], A([Object(s.b)({
				type: String,
				attribute: "subreddit-name"
			})], x.prototype, "subredditName", void 0), A([Object(s.b)({
				type: String,
				attribute: "current-url"
			})], x.prototype, "currentUrl", void 0), A([Object(s.b)({
				type: Object,
				attribute: "mod-permissions"
			})], x.prototype, "modPermissions", void 0), A([Object(s.b)({
				type: Boolean,
				attribute: "dev-platform-enabled"
			})], x.prototype, "isDevPlatformEnabled", void 0), A([Object(s.b)({
				type: Boolean,
				attribute: "post-guidance-enabled"
			})], x.prototype, "isPostGuidanceEnabled", void 0), A([Object(s.b)({
				type: Boolean,
				attribute: "predictions-tournament-allowed"
			})], x.prototype, "isPredictionsTournamentAllowed", void 0), A([Object(s.b)({
				type: Boolean,
				attribute: "awards-sunset-enabled"
			})], x.prototype, "isAwardsSunsetEnabled", void 0), A([Object(s.b)({
				type: Boolean,
				attribute: "ban-evasion-adoption-campaign-enabled"
			})], x.prototype, "isBanEvasionAdoptionCampaignEnabled", void 0), A([Object(s.b)({
				type: Boolean,
				attribute: "is-responsive"
			})], x.prototype, "isResponsive", void 0), x = A([Object(s.a)("mod-nav")], x)
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/mod-nav.42231b60360ea0552b4d.js.map