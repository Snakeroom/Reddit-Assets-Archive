// https://www.redditstatic.com/desktop2x/FlairEdit.759b0e3c33b198a1c24b.js
// Retrieved at 12/2/2021, 10:50:04 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FlairEdit"], {
		"./node_modules/draft-js/dist/Draft.css": function(e, t, o) {},
		"./node_modules/lodash/_baseInRange.js": function(e, t) {
			var o = Math.max,
				s = Math.min;
			e.exports = function(e, t, i) {
				return e >= s(t, i) && e < o(t, i)
			}
		},
		"./node_modules/lodash/inRange.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseInRange.js"),
				i = o("./node_modules/lodash/toFinite.js"),
				n = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, o) {
				return t = i(t), void 0 === o ? (o = t, t = 0) : o = i(o), e = n(e), s(e, t, o)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseTimes.js"),
				i = o("./node_modules/lodash/_castFunction.js"),
				n = o("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = n(e)) < 1 || e > r) return [];
				var o = a,
					l = c(e, a);
				t = i(t), e -= a;
				for (var d = s(l, t); ++o < e;) t(o);
				return d
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return i
			}));
			const s = e => e;

			function i(e, t, o) {
				const [i, n] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: r = s
				} = t || {};
				let {
					start: a = 0,
					end: c = i
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (c = c > i ? i : c)) return;
				let l = n(a),
					d = r(l, a),
					p = a;
				for (let s = a + 1; s < c; s++) {
					const e = n(s),
						t = r(e, s);
					if (t !== d) {
						if (!1 === o(l, d, p, s)) return;
						d = t, p = s, l = e
					}
				}
				o(l, d, p, c)
			}
		},
		"./src/reddit/actions/emoji.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return I
			})), o.d(t, "d", (function() {
				return S
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "h", (function() {
				return C
			})), o.d(t, "g", (function() {
				return D
			})), o.d(t, "f", (function() {
				return k
			})), o.d(t, "a", (function() {
				return R
			})), o.d(t, "q", (function() {
				return L
			})), o.d(t, "p", (function() {
				return U
			})), o.d(t, "l", (function() {
				return K
			})), o.d(t, "m", (function() {
				return W
			})), o.d(t, "j", (function() {
				return J
			})), o.d(t, "k", (function() {
				return G
			})), o.d(t, "b", (function() {
				return H
			})), o.d(t, "n", (function() {
				return Y
			})), o.d(t, "e", (function() {
				return q
			})), o.d(t, "o", (function() {
				return $
			}));
			var s = o("./node_modules/fbt/lib/FbtPublic.js"),
				i = o("./node_modules/lodash/forEach.js"),
				n = o.n(i),
				r = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeApiRequest/index.ts"),
				c = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/lib/uploadToS3/index.ts"),
				d = o("./src/reddit/constants/headers.ts");
			const p = async (e, t) => Object(a.a)(Object(c.a)(e, [d.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: r.jb.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const o = n()(e, (e, o) => ("snoomojis" !== o && (t = o), n()(e, (t, o) => {
					e[o] = {
						name: o,
						userFlairAllowed: t.user_flair_allowed,
						postFlairAllowed: t.post_flair_allowed,
						modFlairOnly: t.mod_flair_only,
						url: t.url
					}
				})));
				return {
					[t]: {
						emojis: o[t],
						snoomojis: o.snoomojis
					}
				}
			})(e.body)), e));
			var m = o("./src/lib/makeActionCreator/index.ts"),
				u = o("./src/reddit/actions/imageUploads.ts"),
				h = o("./src/reddit/actions/toaster.ts"),
				f = o("./src/reddit/helpers/getGenericUploadError.ts"),
				j = o("./src/reddit/helpers/getS3KeyFromUrl/index.ts"),
				g = o("./src/reddit/helpers/media/index.ts"),
				b = o("./src/reddit/models/Emoji/index.ts"),
				E = o("./src/reddit/models/Image/index.tsx"),
				x = o("./src/reddit/models/Toast/index.ts"),
				O = o("./src/reddit/selectors/emojis.ts"),
				y = o("./src/reddit/selectors/subreddit.ts");
			const I = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				T = Object(m.a)(I),
				S = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				_ = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				v = Object(m.a)(S),
				w = Object(m.a)(_),
				C = "GET_ALL_EMOJIS_PENDING",
				D = "GET_ALL_EMOJIS_LOADED",
				k = "GET_ALL_EMOJIS_FAILED",
				P = Object(m.a)(C),
				F = Object(m.a)(D),
				N = Object(m.a)(k),
				R = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				A = Object(m.a)(R),
				M = e => ({
					text: s.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: s.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: U(e)
				}),
				L = ({
					imageData: e,
					subredditId: t
				}) => async (o, s, i) => {
					const n = s(),
						p = Object(y.P)(n, {
							subredditId: t
						}).name;
					o(Object(u.k)(e));
					const m = e.file,
						h = await Object(g.g)(m),
						f = await (async (e, t, o, s) => Object(a.a)(Object(c.a)(e, [d.a]), {
							endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
							method: r.jb.POST,
							data: {
								filepath: o,
								mimetype: s
							}
						}))(i.apiContext(), p, m.name, h);
					let j = !1;
					if (f.ok) {
						const t = await (async (e, t, o) => Object(l.a)(o, t))(i.apiContext(), f.body.s3UploadLease, m);
						if (t.ok) {
							if (!s().imageUploads[e.id]) return Object(E.d)(e), !1;
							const i = decodeURIComponent(t.body.PostResponse.Location),
								n = f.body.websocketUrl,
								r = Object(E.n)(e, i, n);
							o(Object(u.j)(r)), j = !0
						} else {
							const s = Object(E.k)(e, t.error);
							o(Object(u.i)(s))
						}
					} else {
						const t = Object(E.k)(e, f.error);
						o(Object(u.i)(t))
					}
					return j
				}, B = (e, t) => async (o, s, i) => {
					const {
						imageData: n,
						subredditId: l,
						emojiName: p,
						settings: m
					} = e, f = Object(j.a)(n.url), g = s(), b = Object(y.P)(g, {
						subredditId: l
					}).name, x = await (async (e, t, o, s, i) => Object(a.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: r.jb.POST,
						data: {
							s3_key: o,
							name: s,
							mod_flair_only: i.modFlairOnly,
							post_flair_allowed: i.postFlairAllowed,
							user_flair_allowed: i.userFlairAllowed
						}
					}))(i.apiContext(), b, f, p, m);
					if (!x.ok) {
						const s = Object(E.k)(n, x.error);
						o(Object(u.i)(s)), o(Object(h.f)(M(e))), t && t.close()
					}
					return x.ok
				}, U = e => async (t, o, s) => {
					const {
						imageData: i,
						subredditId: n,
						emojiName: r,
						settings: a
					} = e;
					if (t(Object(u.k)(i)), !i.websocketUrl) return t(Object(h.f)({
						text: "Could not upload emoji"
					}));
					let c;
					const l = new WebSocket(i.websocketUrl);
					return l.onopen = async () => {
						c = await B(e, l)(t, o, s)
					}, l.onmessage = o => {
						const s = JSON.parse(o.data);
						if ("success" === s.type) {
							c = !0;
							const e = s.payload.emoji_url,
								o = Object(E.o)(i, e);
							t(Object(u.l)(o));
							const l = Object(b.e)(r, o.url, n, a);
							t(T(l)), t(K(n))
						} else {
							const o = Object(f.a)(r),
								s = Object(E.k)(i, o);
							t(Object(u.i)(s)), t(Object(h.f)(M(e)))
						}
						l.close()
					}, l.onerror = o => {
						c = !1;
						const s = Object(f.a)(r),
							n = Object(E.k)(i, s);
						t(Object(u.i)(n)), t(Object(h.f)(M(e))), l.close()
					}, c
				}, K = e => async (t, o, {
					apiContext: s
				}) => {
					const i = o();
					if (Object(O.a)(i, e)) return;
					const n = Object(y.P)(i, {
						subredditId: e
					}).name;
					t(P(e));
					const r = await p(s(), n);
					if (r.ok) {
						const o = r.body;
						t(F({
							subredditId: e,
							data: o
						}))
					} else t(N({
						subredditId: e,
						error: r.error
					}))
				}, W = e => async (t, o, {
					apiContext: s
				}) => {
					o().emojis[e] || await t(K(e))
				}, J = (e, t) => async (o, i, {
					apiContext: n
				}) => {
					const l = i(),
						p = Object(y.P)(l, {
							subredditId: t
						}).name,
						m = await (async (e, t, o) => Object(a.a)(Object(c.a)(e, [d.a]), {
							endpoint: `${e.apiUrl}/api/v1/${o}/emoji/${t}`,
							method: r.jb.DELETE,
							type: "json"
						}))(n(), e, p);
					if (m.ok) {
						o(v({
							emojiName: e,
							subredditId: t
						})), o(h.f({
							kind: x.b.SuccessCommunityGreen,
							text: s.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else o(w(m.error)), o(h.f({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, G = (e, t) => async (o, i, {
					apiContext: n
				}) => {
					const l = i(),
						p = Object(y.P)(l, {
							subredditId: e
						}).name;
					if ((await (async (e, t, o) => Object(a.a)(Object(c.a)(e, [d.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: r.jb.POST,
							data: {
								subreddit: t,
								enable: o
							}
						}))(n(), p, t)).ok) {
						o(A({
							subredditId: e,
							emojisEnabled: t
						}))
					} else o(h.f({
						kind: x.b.Error,
						text: s.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, H = "EMOJI_CUSTOM_SIZE_UPDATED", z = Object(m.a)(H), Y = (e, t) => async (o, i, {
					apiContext: n
				}) => {
					const l = i(),
						p = Object(y.P)(l, {
							subredditId: e
						}).name;
					(await (async (e, t, o) => Object(a.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: r.jb.POST,
						data: o
					}))(n(), p, t)).ok ? o(z({
						subredditId: e,
						emojiCustomSize: t
					})) : o(h.f({
						kind: x.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, q = "EMOJI_PERMISSIONS_UPDATED", V = Object(m.a)(q), $ = (e, t, o, i) => async (n, l, {
					apiContext: p
				}) => {
					const m = l(),
						u = Object(y.P)(m, {
							subredditId: i
						}).name;
					(await (async (e, t, o, s) => Object(a.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/v1/${o}/emoji_permissions.json`,
						method: r.jb.POST,
						data: {
							name: t,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed,
							mod_flair_only: s.modFlairOnly
						}
					}))(p(), e, u, o)).ok ? (n(V({
						emojiName: e,
						isSnoomoji: t,
						settings: o,
						subredditId: i
					})), n(h.f({
						kind: x.b.SuccessCommunityGreen,
						text: s.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : n(h.f({
						kind: x.b.Error,
						text: s.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/index.m.less": function(e, t, o) {
			e.exports = {
				helpIcon: "_1KmLnyBoAj71WAKgAXPlZC",
				Component: "_3ECnuRxNmqDJyrebIUcw1L",
				component: "_3ECnuRxNmqDJyrebIUcw1L",
				HelperText: "_1mmzvmn7GqIdys5e4knfcS",
				helperText: "_1mmzvmn7GqIdys5e4knfcS",
				hasError: "_3IZP_TWy_AFf_sOPyPn7sK",
				EditorWrapper: "_26N9NolvnMKRgg1L1Oa2jl",
				editorWrapper: "_26N9NolvnMKRgg1L1Oa2jl",
				isCompact: "_5_qZ-OQAL-g3Yhedx3Pwb",
				EmojiPickerButton: "_16ydxGRQI3XFhtJqBcdrN0",
				emojiPickerButton: "_16ydxGRQI3XFhtJqBcdrN0",
				isActive: "Ceq_Z4KNy4wLTPo999tdP",
				SmileIcon: "_1W1nluDJLqNTr75crbxNbY",
				smileIcon: "_1W1nluDJLqNTr75crbxNbY"
			}
		},
		"./src/reddit/components/FlairSearch/FlairEdit/index.tsx": function(e, t, o) {
			"use strict";
			o.r(t);
			var s = o("./node_modules/draft-js/lib/Draft.js"),
				i = o("./node_modules/lodash/isEqual.js"),
				n = o.n(i),
				r = o("./node_modules/react/index.js"),
				a = o.n(r),
				c = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				d = o("./src/higherOrderComponents/asTooltip.tsx"),
				p = o("./src/lib/classNames/index.ts"),
				m = o("./src/lib/formatEmojiName/index.ts"),
				u = o("./src/lib/lessComponent.tsx"),
				h = o("./node_modules/fbt/lib/FbtPublic.js"),
				f = o("./src/reddit/actions/emoji.ts"),
				j = o("./src/reddit/actions/tooltip.ts"),
				g = o("./src/reddit/constants/elementClassNames.ts"),
				b = o("./src/reddit/constants/flair.ts"),
				E = o("./src/reddit/controls/Dropdown/index.tsx"),
				x = o("./src/reddit/constants/keycodes.ts"),
				O = o("./src/reddit/selectors/emojis.ts"),
				y = o("./src/reddit/controls/EmojiPicker/EmojiGrid/EmojiItem/index.m.less"),
				I = o.n(y);
			class T extends r.Component {
				constructor() {
					super(...arguments), this.onClick = () => {
						this.props.onClick(this.props.itemIndex)
					}, this.onMouseEnter = () => {
						this.props.onMouseEnter(this.props.itemIndex)
					}, this.onMouseLeave = () => {
						this.props.onMouseLeave(this.props.itemIndex)
					}
				}
				render() {
					const {
						emoji: e,
						isFocused: t
					} = this.props;
					return a.a.createElement("img", {
						src: e.url,
						className: Object(p.a)(I.a.emojiImg, {
							[I.a.mIsFocused]: t
						}),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					})
				}
			}
			var S = o("./src/reddit/controls/EmojiPicker/EmojiGrid/index.m.less"),
				_ = o.n(S);

			function v(e) {
				const {
					emojis: t,
					focusedIndex: o
				} = e;
				return a.a.createElement("div", {
					className: _.a.container
				}, a.a.createElement("div", {
					className: _.a.gridWrapper
				}, t.map((t, s) => a.a.createElement(T, {
					emoji: t,
					itemIndex: s,
					isFocused: s === o,
					onMouseEnter: e.onEmojiEnter,
					onMouseLeave: e.onEmojiLeave,
					onClick: e.onEmojiSelect
				}))))
			}
			var w = o("./src/reddit/controls/Button/index.tsx"),
				C = o("./src/reddit/layout/row/Inline/index.tsx"),
				D = o("./src/reddit/controls/EmojiPicker/Footer/index.m.less"),
				k = o.n(D);

			function P(e) {
				const {
					className: t,
					emoji: o
				} = e;
				return a.a.createElement("div", {
					className: Object(p.a)(k.a.footer, t)
				}, o && a.a.createElement(C.a, {
					className: k.a.emojiInfo
				}, a.a.createElement("img", {
					className: k.a.emojiPreview,
					src: o.url
				}), a.a.createElement("span", {
					className: k.a.emojiLabel
				}, Object(m.b)(o.name))), a.a.createElement(w.r, {
					className: k.a.cancelButton,
					onClick: e.onCancelClick
				}, h.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})))
			}
			var F = o("./src/reddit/icons/svgs/Search/index.tsx"),
				N = o("./src/reddit/controls/EmojiPicker/SearchBar/index.m.less"),
				R = o.n(N);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}

			function M(e) {
				const {
					className: t,
					inputRef: o,
					...s
				} = e;
				return a.a.createElement("div", {
					className: Object(p.a)(R.a.searchBar, t)
				}, a.a.createElement(F.a, {
					className: R.a.searchIcon
				}), a.a.createElement("div", {
					className: R.a.inputWrapper
				}, a.a.createElement("input", A({
					className: R.a.input,
					ref: o,
					placeholder: h.fbt._("Search for emoji", null, {
						hk: "IncEm"
					}),
					spellCheck: !1
				}, s))))
			}
			var L = o("./src/reddit/controls/EmojiPicker/index.m.less"),
				B = o.n(L);
			const U = (e, t) => {
					const o = t.toLowerCase();
					return e.filter(({
						name: e
					}) => -1 !== e.toLowerCase().indexOf(o))
				},
				K = Object(l.c)({
					emojis: O.c
				}),
				W = {
					onGetSubredditEmojis: f.l
				};
			class J extends a.a.Component {
				constructor(e) {
					super(e), this.inputRef = null, this.setInputRef = e => this.inputRef = e, this.onEmojiEnter = e => {
						this.setState({
							focusedIndex: e
						})
					}, this.onEmojiLeave = () => {
						this.setState({
							focusedIndex: -1
						})
					}, this.onEmojiSelect = e => {
						this.selectEmoji(e)
					}, this.onSearchBarInputChange = e => {
						const t = e.target.value,
							o = U(this.props.emojis, t),
							s = o.length ? 0 : -1;
						this.setState({
							searchBarValue: t,
							filteredEmojis: o,
							focusedIndex: s
						})
					}, this.onKeyDown = e => {
						e.which === x.a.Enter ? (e.preventDefault(), this.selectEmoji(this.state.focusedIndex)) : e.which === x.a.Escape && this.props.onCancel()
					}, this.state = {
						isActive: !1,
						focusedIndex: e.emojis.length ? 0 : -1,
						searchBarValue: "",
						filteredEmojis: e.emojis
					}
				}
				componentDidMount() {
					this.props.onGetSubredditEmojis(this.props.subredditId), this.inputRef && this.inputRef.focus()
				}
				componentWillReceiveProps(e) {
					if (e.emojis !== this.props.emojis) {
						const t = U(e.emojis, this.state.searchBarValue);
						this.setState({
							filteredEmojis: t
						})
					}
				}
				selectEmoji(e) {
					const t = this.state.filteredEmojis[e];
					t && this.props.onSelect(t)
				}
				render() {
					const {
						className: e
					} = this.props, {
						filteredEmojis: t,
						focusedIndex: o
					} = this.state, s = t[o];
					return a.a.createElement("div", {
						className: Object(p.a)(B.a.container, e)
					}, a.a.createElement(M, {
						value: this.state.searchBarValue,
						inputRef: this.setInputRef,
						onChange: this.onSearchBarInputChange,
						onKeyDown: this.onKeyDown
					}), a.a.createElement(v, {
						emojis: t,
						focusedIndex: this.state.focusedIndex,
						onEmojiEnter: this.onEmojiEnter,
						onEmojiLeave: this.onEmojiLeave,
						onEmojiSelect: this.onEmojiSelect
					}), a.a.createElement(P, {
						emoji: s,
						onCancelClick: this.props.onCancel
					}))
				}
			}
			var G = Object(c.b)(K, W)(J),
				H = o("./src/reddit/controls/IconTooltip/index.tsx");
			o("./node_modules/draft-js/dist/Draft.css");
			const z = /\r?\n|\r/g;
			var Y, q = e => e.replace(z, ""),
				V = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx");
			! function(e) {
				e.AddImage = "add_image", e.Add = "add", e.Delete = "delete", e.Edit = "edit", e.EnableOff = "enable_off", e.EnableOn = "enable_on"
			}(Y || (Y = {}));
			const $ = ":",
				Q = /:[A-Za-z0-9_-]+/g;
			var X = o("./src/reddit/controls/ImageDisplay/index.tsx"),
				Z = o("./src/reddit/controls/EmojiDropdown/EmojiItem/index.m.less"),
				ee = o.n(Z);
			class te extends r.Component {
				constructor() {
					super(...arguments), this.handleMouseDown = e => {
						e.preventDefault()
					}, this.handleClick = e => {
						e.preventDefault(), this.props.onClick(this.props.itemIndex)
					}, this.handleMouseOver = () => {
						this.props.onFocus(this.props.itemIndex)
					}
				}
				render() {
					const {
						emoji: e,
						isFocused: t
					} = this.props;
					return a.a.createElement("div", {
						className: Object(p.a)(ee.a.emojiListItemWrapper, {
							[ee.a.mIsFocused]: t
						}),
						onMouseDown: this.handleMouseDown,
						onClick: this.handleClick,
						onMouseOver: this.handleMouseOver
					}, a.a.createElement(C.a, null, a.a.createElement(X.a, {
						className: ee.a.emojiImageDisplay,
						backgroundImage: e.url
					}), a.a.createElement("div", {
						className: ee.a.emojiText
					}, Object(m.b)(e.name))))
				}
			}
			var oe = o("./src/reddit/controls/EmojiDropdown/index.m.less"),
				se = o.n(oe);
			const ie = Object(l.a)(O.c, (e, t) => t.searchValue.toLowerCase(), (e, t) => {
					const o = t.toLowerCase();
					return e.filter(({
						name: e
					}) => e.toLowerCase().startsWith(o))
				}),
				ne = Object(l.c)({
					filteredEmojis: ie
				}),
				re = {
					onGetSubredditEmojis: f.m
				};
			class ae extends a.a.Component {
				constructor(e) {
					super(e), this.api = null, this.isKeyScrolling = !1, this.onEmojiFocus = e => {
						this.isKeyScrolling || this.setState({
							selectedIndex: e
						})
					}, this.onMouseDown = e => {
						e.preventDefault(), e.stopPropagation()
					}, this.moveUp = () => {
						const {
							selectedIndex: e
						} = this.state;
						this.setState({
							selectedIndex: e - 1 < 0 ? this.props.filteredEmojis.length - 1 : e - 1
						}), this.isKeyScrolling = !0
					}, this.moveDown = () => {
						const e = (this.state.selectedIndex + 1) % this.props.filteredEmojis.length;
						this.setState({
							selectedIndex: e
						}), this.isKeyScrolling = !0
					}, this.getCurrent = () => {
						const {
							filteredEmojis: e
						} = this.props;
						if (e.length) return e[this.state.selectedIndex]
					}, this.selectEmoji = e => {
						const t = this.props.filteredEmojis[e];
						t && this.props.onSelect(t)
					}, this.state = {
						selectedIndex: 0
					}, this.api = {
						moveUp: this.moveUp,
						moveDown: this.moveDown,
						getCurrent: this.getCurrent
					}, this.containerRef = a.a.createRef()
				}
				componentDidMount() {
					this.props.onGetSubredditEmojis(this.props.subredditId), this.props.onDropdownApi(this.api)
				}
				componentWillMount() {
					this.props.onDropdownApi(null)
				}
				componentDidUpdate() {
					if (!this.isKeyScrolling) return;
					const e = this.containerRef.current;
					if (!e) return;
					const t = e.getBoundingClientRect().height,
						o = e.childNodes.item(0).getBoundingClientRect().height,
						{
							selectedIndex: s
						} = this.state,
						i = this.props.filteredEmojis.length,
						n = e.scrollTop,
						r = Math.max(0, (s + 1) * o - t),
						a = Math.min(s * o, i * o - t),
						c = Math.max(Math.min(a, n), r);
					e.scrollTop = c, setTimeout(() => {
						this.isKeyScrolling = !1
					}, 100)
				}
				render() {
					return this.props.filteredEmojis.length ? a.a.createElement("div", {
						className: se.a.container,
						onMouseDown: this.onMouseDown,
						ref: this.containerRef
					}, this.props.filteredEmojis.map((e, t) => a.a.createElement(te, {
						key: e.url,
						emoji: e,
						isFocused: t === this.state.selectedIndex,
						itemIndex: t,
						onFocus: this.onEmojiFocus,
						onClick: this.selectEmoji
					}))) : null
				}
			}
			var ce = Object(c.b)(ne, re)(ae),
				le = o("./node_modules/draft-js/lib/DraftOffsetKey.js"),
				de = o.n(le),
				pe = o("./src/lib/forEachGroup/index.ts"),
				me = o("./src/lib/memoizeByReference/index.ts"),
				ue = o("./node_modules/lodash/inRange.js"),
				he = o.n(ue),
				fe = o("./node_modules/lodash/times.js"),
				je = o.n(fe);
			const ge = (e, t, o) => {
				const s = t.getText();
				let i, n;
				for (; null !== (i = e.exec(s));) o(n = i.index, n + i[0].length)
			};
			var be = {
					strategy: function(e, t, o) {
						ge(Q, e, t)
					},
					component: e => a.a.createElement("span", null, e.children)
				},
				Ee = o("./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less"),
				xe = o.n(Ee);
			var Oe = {
					strategy: function(e, t, o) {
						e.getCharacterList().forEach((e, s) => {
							const i = e && e.getEntity();
							if (i) {
								o.getEntity(i).getType() === Te.InlineImage && t(s, s + 1)
							}
						})
					},
					component: e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: o
							} = t.getData();
						return a.a.createElement("span", {
							className: xe.a.imageSpan,
							style: {
								backgroundImage: `url(${o})`
							}
						}, e.children)
					}
				},
				ye = o("./node_modules/immutable/dist/immutable.js");
			var Ie, Te;
			! function(e) {
				e.Image = "image", e.Text = "text"
			}(Ie || (Ie = {})),
			function(e) {
				e.InlineImage = "InlineImage"
			}(Te || (Te = {}));
			const Se = () => new s.CompositeDecorator([be, Oe]),
				_e = (e, t) => {
					return e.createEntity(Te.InlineImage, "MUTABLE", {
						url: t.url,
						id: t.id
					})
				},
				ve = (e, t, o) => {
					let i, n = e,
						r = "";
					return o.type === Ie.Image ? (i = (n = _e(n, o)).getLastCreatedEntityKey(), r = " ") : (i = void 0, r = o.text), s.Modifier.replaceText(n, t, r, void 0, i)
				},
				we = (e, t) => {
					const o = e.getSelection(),
						i = o.merge({
							focusOffset: o.getAnchorOffset()
						}),
						n = ve(e.getCurrentContent(), i, t);
					return s.EditorState.push(e, n, "insert-characters")
				},
				Ce = Object(me.a)(e => {
					const t = e.getSelection(),
						o = t.getStartOffset();
					if (!t.isCollapsed()) return;
					const s = e.getBlockTree(t.getStartKey()).findEntry(e => he()(o - 1, e.get("start"), e.get("end")));
					if (!s) return;
					const [i, n] = s, r = n.get("start"), a = n.get("end"), c = e.getCurrentContent().getBlockForKey(t.getStartKey()).getText();
					return n.get("decoratorKey") && c.charAt(r) === $ ? {
						emojiString: c.slice(r + 1, a),
						startIndex: r,
						endIndex: a,
						offsetKey: de.a.encode(t.getStartKey(), i, 0)
					} : void 0
				}),
				De = (e, t) => {
					const o = Ce(e);
					if (!o) return;
					let i = e.getCurrentContent();
					const n = i.getPlainText().charAt(o.endIndex),
						r = e.getSelection().merge({
							anchorOffset: o.startIndex,
							focusOffset: o.endIndex + (n === $ ? 1 : 0)
						}),
						a = {
							type: Ie.Image,
							id: Object(m.b)(t.name),
							url: t.url
						};
					return i = ve(i, r, a), s.EditorState.push(e, i, "insert-characters")
				},
				ke = (e, t) => {
					const o = e.getSelection(),
						i = o.getFocusOffset(),
						n = o.getFocusKey(),
						r = e.getCurrentContent(),
						a = r.getBlockForKey(n),
						c = i > 0 ? a.getEntityAt(i - 1) : null,
						l = c && r.getEntity(c);
					if (l && l.getType() === Te.InlineImage) {
						const i = s.Modifier.replaceText(r, o, t, e.getCurrentInlineStyle());
						return s.EditorState.push(e, i, "insert-characters")
					}
				},
				Pe = "handled",
				Fe = "not-handled";
			class Ne extends a.a.Component {
				constructor(e) {
					super(e), this.setEditorRef = e => this.editorRef = e, this.containerRef = null, this.setContainerRef = e => this.containerRef = e, this.setEmojiDropdownApi = e => this.emojiDropdownApi = e, this.focus = () => this.editorRef && this.editorRef.focus(), this.handleBeforeInput = e => {
						const {
							editorState: t,
							maxLength: o
						} = this.props, s = t.getCurrentContent().getPlainText();
						if (o && s.length >= o) return Pe;
						if (e === $ && this.emojiDropdownApi && this.state.emojiString) {
							const e = this.emojiDropdownApi.getCurrent(),
								t = this.state.emojiString.toLowerCase();
							if (e && e.name.toLowerCase() === t) return this.handleSelectEmoji(e), Pe
						}
						const i = ke(t, e);
						return i ? (this.onChange(i), Pe) : Fe
					}, this.checkEditorStateForEmojis = e => {
						const t = Ce(e);
						this.setState({
							emojiString: t ? t.emojiString : "",
							suppressEmojiDropdown: !!t && this.state.suppressEmojiDropdown
						})
					}, this.handleSelectEmoji = e => {
						if (!this.props.emojisEnabled) return;
						const t = De(this.props.editorState, e);
						t && this.onChange(t)
					}, this.handleKeyDown = e => {
						if (e.stopPropagation(), e.which === x.a.Escape && this.state.emojiString) e.preventDefault(), this.setState({
							suppressEmojiDropdown: !0
						});
						else if (e.which === x.a.ArrowDown && this.emojiDropdownApi) e.preventDefault(), this.emojiDropdownApi.moveDown();
						else if (e.which === x.a.ArrowUp && this.emojiDropdownApi) e.preventDefault(), this.emojiDropdownApi.moveUp();
						else if ((e.which === x.a.Enter || e.which === x.a.Tab) && this.emojiDropdownApi) {
							const t = this.emojiDropdownApi.getCurrent();
							t && (e.preventDefault(), this.handleSelectEmoji(t))
						}
					}, this.handlePastedText = (e, t) => {
						if (!this.editorRef) return Pe;
						const {
							editorState: o,
							maxLength: i
						} = this.props, n = this.editorRef.getClipboard(), r = o.getSelection(), a = e.length - (r.getEndOffset() - r.getStartOffset()), c = o.getCurrentContent().getPlainText().length + a;
						if (i && c > i) return Pe;
						if (n && n.first().getText() === e) return Fe;
						const l = q(e);
						let d = o.getCurrentContent();
						d = s.Modifier.replaceText(d, r, l);
						const p = s.EditorState.push(o, d, "insert-characters");
						return this.onChange(p), Pe
					}, this.handleReturn = e => (e.preventDefault(), Pe), this.onChange = e => {
						this.props.onChange(e)
					}, this.setEmojiDropdownPositionUpdater = e => this.updateEmojiDropdownPosition = e, this.state = {
						emojiString: "",
						suppressEmojiDropdown: !1
					}
				}
				componentDidUpdate() {
					if (!this.updateEmojiDropdownPosition) return;
					if (this.props.editorState.getSelection().getHasFocus() && !this.state.suppressEmojiDropdown && this.state.emojiString) {
						const {
							offsetKey: e
						} = Ce(this.props.editorState), t = this.containerRef.querySelector(`[data-offset-key="${e}"]`), {
							left: o,
							bottom: s
						} = t.getBoundingClientRect();
						this.updateEmojiDropdownPosition({
							left: o,
							top: s
						})
					} else this.updateEmojiDropdownPosition(null)
				}
				componentWillReceiveProps(e) {
					this.checkEditorStateForEmojis(e.editorState)
				}
				render() {
					const {
						className: e,
						editorState: t,
						flairTemplateType: o,
						isFlairModOnly: i,
						placeholder: n,
						editorKey: r,
						subredditId: c,
						emojisEnabled: l
					} = this.props;
					return a.a.createElement("div", {
						className: e,
						ref: this.setContainerRef,
						onKeyDown: this.handleKeyDown
					}, a.a.createElement(s.Editor, {
						ref: this.setEditorRef,
						editorKey: r,
						editorState: t,
						onChange: this.onChange,
						placeholder: n,
						handleBeforeInput: this.handleBeforeInput,
						handleReturn: this.handleReturn,
						handlePastedText: this.handlePastedText,
						onBlur: this.props.onBlur
					}), l && a.a.createElement(V.b, {
						onSetPositionUpdater: this.setEmojiDropdownPositionUpdater,
						usePortal: !0
					}, a.a.createElement(ce, {
						key: this.state.emojiString,
						onDropdownApi: this.setEmojiDropdownApi,
						flairTemplateType: o,
						isFlairModOnly: i,
						searchValue: this.state.emojiString,
						onSelect: this.handleSelectEmoji,
						subredditId: c
					})))
				}
			}
			var Re = Ne,
				Ae = o("./src/reddit/helpers/flair.ts"),
				Me = o("./src/reddit/icons/svgs/Help/index.tsx"),
				Le = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				Be = o("./src/reddit/models/Flair/index.ts"),
				Ue = o("./src/reddit/selectors/tooltip.ts"),
				Ke = o("./src/reddit/components/FlairSearch/FlairEdit/index.m.less"),
				We = o.n(Ke);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ge = 450,
				He = {
					targetPosition: ["right", "top"],
					tooltipPosition: ["right", "bottom"]
				},
				ze = {
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				},
				Ye = e => {
					const t = [];
					return e.type === Be.f.Richtext ? e.richtext.forEach(e => {
						e.e === Be.c.Emoji ? t.push({
							type: Ie.Image,
							id: e.a,
							url: e.u
						}) : e.t && t.push({
							type: Ie.Text,
							text: e.t
						})
					}) : e.text && t.push({
						type: Ie.Text,
						text: e.text
					}), t
				},
				qe = e => {
					return ((e, t = !1) => {
						if (!e) return s.EditorState.createEmpty(Se());
						let o = s.EditorState.createEmpty(Se()),
							i = o.getCurrentContent();
						const n = [],
							r = [];
						e.forEach(e => {
							if ("image" === e.type) {
								n.push(" ");
								const t = (i = _e(i, e)).getLastCreatedEntityKey(),
									o = s.CharacterMetadata.create({
										entity: t
									});
								r.push(o)
							} else if ("text" === e.type) {
								n.push(e.text);
								const t = s.CharacterMetadata.create();
								r.push(...je()(e.text.length, () => t))
							}
						});
						let a = i.getBlockMap(),
							c = i.getFirstBlock().merge({
								text: n.join(""),
								characterList: Object(ye.List)(r)
							});
						a = a.set(c.getKey(), c), c = (i = i.merge({
							blockMap: a
						})).getFirstBlock();
						const l = s.SelectionState.createEmpty(c.getKey()).merge({
							anchorOffset: c.getLength(),
							focusOffset: c.getLength(),
							hasFocus: !1
						});
						return i = i.merge({
							blockMap: s.BlockMapBuilder.createFromArray([c])
						}), o = s.EditorState.set(o, {
							currentContent: i,
							selection: l
						}), t && (o = s.EditorState.forceSelection(o, l)), o
					})(Ye(e))
				},
				Ve = (e, t, o, s, i) => {
					const n = (e => {
						const t = e.getCurrentContent(),
							o = t.getPlainText(),
							s = [],
							i = t.getFirstBlock().getCharacterList();
						return Object(pe.a)(i, {
							keyFn: e => e.getEntity()
						}, (e, i, n, r) => {
							const a = e.getEntity(),
								c = a && t.getEntity(a);
							if (c && c.getType() === Te.InlineImage) {
								const {
									id: e,
									url: t
								} = c.getData(), o = r - n;
								s.push(...je()(o, () => ({
									type: Ie.Image,
									id: e,
									url: t
								})))
							} else s.push({
								type: Ie.Text,
								text: o.slice(n, r)
							})
						}), s
					})(e);
					if (!!!n.find(e => e.type === Ie.Image)) return {
						backgroundColor: t,
						templateId: o,
						type: Be.f.Text,
						text: n.map(e => e.type === Ie.Text ? e.text : "").join(),
						textColor: s,
						cssClass: i
					};
					const r = n.map(e => e.type === Ie.Image ? {
						e: Be.c.Emoji,
						a: e.id,
						u: e.url
					} : {
						e: Be.c.Text,
						t: e.text
					});
					return {
						backgroundColor: t,
						templateId: o,
						type: Be.f.Richtext,
						richtext: r,
						textColor: s,
						cssClass: i
					}
				},
				$e = (e, t) => n()(Ye(e), Ye(t)),
				Qe = Object(d.a)(u.a.wrapped(E.a, "Component", We.a)),
				Xe = e => {
					e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
				},
				Ze = Object(l.c)({
					areEmojisEnabledInSubreddit: (e, t) => {
						const o = e.subreddits.about[t.subredditId];
						return !!o && o.emojisEnabled
					},
					isEmojiPickerOpen: (e, t) => Object(Ue.b)(t.emojiPickerId)(e)
				}),
				et = {
					toggleTooltip: e => Object(j.h)({
						tooltipId: e
					}),
					onGetSubredditEmojis: f.m
				},
				tt = Object(c.b)(Ze, et);
			class ot extends a.a.Component {
				constructor(e) {
					super(e), this.richTextInputRef = a.a.createRef(), this.wrapperRef = a.a.createRef(), this.onToggleEmojiPicker = () => {
						let e = !1;
						if (this.wrapperRef.current) {
							const {
								bottom: t,
								top: o
							} = this.wrapperRef.current.getBoundingClientRect(), s = o > Ge, i = t + Ge < window.innerHeight;
							e = s && !i
						}
						this.setState({
							shouldPositionPickerOnTop: e
						}), this.props.toggleTooltip(this.props.emojiPickerId)
					}, this.setEditorState = e => {
						const t = this.state.editorState.getCurrentContent() !== e.getCurrentContent();
						this.setState({
							editorState: e
						}, () => {
							if (t) {
								const t = Ve(e, this.props.flair.backgroundColor, this.props.flair.templateId, this.props.flair.textColor, this.props.flair.cssClass);
								this.props.onChange(t)
							}
						})
					}, this.onSelectEmoji = e => {
						const t = {
							type: Ie.Image,
							id: Object(m.b)(e.name),
							url: e.url
						};
						let o = we(this.state.editorState, t);
						o = s.EditorState.forceSelection(o, o.getSelection()), this.setEditorState(o), this.onToggleEmojiPicker()
					}, this.shouldEnableEmojis = () => {
						const {
							flair: e,
							flairTemplate: t
						} = this.props;
						return !(!this.props.areEmojisEnabledInSubreddit || Object(Ae.i)(e) >= b.g || t && !Object(Ae.a)(t)) && (e ? Object(Ae.h)(e) : 0) < (t ? Object(Ae.l)(t) : b.d)
					}, this.onBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.state = {
						editorState: qe(e.flair)
					}
				}
				focus() {
					this.richTextInputRef.current && this.richTextInputRef.current.focus()
				}
				componentDidMount() {
					this.props.onGetSubredditEmojis(this.props.subredditId), this.props.autofocus && this.focus()
				}
				componentWillUnmount() {
					this.props.isEmojiPickerOpen && this.props.toggleTooltip(this.props.emojiPickerId)
				}
				UNSAFE_componentWillReceiveProps(e) {
					e.subredditId !== this.props.subredditId && this.props.onGetSubredditEmojis(this.props.subredditId);
					const t = e.flair,
						o = Ve(this.state.editorState, t.backgroundColor, t.templateId, t.textColor, t.cssClass);
					$e(o, t) || this.setEditorState(qe(t))
				}
				renderCompactHelperText(e) {
					const t = this.props.flairTemplate || b.a;
					return a.a.createElement("div", {
						className: Object(p.a)(We.a.HelperText, this.props.helperTextClass, e ? We.a.hasError : null)
					}, e || Object(Ae.k)(t))
				}
				renderHelperText(e) {
					const {
						flair: t
					} = this.props, o = Object(Ae.i)(t), s = o > b.g, i = b.g - o, n = h.fbt._({
						"*": "{number} characters remaining",
						_1: "1 character remaining"
					}, [h.fbt._plural(i, "number")], {
						hk: "29F3AW"
					});
					return a.a.createElement("div", {
						className: Object(p.a)(We.a.HelperText, this.props.helperTextClass, e ? We.a.hasError : null)
					}, s ? a.a.createElement(a.a.Fragment, null, n, a.a.createElement(H.a, {
						icon: a.a.createElement(Me.a, {
							className: We.a.helpIcon
						}),
						text: h.fbt._("The unicode for the emoji goes against the character count", null, {
							hk: "1gJWyZ"
						})
					})) : e || n)
				}
				render() {
					const {
						allowBlank: e,
						container: t,
						emojiPickerId: o,
						flair: s,
						flairTemplate: i = b.a,
						flairTemplateType: n,
						isCompact: r,
						isEmojiPickerOpen: c,
						isFlairModOnly: l,
						subredditId: d
					} = this.props, m = this.shouldEnableEmojis(), u = Object(Ae.m)(s, i, {
						allowBlank: e
					});
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement("div", {
						className: Object(p.a)(We.a.EditorWrapper, u ? We.a.hasError : null, r ? We.a.isCompact : null),
						ref: this.wrapperRef,
						id: o
					}, a.a.createElement(Re, {
						ref: this.richTextInputRef,
						editorState: this.state.editorState,
						flairTemplateType: n,
						emojisEnabled: m,
						isFlairModOnly: l,
						maxLength: b.g,
						onChange: this.setEditorState,
						subredditId: d,
						onBlur: this.onBlur,
						className: g.c
					}), m && a.a.createElement("div", {
						className: Object(p.a)(We.a.EmojiPickerButton, c ? We.a.isActive : null),
						id: o,
						onClick: this.onToggleEmojiPicker
					}, a.a.createElement(Le.a, {
						className: Object(p.a)(We.a.SmileIcon, r ? We.a.isCompact : null)
					}), a.a.createElement(Qe, Je({
						className: Object(p.a)({
							[We.a.hasError]: !!u
						}),
						container: t,
						isOverlay: !0,
						isOpen: c,
						tooltipId: o
					}, this.state.shouldPositionPickerOnTop ? He : ze), a.a.createElement("div", {
						onClick: Xe
					}, a.a.createElement(G, {
						flairTemplateType: n,
						isFlairModOnly: l,
						onCancel: this.onToggleEmojiPicker,
						onSelect: this.onSelectEmoji,
						subredditId: this.props.subredditId
					}))))), r ? this.renderCompactHelperText(u) : this.renderHelperText(u))
				}
			}
			t.default = tt(ot)
		},
		"./src/reddit/components/InfoTextTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				BottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				bottomText: "_3uK2I0hi3JFTKnMUFHD2Pd",
				Text: "HQ2VJViRjokXpRbJzPvvc",
				text: "HQ2VJViRjokXpRbJzPvvc",
				"fade-in": "_1tIZttmhLdrIGrB-6VvZcT",
				fadeIn: "_1tIZttmhLdrIGrB-6VvZcT"
			}
		},
		"./src/reddit/components/InfoTextTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "b", (function() {
				return j
			})), o.d(t, "a", (function() {
				return g
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./node_modules/react-redux/es/index.js"),
				r = o("./node_modules/reselect/es/index.js"),
				a = o("./src/higherOrderComponents/addOverlayEvents.tsx"),
				c = o("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				l = o("./src/reddit/selectors/tooltip.ts"),
				d = o("./src/reddit/components/InfoTextTooltip/index.m.less"),
				p = o.n(d),
				m = o("./src/lib/lessComponent.tsx");

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Text", p.a),
				f = m.a.div("BottomText", p.a),
				j = e => i.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return i.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				b = Object(r.c)({
					isOpen: (e, {
						tooltipId: t
					}) => Object(l.b)(t)(e)
				}),
				E = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				x = Object(c.a)(j, [a.a.Click, a.a.Keydown]),
				O = Object(n.b)(b);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? i.a.createElement(E, u({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : i.a.createElement(x, u({}, e, {
					targetPosition: ["center", "top"],
					tooltipPosition: ["center", "bottom"]
				}))
			})
		},
		"./src/reddit/components/OverlayAwareTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return l
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/reddit/constants/elementIds.ts"),
				a = o("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const o = Object(n.a)(e, t);
				class s extends i.a.PureComponent {
					constructor() {
						super(...arguments), this.state = {
							container: null
						}
					}
					componentDidMount() {
						if (this.props.isOverlay) {
							const e = document.getElementById(r.d);
							this.setState({
								container: e
							})
						}
					}
					render() {
						return i.a.createElement(o, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(s)
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.m.less": function(e, t, o) {
			e.exports = {
				tooltipBox: "tVQ1dB4n0mAWdcQNxFq-K",
				dropdown: "_1akkpO3lymdoWGIc5tjIpm",
				triangle: "_2O2U-Vhc1mg9O7DOwp50Aa",
				triangleBack: "_3IfYYXUMUzn2OvoiMUNcaQ",
				triangleFront: "_3CtwSTtkmKXvzDo3TmCp9C",
				triangleBelow: "_1churYJpAwcb-tf0k1c46F"
			}
		},
		"./src/reddit/components/RichTextEditor/Tooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return u
			})), o.d(t, "b", (function() {
				return f
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./src/lib/CSSVariableProvider/index.tsx"),
				a = o("./src/reddit/helpers/dom/index.ts"),
				c = o("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				l = o.n(c);
			const d = 8,
				p = 16,
				m = 15 + p / 2;
			var u;
			! function(e) {
				e[e.None = 0] = "None", e[e.Above = 1] = "Above", e[e.Below = 2] = "Below"
			}(u || (u = {}));
			const h = ({
				isBelow: e = !1,
				style: t
			}) => i.a.createElement("div", {
				className: Object(n.a)(l.a.triangle, {
					[l.a.triangleBelow]: e
				}),
				style: t
			}, i.a.createElement("div", {
				className: l.a.triangleBack
			}), i.a.createElement("div", {
				className: l.a.triangleFront
			}));
			class f extends s.Component {
				constructor(e) {
					super(e), this.containerRef = null, this.updateContainerRef = e => this.containerRef = e, this.setTargetPosition = e => {
						e ? this.updatePositioning(e) : this.setState({
							positioning: null
						})
					}, this.state = {
						positioning: null
					}
				}
				updatePositioning(e) {
					if (!this.containerRef) return;
					const t = this.containerRef.getBoundingClientRect(),
						o = Math.round(t.width),
						s = Math.round(t.height),
						i = this.state.positioning;
					if (!e) {
						if (!i) return;
						if (i.tooltipWidth === o && i.tooltipHeight === s) return
					}
					const n = e ? e.bottom : i.target.bottom,
						r = e ? e.top : i.target.top,
						c = e ? e.left : i.target.left,
						l = Object(a.e)(this.containerRef);
					let d, p, m;
					if (l) {
						const e = l.getBoundingClientRect();
						d = e.bottom - (n || 0), p = c - e.left + l.scrollLeft, m = r - e.top + l.scrollTop
					} else {
						const e = document.documentElement,
							t = window.pageYOffset || e.scrollTop;
						p = c + (window.pageXOffset || e.scrollLeft), m = r + t
					}
					const u = {
						target: {
							top: r,
							left: c
						},
						tooltipWidth: o,
						tooltipHeight: s,
						tooltip: {
							top: m,
							left: p,
							bottom: d
						}
					};
					this.adjustPositionForTriangle(u, l), this.setState({
						positioning: u
					})
				}
				adjustPositionForTriangle(e, t) {
					const {
						trianglePlacement: o
					} = this.props;
					if (!o) return;
					const s = t ? t.offsetWidth : document.documentElement.offsetWidth,
						i = s ? Math.max(e.tooltip.left + e.tooltipWidth - s, 0) : 0;
					e.tooltip.left -= i + m;
					const n = i + m - p / 2;
					let r;
					o === u.Above ? (e.tooltip.top += d, r = -d) : (e.tooltip.top -= e.tooltipHeight + d, r = e.tooltipHeight), e.triangle = {
						top: r,
						left: n
					}
				}
				componentDidUpdate(e, t) {
					e.targetPosition !== this.props.targetPosition ? this.setTargetPosition(this.props.targetPosition || null) : this.updatePositioning()
				}
				componentDidMount() {
					this.setTargetPosition(this.props.targetPosition || null), this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(this.setTargetPosition)
				}
				componentWillUnmount() {
					this.props.onSetPositionUpdater && this.props.onSetPositionUpdater(null)
				}
				render() {
					const {
						aboveParent: e,
						dropdown: t,
						trianglePlacement: o
					} = this.props, {
						positioning: s
					} = this.state, a = s && void 0 !== s.triangle && i.a.createElement(h, {
						isBelow: o === u.Below,
						style: {
							top: s.triangle.top + "px",
							left: s.triangle.left + "px"
						}
					});
					let c = i.a.createElement("div", {
						className: Object(n.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: t
						}),
						style: s ? {
							left: s.tooltip.left,
							...e ? {
								bottom: s.tooltip.bottom
							} : {
								top: s.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, s && this.props.children && i.a.createElement(i.a.Fragment, null, a, this.props.children));
					return this.props.usePortal && (c = Object(r.d)(c, this.props.portalContainer || document.body)), c
				}
			}
		},
		"./src/reddit/controls/EmojiDropdown/EmojiItem/index.m.less": function(e, t, o) {
			e.exports = {
				emojiListItemWrapper: "_1NvihzCRGWYTU-w3OR-GQv",
				mIsFocused: "_3g9FudWo0YKWqauqvrFkHv",
				emojiImageDisplay: "_8hTOqys5qlFKniKcyDAzy",
				emojiText: "_25Z6jKAgaaWMCksl0YUyyd"
			}
		},
		"./src/reddit/controls/EmojiDropdown/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_3kI_gMNzAoHH2Mu5ibeSFK"
			}
		},
		"./src/reddit/controls/EmojiPicker/EmojiGrid/EmojiItem/index.m.less": function(e, t, o) {
			e.exports = {
				emojiImg: "_1PQveD4-NJoF4EwBsxaSsl",
				mIsFocused: "v5nLog-Vg38YY3wcNYQHQ"
			}
		},
		"./src/reddit/controls/EmojiPicker/EmojiGrid/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_1jHOmVS3vWWDfrx8LYZ5FZ",
				gridWrapper: "_3JnTdG_oIu4Tkux1dbXKxG"
			}
		},
		"./src/reddit/controls/EmojiPicker/Footer/index.m.less": function(e, t, o) {
			e.exports = {
				emojiPreview: "_3na-mW2o8ogD4PSMi0bLte",
				emojiInfo: "_2R-o1HvG1hJxomTKNzFz2w",
				emojiLabel: "Eug7jlK9vDMuRuXHJejrd",
				cancelButton: "CyxOm7bBL_yDiNdfjT2JE",
				footer: "_11ymmpsy8W4SwxOstCFj_t"
			}
		},
		"./src/reddit/controls/EmojiPicker/SearchBar/index.m.less": function(e, t, o) {
			e.exports = {
				searchIcon: "A_Xr-JcuQr4nzxANLWokI",
				input: "_3rO5IMLYlNP81wp3CzDbFx",
				inputWrapper: "poiy1JJXiIrpFiJQuUn3f",
				searchBar: "u37oQAgoFAhdTF3pGUrJu"
			}
		},
		"./src/reddit/controls/EmojiPicker/index.m.less": function(e, t, o) {
			e.exports = {
				container: "_13CtBKEXYDdTm12Fa7alP1"
			}
		},
		"./src/reddit/controls/IconTooltip/index.m.less": function(e, t, o) {
			e.exports = {
				tooltip: "_3bX7W3J0lU78fp7cayvNxx"
			}
		},
		"./src/reddit/controls/IconTooltip/index.tsx": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return m
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = o("./src/reddit/controls/IconTooltip/index.m.less"),
				c = o.n(a);
			const l = Object(n.a)(r.b),
				d = ["center", "top"],
				p = ["center", "bottom"];
			class m extends i.a.Component {
				constructor(e) {
					super(e), this.tooltipTargetElement = null, this.setTooltipTargetRef = e => this.tooltipTargetElement = e, this.onShowTooltip = () => {
						this.setState({
							showTooltip: !0
						})
					}, this.onHideTooltip = () => {
						this.setState({
							showTooltip: !1
						})
					}, this.state = {
						showTooltip: !1
					}
				}
				render() {
					return i.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, i.a.createElement(l, {
						className: c.a.tooltip,
						isOpen: this.state.showTooltip,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: d,
						text: this.props.text,
						tooltipPosition: p
					}))
				}
			}
		},
		"./src/reddit/controls/ImageDisplay/index.m.less": function(e, t, o) {
			e.exports = {
				imageDisplay: "_1OSym2TYADlQNpSDWNxtjB"
			}
		},
		"./src/reddit/controls/ImageDisplay/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/ImageDisplay/index.m.less"),
				a = o.n(r);
			t.a = ({
				backgroundImage: e,
				children: t,
				className: o
			}) => i.a.createElement("div", {
				className: Object(n.a)(a.a.imageDisplay, o),
				style: {
					backgroundImage: `url('${e}')`
				},
				children: t
			})
		},
		"./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less": function(e, t, o) {
			e.exports = {
				imageSpan: "_39fVyg7PKE6z039JZgpQLB"
			}
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, i.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				i = o.n(s);
			t.a = e => i.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, i.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return s
			})), o.d(t, "a", (function() {
				return i
			})), o.d(t, "b", (function() {
				return n
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "e", (function() {
				return a
			}));
			const s = 24,
				i = 64e3,
				n = 128,
				r = 128,
				a = (e, t, o, s) => ({
					name: e,
					url: t,
					subredditId: o,
					...s
				})
		},
		"./src/reddit/selectors/emojis.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return d
			})), o.d(t, "c", (function() {
				return m
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "b", (function() {
				return h
			})), o.d(t, "f", (function() {
				return j
			})), o.d(t, "a", (function() {
				return g
			}));
			o("./node_modules/core-js/modules/web.dom.iterable.js");
			var s = o("./node_modules/lodash/values.js"),
				i = o.n(s),
				n = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/models/Flair/index.ts"),
				a = o("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				c = o("./src/reddit/selectors/subreddit.ts");
			const l = [],
				d = e => e.emojis.models,
				p = Object(n.a)(d, (e, t) => t.subredditId, (e, t) => {
					const o = e[t];
					return o ? [...i()(o.emojis), ...i()(o.snoomojis)] : l
				}),
				m = Object(n.a)(p, a.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, o, s) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !o) && (!(!e.userFlairAllowed && s === r.d.UserFlair) && !(!e.postFlairAllowed && s === r.d.LinkFlair)))),
				u = Object(n.a)(d, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				h = (e, t) => Object(c.s)(e, {
					subredditName: t
				}).emojisEnabled,
				f = {
					emojis: {},
					snoomojis: {}
				},
				j = (e, {
					subredditId: t
				}) => d(e)[t] || f,
				g = (e, t) => !!e.emojis.api.list.pending[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FlairEdit.759b0e3c33b198a1c24b.js.map