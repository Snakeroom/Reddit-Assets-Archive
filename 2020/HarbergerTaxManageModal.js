// https://www.redditstatic.com/desktop2x/HarbergerTaxManageModal.487522f17ba1ac01a0da.js
// Retrieved at 5/18/2020, 11:20:08 AM by Reddit Dataminer v1.0.0
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
				i = a.n(r),
				l = a("./node_modules/react-redux/es/index.js"),
				o = a("./node_modules/reselect/es/index.js"),
				d = a("./src/higherOrderComponents/asModal/index.tsx"),
				c = a("./src/reddit/actions/harbergerTax/thunkedActions.ts"),
				m = a("./src/reddit/components/Governance/ModalTitle/index.tsx"),
				u = a("./src/reddit/contexts/PageLayer/index.tsx"),
				p = a("./src/reddit/featureFlags/component.tsx"),
				h = a("./src/reddit/selectors/gov.ts"),
				b = a("./node_modules/fbt/lib/FbtPublic.js"),
				g = a("./src/lib/uploadToS3/index.ts"),
				x = a("./src/reddit/components/Settings/shared/ImageUploader.tsx"),
				v = a("./src/reddit/contexts/ApiContext.tsx"),
				f = a("./src/reddit/controls/ToggleSwitch/index.tsx"),
				E = a("./src/reddit/endpoints/governance/imageLease.ts"),
				_ = a("./src/reddit/helpers/media/index.ts"),
				N = a("./src/reddit/icons/svgs/Remove/index.tsx"),
				I = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Banner/index.m.less"),
				j = a.n(I);
			const O = "bannerBackgroundImage";
			class C extends i.a.Component {
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
						const n = await Object(_.g)(e.file) || e.file.type,
							s = await Object(E.a)(t(), a, e.file.name, O, n);
						if (!s.ok) return void this.props.onImageUploadFailed();
						const r = s.body.s3UploadLease,
							i = await Object(g.a)(e.file, r);
						if (i.ok) {
							const e = decodeURIComponent(i.body.PostResponse.Location);
							this.props.onImageChange({
								[O]: e
							})
						} else this.props.onImageUploadFailed();
						this.setState({
							imageUploadInProgress: !1
						})
					}, this.handleBannerImageDelete = () => {
						this.props.onImageChange({
							[O]: ""
						})
					}
				}
				render() {
					const {
						className: e,
						image: t,
						tabIndex: a,
						tiled: n
					} = this.props, s = t ? t[O] : void 0;
					return i.a.createElement("div", {
						className: e
					}, i.a.createElement("div", {
						className: j.a.title
					}, b.fbt._("banner", null, {
						hk: "3WUKlK"
					})), i.a.createElement("div", {
						className: j.a.imageHeader
					}, i.a.createElement("div", {
						className: j.a.imageTitle
					}, b.fbt._("Image", null, {
						hk: "1aeIAc"
					})), i.a.createElement("div", {
						className: j.a.imageSize
					}, b.fbt._("192 px high", null, {
						hk: "1GAzn5"
					}))), i.a.createElement(x.a, {
						className: j.a.imageUpload,
						controlName: "banner",
						isUploading: this.state.imageUploadInProgress,
						label: b.fbt._("Drag and Drop or Upload Image", null, {
							hk: "4uCwQl"
						}),
						tabIndex: a,
						value: s,
						onChange: this.handleBannerImageUpload
					}), s && i.a.createElement("div", {
						className: j.a.imagePreview,
						style: {
							background: "url(".concat(s, n ? ") center top repeat" : ") center top / cover no-repeat")
						}
					}), i.a.createElement("div", {
						className: j.a.modifiers
					}, i.a.createElement("div", {
						className: j.a.toggle
					}, i.a.createElement(f.a, {
						redditStyle: !0,
						className: j.a.toggleSwitch,
						tabIndex: a ? a + 1 : void 0,
						on: this.props.tiled,
						onToggle: this.props.onTilingChange
					}), b.fbt._("Tile", null, {
						hk: "3fnD8Q"
					})), i.a.createElement(N.a, {
						className: j.a.remove,
						tabIndex: a ? a + 2 : void 0,
						onClick: this.handleBannerImageDelete
					})))
				}
			}
			var w = Object(l.b)(null, e => ({
					onImageUploadFailed: () => e(Object(c.a)())
				}))(Object(v.b)(C)),
				T = a("./src/lib/classNames/index.ts"),
				k = a("./src/lib/prettyPrintNumber/index.ts"),
				y = a("./src/reddit/actions/modal.ts"),
				M = a("./src/reddit/components/Governance/Token/index.tsx"),
				S = a("./src/reddit/controls/Button/index.tsx"),
				B = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Controls/index.m.less"),
				P = a.n(B);
			const {
				fbt: A
			} = a("./node_modules/fbt/lib/FbtPublic.js");
			const F = Object(o.c)({
				wallet: h.g
			});
			var R = Object(l.b)(F, e => ({
					onClose: () => e(Object(y.f)())
				}))((function(e) {
					return i.a.createElement("div", {
						className: Object(T.a)(P.a.container, e.className)
					}, i.a.createElement("div", {
						className: P.a.wallet
					}, e.wallet && i.a.createElement(r.Fragment, null, A._("You have", null, {
						hk: "2IixC6"
					}), i.a.createElement(M.a, {
						grey: !0,
						className: P.a.token,
						subredditId: e.subredditId
					}), Object(k.a)(e.wallet.amount))), i.a.createElement("div", {
						className: P.a.buttons
					}, i.a.createElement(S.i, {
						className: P.a.button,
						tabIndex: e.tabIndex,
						onClick: e.onClose
					}, A._("cancel", null, {
						hk: "4gICW3"
					})), i.a.createElement(S.f, {
						className: Object(T.a)(P.a.button, P.a.save),
						disabled: !e.submitEnabled,
						tabIndex: e.tabIndex ? e.tabIndex + 1 : void 0,
						onClick: e.onSubmit
					}, A._("save", null, {
						hk: "3joVpg"
					}))))
				})),
				H = a("./src/lib/currency/cleanNumber/index.ts"),
				D = a("./src/reddit/controls/FormFields/index.tsx"),
				U = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/Price/index.m.less"),
				V = a.n(U);
			var L = function(e) {
					return i.a.createElement("div", {
						className: Object(T.a)(V.a.container, e.className)
					}, i.a.createElement("div", {
						className: V.a.title
					}, b.fbt._("Price and Hamburger Tax", null, {
						hk: "IbFhe"
					})), i.a.createElement("div", {
						className: V.a.explanation
					}, b.fbt._("You can protect your ownership by raising the price. This also increases the daily tax. If you're unable to pay the tax, the price goes to 0.", null, {
						hk: "1FBx6x"
					})), i.a.createElement("div", {
						className: V.a.tax
					}, i.a.createElement(D.c, {
						redditStyle: !0,
						className: V.a.input,
						label: b.fbt._("banner price", null, {
							hk: "4jFcDi"
						}),
						placeholder: "0",
						tabIndex: e.tabIndex,
						type: "text",
						value: Object(k.a)(e.price),
						onChange: t => e.onPriceChange(Object(H.a)(t.currentTarget.value))
					}), i.a.createElement(M.a, {
						className: V.a.token,
						subredditId: e.subredditId
					}), i.a.createElement("div", {
						className: V.a.equals
					}, "="), i.a.createElement("div", {
						className: V.a.dailyTax
					}, i.a.createElement("div", {
						className: V.a.taxRate
					}, b.fbt._("1% daily tax", null, {
						hk: "fkECk"
					})), i.a.createElement("div", {
						className: V.a.taxAmount
					}, Object(k.a)((.01 * parseInt(e.price || "0")).toFixed(2))))))
				},
				G = a("./src/reddit/components/Governance/HarbergerTax/BannerManageModal/index.m.less"),
				q = a.n(G);
			const {
				fbt: K
			} = a("./node_modules/fbt/lib/FbtPublic.js");
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
								bannerBackgroundImage: this.state.image ? this.state.image[O] : "",
								bannerBackgroundImagePosition: this.state.tiled ? "tiled" : "cover"
							}
						})
					}, this.state = Y(e, e.savedStyles.bannerBackgroundImage), this.originalState = Y(e, e.savedStyles.bannerBackgroundImage)
				}
				componentDidUpdate(e) {
					if (!s()(e.mainHeaderAsset, this.props.mainHeaderAsset)) {
						const t = z(e) === z(this.props) ? this.state.image ? this.state.image[O] : e.savedStyles.bannerBackgroundImage : void 0;
						this.setState(Y(this.props, t)), this.originalState = Y(this.props, t)
					}
				}
				render() {
					const {
						subreddit: e
					} = this.props;
					return e ? i.a.createElement("div", {
						className: q.a.container
					}, i.a.createElement(m.a, {
						className: q.a.title
					}, K._("Manage Banner", null, {
						hk: "NMRRK"
					})), i.a.createElement(L, {
						className: q.a.price,
						price: this.state.price,
						subredditId: e.id,
						tabIndex: 1,
						onPriceChange: this.handlePriceChange
					}), i.a.createElement(w, {
						className: q.a.banner,
						image: this.state.image,
						subredditId: e.id,
						subredditName: e.name,
						tabIndex: 2,
						tiled: this.state.tiled,
						onImageChange: this.handleImageChange,
						onTilingChange: this.handleTilingChange
					}), i.a.createElement(R, {
						className: q.a.controls,
						subredditId: e.id,
						submitEnabled: !s()(this.state, this.originalState),
						tabIndex: 5,
						onSubmit: this.handleSubmit
					})) : null
				}
			}

			function z(e) {
				return e.mainHeaderAsset && e.mainHeaderAsset.content && e.mainHeaderAsset.content.bannerBackgroundImage || ""
			}

			function Y(e, t) {
				const {
					mainHeaderAsset: a
				} = e;
				return a ? {
					price: a.price,
					image: t ? {
						[O]: t
					} : a.content && a.content.bannerBackgroundImage ? {
						[O]: a.content.bannerBackgroundImage
					} : {
						[O]: ""
					},
					tiled: !!a.content && "tiled" === a.content.bannerBackgroundImagePosition
				} : {
					price: "",
					image: t ? {
						[O]: t
					} : {
						[O]: ""
					},
					tiled: !1
				}
			}
			const Z = Object(o.c)({
					mainHeaderAsset: (e, t) => {
						const a = Object(u.q)(e, t);
						if (a) return Object(h.c)(e, {
							subredditId: a.id
						})
					},
					savedStyles: (e, t) => {
						const a = Object(u.q)(e, t);
						return a ? e.structuredStyles.models[a.id] : {}
					},
					subreddit: u.q
				}),
				X = Object(l.b)(Z, e => ({
					onUpdateBanner: t => e(Object(c.c)(t))
				})),
				J = Object(u.t)();
			t.default = Object(p.a)("spHarberger", Object(d.a)(J(X(W))))
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
				i = a("./node_modules/raf/index.js"),
				l = a.n(i),
				o = a("./node_modules/react/index.js"),
				d = a.n(o),
				c = a("./node_modules/react-redux/es/index.js"),
				m = a("./node_modules/reselect/es/index.js"),
				u = a("./src/lib/classNames/index.ts"),
				p = a("./src/reddit/actions/modal.ts"),
				h = a("./src/reddit/selectors/activeModalId.ts"),
				b = a("./src/higherOrderComponents/asModal/index.tsx"),
				g = a("./src/reddit/controls/Button/index.tsx"),
				x = a("./src/reddit/layout/row/Inline/index.tsx"),
				v = a("./src/reddit/controls/ErrorText/SeeAllTextModal/index.m.less"),
				f = a.n(v);
			var E = Object(b.a)(e => {
					const {
						children: t,
						title: a
					} = e;
					return d.a.createElement("div", {
						className: f.a.wrapper
					}, d.a.createElement(x.a, {
						className: f.a.titleRow
					}, a), d.a.createElement("div", {
						className: f.a.detailsContainer
					}, t), d.a.createElement(x.a, {
						className: f.a.buttonRow
					}, d.a.createElement(g.f, {
						className: f.a.confirmButton,
						onClick: e.onConfirmed
					}, n.fbt._("Ok", null, {
						hk: "2Giu9U"
					}))))
				}),
				_ = a("./src/reddit/controls/ErrorText/index.m.less"),
				N = a.n(_);
			const I = Object(m.c)({
				activeModalId: h.a
			});
			class j extends d.a.Component {
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
					l()(() => {
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
						moreText: i = n.fbt._("More", null, {
							hk: "1bCAQ0"
						})
					} = this.props, {
						modalId: l,
						textHasOverflowed: o
					} = this.state;
					return d.a.createElement("div", {
						className: Object(u.a)(N.a.wrapper, a)
					}, d.a.createElement("span", {
						className: N.a.description,
						ref: this.spanRef
					}, e), o && d.a.createElement("span", {
						className: N.a.moreText,
						onClick: this.toggleModal
					}, i), t === l && d.a.createElement(E, {
						onConfirmed: this.toggleModal,
						title: r
					}, s || e))
				}
			}
			const O = Object(c.b)(I, e => ({
					toggleErrorTextModal: t => e(Object(p.i)(t))
				}))(j),
				C = e => {
					const {
						className: t,
						errorClassName: a,
						errorModalTitle: n,
						fallbackMessage: s,
						messages: r = []
					} = e, i = r.length ? r : s ? [s] : [];
					return i.length ? d.a.createElement("div", {
						className: t
					}, i.map((e, t) => d.a.createElement(O, {
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
			t.b = O
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
				return h
			})), a.d(t, "b", (function() {
				return g
			})), a.d(t, "c", (function() {
				return x
			})), a.d(t, "d", (function() {
				return E
			}));
			a("./node_modules/core-js/modules/web.dom.iterable.js"), a("./node_modules/core-js/modules/es6.symbol.js");
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/lib/lessComponent.tsx"),
				l = a("./src/reddit/controls/ErrorText/index.tsx"),
				o = a("./src/reddit/icons/svgs/Plus/index.tsx"),
				d = a("./src/reddit/icons/svgs/Trash2/index.tsx"),
				c = a("./src/reddit/controls/FormFields/index.m.less"),
				m = a.n(c);

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
			const h = i.a.input("input", m.a),
				b = e => {
					"LABEL" === e.target.tagName && (e.target.parentElement.firstElementChild.focus(), e.stopPropagation())
				},
				g = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: i
					} = e, l = p(e, ["label", "children", "inputRef", "className"]), o = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputWrapper, i, {
							[m.a.mIsInvalid]: e.isInvalid
						}),
						onClick: b
					}, s.a.createElement(h, u({
						"aria-invalid": e.isInvalid,
						innerRef: n
					}, l)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: o
						})
					}, e.label), e.children)
				},
				x = e => {
					const {
						label: t,
						children: a,
						inputRef: n,
						className: i,
						redditStyle: l
					} = e, o = p(e, ["label", "children", "inputRef", "className", "redditStyle"]), d = void 0 !== e.value && "" !== e.value;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.inputMovingLabelWrapper, i, {
							[m.a.mIsRedditStyle]: l
						}),
						onClick: b
					}, s.a.createElement(h, u({
						innerRef: n
					}, o)), e.label && s.a.createElement("label", {
						className: Object(r.a)(m.a.label, {
							[m.a.mHasValue]: d
						})
					}, e.label), e.children)
				},
				v = e => s.a.createElement("div", {
					className: Object(r.a)(m.a.addValueButton, e.className),
					onClick: e.onClick
				}, e.text, " ", s.a.createElement(o.a, {
					className: m.a.plus
				}));
			var f;
			! function(e) {
				e[e.ADD = 0] = "ADD", e[e.REMOVE = 1] = "REMOVE"
			}(f || (f = {}));
			class E extends s.a.Component {
				constructor() {
					super(...arguments), this.state = {
						addingNewInputs: !1
					}, this.addValue = () => {
						const e = this.props.values.slice();
						this.props.buttonOnTop ? e.unshift("") : e.push(""), this.props.onChange(e), this.props.onEvent && this.props.onEvent({
							action: f.ADD
						})
					}, this.updateValue = (e, t) => {
						const a = this.props.values.slice();
						a[t] = e.target.value, this.props.onChange(a)
					}, this.removeValue = e => {
						const t = this.props.values.slice(),
							a = t[e];
						t.splice(e, 1), this.props.onChange(t), this.props.onEvent && this.props.onEvent({
							action: f.REMOVE,
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
					return e.map((e, i) => s.a.createElement(g, {
						inputRef: e => this.setInputRef(e, i),
						isInvalid: !!r[i],
						disabled: t,
						type: "text",
						label: a,
						onChange: e => this.updateValue(e, i),
						placeholder: n,
						value: e,
						style: {
							paddingRight: "36px"
						}
					}, s.a.createElement("div", {
						className: m.a.trashContainer,
						onClick: () => this.removeValue(i)
					}, s.a.createElement(d.b, {
						className: m.a.trash
					})), !!r[i] && s.a.createElement(l.b, {
						className: m.a.errorText
					}, r[i])))
				}
				render() {
					const {
						className: e,
						buttonOnTop: t,
						values: a,
						maxLength: n,
						addValueText: i,
						disabled: l
					} = this.props;
					this.focusedInput = null;
					const o = !(!!n && a.length >= n) && !l;
					return s.a.createElement("div", {
						className: Object(r.a)(m.a.multiInputWrapper, e)
					}, t && o && s.a.createElement(v, {
						onClick: this.addValue,
						text: i
					}), this.renderFields(), !t && o && s.a.createElement(v, {
						onClick: this.addValue,
						text: i
					}))
				}
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.m.less": function(e, t, a) {
			e.exports = {
				icon: "_1Fa4RPHlhrfUZuNaXK2-eP"
			}
		},
		"./src/reddit/icons/svgs/Trash2/index.tsx": function(e, t, a) {
			"use strict";
			a.d(t, "a", (function() {
				return o
			}));
			var n = a("./node_modules/react/index.js"),
				s = a.n(n),
				r = a("./src/lib/classNames/index.ts"),
				i = a("./src/reddit/icons/svgs/Trash2/index.m.less"),
				l = a.n(i);
			const o = e => s.a.createElement("svg", {
				className: Object(r.a)(l.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg",
				onClick: e.onClick
			}, s.a.createElement("path", {
				d: "M16.5,2H12.71l-.85-.85A.5.5,0,0,0,11.5,1h-3a.5.5,0,0,0-.35.15L7.29,2H3.5a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h13a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,16.5,2Z"
			}), s.a.createElement("path", {
				d: "M16.5,5H3.5a.5.5,0,0,0-.5.5v12A1.5,1.5,0,0,0,4.5,19h11A1.5,1.5,0,0,0,17,17.5V5.5A.5.5,0,0,0,16.5,5ZM6.75,15.5a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Zm4,0a.75.75,0,0,1-1.5,0v-7a.75.75,0,0,1,1.5,0Z"
			}));
			t.b = o
		}
	}
]);
//# sourceMappingURL=HarbergerTaxManageModal.487522f17ba1ac01a0da.js.map