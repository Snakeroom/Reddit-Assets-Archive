// https://www.redditstatic.com/desktop2x/HarbergerTaxManageModal.5281ab1c42df947c4455.js
// Retrieved at 9/21/2020, 7:10:07 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxManageModal"], {
		"./node_modules/lodash/uniqueId.js": function(e, t, a) {
			var n = a("./node_modules/lodash/toString.js"),
				s = 0;
			e.exports = function(e) {
				var t = ++s;
				return n(e) + t
			}
		},
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return n
			}));
			a("./node_modules/core-js/modules/es6.regexp.replace.js");

			function n(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, a) {
			"use strict";
			a.d(t, "c", (function() {
				return r
			})), a.d(t, "e", (function() {
				return o
			})), a.d(t, "a", (function() {
				return i
			})), a.d(t, "b", (function() {
				return c
			})), a.d(t, "d", (function() {
				return d
			})), a.d(t, "f", (function() {
				return l
			})), a.d(t, "g", (function() {
				return m
			})), a.d(t, "h", (function() {
				return u
			})), a.d(t, "i", (function() {
				return p
			})), a.d(t, "j", (function() {
				return b
			}));
			var n = a("./src/lib/makeActionCreator/index.ts"),
				s = a("./src/reddit/actions/harbergerTax/constants.ts");
			const r = Object(n.a)(s.c),
				o = Object(n.a)(s.e),
				i = Object(n.a)(s.a),
				c = Object(n.a)(s.b),
				d = Object(n.a)(s.d),
				l = Object(n.a)(s.f),
				m = Object(n.a)(s.g),
				u = Object(n.a)(s.h),
				p = Object(n.a)(s.i),
				b = Object(n.a)(s.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return g
			})), a.d(t, "b", (function() {
				return x
			})), a.d(t, "c", (function() {
				return h
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = a("./node_modules/lodash/isEmpty.js"),
				s = a.n(n),
				r = a("./src/reddit/actions/governance/errorToast.ts"),
				o = a("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				i = a("./src/reddit/actions/structuredStyles/index.ts"),
				c = a("./src/reddit/actions/toaster.ts"),
				d = a("./src/config.ts"),
				l = a("./src/reddit/endpoints/governance/requester.ts");

			function m(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: "".concat(d.a.metaUrl, "/orders"),
					data: Object.assign(Object.assign({}, t), {
						products: t.products.map(e => Object.assign(Object.assign({}, e), {
							productId: "mainHeader",
							quantity: "1"
						}))
					})
				})
			}
			var u = a("./src/reddit/models/Toast/index.ts"),
				p = a("./src/reddit/selectors/gov.ts"),
				b = a("./node_modules/fbt/lib/FbtPublic.js");
			const g = () => async (e, t) => {
				e(Object(c.e)({
					kind: u.b.Error,
					text: b.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, x = e => async (t, a, n) => {
				let {
					apiContext: s
				} = n;
				const {
					subredditId: i
				} = e, c = a().user.account, d = Object(p.c)(a(), {
					subredditId: i
				});
				if (!c) return;
				const l = c.displayText || "";
				t(Object(o.f)({
					productId: "mainHeader",
					subredditId: i
				}));
				const u = await m(s(), {
					subredditId: i,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: d && d.owner || "",
						ownerId: d && d.ownerId || ""
					}]
				});
				u.ok ? (t(Object(o.g)({
					productId: "mainHeader",
					subredditId: i,
					mainHeader: {
						owner: l,
						ownerId: c.id,
						price: e.newPrice || e.currentPrice,
						content: d ? d.content : {}
					}
				})), t(Object(o.c)({
					subredditId: i
				}))) : (t(Object(o.d)({
					productId: "mainHeader",
					subredditId: i,
					error: u.error
				})), Object(r.a)(t, u.error))
			}, h = e => async (t, a, n) => {
				let {
					apiContext: c
				} = n;
				const {
					subredditId: u
				} = e, b = a().user.account, g = Object(p.c)(a(), {
					subredditId: u
				}), x = a().structuredStyles.models[u];
				if (!b || !g) return;
				const h = b.displayText || "",
					f = [],
					v = void 0 !== e.newPrice && g.price !== e.newPrice,
					I = function(e, t, a) {
						const n = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== a.bannerBackgroundImage ? n.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (n.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (n.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), n
					}(g.content, e.content, x),
					j = !s()(I);
				(v || j) && t(Object(o.i)({
					productId: "mainHeader",
					subredditId: u
				})), v ? f.push(m(c(), {
					subredditId: u,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: g.owner || "",
						ownerId: g.ownerId || ""
					}]
				})) : f.push(Promise.resolve()), j && f.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: "".concat(d.a.metaUrl, "/communities/").concat(t.subredditId),
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(c(), {
					subredditId: u,
					content: I
				}));
				const [O, E] = await Promise.all(f);
				v && O.ok && j && E.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: u,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: e.newPrice || g.price,
						content: e.content
					}
				})), t(Object(i.l)({
					subredditId: u,
					styles: I
				}))) : v && O.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: u,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: e.newPrice || g.price,
						content: g.content
					}
				})), j && !E.ok && Object(r.a)(t, E.error)) : j && E.ok ? (t(Object(o.j)({
					productId: "mainHeader",
					subredditId: u,
					mainHeader: {
						owner: h,
						ownerId: b.id,
						price: g.price,
						content: e.content
					}
				})), t(Object(i.l)({
					subredditId: u,
					styles: I
				})), v && !O.ok && Object(r.a)(t, O.error)) : (v && Object(r.a)(t, O.error), j && (t(Object(o.h)({
					productId: "mainHeader",
					subredditId: u,
					error: O.error
				})), Object(r.a)(t, E.error)))
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less": function(e, t, a) {
			e.exports = {
				imageHeader: "_3l_z5oBbQrRZRtTyvqbl6x",
				imagePreview: "_1-R7D0TwlV8GPVKMdUwu4D",
				imageSize: "PPqV8AsEba7hyp5onB7kq",
				imageTitle: "ybJpUHv27p_eiolLG1pw9",
				imageUpload: "_2RbtsyQybzzFTA7e01stdy",
				modifiers: "_3qsI6dGH_7Jb9ugZ_Hqfmt",
				remove: "_3wdxtzlLbZ0yvPrtfoz-4q",
				toggle: "_3-kMH1t8f_upFpKnJ26tLo",
				toggleSwitch: "_2LeKK3pzwVJodlBiS9-7Bm",
				title: "_1iqK2jcQlmjQi-XsHG7WcS"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less": function(e, t, a) {
			e.exports = {
				flexRow: "_1ixaK0srqt2UgGOzYy_rBx",
				button: "_3ujSmlJxAfLghb3aGdMxE9",
				buttons: "_2kzYDV6Ylwn9eSNeVNi7X8",
				container: "_1ha2zfvzpISAPpdy9eFmZh",
				save: "_1D6ZsNPANCG-LE4zZ8RedZ",
				token: "l0_GNP1pa_RzjpDApD7lB",
				wallet: "_1WyqOs8RnPL-FzLqnJs-ck"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less": function(e, t, a) {
			e.exports = {
				dailyTax: "_3d85Uvq9ilZbSF-InVXVd9",
				equals: "_2PHYhcdQ9hNJRfU-FiMiTX",
				explanation: "U1cnwO9wnHoeLiRpx-qqe",
				input: "_2-au_1KjABOAorQTVuMoab",
				tax: "_1rklAUluF3U-SKHpB_wZ-a",
				taxAmount: "_3padfslcSFZkQPPQ6o6mAk",
				taxRate: "_28kSbiA3xbZCgmTn2mxSlQ",
				token: "Et61RG0Ef8CpUmKfhisap",
				title: "sGj9DIa992KWiFKRfRdIw"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less": function(e, t, a) {
			e.exports = {
				banner: "_3l95gQw6MCtUIjEyo3C9W6",
				container: "_1hmKFovfO3FycaLmi0738y",
				controls: "_1MJu5fkr9tMpNdTwH6FOoe",
				price: "GvcKlfm4P-OebPfkgFJAD",
				title: "_1dtGMMD-cseaekE1amTo2e"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx": function(e, t, a) {
			"use strict";
			a.r(t);
			var n = a("./node_modules/lodash/isEqual.js"),
				s = a.n(n),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				i = a("./node_modules/react-redux/es/index.js"),
				c = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				l = a("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				m = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = a("./src/reddit/contexts/PageLayer/index.tsx"),
				p = a("./src/reddit/featureFlags/component.tsx"),
				b = a("./src/reddit/selectors/gov.ts"),
				g = a("./node_modules/fbt/lib/FbtPublic.js"),
				x = a("./src/lib/uploadToS3/index.ts"),
				h = a("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				f = a("./src/reddit/contexts/ApiContext.tsx"),
				v = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				I = a("./src/reddit/endpoints/governance/imageLease.ts"),
				j = a("./src/reddit/helpers/media/index.ts"),
				O = a("./src/reddit/icons/svgs/Remove/index.tsx"),
				E = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less"),
				_ = a.n(E);
			const N = "bannerBackgroundImage";
			class C extends o.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleBannerImageUpload = async e => {
						const {
							apiContext: t,
							subredditId: a
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const n = await Object(j.g)(e.file) || e.file.type,
							s = await Object(I.a)(t(), a, e.file.name, N, n);
						if (!s.ok) return void this.props.onImageUploadFailed();
						const r = s.body.s3UploadLease,
							o = await Object(x.a)(e.file, r);
						if (o.ok) {
							const e = decodeURIComponent(o.body.PostResponse.Location);
							this.props.onImageChange({
								[N]: e
							})
						} else this.props.onImageUploadFailed();
						this.setState({
							imageUploadInProgress: !1
						})
					}, this.handleBannerImageDelete = () => {
						this.props.onImageChange({
							[N]: ""
						})
					}
				}
				render() {
					const {
						className: e,
						image: t,
						tabIndex: a,
						tiled: n
					} = this.props, s = t ? t[N] : void 0;
					return o.a.createElement("div", {
						className: e
					}, o.a.createElement("div", {
						className: _.a.title
					}, g.fbt._("banner", null, {
						hk: "3WUKlK"
					})), o.a.createElement("div", {
						className: _.a.imageHeader
					}, o.a.createElement("div", {
						className: _.a.imageTitle
					}, g.fbt._("Image", null, {
						hk: "1aeIAc"
					})), o.a.createElement("div", {
						className: _.a.imageSize
					}, g.fbt._("192 px high", null, {
						hk: "1GAzn5"
					}))), o.a.createElement(h.a, {
						className: _.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: g.fbt._("Drag and Drop or Upload Image", null, {
							hk: "4uCwQl"
						}),
						tabIndex: a,
						value: s,
						onChange: this.handleBannerImageUpload
					}), s && o.a.createElement("div", {
						className: _.a.imagePreview,
						style: {
							background: "url(".concat(s, n ? ") center top repeat" : ") center top / cover no-repeat")
						}
					}), o.a.createElement("div", {
						className: _.a.modifiers
					}, o.a.createElement("div", {
						className: _.a.toggle
					}, o.a.createElement(v.a, {
						redditStyle: !0,
						className: _.a.toggleSwitch,
						tabIndex: a ? a + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), g.fbt._("Tile", null, {
						hk: "3fnD8Q"
					})), o.a.createElement(O.a, {
						className: _.a.remove,
						tabIndex: a ? a + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var w = Object(i.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(f.b)(C)),
				y = a("./src/lib/classNames/index.ts"),
				k = a("./src/lib/prettyPrintNumber/index.ts"),
				T = a("./src/reddit/actions/modal.ts"),
				P = a("./src/reddit/components/Governance/Token/index.tsx"),
				S = a("./src/reddit/controls/Button/index.tsx"),
				M = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less"),
				B = a.n(M);
			const {
				fbt: U
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const D = Object(c.c)({
				wallet: b.g
			});
			var F = Object(i.b)(D, e => ({
					onClose: () => e(Object(T.f)())
				}))((function(e) {
					return o.a.createElement("div", {
						className: Object(y.a)(B.a.container, e.className)
					}, o.a.createElement("div", {
						className: B.a.wallet
					}, e.wallet && o.a.createElement(r.Fragment, null, U._("You have", null, {
						hk: "2IixC6"
					}), o.a.createElement(P.a, {
						grey: !0,
						className: B.a.token,
						subredditId: e.subredditId
					}), Object(k.a)(e.wallet.amount))), o.a.createElement("div", {
						className: B.a.buttons
					}, o.a.createElement(S.i, {
						className: B.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, U._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(S.f, {
						className: Object(y.a)(B.a.button, B.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, U._("save", null, {
						hk: "3joVpg"
					}))))
				})),
				H = a("./src/lib/currency/cleanNumber/index.ts"),
				A = a("./src/reddit/controls/FormFields/index.tsx"),
				R = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less"),
				L = a.n(R);
			var G = function(e) {
					return o.a.createElement("div", {
						className: Object(y.a)(L.a.container, e.className)
					}, o.a.createElement("div", {
						className: L.a.title
					}, g.fbt._("Price and Hamburger Tax", null, {
						hk: "IbFhe"
					})), o.a.createElement("div", {
						className: L.a.explanation
					}, g.fbt._("You can protect your ownership by raising the price. This also increases the daily tax. If you're unable to pay the tax, the price goes to 0.", null, {
						hk: "1FBx6x"
					})), o.a.createElement("div", {
						className: L.a.tax
					}, o.a.createElement(A.c, {
						redditStyle: !0,
						className: L.a.input,
						label: g.fbt._("banner price", null, {
							hk: "4jFcDi"
						}),
						placeholder: "0",
						tabIndex: e.tabIndex,
						type: "text",
						value: Object(k.a)(e.price),
						onChange: t => e.onPriceChange(Object(H.a)(t.currentTarget.value))
					}), o.a.createElement(P.a, {
						className: L.a.token,
						subredditId: e.subredditId
					}), o.a.createElement("div", {
						className: L.a.equals
					}, "="), o.a.createElement("div", {
						className: L.a.dailyTax
					}, o.a.createElement("div", {
						className: L.a.taxRate
					}, g.fbt._("1% daily tax", null, {
						hk: "fkECk"
					})), o.a.createElement("div", {
						className: L.a.taxAmount
					}, Object(k.a)((.01 * parseInt(e.price || "0")).toFixed(2))))))
				},
				V = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less"),
				K = a.n(V);
			const {
				fbt: z
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			class q extends o.a.Component {
				constructor(e) {
					super(e), this.handlePriceChange = e => this.setState({
						price: e
					}), this.handleImageChange = e => this.setState({
						image: e
					}), this.handleTilingChange = () => this.setState(e => ({
						tiled: !e.tiled
					})), this.handleSubmit = () => {
						this.props.subreddit && this.props.onUpdateBanner({
							currentPrice: this.originalState.price,
							newPrice: this.state.price,
							subredditId: this.props.subreddit.id,
							content: {
								bannerBackgroundImage: this.state.image ? this.state.image[N] : "",
								bannerBackgroundImagePosition: this.state.tiled ? "tiled" : "cover"
							}
						})
					}, this.state = X(e, e.savedStyles.bannerBackgroundImage), this.originalState = X(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!s()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = W(e) === W(this.props) ? this.state.image ? this.state.image[N] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(X(this.props, t)), this.originalState = X(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? o.a.createElement("div", {
						className: K.a.container
					}, o.a.createElement(m.a, {
						className: K.a.title
					}, z._("Manage Banner", null, {
						hk: "NMRRK"
					})), o.a.createElement(G, {
						className: K.a.price,
						price: this.state.price,
						subredditId: e.id,
						tabIndex: 1,
						onPriceChange: this.handlePriceChange
					}), o.a.createElement(w, {
						className: K.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), o.a.createElement(F, {
						className: K.a.controls,
						subredditId: e.id,
						submitEnabled: !s()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function W(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function X(e, t) {
				const {
					mainHeaderAsset: a
				} = e;
				return a ? {
					price: a.price,
					image: t ? {
						[N]: t
					} : a.content && a.content.bannerBackgroundImage ? {
						[N]: a.content.bannerBackgroundImage
					} : {
						[N]: ""
					},
					tiled: !!a.content && "tiled" === a.content.bannerBackgroundImagePosition
				} : {
					price: "",
					image: t ? {
						[N]: t
					} : {
						[N]: ""
					},
					tiled: !1
				}
			}
			const Z = Object(c.c)({
					mainHeaderAsset: (e, t) => {
						const a = Object(u.q)(e, t);
						if (a) return Object(b.c)(e, {
							subredditId: a.id
						})
					},
					savedStyles: (e, t) => {
						const a = Object(u.q)(e, t);
						return a ? e.structuredStyles.models[a.id] : {}
					},
					subreddit: u.q
				}),
				Y = Object(i.b)(Z, e => ({
					onUpdateBanner: t => e(Object(l.c)(t))
				})),
				J = Object(u.t)();
			t.default = Object(p.a)("spHarberger", Object(d.a)(J(Y(q))))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, a) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/actions/modal.ts"),
				c = a("./src/reddit/icons/svgs/Close/index.tsx"),
				d = a("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = a.n(d);
			t.a = Object(r.b)(void 0, (e, t) => {
				let {
					afterClose: a
				} = t;
				return {
					onClose: () => {
						e(Object(i.f)()), a && a()
					}
				}
			})((function(e) {
				return s.a.createElement(c.a, {
					className: Object(o.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, a) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/components/Governance/ModalClose/index.tsx"),
				i = a("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				c = a.n(i);

			function d(e) {
				return s.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className, {
						[c.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: c.a.title
				}, e.children), s.a.createElement(o.a, {
					className: c.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, a) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				i = a("./src/config.ts"),
				c = a("./src/lib/classNames/index.ts"),
				d = a("./src/reddit/selectors/gov.ts"),
				l = a("./src/reddit/components/Governance/Token/index.m.less"),
				m = a.n(l);
			const u = Object(o.c)({
				tokenSymbol: d.r
			});
			t.a = Object(r.b)(u)((function(e) {
				const t = e.grey ? e.tokenSymbol.greyVector || e.tokenSymbol.grey : e.tokenSymbol.filledVector || e.tokenSymbol.filled,
					a = "".concat(i.a.assetPath, "/").concat(t);
				if (e.grey && a.endsWith(".svg")) {
					const t = "url(".concat(a, ") center/cover");
					return s.a.createElement("div", {
						className: Object(c.a)(m.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: a
				})
			}))
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				o = a("./src/reddit/models/Image/index.tsx");
			class i extends s.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							a = await Object(o.e)(t);
						this.props.onChange(a)
					}
				}
				render() {
					const {
						className: e,
						icon: t,
						label: a,
						labelClassName: n,
						value: o,
						controlName: i,
						isUploading: c,
						tabIndex: d
					} = this.props;
					return c ? s.a.createElement(r.a, {
						className: e
					}) : s.a.createElement(r.b, {
						className: e,
						icon: t,
						name: i,
						label: a,
						labelClassName: n,
						multiple: !1,
						tabIndex: d,
						value: o,
						onChange: this.onChange
					})
				}
			}
			t.a = i
		},
		"./src/reddit/components/StructuredStyles/ImageUpload/index.m.less": function(e, t, a) {
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
		"./src/reddit/components/StructuredStyles/ImageUpload/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return v
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/controls/FileDrop/index.tsx"),
				c = a("./src/reddit/controls/ImageInput/index.tsx"),
				d = a("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = a("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				m = a("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				u = a.n(m);
			const {
				fbt: p
			} = a("./node_modules/fbt/lib/FbtPublic.js"), b = o.a.wrapped(l.a, "ImageUploadIcon", u.a), g = o.a.div("ImageIconRow", u.a), x = o.a.div("ImageUploadText", u.a), h = o.a.wrapped(i.a, "FileDrop", u.a), f = o.a.div("ContainerUploading", u.a), v = e => s.a.createElement(f, {
				className: e.className
			}, s.a.createElement(g, null, s.a.createElement(d.a, {
				sizePx: 40,
				center: !0
			})), s.a.createElement(x, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), I = o.a.label("Label", u.a);
			t.b = e => s.a.createElement(h, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(I, {
					className: Object(r.a)({
						[u.a.isOver]: t
					}, e.labelClassName)
				}, s.a.createElement(g, null, e.icon || s.a.createElement(b, null)), s.a.createElement(x, null, e.label), s.a.createElement(c.a, {
					className: u.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2AfJEqW9tv4b_kolKEuS9K",
				titleRow: "p4QfstubN5cRxd-gy8gFH",
				detailsContainer: "_2V3KEAhexNh-mP3TbrVClC",
				buttonRow: "_1fcbQFwN65ik28DNmWnpX4",
				confirmButton: "zcMEJWBL7q-mYGOPSpjN-"
			}
		},
		"./src/reddit/controls/ErrorText/index.m.less": function(e, t, a) {
			e.exports = {
				wrapper: "_2hGJP-9xfXBXd0wqhBLHhY",
				description: "_3h_9YwxjuOr77VhScPrjCI",
				moreText: "_1Y0BrhDgcSTeSYvmSPYepI"
			}
		},
		"./src/reddit/controls/ErrorText/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return C
			})), a.d(t, "c", (function() {
				return w
			}));
			var n = a("./node_modules/fbt/lib/FbtPublic.js"),
				s = a("./node_modules/lodash/uniqueId.js"),
				r = a.n(s),
				o = a("./node_modules/raf/index.js"),
				i = a.n(o),
				c = a("./node_modules/react/index.js"),
				d = a.n(c),
				l = a("./node_modules/react-redux/es/index.js"),
				m = a("./node_modules/reselect/es/index.js"),
				u = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/modal.ts"),
				b = a("./src/reddit/selectors/activeModalId.ts"),
				g = a("./src/higherOrderComponents/asModal/index.tsx"),
				x = a("./src/reddit/controls/Button/index.tsx"),
				h = a("./src/reddit/layout/row/Inline/index.tsx"),
				f = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				v = a.n(f);
			var I = Object(g.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return d.a.createElement("div", {
						className: v.a.wrapper
					}, d.a.createElement(h.a, {
						className: v.a.titleRow
					}, a), d.a.createElement("div", {
						className: v.a.detailsContainer
					}, t), d.a.createElement(h.a, {
						className: v.a.buttonRow
					}, d.a.createElement(x.f, {
						className: v.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				j = a("./src/reddit/controls/ErrorText/index.m.less"),
				O = a.n(j);
			const E = Object(m.c)({
				activeModalId: b.a
			});
			class _ extends d.a.Component {
				constructor(e) {
					super(e), this.spanRef = d.a.createRef(), this.toggleModal = () => {
						this.props.toggleErrorTextModal(this.state.modalId)
					}, this.state = {
						textHasOverflowed: !1,
						modalId: "ErrorTextModal--".concat(r()())
					}
				}
				componentDidMount() {
					this.calcTextDidOverflow()
				}
				componentDidUpdate() {
					this.calcTextDidOverflow()
				}
				calcTextDidOverflow() {
					i()(() => {
						const e = this.spanRef.current;
						if (!e) return;
						const t = e.scrollWidth > e.clientWidth;
						this.setState(e => e.textHasOverflowed !== t ? {
							textHasOverflowed: t
						} : null)
					})
				}
				render() {
					const {
						children: e,
						activeModalId: t,
						className: a,
						errorModalBody: s,
						errorModalTitle: r = n.fbt._("Error", null, {
							hk: "2nPF4G"
						}),
						moreText: o = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: i,
						textHasOverflowed: c
					} = this.state;
					return d.a.createElement("div", {
						className: Object(u.a)(O.a.wrapper, a)
					}, d.a.createElement("span", {
						className: O.a.description,
						ref: this.spanRef
					}, e), c && d.a.createElement("span", {
						className: O.a.moreText,
						onClick: this.toggleModal
					}, o), t === i && d.a.createElement(I, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const N = Object(l.b)(E, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(_),
				C = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: r = []
					} = e, o = r.length ? r : s ? [s] : [];
					return o.length ? d.a.createElement("div", {
						className: t
					}, o.map((e, t) => d.a.createElement(N, {
						className: a,
						errorModalTitle: n,
						key: t
					}, e))) : null
				},
				w = e => d.a.createElement(C, {
					fallbackMessage: n.fbt._("Something went wrong", null, {
						hk: "Cw1BT"
					}),
					messages: e
				});
			t.b = N
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/lodash/flow.js"),
				s = a.n(n),
				r = a("./node_modules/react/index.js"),
				o = a.n(r),
				i = a("./node_modules/react-dnd/lib/index.js"),
				c = a("./node_modules/react-dnd-html5-backend/lib/index.js"),
				d = a("./src/reddit/helpers/dragDropContext/index.ts");
			const l = c.NativeTypes.FILE,
				m = s()(Object(i.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const a = t.getItem();
						a.files && e.onDrop(a.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), d.a);
			class u extends o.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(o.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = m(u)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, a) {
			e.exports = {
				input: "_3CWuMoFPzdbJCxYJVmEw00",
				label: "J4DegnzzIY1-C2PFzYkrA",
				mHasValue: "t09kxBqaSw0Is_F5sUdQ1",
				inputWrapper: "_3TCLGRXxb1PXK-_sziBD2q",
				mIsInvalid: "_1pMjk4nL9CObVggXCSuELu",
				inputMovingLabelWrapper: "_2-meAmTwsZSCNYrpbEy7BX",
				mIsRedditStyle: "_3ONm7CsU4BtjX9jO5WYv2X",
				trash: "_2YUtyje1Y5rUty_3zgPOGM",
				trashContainer: "_2wjFyjW1rwWs4WFcSc7xNl",
				plus: "_3o11DwChSYlSiDT6FYqOIE",
				addValueButton: "_1Dm7EZTfDne90O5xANs501",
				multiInputWrapper: "_3CjWcr8XyX0xN32ADxPngu",
				errorText: "_2JNX-DiHbrfxhFYgkcBNaK"
			}
		},
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return b
			})), a.d(t, "b", (function() {
				return x
			})), a.d(t, "c", (function() {
				return h
			})), a.d(t, "d", (function() {
				return I
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/lib/lessComponent.tsx"),
				i = a("./src/reddit/controls/ErrorText/index.tsx"),
				c = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = a("./src/reddit/controls/FormFields/index.m.less"),
				m = a.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var a = arguments[t];
						for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
					}
					return e
				}).apply(this, arguments)
			}
			var p = function(e, t) {
				var a = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]])
				}
				return a
			};
			const b = o.a.input("input", m.a),
				g = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				x = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: o
					} = e, i = p(e, ["label", "children", "inputRef", "className"]), c = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, o, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: g
					}, s.a.createElement(b, u({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, i)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: c
						})
					}, e.label), e.children)
				},
				h = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						isInvalid: o,
						className: i,
						redditStyle: c
					} = e, d = p(e, ["label", "children", "inputRef", "isInvalid", "className", "redditStyle"]), l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsInvalid]: o,
							[m.a.mIsRedditStyle]: c
						}),
						onClick: g
					}, s.a.createElement(b, u({
						innerRef: n
					}, d)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				f = e => s.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(c.a, {
					className: m.a.plus
				}));
			var v;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(v || (v = {}));
			class I extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: v.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: a,
							index: e
						})
					}
				}
				componentWillReceiveProps(e) {
					e.values.length > this.props.values.length && this.setState({
						addingNewInputs: !0
					})
				}
				componentDidUpdate() {
					this.focusedInput && this.state.addingNewInputs && (this.focusedInput.focus(), this.setState({
						addingNewInputs: !1
					}))
				}
				setInputRef(e, t) {
					this.state.addingNewInputs && (!this.props.buttonOnTop || this.props.buttonOnTop && !t) && (this.focusedInput = e)
				}
				renderFields() {
					const {
						values: e,
						disabled: t,
						label: a,
						placeholder: n,
						errors: r = []
					} = this.props;
					return e.map((e, o) => s.a.createElement(x, {
						inputRef: e => this.setInputRef(e, o),
						isInvalid: !!r[o],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, o),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(o)
					}, s.a.createElement(d.b, {
						className: m.a.trash
					})), !!r[o] && s.a.createElement(i.b, {
						className: m.a.errorText
					}, r[o])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: o,
						disabled: i
					} = this.props;
					this.focusedInput = null;
					const c = !(!!n && a.length >= n) && !i;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && c && s.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}), this.renderFields(), !t && c && s.a.createElement(f, {
						onClick: this.addValue,
						text: o
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return r
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n);
			class r extends s.a.Component {
				constructor(e) {
					super(e), this.onFileInput = e => {
						const t = e.currentTarget.files,
							a = this.props.multiple ? [...t] : t[0];
						this.props.onChange(a), this.setState(() => ({
							value: a
						}))
					}, this.state = {
						value: e.value || ""
					}
				}
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, a = "string" == typeof t.value ? t.value : "", n = "object" == typeof t.value ? t.value : null, r = a || n;
					return s.a.createElement("div", {
						className: e.className
					}, a && s.a.createElement("input", {
						id: e.inputId,
						ref: e.inputRef,
						name: e.name,
						readOnly: !0,
						type: "text",
						value: a,
						tabIndex: e.tabIndex
					}), !r && s.a.createElement("input", {
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
		"./src/reddit/endpoints/governance/imageLease.ts": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./src/config.ts"),
				s = a("./src/lib/constants/index.ts"),
				r = a("./src/lib/makeApiRequest/index.ts"),
				o = a("./src/lib/omitHeaders/index.ts"),
				i = a("./src/reddit/constants/headers.ts");
			const c = async (e, t, a, c, d) => Object(r.a)(Object(o.a)(e, [i.a]), {
				endpoint: "".concat(n.a.metaUrl, "/communities/").concat(t, "/upload-lease"),
				method: s.db.POST,
				data: {
					filepath: a,
					imagetype: c,
					mimetype: d
				}
			})
		},
		"./src/reddit/featureFlags/component.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return d
			}));
			a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				i = a("./src/reddit/featureFlags/index.ts"),
				c = function(e, t) {
					var a = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (a[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var s = 0;
						for (n = Object.getOwnPropertySymbols(e); s < n.length; s++) t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (a[n[s]] = e[n[s]])
					}
					return a
				};

			function d(e, t, a) {
				const n = Object(o.c)({
					featureEnabled: t => i.d[e](t)
				});
				return Object(r.b)(n)(e => {
					const {
						featureEnabled: n
					} = e, r = c(e, ["featureEnabled"]);
					return n ? s.a.createElement(t, r) : void 0 !== a ? s.a.createElement(a, r) : null
				})
			}
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react-dnd/lib/index.js"),
				s = a("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = a.n(s);
			t.a = Object(n.DragDropContext)(r.a)
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, a) {
			"use strict";
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				i = a.n(o);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return c
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				o = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				i = a.n(o);
			const c = e => s.a.createElement("svg", {
				className: Object(r.a)(i.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = c
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HarbergerTaxManageModal.5281ab1c42df947c4455.js.map