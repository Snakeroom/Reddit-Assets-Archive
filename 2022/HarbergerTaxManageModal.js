// https://www.redditstatic.com/desktop2x/HarbergerTaxManageModal.7621402a10cedaef1028.js
// Retrieved at 3/7/2022, 12:00:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["HarbergerTaxManageModal"], {
		"./src/lib/currency/cleanNumber/index.ts": function(e, t, n) {
			"use strict";

			function a(e) {
				return e.replace(/[^0-9.]/g, "").replace(/^0+/, "") || "0"
			}
			n.d(t, "a", (function() {
				return a
			}))
		},
		"./src/reddit/actions/harbergerTax/actionCreators.ts": function(e, t, n) {
			"use strict";
			n.d(t, "c", (function() {
				return r
			})), n.d(t, "e", (function() {
				return i
			})), n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
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
			var a = n("./src/lib/makeActionCreator/index.ts"),
				s = n("./src/reddit/actions/harbergerTax/constants.ts");
			const r = Object(a.a)(s.c),
				i = Object(a.a)(s.e),
				o = Object(a.a)(s.a),
				d = Object(a.a)(s.b),
				c = Object(a.a)(s.d),
				l = Object(a.a)(s.f),
				u = Object(a.a)(s.g),
				m = Object(a.a)(s.h),
				p = Object(a.a)(s.i),
				b = Object(a.a)(s.j)
		},
		"./src/reddit/actions/harbergerTax/thunkedActions.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return g
			})), n.d(t, "b", (function() {
				return x
			})), n.d(t, "c", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/lodash/isEmpty.js"),
				s = n.n(a),
				r = n("./src/reddit/actions/governance/errorToast.ts"),
				i = n("./src/reddit/actions/harbergerTax/actionCreators.ts"),
				o = n("./src/reddit/actions/structuredStyles/index.ts"),
				d = n("./src/reddit/actions/toaster.ts"),
				c = n("./src/config.ts"),
				l = n("./src/reddit/endpoints/governance/requester.ts");

			function u(e, t) {
				return Object(l.a)(e, {
					method: "post",
					endpoint: `${c.a.metaUrl}/orders`,
					data: {
						...t,
						products: t.products.map(e => ({
							...e,
							productId: "mainHeader",
							quantity: "1"
						}))
					}
				})
			}
			var m = n("./src/reddit/models/Toast/index.ts"),
				p = n("./src/reddit/selectors/gov.ts"),
				b = n("./node_modules/fbt/lib/FbtPublic.js");
			const g = () => async (e, t) => {
				e(Object(d.f)({
					kind: m.b.Error,
					text: b.fbt._("Could not upload image", null, {
						hk: "2t0F9P"
					})
				}))
			}, x = e => async (t, n, {
				apiContext: a
			}) => {
				const {
					subredditId: s
				} = e, o = n().user.account, d = Object(p.a)(n(), {
					subredditId: s
				});
				if (!o) return;
				const c = o.displayText || "";
				t(Object(i.f)({
					productId: "mainHeader",
					subredditId: s
				}));
				const l = await u(a(), {
					subredditId: s,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: d && d.owner || "",
						ownerId: d && d.ownerId || ""
					}]
				});
				l.ok ? (t(Object(i.g)({
					productId: "mainHeader",
					subredditId: s,
					mainHeader: {
						owner: c,
						ownerId: o.id,
						price: e.newPrice || e.currentPrice,
						content: d ? d.content : {}
					}
				})), t(Object(i.c)({
					subredditId: s
				}))) : (t(Object(i.d)({
					productId: "mainHeader",
					subredditId: s,
					error: l.error
				})), Object(r.a)(t, l.error))
			}, h = e => async (t, n, {
				apiContext: a
			}) => {
				const {
					subredditId: d
				} = e, m = n().user.account, b = Object(p.a)(n(), {
					subredditId: d
				}), g = n().structuredStyles.models[d];
				if (!m || !b) return;
				const x = m.displayText || "",
					h = [],
					v = void 0 !== e.newPrice && b.price !== e.newPrice,
					I = function(e, t, n) {
						const a = {};
						return e && e.bannerBackgroundImage !== t.bannerBackgroundImage && t.bannerBackgroundImage !== n.bannerBackgroundImage ? a.bannerBackgroundImage = t.bannerBackgroundImage : !e && t.bannerBackgroundImage && (a.bannerBackgroundImage = t.bannerBackgroundImage), e && e.bannerBackgroundImagePosition === t.bannerBackgroundImagePosition || (a.bannerBackgroundImagePosition = t.bannerBackgroundImagePosition), a
					}(b.content, e.content, g),
					f = !s()(I);
				(v || f) && t(Object(i.i)({
					productId: "mainHeader",
					subredditId: d
				})), v ? h.push(u(a(), {
					subredditId: d,
					price: e.currentPrice,
					products: [{
						newPrice: e.newPrice,
						owner: b.owner || "",
						ownerId: b.ownerId || ""
					}]
				})) : h.push(Promise.resolve()), f && h.push(function(e, t) {
					return Object(l.a)(e, {
						method: "patch",
						endpoint: `${c.a.metaUrl}/communities/${t.subredditId}`,
						data: {
							assets: {
								mainHeader: {
									content: t.content
								}
							}
						}
					})
				}(a(), {
					subredditId: d,
					content: I
				}));
				const [j, C] = await Promise.all(h);
				v && j.ok && f && C.ok ? (t(Object(i.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: x,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: e.content
					}
				})), t(Object(o.l)({
					subredditId: d,
					styles: I
				}))) : v && j.ok ? (t(Object(i.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: x,
						ownerId: m.id,
						price: e.newPrice || b.price,
						content: b.content
					}
				})), f && !C.ok && Object(r.a)(t, C.error)) : f && C.ok ? (t(Object(i.j)({
					productId: "mainHeader",
					subredditId: d,
					mainHeader: {
						owner: x,
						ownerId: m.id,
						price: b.price,
						content: e.content
					}
				})), t(Object(o.l)({
					subredditId: d,
					styles: I
				})), v && !j.ok && Object(r.a)(t, j.error)) : (v && Object(r.a)(t, j.error), f && (t(Object(i.h)({
					productId: "mainHeader",
					subredditId: d,
					error: j.error
				})), Object(r.a)(t, C.error)))
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less": function(e, t, n) {
			e.exports = {
				banner: "_3l95gQw6MCtUIjEyo3C9W6",
				container: "_1hmKFovfO3FycaLmi0738y",
				controls: "_1MJu5fkr9tMpNdTwH6FOoe",
				price: "GvcKlfm4P-OebPfkgFJAD",
				title: "_1dtGMMD-cseaekE1amTo2e"
			}
		},
		"./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var a = n("./node_modules/lodash/isEqual.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				c = n("./src/higherOrderComponents/asModal/index.tsx"),
				l = n("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				u = n("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				m = n("./src/reddit/contexts/PageLayer/index.tsx"),
				p = n("./src/reddit/featureFlags/component.tsx"),
				b = n("./src/reddit/selectors/gov.ts"),
				g = n("./node_modules/fbt/lib/FbtPublic.js"),
				x = n("./src/lib/uploadToS3/index.ts"),
				h = n("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				v = n("./src/reddit/contexts/ApiContext.tsx"),
				I = n("./src/reddit/controls/ToggleSwitch/index.tsx"),
				f = n("./src/reddit/endpoints/governance/imageLease.ts"),
				j = n("./src/reddit/helpers/media/index.ts"),
				C = n("./src/reddit/icons/svgs/Remove/index.tsx"),
				_ = n("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less"),
				E = n.n(_);
			const N = "bannerBackgroundImage";
			class O extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						imageUploadInProgress: !1
					}, this.handleBannerImageUpload = async e => {
						const {
							apiContext: t,
							subredditId: n
						} = this.props;
						this.setState({
							imageUploadInProgress: !0
						});
						const a = await Object(j.g)(e.file) || e.file.type,
							s = await Object(f.a)(t(), n, e.file.name, N, a);
						if (!s.ok) return void this.props.onImageUploadFailed();
						const r = s.body.s3UploadLease,
							i = await Object(x.a)(e.file, r);
						if (i.ok) {
							const e = decodeURIComponent(i.body.PostResponse.Location);
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
						tabIndex: n,
						tiled: a
					} = this.props, s = t ? t[N] : void 0;
					return i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: E.a.title
					}, g.fbt._("banner", null, {
						hk: "3WUKlK"
					})), i.a.createElement("div", {
						className: E.a.imageHeader
					}, i.a.createElement("div", {
						className: E.a.imageTitle
					}, g.fbt._("Image", null, {
						hk: "1aeIAc"
					})), i.a.createElement("div", {
						className: E.a.imageSize
					}, g.fbt._("192 px high", null, {
						hk: "1GAzn5"
					}))), i.a.createElement(h.a, {
						className: E.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: g.fbt._("Drag and Drop or Upload Image", null, {
							hk: "4uCwQl"
						}),
						tabIndex: n,
						value: s,
						onChange: this.handleBannerImageUpload
					}), s && i.a.createElement("div", {
						className: E.a.imagePreview,
						style: {
							background: a ? `url(${s}) center top repeat` : `url(${s}) center top / cover no-repeat`
						}
					}), i.a.createElement("div", {
						className: E.a.modifiers
					}, i.a.createElement("div", {
						className: E.a.toggle
					}, i.a.createElement(I.a, {
						redditStyle: !0,
						className: E.a.toggleSwitch,
						tabIndex: n ? n + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), g.fbt._("Tile", null, {
						hk: "3fnD8Q"
					})), i.a.createElement(C.a, {
						className: E.a.remove,
						tabIndex: n ? n + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var w = Object(o.b)(null, e => ({
					onImageUploadFailed: () => e(Object(l.a)())
				}))(Object(v.b)(O)),
				k = n("./src/lib/classNames/index.ts"),
				y = n("./src/lib/prettyPrintNumber/index.ts"),
				P = n("./src/reddit/actions/modal.ts"),
				T = n("./src/reddit/components/Governance/Token/index.tsx"),
				U = n("./src/reddit/controls/Button/index.tsx"),
				B = n("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less"),
				S = n.n(B);
			const {
				fbt: D
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			const H = Object(d.c)({
				wallet: b.d
			});
			var A = Object(o.b)(H, e => ({
					onClose: () => e(Object(P.f)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: Object(k.a)(S.a.container, e.className)
					}, i.a.createElement("div", {
						className: S.a.wallet
					}, e.wallet && i.a.createElement(r.Fragment, null, D._("You have", null, {
						hk: "2IixC6"
					}), i.a.createElement(T.a, {
						grey: !0,
						className: S.a.token,
						subredditId: e.subredditId
					}), Object(y.a)(e.wallet.amount))), i.a.createElement("div", {
						className: S.a.buttons
					}, i.a.createElement(U.o, {
						className: S.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, D._("Cancel", null, {
						hk: "2TSLl5"
					})), i.a.createElement(U.l, {
						className: Object(k.a)(S.a.button, S.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, D._("save", null, {
						hk: "3joVpg"
					}))))
				})),
				L = n("./src/lib/currency/cleanNumber/index.ts"),
				M = n("./src/reddit/controls/FormFields/index.tsx"),
				F = n("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less"),
				R = n.n(F);
			var G = function(e) {
					return i.a.createElement("div", {
						className: Object(k.a)(R.a.container, e.className)
					}, i.a.createElement("div", {
						className: R.a.title
					}, g.fbt._("Price and Hamburger Tax", null, {
						hk: "IbFhe"
					})), i.a.createElement("div", {
						className: R.a.explanation
					}, g.fbt._("You can protect your ownership by raising the price. This also increases the daily tax. If you're unable to pay the tax, the price goes to 0.", null, {
						hk: "1FBx6x"
					})), i.a.createElement("div", {
						className: R.a.tax
					}, i.a.createElement(M.c, {
						redditStyle: !0,
						className: R.a.input,
						label: g.fbt._("banner price", null, {
							hk: "4jFcDi"
						}),
						placeholder: "0",
						tabIndex: e.tabIndex,
						type: "text",
						value: Object(y.a)(e.price),
						onChange: t => e.onPriceChange(Object(L.a)(t.currentTarget.value))
					}), i.a.createElement(T.a, {
						className: R.a.token,
						subredditId: e.subredditId
					}), i.a.createElement("div", {
						className: R.a.equals
					}, "="), i.a.createElement("div", {
						className: R.a.dailyTax
					}, i.a.createElement("div", {
						className: R.a.taxRate
					}, g.fbt._("1% daily tax", null, {
						hk: "fkECk"
					})), i.a.createElement("div", {
						className: R.a.taxAmount
					}, Object(y.a)((.01 * parseInt(e.price || "0")).toFixed(2))))))
				},
				V = n("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less"),
				z = n.n(V);
			const {
				fbt: K
			} = n("./node_modules/fbt/lib/FbtPublic.js");
			class W extends i.a.Component {
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
					}, this.state = Z(e, e.savedStyles.bannerBackgroundImage), this.originalState = Z(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!s()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = q(e) === q(this.props) ? this.state.image ? this.state.image[N] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(Z(this.props, t)), this.originalState = Z(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? i.a.createElement("div", {
						className: z.a.container
					}, i.a.createElement(u.a, {
						className: z.a.title
					}, K._("Manage Banner", null, {
						hk: "NMRRK"
					})), i.a.createElement(G, {
						className: z.a.price,
						price: this.state.price,
						subredditId: e.id,
						tabIndex: 1,
						onPriceChange: this.handlePriceChange
					}), i.a.createElement(w, {
						className: z.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), i.a.createElement(A, {
						className: z.a.controls,
						subredditId: e.id,
						submitEnabled: !s()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function q(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function Z(e, t) {
				const {
					mainHeaderAsset: n
				} = e;
				return n ? {
					price: n.price,
					image: t ? {
						[N]: t
					} : n.content && n.content.bannerBackgroundImage ? {
						[N]: n.content.bannerBackgroundImage
					} : {
						[N]: ""
					},
					tiled: !!n.content && "tiled" === n.content.bannerBackgroundImagePosition
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
			const X = Object(d.c)({
					mainHeaderAsset: (e, t) => {
						const n = Object(m.r)(e, t);
						if (n) return Object(b.a)(e, {
							subredditId: n.id
						})
					},
					savedStyles: (e, t) => {
						const n = Object(m.r)(e, t);
						return n ? e.structuredStyles.models[n.id] : {}
					},
					subreddit: m.r
				}),
				J = Object(o.b)(X, e => ({
					onUpdateBanner: t => e(Object(l.c)(t))
				})),
				Y = Object(m.u)();
			t.default = Object(p.a)("spHarberger", Object(c.a)(Y(J(W))))
		},
		"./src/reddit/components/Governance/ModalClose/index.m.less": function(e, t, n) {
			e.exports = {
				closeIcon: "zKTP6l--BljeY4s019li6"
			}
		},
		"./src/reddit/components/Governance/ModalClose/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./src/lib/classNames/index.ts"),
				o = n("./src/reddit/actions/modal.ts"),
				d = n("./src/reddit/icons/svgs/Close/index.tsx"),
				c = n("./src/reddit/components/Governance/ModalClose/index.m.less"),
				l = n.n(c);
			t.a = Object(r.b)(void 0, (e, {
				afterClose: t
			}) => ({
				onClose: () => {
					e(Object(o.f)()), t && t()
				}
			}))((function(e) {
				return s.a.createElement(d.a, {
					className: Object(i.a)(l.a.closeIcon, e.className),
					onClick: e.onClose
				})
			}))
		},
		"./src/reddit/components/Governance/ModalTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1O5EP15-IiRk-UvArRmhUw",
				title: "_38raT44MC66Wx-UBjmJUGO",
				coloredContainer: "_14WnQP7y0UtOYaF4HIhcpC",
				closeIcon: "_2Dh5TbbHajj8GzRArEAFfe"
			}
		},
		"./src/reddit/components/Governance/ModalTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return c
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/components/Governance/ModalClose/index.tsx"),
				o = n("./src/reddit/components/Governance/ModalTitle/index.m.less"),
				d = n.n(o);

			function c(e) {
				return s.a.createElement("div", {
					className: Object(r.a)(d.a.container, e.className, {
						[d.a.coloredContainer]: e.colored
					})
				}, s.a.createElement("div", {
					className: d.a.title
				}, e.children), s.a.createElement(i.a, {
					className: d.a.closeIcon
				}))
			}
		},
		"./src/reddit/components/Governance/Token/index.m.less": function(e, t, n) {
			e.exports = {
				grey: "_3oUx7R2UEz3llZLsIONH4x"
			}
		},
		"./src/reddit/components/Governance/Token/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./node_modules/react-redux/es/index.js"),
				i = n("./node_modules/reselect/es/index.js"),
				o = n("./src/config.ts"),
				d = n("./src/lib/classNames/index.ts"),
				c = n("./src/reddit/selectors/crypto/points.ts"),
				l = n("./src/reddit/components/Governance/Token/index.m.less"),
				u = n.n(l);
			const m = Object(i.c)({
				pointsDetails: (e, {
					subredditId: t
				}) => Object(c.b)(e, t)
			});
			t.a = Object(r.b)(m)((function(e) {
				var t;
				const n = null === (t = e.pointsDetails) || void 0 === t ? void 0 : t.images;
				if (!n) return null;
				const a = e.grey ? n.greyVector || n.grey : n.filledVector || n.filled,
					r = `${o.a.assetPath}/${a}`;
				if (e.grey && r.endsWith(".svg")) {
					const t = `url(${r}) center/cover`;
					return s.a.createElement("div", {
						className: Object(d.a)(u.a.grey, e.className),
						style: {
							mask: t,
							WebkitMask: t
						}
					})
				}
				return s.a.createElement("img", {
					className: e.className,
					src: r
				})
			}))
		},
		"./src/reddit/components/Settings/shared/ImageUploader.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/reddit/components/StructuredStyles/ImageUpload/index.tsx"),
				i = n("./src/reddit/models/Image/index.tsx");
			class o extends s.a.Component {
				constructor() {
					super(...arguments), this.onChange = async e => {
						if (!e) return;
						const t = Array.isArray(e) && e.length > 0 ? e[0] : e,
							n = await Object(i.e)(t);
						this.props.onChange(n)
					}
				}
				render() {
					const {
						className: e,
						icon: t,
						label: n,
						labelClassName: a,
						value: i,
						controlName: o,
						isUploading: d,
						tabIndex: c
					} = this.props;
					return d ? s.a.createElement(r.a, {
						className: e
					}) : s.a.createElement(r.b, {
						className: e,
						icon: t,
						name: o,
						label: n,
						labelClassName: a,
						multiple: !1,
						tabIndex: c,
						value: i,
						onChange: this.onChange
					})
				}
			}
			t.a = o
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
				return I
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/FileDrop/index.tsx"),
				d = n("./src/reddit/controls/ImageInput/index.tsx"),
				c = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = n("./src/reddit/icons/svgs/ImageUpload/index.tsx"),
				u = n("./src/reddit/components/StructuredStyles/ImageUpload/index.m.less"),
				m = n.n(u);
			const {
				fbt: p
			} = n("./node_modules/fbt/lib/FbtPublic.js"), b = i.a.wrapped(l.a, "ImageUploadIcon", m.a), g = i.a.div("ImageIconRow", m.a), x = i.a.div("ImageUploadText", m.a), h = i.a.wrapped(o.a, "FileDrop", m.a), v = i.a.div("ContainerUploading", m.a), I = e => s.a.createElement(v, {
				className: e.className
			}, s.a.createElement(g, null, s.a.createElement(c.a, {
				sizePx: 40,
				center: !0
			})), s.a.createElement(x, null, p._("Uploading...", null, {
				hk: "2ICpZ2"
			}))), f = i.a.label("Label", m.a);
			t.b = e => s.a.createElement(h, {
				className: e.className,
				onDrop: e.onChange,
				render: t => s.a.createElement(f, {
					className: Object(r.a)({
						[m.a.isOver]: t
					}, e.labelClassName)
				}, s.a.createElement(g, null, e.icon || s.a.createElement(b, null)), s.a.createElement(x, null, e.label), s.a.createElement(d.a, {
					className: m.a.ImageInput,
					name: e.name,
					value: e.value,
					onChange: e.onChange,
					multiple: e.multiple,
					tabIndex: e.tabIndex
				}))
			})
		},
		"./src/reddit/controls/FileDrop/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/lodash/flow.js"),
				s = n.n(a),
				r = n("./node_modules/react/index.js"),
				i = n.n(r),
				o = n("./node_modules/react-dnd/lib/index.js"),
				d = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				c = n("./src/reddit/helpers/dragDropContext/index.ts");
			const l = d.NativeTypes.FILE,
				u = s()(Object(o.DropTarget)(l, {
					drop: (e, t) => {
						if (t && t.didDrop() || !t) return;
						const n = t.getItem();
						n.files && e.onDrop(n.files)
					}
				}, (e, t) => ({
					connectDropTarget: e.dropTarget(),
					isOver: t.isOver(),
					canDrop: t.canDrop()
				})), c.a);
			class m extends i.a.Component {
				render() {
					return this.props.connectDropTarget ? this.props.connectDropTarget(i.a.createElement("div", {
						className: this.props.className
					}, this.props.render(this.props.isOver, this.props.canDrop))) : null
				}
			}
			t.a = u(m)
		},
		"./src/reddit/controls/FormFields/index.m.less": function(e, t, n) {
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
		"./src/reddit/controls/FormFields/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return p
			})), n.d(t, "b", (function() {
				return g
			})), n.d(t, "c", (function() {
				return x
			})), n.d(t, "d", (function() {
				return I
			}));
			n("./node_modules/core-js/modules/web.dom.iterable.js");
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/ErrorText/index.tsx"),
				d = n("./src/reddit/icons/svgs/Plus/index.tsx"),
				c = n("./src/reddit/icons/svgs/Trash2/index.tsx"),
				l = n("./src/reddit/controls/FormFields/index.m.less"),
				u = n.n(l);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
					}
					return e
				}).apply(this, arguments)
			}
			const p = i.a.input("input", u.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				g = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						className: i,
						...o
					} = e, d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputWrapper, i, {
							[u.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(p, m({
						"aria-invalid": e.isInvalid,
						innerRef: a
					}, o)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: n,
						inputRef: a,
						isInvalid: i,
						className: o,
						redditStyle: d,
						...c
					} = e, l = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.inputMovingLabelWrapper, o, {
							[u.a.mIsInvalid]: i,
							[u.a.mIsRedditStyle]: d
						}),
						onClick: b
					}, s.a.createElement(p, m({
						innerRef: a
					}, c)), e.label && s.a.createElement("label", {
						className: Object(r.a)(u.a.label, {
							[u.a.mHasValue]: l
						})
					}, e.label), e.children)
				},
				h = e => s.a.createElement("div", {
					className: Object(r.a)(u.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(d.a, {
					className: u.a.plus
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
						const n = this.props.values.slice();
						n[t] = e.target.value, this.props.onChange(n)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							n = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: v.REMOVE,
							value: n,
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
						label: n,
						placeholder: a,
						errors: r = []
					} = this.props;
					return e.map((e, i) => s.a.createElement(g, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: n,
						onChange: e => this.updateValue(e, i),
						placeholder: a,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: u.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(c.b, {
						className: u.a.trash
					})), !!r[i] && s.a.createElement(o.b, {
						className: u.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: n,
						maxLength: a,
						addValueText: i,
						disabled: o
					} = this.props;
					this.focusedInput = null;
					const d = !(!!a && n.length >= a) && !o;
					return s.a.createElement("div", {
						className: Object(r.a)(u.a.multiInputWrapper, e)
					}, t && d && s.a.createElement(h, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && d && s.a.createElement(h, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/controls/ImageInput/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			class r extends s.a.Component {
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
				static getDerivedStateFromProps(e, t) {
					return {
						value: t.value || e.value || ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this, n = "string" == typeof t.value ? t.value : "", a = "object" == typeof t.value ? t.value : null, r = n || a;
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
					}), (!r || e.multiple || void 0 !== e.isPending && !e.isPending) && s.a.createElement("input", {
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
		"./src/reddit/controls/LoadingIcon/index.m.less": function(e, t, n) {
			e.exports = {
				loadingIcon: "_3LwT7hgGcSjmJ7ng7drAuq",
				spin: "ibDwUVR1CAykturOgqOS5",
				mCentered: "_2qr28EeyPvBWAsPKl-KuWN"
			}
		},
		"./src/reddit/controls/LoadingIcon/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/controls/LoadingIcon/index.m.less"),
				o = n.n(i);
			t.a = ({
				center: e,
				className: t,
				sizePx: n = 10
			}) => s.a.createElement("div", {
				className: Object(r.a)(o.a.loadingIcon, t, {
					[o.a.mCentered]: e
				}),
				style: {
					"--sizePx": `${n}px`
				},
				"data-testid": "LoadingIcon"
			})
		},
		"./src/reddit/endpoints/governance/imageLease.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./src/config.ts"),
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/lib/makeApiRequest/index.ts"),
				i = n("./src/lib/omitHeaders/index.ts"),
				o = n("./src/reddit/constants/headers.ts");
			const d = async (e, t, n, d, c) => Object(r.a)(Object(i.a)(e, [o.a]), {
				endpoint: `${a.a.metaUrl}/communities/${t}/upload-lease`,
				method: s.jb.POST,
				data: {
					filepath: n,
					imagetype: d,
					mimetype: c
				}
			})
		},
		"./src/reddit/helpers/dragDropContext/index.ts": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react-dnd/lib/index.js"),
				s = n("./node_modules/react-dnd-html5-backend/lib/index.js"),
				r = n.n(s);
			t.a = Object(a.DragDropContext)(r.a)
		},
		"./src/reddit/icons/svgs/ImageUpload/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_2irXdPA4C5flwkupsFkN9-"
			}
		},
		"./src/reddit/icons/svgs/ImageUpload/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/ImageUpload/index.m.less"),
				o = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
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
		"./src/reddit/icons/svgs/Plus/index.tsx": function(e, t, n) {
			"use strict";
			var a = n("./node_modules/react/index.js"),
				s = n.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1"
			}, s.a.createElement("g", {
				stroke: "none"
			}, s.a.createElement("g", {
				transform: "translate(-34.000000, -136.000000)",
				fill: "inherit"
			}, s.a.createElement("path", {
				d: "M45.2,147.2 L48.8,147.2 C49.46272,147.2 50,146.66272 50,146 C50,145.33728 49.46272,144.8 48.8,144.8 L45.2,144.8 L45.2,141.2 C45.2,140.53728 44.66272,140 44,140 C43.33728,140 42.8,140.53728 42.8,141.2 L42.8,144.8 L39.2,144.8 C38.53728,144.8 38,145.33728 38,146 C38,146.66272 38.53728,147.2 39.2,147.2 L42.8,147.2 L42.8,150.8 C42.8,151.46272 43.33728,152 44,152 C44.66272,152 45.2,151.46272 45.2,150.8 L45.2,147.2 Z"
			}))))
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, n) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return d
			}));
			var a = n("./node_modules/react/index.js"),
				s = n.n(a),
				r = n("./src/lib/classNames/index.ts"),
				i = n("./src/reddit/icons/svgs/Trash2/index.m.less"),
				o = n.n(i);
			const d = e => s.a.createElement("svg", {
				className: Object(r.a)(o.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = d
		},
		"./src/reddit/selectors/gov.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return i
			})), n.d(t, "b", (function() {
				return o
			})), n.d(t, "c", (function() {
				return d
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "g", (function() {
				return l
			})), n.d(t, "e", (function() {
				return u
			})), n.d(t, "f", (function() {
				return m
			}));
			var a = n("./src/reddit/contexts/PageLayer/index.tsx");
			const s = [],
				r = {},
				i = (e, t) => {
					const n = p(e, t);
					if (n) return n.mainHeader
				},
				o = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? n.mainHeader.price : "0"
				},
				d = (e, t) => {
					const n = p(e, t);
					return n && n.mainHeader ? {
						owner: n.mainHeader.owner,
						ownerId: n.mainHeader.ownerId
					} : r
				},
				c = (e, t) => t && t.subredditId ? (e.user.wallets[t.subredditId] || {}).latest : void 0,
				l = (e, t) => {
					const n = c(e, t),
						a = n && n.publicAddress;
					if (!a) throw new Error("No wallet address found");
					return a
				},
				u = (e, t) => {
					const n = c(e, t);
					return n && n.amount || "0"
				},
				m = (e, t) => {
					const n = Object(a.n)(e, t);
					return n && e.subreddits.gov.releaseNotes[n] || s
				},
				p = (e, t) => t.subredditId ? e.subreddits.gov.assets[t.subredditId] : void 0
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/HarbergerTaxManageModal.7621402a10cedaef1028.js.map