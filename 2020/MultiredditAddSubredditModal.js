// https://www.redditstatic.com/desktop2x/MultiredditAddSubredditModal.241697f3d7b21ca7c4c0.js
// Retrieved at 3/23/2020, 3:40:10 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["MultiredditAddSubredditModal"], {
		"./node_modules/lodash/without.js": function(e, t, r) {
			var a = r("./node_modules/lodash/_baseDifference.js"),
				s = r("./node_modules/lodash/_baseRest.js"),
				n = r("./node_modules/lodash/isArrayLikeObject.js"),
				i = s((function(e, t) {
					return n(e) ? a(e, t) : []
				}));
			e.exports = i
		},
		"./src/reddit/components/CharacterCountdown/index.m.less": function(e, t, r) {
			e.exports = {
				container: "s5ap8yh1b4ZfwxvHizW3f",
				mOverflow: "_19JhaP1slDQqu2XgT3vVS0"
			}
		},
		"./src/reddit/components/CharacterCountdown/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				o = r("./src/reddit/components/CharacterCountdown/index.m.less"),
				d = r.n(o);
			const {
				fbt: c
			} = r("./node_modules/fbt/lib/FbtPublic.js");
			t.a = e => s.a.createElement(i.b, {
				className: Object(n.a)(e.className, d.a.container, e.text.length > e.maxChars ? d.a.mOverflow : null)
			}, c._("{characters} Characters", [c._param("characters", e.maxChars - e.text.length)], {
				hk: "1ewWIT"
			}))
		},
		"./src/reddit/components/MultiredditAddSubredditModal/index.m.less": function(e, t, r) {
			e.exports = {
				main: "_1tSDRZp-SeaEh1gP_bTeUq",
				listContainer: "gk5vLoU5P40dKa7_jYbXX",
				listItem: "_3GisC5qJ-ELW9BhucOWh1M",
				inputListItem: "W52oKXrM7wIOgPEsM1hdF",
				checkbox: "_3TF6yTEONMGw9uZJrC6qNB",
				createSubmitBtn: "_2vhmbp3zhgsvktJ-Md6ZM1",
				loading: "_3m9ht2YeKd1XMwtMyuepve",
				createErrorMsg: "_2D-eDfWFyfQWYPYseO9ZRx",
				icon: "_26ofGPdBtTe3AN2qS1MQVA",
				label: "_1S4dp8VZwrWTJ66AYDKJ8H",
				name: "_3xwBa4odGa5IF1t_G8QYQg",
				details: "_2zDCF9LmF0oiO_eJZJpSNO",
				loadingContainer: "_3wBitqcqznqbZxPeecLk5t",
				loadingIcon: "SpROgnWoGupX43VtXP5T7",
				forUser: "_3GcEKbLM31to1VwqmbzDdL"
			}
		},
		"./src/reddit/components/MultiredditAddSubredditModal/index.tsx": function(e, t, r) {
			"use strict";
			r.r(t);
			var a = r("./node_modules/lodash/noop.js"),
				s = r.n(a),
				n = r("./node_modules/lodash/without.js"),
				i = r.n(n),
				o = r("./node_modules/react/index.js"),
				d = r.n(o),
				c = r("./node_modules/react-redux/es/index.js"),
				l = r("./node_modules/reselect/es/index.js"),
				m = r("./src/higherOrderComponents/asModal/index.tsx"),
				u = r("./src/lib/classNames/index.ts"),
				h = r("./src/reddit/actions/modal.ts"),
				p = r("./src/reddit/actions/multireddit/index.ts"),
				b = r("./src/reddit/components/CharacterCountdown/index.tsx"),
				f = r("./src/reddit/components/ModalStyledComponents/index.tsx"),
				x = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				C = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.ts"),
				g = r("./src/reddit/components/ThemeProvider/index.tsx"),
				S = r("./src/reddit/constants/keycodes.ts"),
				y = r("./src/reddit/constants/posts.ts"),
				E = r("./src/reddit/contexts/PageLayer/index.tsx"),
				_ = r("./src/reddit/controls/Button/index.tsx"),
				v = r("./src/reddit/controls/LoadingIcon/index.tsx"),
				O = r("./src/reddit/helpers/multireddit/index.ts"),
				N = r("./src/reddit/i18n/components.tsx"),
				w = r("./src/reddit/i18n/utils.ts"),
				j = r("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				k = r("./src/reddit/models/Multireddit/index.ts"),
				F = r("./src/reddit/models/Subreddit/index.ts"),
				P = r("./src/reddit/selectors/multireddit.ts"),
				R = r("./src/reddit/controls/Checkbox/index.tsx"),
				I = r("./src/reddit/components/MultiredditAddSubredditModal/index.m.less"),
				M = r.n(I),
				T = e => {
					let {
						containsSubreddit: t,
						isSelected: r,
						multireddit: a,
						onCheck: s,
						recentRef: n
					} = e;
					return d.a.createElement("div", {
						className: M.a.listItem,
						onClick: s,
						ref: n
					}, d.a.createElement(R.a, {
						className: M.a.checkbox,
						disabled: t,
						isCheckboxSelected: r || t,
						toggleCheckbox: s
					}), d.a.createElement("img", {
						src: a.icon,
						className: M.a.icon
					}), d.a.createElement("div", {
						className: M.a.label
					}, d.a.createElement("div", {
						className: M.a.name
					}, a.displayText), d.a.createElement("div", {
						className: M.a.details
					}, t ? d.a.createElement(N.c, null, "Community already added to this feed") : d.a.createElement(N.c, null, d.a.createElement(N.b, {
						name: "num-subreddits"
					}, a.subredditCount), " ", d.a.createElement(N.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: a.subredditCount
					})))))
				};
			const A = 40,
				L = 12,
				D = Object(E.t)(),
				G = Object(l.c)({
					createApiError: e => e.multireddits.api.create.error,
					createApiFetched: e => e.multireddits.api.create.fetched,
					createApiPending: e => e.multireddits.api.create.pending,
					currentSubredditOrProfile: E.o,
					mineApiFetched: P.h,
					mineApiPending: P.i,
					myMultireddits: P.j,
					submitApiFetched: e => e.multireddits.api.addSubreddit.fetched,
					submitApiPending: e => e.multireddits.api.addSubreddit.pending
				}),
				z = Object(c.b)(G, e => ({
					onAddToMulireddits: (t, r) => e(Object(p.a)({
						identifier: t,
						multiredditNames: r
					})),
					onClose: () => e(Object(h.f)()),
					onCreateSubmit: t => {
						e(Object(p.b)({
							displayName: t,
							shouldNavigate: !1
						}))
					}
				}), (e, t, r) => Object.assign({}, r, e, t, {
					onSubmit: r => {
						e.currentSubredditOrProfile && t.onAddToMulireddits({
							name: e.currentSubredditOrProfile.name,
							type: e.currentSubredditOrProfile.type === F.c.User ? y.a.PROFILE : y.a.SUBREDDIT
						}, r)
					}
				}));
			class B extends d.a.Component {
				constructor(e) {
					super(e), this.state = {
						creatingName: "",
						isCreating: !1,
						lastCreatedName: void 0,
						selected: [],
						showCreateError: !1,
						showCreateSuccess: !1
					}, this.onCheck = e => () => {
						const {
							selected: t
						} = this.state;
						this.setState({
							selected: t.includes(e) ? i()(this.state.selected, e) : [...t, e]
						})
					}, this.onSubmit = () => {
						this.props.onSubmit(this.state.selected)
					}, this.onCreatingChange = e => {
						this.setState({
							creatingName: e.target.value,
							displayTextError: void 0,
							showCreateError: !1,
							showCreateSuccess: !1
						})
					}, this.onCreateSubmit = () => {
						const e = Object(O.a)({
							displayText: this.state.creatingName,
							myMultireddits: this.props.myMultireddits,
							thisMultireddit: null
						});
						e ? this.setState({
							displayTextError: e,
							showCreateError: !0
						}) : this.props.onCreateSubmit(this.state.creatingName)
					}, this.onCreateKeyDown = e => {
						e.which === S.a.Enter && this.onCreateSubmit()
					}, this.onCreateClick = () => {
						this.setState({
							isCreating: !0
						}), window.setTimeout(() => this.inputRef && this.inputRef.focus())
					}, this.setScrollRef = e => this.scrollRef = e, this.setInputRef = e => this.inputRef = e, this.setRecentRef = e => this.recentRef = e, this.getCreateState = () => {
						if (!this.props.createApiPending) return this.state.showCreateError || this.state.displayTextError ? x.d.Invalid : this.state.showCreateSuccess ? x.d.Valid : void 0
					}, this.componentDidUpdate = (e, t) => {
						if (e.createApiPending && !this.props.createApiPending && this.props.createApiFetched && !this.props.createApiError) {
							let e;
							const {
								myMultireddits: r
							} = this.props;
							for (let a = r.length - 1; a >= 0; a--)
								if (r[a].displayText === t.creatingName) {
									e = r[a].name;
									break
								} this.setState({
								lastCreatedName: e,
								creatingName: "",
								showCreateSuccess: !0,
								selected: [...this.state.selected, e]
							}), window.setTimeout(() => {
								this.scrollRef && this.recentRef && this.scrollRef.scrollTo({
									top: this.recentRef.offsetTop - this.scrollRef.offsetTop,
									behavior: "smooth"
								}), this.inputRef && this.inputRef.focus()
							})
						}!e.createApiError && this.props.createApiError && t.creatingName === this.state.creatingName && this.setState({
							showCreateError: !0
						})
					}, this.getOnCheckFn = e => (this.onCheckFnCache[e] || (this.onCheckFnCache[e] = this.onCheck(e)), this.onCheckFnCache[e]), this.containsCurrentSubredditOrProfile = e => {
						const {
							currentSubredditOrProfile: t
						} = this.props;
						return t && (t.type === F.c.User && e.profileIds && e.profileIds.indexOf(t.id) > -1 || t.type !== F.c.User && e.subredditIds && e.subredditIds.indexOf(t.id) > -1) || !1
					}, this.inputRef = null, this.recentRef = null, this.scrollRef = null, this.onCheckFnCache = {}
				}
				render() {
					const {
						props: {
							createApiPending: e,
							mineApiPending: t,
							myMultireddits: r,
							onClose: a,
							submitApiPending: n
						},
						state: {
							creatingName: i,
							displayTextError: o,
							isCreating: c,
							lastCreatedName: l,
							selected: m,
							showCreateError: h,
							showCreateSuccess: p
						}
					} = this;
					return d.a.createElement(g.a, {
						forceRedditTheme: !0
					}, d.a.createElement(f.c, null, d.a.createElement(f.g, null, d.a.createElement(j.a, null, d.a.createElement(f.n, null, d.a.createElement(N.c, null, "Add community to Custom Feed")), d.a.createElement("button", {
						onClick: a
					}, d.a.createElement(f.b, null)))), d.a.createElement(f.j, {
						className: M.a.main
					}, d.a.createElement("div", {
						className: M.a.listContainer,
						ref: this.setScrollRef
					}, t ? d.a.createElement("div", {
						className: M.a.loadingContainer
					}, d.a.createElement(v.a, {
						className: Object(u.a)(M.a.loadingIcon, M.a.forUser),
						sizePx: A
					})) : r.map(e => d.a.createElement(T, {
						containsSubreddit: this.containsCurrentSubredditOrProfile(e),
						isSelected: m.indexOf(e.name) > -1 || !1,
						key: e.name,
						multireddit: e,
						onCheck: this.getOnCheckFn(e.name),
						recentRef: e.name === l ? this.setRecentRef : s.a
					}))), d.a.createElement("div", null, c ? d.a.createElement("div", {
						className: Object(u.a)(M.a.listItem, M.a.inputListItem)
					}, d.a.createElement(x.b, {
						inputRef: this.setInputRef,
						label: Object(w.c)("new custom feed"),
						maxLength: k.c,
						onChange: this.onCreatingChange,
						onKeyDown: this.onCreateKeyDown,
						state: this.getCreateState(),
						value: i
					}), h ? d.a.createElement(C.c, {
						className: M.a.createErrorMsg
					}, o === k.a.SameName ? Object(w.c)("A custom feed with that name already exists") : o === k.a.TooShort ? Object(w.c)("Name must contain at least two alphanumeric characters") : Object(w.c)("Something went wrong with this name, maybe try something else?")) : d.a.createElement(b.a, {
						text: i,
						maxChars: k.c
					}), !p && !h && (e ? d.a.createElement(v.a, {
						className: Object(u.a)(M.a.createSubmitBtn, M.a.loading),
						sizePx: L
					}) : d.a.createElement(_.n, {
						className: M.a.createSubmitBtn,
						onClick: this.onCreateSubmit
					}, d.a.createElement(N.c, null, "create")))) : d.a.createElement(_.n, {
						className: M.a.listItem,
						onClick: this.onCreateClick
					}, d.a.createElement(N.c, null, "+ Create a custom feed")))), d.a.createElement(f.e, null, d.a.createElement(f.o, {
						disabled: !!n || !m.length || e,
						onClick: this.onSubmit
					}, n ? d.a.createElement(v.a, {
						className: M.a.loadingIcon,
						sizePx: L
					}) : d.a.createElement(N.c, null, "Update")))))
				}
			}
			t.default = Object(m.a)(D(z(B)))
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, r) {
			e.exports = {
				input: "_21N5nyVpBzbYCGTZ5WIri4",
				field: "_3K-rjepIoTAwKn_2B6UjSe",
				textareaField: "_3MvsRRj8v7ENJxFd2FRVzJ",
				textareaContainer: "_2q-RFz4xm8SXUM0zMrr8fq",
				mValid: "_2SuoSID5jS_A8otvMZNbUx",
				mInvalid: "_10eyptxJ3JPt74-_F9S7Y2",
				mWhiteField: "ywq-YkM3-987lbv_INHu_",
				control: "f_d5CYdNQxWwaGxH1SK7O",
				hasState: "_2N0IHX_0DbIGyJAPD5co-v",
				textarea: "_3zFItbRAgic4B5QFRuG51C",
				label: "_25QcYBzdEJtMuM4oKa6C_E",
				required: "_237-Cb_7kzH90efX4m0ikl",
				icon: "_3DmUjRewdA0uXlriQWqBi6",
				Invalid: "_1G5fQQh3gLl4hc3DIMA5j3",
				invalid: "_1G5fQQh3gLl4hc3DIMA5j3"
			}
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, r) {
			"use strict";
			r.d(t, "d", (function() {
				return f
			})), r.d(t, "a", (function() {
				return x
			})), r.d(t, "b", (function() {
				return g
			})), r.d(t, "c", (function() {
				return S
			}));
			r("./node_modules/core-js/modules/es6.symbol.js");
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/lib/lessComponent.tsx"),
				o = r("./src/reddit/controls/Input/index.tsx"),
				d = r("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				c = r("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				l = r.n(c);

			function m() {
				return (m = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			var u = function(e, t) {
				var r = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (r[a[s]] = e[a[s]])
				}
				return r
			};
			const h = i.a.div("icon", l.a),
				p = i.a.textarea("textarea", l.a),
				b = i.a.span("Invalid", l.a);
			var f, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(f || (f = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const C = e => s.a.createElement("div", {
					className: Object(n.a)(e.isRequired && l.a.required, e.className, Object.assign({
						[l.a.container]: !e.isTextarea,
						[l.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[l.a.mValid]: e.state === f.Valid,
						[l.a.mInvalid]: e.state === f.Invalid,
						[l.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
					}))
				}, s.a.createElement("label", {
					className: Object(n.a)({
						[l.a.field]: !e.isTextarea,
						[l.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && s.a.createElement("span", {
					className: l.a.label
				}, e.label), !!e.state && s.a.createElement(h, {
					className: Object(n.a)({
						[l.a.mValid]: e.state === f.Valid,
						[l.a.mInvalid]: e.state === f.Invalid
					})
				}, e.state === f.Valid && s.a.createElement(d.a, null), e.state === f.Invalid && s.a.createElement(b, null, "!")))),
				g = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: a,
						isRequired: i,
						label: d,
						onKeyDown: c,
						state: h
					} = e, p = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return s.a.createElement(C, {
						backgroundColorState: t,
						className: r,
						isRequired: i,
						label: d,
						state: h
					}, s.a.createElement(o.a, m({}, p, {
						className: Object(n.a)(l.a.input, l.a.control, {
							[l.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: a,
						onKeyDown: c
					})))
				},
				S = e => {
					const {
						backgroundColorState: t,
						className: r,
						inputRef: a,
						isRequired: i,
						label: o,
						onKeyDown: d,
						state: c
					} = e, h = u(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return s.a.createElement(C, {
						backgroundColorState: t,
						className: r,
						isRequired: i,
						label: o,
						state: c,
						isTextarea: !0
					}, s.a.createElement(p, m({}, h, {
						className: Object(n.a)({
							[l.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: a,
						onKeyDown: d
					})))
				}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less": function(e, t, r) {
			e.exports = {
				FormPage: "_9ZuQyDXhFth1qKJF4KNm8",
				formPage: "_9ZuQyDXhFth1qKJF4KNm8",
				HomePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				homePageTitle: "_1JmnMJclrTwTPpAip5U_Hm",
				HomePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				homePageBreadcrumb: "_2iNJX36LR2tMHx_unzEkVM",
				HomePageGroup: "_306gA2lxjCHX44ssikUp3O",
				homePageGroup: "_306gA2lxjCHX44ssikUp3O",
				FormPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				formPageTitle: "_1Omf6afKRpv3RKNCWjIyJ4",
				FormPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				formPageSection: "_2Ss7VGMX-UPKt9NhFRtgTz",
				FormGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				formGroup: "_3vWu4F9B4X4Yc-Gm86-FMP",
				FormGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				formGroupTitle: "_2qAEe8HGjtHsuKsHqNCa9u",
				FormElement: "c5RWd-O3CYE-XSLdTyjtI",
				formElement: "c5RWd-O3CYE-XSLdTyjtI",
				FormGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				formGroupDescription: "_3whORKuQps-WQpSceAyHuF",
				FormItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				formItem: "_1Qk-ka6_CJz1fU3OUfeznu",
				FormElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				formElementTitle: "_3ds8Wk2l32hr3hLddQshhG",
				FormElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				formElementDescription: "_1h0r6vtgOzgWtu-GNBO6Yb",
				FormElementError: "horIoLCod23xkzt7MmTpC",
				formElementError: "horIoLCod23xkzt7MmTpC",
				FormElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				formElementSubGroup: "_33Iw1wpNZ-uhC05tWsB9xi",
				FormListItem: "_2M7LQbQxH40ingJ9h9RslL",
				formListItem: "_2M7LQbQxH40ingJ9h9RslL"
			}
		},
		"./src/reddit/components/StructuredStyles/StyledComponents/forms.ts": function(e, t, r) {
			"use strict";
			r.d(t, "k", (function() {
				return i
			})), r.d(t, "p", (function() {
				return o
			})), r.d(t, "n", (function() {
				return d
			})), r.d(t, "o", (function() {
				return c
			})), r.d(t, "m", (function() {
				return l
			})), r.d(t, "l", (function() {
				return m
			})), r.d(t, "f", (function() {
				return u
			})), r.d(t, "h", (function() {
				return h
			})), r.d(t, "a", (function() {
				return p
			})), r.d(t, "g", (function() {
				return b
			})), r.d(t, "i", (function() {
				return f
			})), r.d(t, "e", (function() {
				return x
			})), r.d(t, "b", (function() {
				return C
			})), r.d(t, "c", (function() {
				return g
			})), r.d(t, "d", (function() {
				return S
			})), r.d(t, "j", (function() {
				return y
			}));
			var a = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/components/StructuredStyles/StyledComponents/forms.m.less"),
				n = r.n(s);
			const i = a.a.section("FormPage", n.a),
				o = a.a.h1("HomePageTitle", n.a),
				d = a.a.button("HomePageBreadcrumb", n.a),
				c = a.a.div("HomePageGroup", n.a),
				l = a.a.h1("FormPageTitle", n.a),
				m = a.a.div("FormPageSection", n.a),
				u = a.a.div("FormGroup", n.a),
				h = a.a.h2("FormGroupTitle", n.a),
				p = a.a.div("FormElement", n.a),
				b = a.a.div("FormGroupDescription", n.a),
				f = a.a.div("FormItem", n.a),
				x = a.a.h3("FormElementTitle", n.a),
				C = a.a.div("FormElementDescription", n.a),
				g = a.a.div("FormElementError", n.a),
				S = a.a.div("FormElementSubGroup", n.a),
				y = a.a.li("FormListItem", n.a)
		},
		"./src/reddit/controls/Checkbox/index.m.less": function(e, t, r) {
			e.exports = {
				Checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				checkbox: "_2nBuBcqz2x0pSPNZfAPkF",
				mActive: "tLupTGll01Uj0qzkNAjEB",
				mActiveRedditStyle: "_3zu1ZycuCQZ6UeSogWYVka",
				mDisabled: "_2hst4PduZ_m486CeR0rkEm",
				mDisabledRedditStyle: "_2MFHixazvnGgoOmoOzwbIu",
				CheckboxSizing: "_1yJa2uREsO-mxGPj5tbxXy",
				checkboxSizing: "_1yJa2uREsO-mxGPj5tbxXy"
			}
		},
		"./src/reddit/controls/Checkbox/index.tsx": function(e, t, r) {
			"use strict";
			r("./node_modules/core-js/modules/es6.symbol.js");
			var a = r("./node_modules/react/index.js"),
				s = r.n(a),
				n = r("./src/lib/classNames/index.ts"),
				i = r("./src/reddit/icons/svgs/Checkbox/index.tsx");

			function o() {
				return (o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			var d = e => s.a.createElement("svg", o({
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, e), s.a.createElement("g", {
					transform: "translate(-32.000000, -173.000000)"
				}, s.a.createElement("g", {
					transform: "translate(32.000000, 173.000000)"
				}, s.a.createElement("path", {
					d: "M0,3.34755033 C0,1.49874933 1.5032506,0 3.34755033,0 L16.6524497,0 C18.5012507,0 20,1.5032506 20,3.34755033 L20,16.6524497 C20,18.5012507 18.4967494,20 16.6524497,20 L3.34755033,20 C1.49874933,20 0,18.4967494 0,16.6524497 L0,3.34755033 Z M4.5,8.5 C4.22385763,8.5 4,8.72385763 4,9 L4,11 C4,11.2761424 4.22385763,11.5 4.5,11.5 L15.5,11.5 C15.7761424,11.5 16,11.2761424 16,11 L16,9 C16,8.72385763 15.7761424,8.5 15.5,8.5 L4.5,8.5 Z"
				})))),
				c = r("./src/reddit/icons/svgs/CheckboxSelected/index.tsx"),
				l = r("./src/reddit/controls/Checkbox/index.m.less"),
				m = r.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t];
						for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (e[a] = r[a])
					}
					return e
				}).apply(this, arguments)
			}
			var h = function(e, t) {
				var r = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var s = 0;
					for (a = Object.getOwnPropertySymbols(e); s < a.length; s++) t.indexOf(a[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[s]) && (r[a[s]] = e[a[s]])
				}
				return r
			};
			const p = e => t => {
					const {
						className: r,
						disabled: a,
						redditStyle: i,
						"data-redditstyle": o
					} = t, d = h(t, ["className", "disabled", "redditStyle", "data-redditstyle"]), c = ((e, t, r) => {
						const a = !(!t && !r);
						let s = "";
						return s = e ? a ? m.a.mDisabledRedditStyle : m.a.mDisabled : a ? m.a.mActiveRedditStyle : m.a.mActive
					})(a, i, o);
					return s.a.createElement(e, u({
						className: Object(n.a)(m.a.Checkbox, c, r)
					}, d))
				},
				b = p(c.a),
				f = p(d);
			t.a = e => {
				const t = e.isHalfCheckboxSelected ? f : e.isCheckboxSelected ? b : i.a;
				return s.a.createElement("button", {
					"aria-checked": e.isHalfCheckboxSelected ? "mixed" : e.isCheckboxSelected,
					className: e.className,
					onClick: t => {
						e.toggleCheckbox && (t.stopPropagation(), e.toggleCheckbox())
					},
					disabled: e.disabled
				}, s.a.createElement(t, {
					className: Object(n.a)(m.a.CheckboxSizing, e.className),
					"data-redditstyle": e.redditStyle,
					disabled: e.disabled,
					style: e.checkBoxStyle
				}))
			}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./src/lib/lessComponent.tsx"),
				s = r("./src/reddit/controls/Input/index.m.less"),
				n = r.n(s);
			t.a = a.a.input("input", n.a)
		},
		"./src/reddit/helpers/multireddit/index.ts": function(e, t, r) {
			"use strict";
			r.d(t, "a", (function() {
				return s
			}));
			r("./node_modules/core-js/modules/es6.regexp.replace.js");
			var a = r("./src/reddit/models/Multireddit/index.ts");
			const s = e => {
				let {
					displayText: t,
					myMultireddits: r,
					thisMultireddit: s
				} = e;
				return t.replace(/[^0-9A-Za-z]+/gi, "").length < a.d ? a.a.TooShort : r.filter(e => {
					let {
						url: t
					} = e;
					return !s || t !== s.url
				}).map(e => {
					let {
						displayText: t
					} = e;
					return t.toLowerCase()
				}).indexOf(t.trim().toLowerCase()) > -1 ? a.a.SameName : void 0
			}
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, r) {
			"use strict";
			var a = r("./node_modules/react/index.js"),
				s = r.n(a);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=MultiredditAddSubredditModal.241697f3d7b21ca7c4c0.js.map