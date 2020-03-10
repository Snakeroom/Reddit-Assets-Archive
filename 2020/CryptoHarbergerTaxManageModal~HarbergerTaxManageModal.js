// https://www.redditstatic.com/desktop2x/CryptoHarbergerTaxManageModal~HarbergerTaxManageModal.0b342d5e6e2b49576e0b.js
// Retrieved at 3/10/2020, 11:00:05 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["CryptoHarbergerTaxManageModal~HarbergerTaxManageModal"], {
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return a
			})), n.d(t, "e", (function() {
				return o
			})), n.d(t, "a", (function() {
				return d
			})), n.d(t, "b", (function() {
				return c
			})), n.d(t, "d", (function() {
				return i
			})), n.d(t, "f", (function() {
				return l
			})), n.d(t, "g", (function() {
				return u
			})), n.d(t, "h", (function() {
				return m
			})), n.d(t, "i", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			}));
			var r = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/harbergerTax/constants.ts");
			const a = Object(r.a)(s.c),
				o = Object(r.a)(s.e),
				d = Object(r.a)(s.a),
				c = Object(r.a)(s.b),
				i = Object(r.a)(s.d),
				l = Object(r.a)(s.f),
				u = Object(r.a)(s.g),
				m = Object(r.a)(s.h),
				p = Object(r.a)(s.i),
				b = Object(r.a)(s.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./node_modules/lodash/isEmpty.js"),
				s = n.n(r),
				a = n("./src/app/strings/index.ts"),
				o = n("./src/reddit/actions/governance/errorToast.ts"),
				d = n("./src/reddit/actions/structuredStyles/index.ts"),
				c = n("./src/reddit/actions/toaster.ts"),
				i = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: "".concat(i.a.metaUrl, "/orders"),
					data: Object.assign({}, t, {
						products: t.products.map(e => Object.assign({}, e, {
							productId: "mainHeader",
							quantity: "1"
						}))
					})
				})
			}
			var m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./src/reddit/selectors/user.ts"),
				g = n("./src/reddit/actions/harbergerTax/actionCreators.ts");
			n.d(t, "a", (function() {
				return x
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "c", (function() {
				return I
			}));
			const x = () => async (e, t) => {
				const n = Object(b.O)(t());
				e(Object(c.e)({
					kind: m.b.Error,
					text: Object(a.a)(n, "gov.harberger.banner.uploadError")
				}))
			}, f = e => async (t, n, r) => {
				let {
					apiContext: s
				} = r;
				const {
					subredditId: a
				} = e, d = n().user.account, c = Object(p.c)(n(), {
					subredditId: a
				});
				if (!d) return;
				const i = d.displayText || "";
				t(Object(g.f)({
					productId: "mainHeader",
					subredditId: a
				}));
				const l = await u(s(), {
					subredditId: a,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: c && c.owner || "",
						ownerId: c && c.ownerId || ""
					}]
				});
				l.ok ? (t(Object(g.g)({
					productId: "mainHeader",
					subredditId: a,
					mainHeader: {
						owner: i,
						ownerId: d.id,
						price: e.newPrice || e.currentPrice,
						content: c ? c.content : {}
					}
				})), t(Object(g.c)({
					subredditId: a
				}))) : (t(Object(g.d)({
					productId: "mainHeader",
					subredditId: a,
					error: l.error
				})), Object(o.a)(t, l.error))
			}, I = e => async (t, n, r) => {
				let {
					apiContext: a
				} = r;
				const {
					subredditId: c
				} = e, m = n().user.account, b = Object(p.c)(n(), {
					subredditId: c
				}), x = n().structuredStyles.models[c];
				if (!m || !b) return;
				const f = m.displayText || "",
					I = [],
					j = void 0 !== e.newPrice && b.price !== e.newPrice,
					v = function(e, t, n) {
						const r = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== n.bannerBackgroundImage ? r.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (r.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (r.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), r
					}(b.content, e.content, x),
					h = !s()(v);
				(j || h) && t(Object(g.i)({
					productId: "mainHeader",
					subredditId: c
				})), j ? I.push(u(a(), {
					subredditId: c,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: b.owner || "",
						ownerId: b.ownerId || ""
					}]
				})) : I.push(Promise.resolve()), h && I.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: "".concat(i.a.metaUrl, "/communities/").concat(t.subredditId),
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(a(), {
					subredditId: c,
					content: v
				}));
				const [O, C] = await Promise.all(I);
				j && O.ok && h && C.ok ? (t(Object(g.j)({
					productId: "mainHeader",
					subredditId: c,
					mainHeader: {
						owner: f,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: e.content
					}
				})), t(Object(d.l)({
					subredditId: c,
					styles: v
				}))) : j && O.ok ? (t(Object(g.j)({
					productId: "mainHeader",
					subredditId: c,
					mainHeader: {
						owner: f,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: b.content
					}
				})), h && !C.ok && Object(o.a)(t, C.error)) : h && C.ok ? (t(Object(g.j)({
					productId: "mainHeader",
					subredditId: c,
					mainHeader: {
						owner: f,
						ownerId: m.id,
						price: b.price,
						content: e.content
					}
				})), t(Object(d.l)({
					subredditId: c,
					styles: v
				})), j && !O.ok && Object(o.a)(t, O.error)) : (j && Object(o.a)(t, O.error), h && (t(Object(g.h)({
					productId: "mainHeader",
					subredditId: c,
					error: O.error
				})), Object(o.a)(t, C.error)))
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/icons/svgs/Close/index.tsx"),
				i = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(i);
			t.a = Object(a.b)(void 0, (e, t) => {
				let {
					afterClose: n
				} = t;
				return {
					onClose: () => {
						e(Object(d.f)()), n && n()
					}
				}
			})((function(e) {
				return s.a.createElement(c.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				d = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = n.n(d);

			function i(e) {
				return s.a.createElement("div", {
					className: Object(a.a)(c.a.container, e.className)
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(o.a, null))
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/config.ts"),
				c = n("./src/reddit/selectors/gov.ts");
			const i = Object(o.c)({
				tokenSymbol: c.p
			});
			t.a = Object(a.b)(i)((function(e) {
				const t = e.grey ? e.tokenSymbol.grey : e.tokenSymbol.filled;
				return s.a.createElement("img", {
					className: e.className,
					src: "".concat(d.a.assetPath, "/").concat(t)
				})
			}))
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = n("./src/reddit/models/Image/index.tsx");
			class d extends s.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(o.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						label: t,
						labelClassName: n,
						value: r,
						controlName: o,
						isUploading: d,
						tabIndex: c
					} = this.props;
					return d ? s.a.createElement(a.a, {
						className: e
					}) : s.a.createElement(a.b, {
						className: e,
						name: o,
						label: t,
						labelClassName: n,
						multiple: !1,
						tabIndex: c,
						value: r,
						onChange: this.onChange
					})
				}
			}
			t.a = d
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				ImageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				imageUploadIcon: "e9OxAKtFra_8aEeb27dTl",
				ImageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				imageIconRow: "_14ar_PmlmkOhLrVDBwohzK",
				ImageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				imageUploadText: "_3-gXMEj353M5u8pnC-tDG8",
				FileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				fileDrop: "_3n4Aj_eDE25JhXbxz3XpKf",
				ContainerUploading: "rOyNUbZnjJvWxtyInd1T8",
				containerUploading: "rOyNUbZnjJvWxtyInd1T8",
				Label: "_2ZFG2IQMaso9iA14qjicA_",
				label: "_2ZFG2IQMaso9iA14qjicA_",
				isOver: "_1B5UKMPaEBX3HOKKEBfp7o",
				ImageInput: "_362HLUlCiz7UbtVPniNjjW",
				imageInput: "_362HLUlCiz7UbtVPniNjjW"
			}
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return v
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/connectors/connectToLanguage.ts"),
				c = n("./src/reddit/controls/FileDrop/index.tsx"),
				i = n("./src/reddit/controls/ImageInput/index.tsx"),
				l = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				u = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = n("./src/reddit/i18n/components.tsx"),
				p = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				b = n.n(p);
			const g = o.a.wrapped(u.a, "ImageUploadIcon", b.a),
				x = o.a.div("ImageIconRow", b.a),
				f = o.a.div("ImageUploadText", b.a),
				I = o.a.wrapped(c.a, "FileDrop", b.a),
				j = o.a.div("ContainerUploading", b.a),
				v = Object(d.a)(e => s.a.createElement(j, {
					className: e.className
				}, s.a.createElement(x, null, s.a.createElement(l.a, {
					sizePx: 40,
					center: !0
				})), s.a.createElement(f, null, s.a.createElement(m.c, null, "Uploading...")))),
				h = o.a.label("Label", b.a);
			t.b = e => s.a.createElement(I, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(h, {
					className: Object(a.a)({
						[b.a.isOver]: t
					})
				}, s.a.createElement(x, null, s.a.createElement(g, null)), s.a.createElement(f, null, e.label), s.a.createElement(i.a, {
					className: b.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/connectors/connectToLanguage.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/reddit/selectors/user.ts");
			const o = Object(s.c)({
				language: a.O
			});

			function d(e) {
				return Object(r.b)(o)(e)
			}
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/lodash/flow.js"),
				s = n.n(r),
				a = n("./node_modules/react/index.js"),
				o = n.n(a),
				d = n("./node_modules/react-dnd/lib/index.js"),
				c = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				i = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = c.NativeTypes.FILE,
				u = s()(Object(d.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), i.a);
			class m extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return a
			}));
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			class a extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							n = this.props.multiple ? [...t] : t[0];
						this.props.onChange(n), this.setState(() => ({
							value: n
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				componentWillReceiveProps(e) {
					this.setState(() => ({
						value: e.value || ""
					}))
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", r = "object" == typeof t.value ? t.value : null, a = n || r;
					return s.a.createElement("div", {
						className: e.className
					}, n && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: n,
						tabIndex: e.tabIndex
					}), !a && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						type: "file",
						onChange: this.onFileInput,
						accept: "image/x-png,image/jpeg",
						multiple: e.multiple || !1,
						tabIndex: e.tabIndex
					}))
				}
			}
		},
		"./src/reddit/endpoints/governance/crypto.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			})), n.d(t, "c", (function() {
				return o
			})), n.d(t, "d", (function() {
				return d
			})), n.d(t, "e", (function() {
				return c
			})), n.d(t, "b", (function() {
				return i
			}));
			var r, s = n("./src/config.ts"),
				a = n("./src/reddit/endpoints/governance/requester.ts");

			function o(e) {
				switch (e) {
					case r.Ethereum:
						return "Ethereum Main Network";
					case r.Rinkeby:
						return "Rinkeby Test Network"
				}
				return e + " Network"
			}
			async function d(e, t, n) {
				return Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/challenges"),
					data: {
						challengeType: "registration-challenge-EIP712",
						address: n
					}
				})
			}
			async function c(e, t, n) {
				return await Object(a.a)(e, {
					method: "post",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations"),
					data: n
				})
			}
			async function i(e, t, n) {
				return await Object(a.a)(e, {
					method: "delete",
					endpoint: "".concat(s.a.metaUrl, "/crypto/").concat(t, "/registrations/").concat(n)
				})
			}! function(e) {
				e.Ethereum = "ethereum:1", e.Rinkeby = "ethereum:4", e.Stellar = "stellar"
			}(r || (r = {}))
		},
		"./src/reddit/endpoints/governance/imageLease.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var r = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				a = n("./src/lib/makeApiRequest/index.ts"),
				o = n("./src/lib/omitHeaders/index.ts"),
				d = n("./src/reddit/constants/headers.ts");
			const c = async (e, t, n, c, i) => Object(a.b)(Object(o.a)(e, [d.a]), {
				endpoint: "".concat(r.a.metaUrl, "/communities/").concat(t, "/upload-lease"),
				method: s.cb.POST,
				data: {
					filepath: n,
					imagetype: c,
					mimetype: i
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./node_modules/react-redux/es/index.js"),
				o = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var n = {};
					for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (r = Object.getOwnPropertySymbols(e); s < r.length; s++) t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]])
					}
					return n
				};

			function i(e, t, n) {
				const r = Object(o.c)({
					featureEnabled: t => d.d[e](t)
				});
				return Object(a.b)(r)(e => {
					const {
						featureEnabled: r,
						dispatch: a
					} = e, o = c(e, ["featureEnabled", "dispatch"]);
					return r ? s.a.createElement(t, o) : void 0 !== n ? s.a.createElement(n, o) : null
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				a = n.n(s);
			t.a = Object(r.DragDropContext)(a.a)
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r),
				a = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				d = n.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(a.a)(d.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("polygon", {
				fill: "inherit",
				opacity: "0",
				points: "0.610673352 20 20.625 20 20.625 0 0.610673352 0"
			}), s.a.createElement("path", {
				d: "M17.451,9.14823765 C17.03,5.40791696 13.8555,2.5 10,2.5 C6.1445,2.5 2.97,5.40791696 2.549,9.14823765 C1.0455,9.84024195 0,11.3551568 0,13.1173944 C0,15.531665 1.959,17.4892627 4.375,17.4892627 L7.8125,17.4892627 L7.8125,12.8051181 L5,12.8051181 C4.8735,12.8051181 4.7595,12.7291725 4.7115,12.6122563 C4.6625,12.49534 4.6895,12.3614359 4.779,12.272 L9.779,7.2755791 C9.901,7.15366643 10.099,7.15366643 10.221,7.2755791 L15.187,12.2375247 C15.2665,12.2944839 15.3185,12.3874173 15.3185,12.4928418 C15.3185,12.6652183 15.1785,12.8051181 15.006,12.8051181 L15,12.8051181 L12.1875,12.8051181 L12.1875,17.4892627 L15.625,17.4892627 C18.041,17.4892627 20,15.531665 20,13.1173944 C20,11.3551568 18.954,9.84024195 17.451,9.14823765",
				fill: "inherit"
			})))
		},
		"./src/reddit/icons/svgs/Remove/index.tsx": function(e, t, n) {
			"use strict";
			var r = n("./node_modules/react/index.js"),
				s = n.n(r);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				id: e.id,
				tabIndex: e.tabIndex,
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave
			}, s.a.createElement("g", null, s.a.createElement("path", {
				fillRule: "evenodd",
				d: "M13.5559061,14.5 C13.5559061,14.776 13.3283409,15 13.0479481,15 C12.7675552,15 12.53999,14.776 12.53999,14.5 L12.53999,9 C12.53999,8.724 12.7675552,8.5 13.0479481,8.5 C13.3283409,8.5 13.5559061,8.724 13.5559061,9 L13.5559061,14.5 Z M10.508158,14.5 C10.508158,14.776 10.2805928,15 10.0002,15 C9.71980718,15 9.49224199,14.776 9.49224199,14.5 L9.49224199,9 C9.49224199,8.724 9.71980718,8.5 10.0002,8.5 C10.2805928,8.5 10.508158,8.724 10.508158,9 L10.508158,14.5 Z M7.46040996,14.5 C7.46040996,14.776 7.23284477,15 6.95245195,15 C6.67205913,15 6.44449394,14.776 6.44449394,14.5 L6.44449394,9 C6.44449394,8.724 6.67205913,8.5 6.95245195,8.5 C7.23284477,8.5 7.46040996,8.724 7.46040996,9 L7.46040996,14.5 Z M15.492242,6 C15.7736507,6 16.0002,6.224 16.0002,6.5 L16.0002,16.5 C16.0002,17.327 15.3164885,18 14.476326,18 L5.52407403,18 C4.68391148,18 4.0002,17.327 4.0002,16.5 L4.0002,6.5 C4.0002,6.224 4.22674927,6 4.50815801,6 L15.492242,6 Z M15.491585,3 C15.7719541,3 15.9995,3.224 15.9995,3.5 L15.9995,4.5 C15.9995,4.776 15.7719541,5 15.491585,5 L4.50741501,5 C4.22704592,5 3.9995,4.776 3.9995,4.5 L3.9995,3.5 C3.9995,3.224 4.22704592,3 4.50741501,3 L7.51325603,3 L8.26598607,2.167 C8.36248993,2.061 8.50064281,2 8.6459065,2 L11.3541093,2 C11.4983572,2 11.6365101,2.061 11.7340298,2.167 L12.485744,3 L15.491585,3 Z"
			})))
		},
		"./src/reddit/selectors/experiments/pollsGA.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return l
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var r = n("./src/reddit/constants/experiments.ts"),
				s = n("./src/reddit/helpers/chooseVariant/index.ts"),
				a = n("./src/reddit/selectors/platform.ts"),
				o = n("./src/reddit/selectors/user.ts");
			const d = new Set(["pollstest", "whatssnoo"]),
				c = new Set(["ps4", "casualconversation", "stardewvalley", "knitting", "dccomics", "premierleague", "zerocarb", "survivor", "supergirltv", "superman", "teenmfa", "whatssnoo", "poll_testing", "nfl", "sanfranciscoanalog", "communityactivation", "temescal", "amitheproblem", "amithebuttface"]),
				i = e => d.has(e.toLowerCase()) || c.has(e.toLowerCase()),
				l = e => d.has((Object(a.e)(e) || "").toLowerCase()) || c.has((Object(a.e)(e) || "").toLowerCase()) && Object(s.c)(e, {
					experimentEligibilitySelector: o.G,
					experimentName: r.cb
				}) === r.jb.Enabled
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return u
			})), n.d(t, "c", (function() {
				return m
			})), n.d(t, "d", (function() {
				return p
			})), n.d(t, "e", (function() {
				return b
			})), n.d(t, "g", (function() {
				return g
			})), n.d(t, "h", (function() {
				return x
			})), n.d(t, "i", (function() {
				return f
			})), n.d(t, "j", (function() {
				return I
			})), n.d(t, "o", (function() {
				return j
			})), n.d(t, "p", (function() {
				return v
			})), n.d(t, "n", (function() {
				return h
			})), n.d(t, "k", (function() {
				return O
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "s", (function() {
				return w
			})), n.d(t, "a", (function() {
				return y
			})), n.d(t, "f", (function() {
				return _
			})), n.d(t, "q", (function() {
				return E
			})), n.d(t, "m", (function() {
				return k
			})), n.d(t, "r", (function() {
				return L
			}));
			var r = n("./src/reddit/contexts/PageLayer/index.tsx"),
				s = n("./src/reddit/endpoints/governance/crypto.ts"),
				a = n("./src/reddit/featureFlags/index.ts"),
				o = n("./src/reddit/selectors/experiments/pollsGA.ts"),
				d = n("./src/reddit/selectors/postCreations.ts");
			const c = [],
				i = {},
				l = {
					filled: "img/communityPoints/default_filled.png",
					grey: "img/communityPoints/default_grey.png"
				},
				u = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = w(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.harberger ? r.extra.contracts.harberger : {
						address: void 0,
						decimals: void 0,
						image: void 0,
						taxRate: .01,
						token: void 0
					}
				},
				m = (e, t) => {
					const n = O(e, t);
					if (n) return n.mainHeader
				},
				p = (e, t) => {
					const n = O(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				b = (e, t) => {
					const n = O(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : i
				},
				g = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				x = (e, t) => {
					if (Object(o.b)(e)) {
						const t = Object(d.g)(e);
						return !!t.allowedPostTypes && t.allowedPostTypes.polls
					}
					const n = a.d.spPolls(e) || a.d.spKarmaPoints(e),
						r = t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0;
					if (r) {
						const e = !!r.polls && !1 === r.polls.canCreate;
						return n && !e
					}
					return n
				},
				f = (e, t) => {
					return (e.users.publicWallets[t.userId] || {})[t.subredditId]
				},
				I = (e, t) => {
					const n = Object(r.m)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || c
				},
				j = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).name || "Subreddit Points",
				v = (e, t) => t && t.subredditId && (e.subreddits.gov.meta[t.subredditId] || {}).images || l,
				h = (e, t) => {
					const n = E(e, t);
					return n && n.decimals ? "1" + "0".repeat(n.decimals) : "1"
				},
				O = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0,
				C = (e, t) => t && t.subredditId ? e.subreddits.gov.meta[t.subredditId] : void 0,
				w = (e, t) => {
					const n = C(e, t);
					return n && n.walletProvider
				},
				y = (e, t) => {
					const n = w(e, t),
						r = C(e, t);
					return n && n.provider || r && r.provider
				},
				_ = (e, t) => {
					const n = y(e, t);
					return n === s.a.Ethereum || n === s.a.Rinkeby
				},
				E = (e, t) => {
					const n = w(e, t),
						r = y(e, t);
					if (n && !n.inTransition && r === s.a.Stellar) return {
						address: n.extra && n.extra.issuerAddress || "",
						decimals: n.extra && n.extra.decimals || 7,
						symbol: n.extra && n.extra.token || "PHOTON"
					};
					const a = n && n.extra && n.extra.contracts,
						o = a && a.unlocked;
					return o && {
						address: o.address,
						symbol: o.token || "",
						decimals: o.decimals || 18,
						image: o.image
					}
				},
				k = (e, t) => {
					let {
						subredditId: n
					} = t;
					const r = w(e, {
						subredditId: n
					});
					return r && r.extra && r.extra.contracts && r.extra.contracts.subscriptions ? r.extra.contracts.subscriptions : {
						address: void 0
					}
				},
				L = (e, t) => {
					const n = C(e, t);
					return !!n && !!n.walletProvider && !n.walletProvider.inTransition
				}
		}
	}
]);
//# sourceMappingURL=CryptoHarbergerTaxManageModal~HarbergerTaxManageModal.0b342d5e6e2b49576e0b.js.map