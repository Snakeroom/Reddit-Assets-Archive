// https://www.redditstatic.com/desktop2x/FlairEdit.c281a6bf98f16c812ae7.js
// Retrieved at 4/20/2022, 3:20:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FlairEdit"], {
		"./node_modules/draft-js/dist/Draft.css": function(e, t, o) {},
		"./node_modules/lodash/_baseInRange.js": function(e, t) {
			var o = Math.max,
				n = Math.min;
			e.exports = function(e, t, s) {
				return e >= n(t, s) && e < o(t, s)
			}
		},
		"./node_modules/lodash/inRange.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseInRange.js"),
				s = o("./node_modules/lodash/toFinite.js"),
				i = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, o) {
				return t = s(t), void 0 === o ? (o = t, t = 0) : o = s(o), e = i(e), n(e, t, o)
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var n = o("./node_modules/lodash/_baseTimes.js"),
				s = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > r) return [];
				var o = a,
					l = c(e, a);
				t = s(t), e -= a;
				for (var d = n(l, t); ++o < e;) t(o);
				return d
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return s
			}));
			const n = e => e;

			function s(e, t, o) {
				const [s, i] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: r = n
				} = t || {};
				let {
					start: a = 0,
					end: c = s
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (c = c > s ? s : c)) return;
				let l = i(a),
					d = r(l, a),
					p = a;
				for (let n = a + 1; n < c; n++) {
					const e = i(n),
						t = r(e, n);
					if (t !== d) {
						if (!1 === o(l, d, p, n)) return;
						d = t, p = n, l = e
					}
				}
				o(l, d, p, c)
			}
		},
		"./src/reddit/actions/emoji.ts": function(e, t, o) {
			"use strict";
			o.d(t, "i", (function() {
				return T
			})), o.d(t, "d", (function() {
				return S
			})), o.d(t, "c", (function() {
				return _
			})), o.d(t, "h", (function() {
				return w
			})), o.d(t, "g", (function() {
				return k
			})), o.d(t, "f", (function() {
				return D
			})), o.d(t, "a", (function() {
				return F
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
			var n = o("./node_modules/fbt/lib/FbtPublic.js"),
				s = o("./node_modules/lodash/forEach.js"),
				i = o.n(s),
				r = o("./src/lib/constants/index.ts"),
				a = o("./src/lib/makeApiRequest/index.ts"),
				c = o("./src/lib/omitHeaders/index.ts"),
				l = o("./src/lib/uploadToS3/index.ts"),
				d = o("./src/reddit/constants/headers.ts");
			const p = async (e, t) => Object(a.a)(Object(c.a)(e, [d.a]), {
				endpoint: `${e.apiUrl}/api/v1/${t}/emojis/all`,
				method: r.kb.GET,
				type: "json"
			}).then(e => (e.ok && (e.body = (e => {
				let t;
				const o = i()(e, (e, o) => ("snoomojis" !== o && (t = o), i()(e, (t, o) => {
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
				E = o("./src/reddit/models/Emoji/index.ts"),
				b = o("./src/reddit/models/Image/index.tsx"),
				x = o("./src/reddit/models/Toast/index.ts"),
				O = o("./src/reddit/selectors/emojis.ts"),
				y = o("./src/reddit/selectors/subreddit.ts");
			const T = "STRUCTURED_STYLES__NEW_EMOJI_ADDED",
				I = Object(m.a)(T),
				S = "STRUCTURED_STYLES__EMOJI_DELETE_LOADED",
				_ = "STRUCTURED_STYLES__EMOJI_DELETE_FAILED",
				C = Object(m.a)(S),
				v = Object(m.a)(_),
				w = "GET_ALL_EMOJIS_PENDING",
				k = "GET_ALL_EMOJIS_LOADED",
				D = "GET_ALL_EMOJIS_FAILED",
				P = Object(m.a)(w),
				N = Object(m.a)(k),
				R = Object(m.a)(D),
				F = "STRUCTURED_STYLES__EMOJIS_ENABLED_SETTING_LOADED",
				A = Object(m.a)(F),
				M = e => ({
					text: n.fbt._("Failed to save emoji", null, {
						hk: "3i6FC2"
					}),
					buttonText: n.fbt._("Retry", null, {
						hk: "1XMjgA"
					}),
					buttonAction: U(e)
				}),
				L = e => {
					let {
						imageData: t,
						subredditId: o
					} = e;
					return async (e, n, s) => {
						const i = n(),
							p = Object(y.T)(i, {
								subredditId: o
							}).name;
						e(Object(u.k)(t));
						const m = t.file,
							h = await Object(g.h)(m),
							f = await (async (e, t, o, n) => Object(a.a)(Object(c.a)(e, [d.a]), {
								endpoint: `${e.apiUrl}/api/v1/${t}/emoji_asset_upload_s3.json`,
								method: r.kb.POST,
								data: {
									filepath: o,
									mimetype: n
								}
							}))(s.apiContext(), p, m.name, h);
						let j = !1;
						if (f.ok) {
							const o = await (async (e, t, o) => Object(l.a)(o, t))(s.apiContext(), f.body.s3UploadLease, m);
							if (o.ok) {
								if (!n().imageUploads[t.id]) return Object(b.d)(t), !1;
								const s = decodeURIComponent(o.body.PostResponse.Location),
									i = f.body.websocketUrl,
									r = Object(b.n)(t, s, i);
								e(Object(u.j)(r)), j = !0
							} else {
								const n = Object(b.k)(t, o.error);
								e(Object(u.i)(n))
							}
						} else {
							const o = Object(b.k)(t, f.error);
							e(Object(u.i)(o))
						}
						return j
					}
				},
				B = (e, t) => async (o, n, s) => {
					const {
						imageData: i,
						subredditId: l,
						emojiName: p,
						settings: m
					} = e, f = Object(j.a)(i.url), g = n(), E = Object(y.T)(g, {
						subredditId: l
					}).name, x = await (async (e, t, o, n, s) => Object(a.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji.json`,
						method: r.kb.POST,
						data: {
							s3_key: o,
							name: n,
							mod_flair_only: s.modFlairOnly,
							post_flair_allowed: s.postFlairAllowed,
							user_flair_allowed: s.userFlairAllowed
						}
					}))(s.apiContext(), E, f, p, m);
					if (!x.ok) {
						const n = Object(b.k)(i, x.error);
						o(Object(u.i)(n)), o(Object(h.f)(M(e))), t && t.close()
					}
					return x.ok
				}, U = e => async (t, o, n) => {
					const {
						imageData: s,
						subredditId: i,
						emojiName: r,
						settings: a
					} = e;
					if (t(Object(u.k)(s)), !s.websocketUrl) return t(Object(h.f)({
						text: "Could not upload emoji"
					}));
					let c;
					const l = new WebSocket(s.websocketUrl);
					return l.onopen = async () => {
						c = await B(e, l)(t, o, n)
					}, l.onmessage = o => {
						const n = JSON.parse(o.data);
						if ("success" === n.type) {
							c = !0;
							const e = n.payload.emoji_url,
								o = Object(b.o)(s, e);
							t(Object(u.l)(o));
							const l = Object(E.e)(r, o.url, i, a);
							t(I(l)), t(K(i))
						} else {
							const o = Object(f.a)(r),
								n = Object(b.k)(s, o);
							t(Object(u.i)(n)), t(Object(h.f)(M(e)))
						}
						l.close()
					}, l.onerror = o => {
						c = !1;
						const n = Object(f.a)(r),
							i = Object(b.k)(s, n);
						t(Object(u.i)(i)), t(Object(h.f)(M(e))), l.close()
					}, c
				}, K = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					const i = o();
					if (Object(O.a)(i, e)) return;
					const r = Object(y.T)(i, {
						subredditId: e
					}).name;
					t(P(e));
					const a = await p(s(), r);
					if (a.ok) {
						const o = a.body;
						t(N({
							subredditId: e,
							data: o
						}))
					} else t(R({
						subredditId: e,
						error: a.error
					}))
				}, W = e => async (t, o, n) => {
					let {
						apiContext: s
					} = n;
					o().emojis[e] || await t(K(e))
				}, J = (e, t) => async (o, s, i) => {
					let {
						apiContext: l
					} = i;
					const p = s(),
						m = Object(y.T)(p, {
							subredditId: t
						}).name,
						u = await (async (e, t, o) => Object(a.a)(Object(c.a)(e, [d.a]), {
							endpoint: `${e.apiUrl}/api/v1/${o}/emoji/${t}`,
							method: r.kb.DELETE,
							type: "json"
						}))(l(), e, m);
					if (u.ok) {
						o(C({
							emojiName: e,
							subredditId: t
						})), o(h.f({
							kind: x.b.SuccessCommunityGreen,
							text: n.fbt._("Emoji successfully deleted", null, {
								hk: "1zMXEe"
							})
						}))
					} else o(v(u.error)), o(h.f({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, G = (e, t) => async (o, s, i) => {
					let {
						apiContext: l
					} = i;
					const p = s(),
						m = Object(y.T)(p, {
							subredditId: e
						}).name;
					if ((await (async (e, t, o) => Object(a.a)(Object(c.a)(e, [d.a]), {
							endpoint: `${e.apiUrl}/api/enable_emojis_in_sr.json`,
							method: r.kb.POST,
							data: {
								subreddit: t,
								enable: o
							}
						}))(l(), m, t)).ok) {
						o(A({
							subredditId: e,
							emojisEnabled: t
						}))
					} else o(h.f({
						kind: x.b.Error,
						text: n.fbt._("Something went wrong", null, {
							hk: "22u7ha"
						})
					}))
				}, H = "EMOJI_CUSTOM_SIZE_UPDATED", z = Object(m.a)(H), Y = (e, t) => async (o, s, i) => {
					let {
						apiContext: l
					} = i;
					const p = s(),
						m = Object(y.T)(p, {
							subredditId: e
						}).name;
					(await (async (e, t, o) => Object(a.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/v1/${t}/emoji_custom_size`,
						method: r.kb.POST,
						data: o
					}))(l(), m, t)).ok ? o(z({
						subredditId: e,
						emojiCustomSize: t
					})) : o(h.f({
						kind: x.b.Error,
						text: n.fbt._("Try again later", null, {
							hk: "4dziDF"
						})
					}))
				}, q = "EMOJI_PERMISSIONS_UPDATED", V = Object(m.a)(q), $ = (e, t, o, s) => async (i, l, p) => {
					let {
						apiContext: m
					} = p;
					const u = l(),
						f = Object(y.T)(u, {
							subredditId: s
						}).name;
					(await (async (e, t, o, n) => Object(a.a)(Object(c.a)(e, [d.a]), {
						endpoint: `${e.apiUrl}/api/v1/${o}/emoji_permissions.json`,
						method: r.kb.POST,
						data: {
							name: t,
							post_flair_allowed: n.postFlairAllowed,
							user_flair_allowed: n.userFlairAllowed,
							mod_flair_only: n.modFlairOnly
						}
					}))(m(), e, f, o)).ok ? (i(V({
						emojiName: e,
						isSnoomoji: t,
						settings: o,
						subredditId: s
					})), i(h.f({
						kind: x.b.SuccessCommunityGreen,
						text: n.fbt._("Emoji permissions updated", null, {
							hk: "4b2RIU"
						})
					}))) : i(h.f({
						kind: x.b.Error,
						text: n.fbt._("Try again later", null, {
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
			var n = o("./node_modules/draft-js/lib/Draft.js"),
				s = o("./node_modules/lodash/isEqual.js"),
				i = o.n(s),
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
				E = o("./src/reddit/constants/flair.ts"),
				b = o("./src/reddit/controls/Dropdown/index.tsx"),
				x = o("./src/reddit/constants/keycodes.ts"),
				O = o("./src/reddit/selectors/emojis.ts"),
				y = o("./src/reddit/controls/EmojiPicker/EmojiGrid/EmojiItem/index.m.less"),
				T = o.n(y);
			class I extends r.Component {
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
						className: Object(p.a)(T.a.emojiImg, {
							[T.a.mIsFocused]: t
						}),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					})
				}
			}
			var S = o("./src/reddit/controls/EmojiPicker/EmojiGrid/index.m.less"),
				_ = o.n(S);

			function C(e) {
				const {
					emojis: t,
					focusedIndex: o
				} = e;
				return a.a.createElement("div", {
					className: _.a.container
				}, a.a.createElement("div", {
					className: _.a.gridWrapper
				}, t.map((t, n) => a.a.createElement(I, {
					emoji: t,
					itemIndex: n,
					isFocused: n === o,
					onMouseEnter: e.onEmojiEnter,
					onMouseLeave: e.onEmojiLeave,
					onClick: e.onEmojiSelect
				}))))
			}
			var v = o("./src/reddit/controls/Button/index.tsx"),
				w = o("./src/reddit/layout/row/Inline/index.tsx"),
				k = o("./src/reddit/controls/EmojiPicker/Footer/index.m.less"),
				D = o.n(k);

			function P(e) {
				const {
					className: t,
					emoji: o
				} = e;
				return a.a.createElement("div", {
					className: Object(p.a)(D.a.footer, t)
				}, o && a.a.createElement(w.a, {
					className: D.a.emojiInfo
				}, a.a.createElement("img", {
					className: D.a.emojiPreview,
					src: o.url
				}), a.a.createElement("span", {
					className: D.a.emojiLabel
				}, Object(m.b)(o.name))), a.a.createElement(v.r, {
					className: D.a.cancelButton,
					onClick: e.onCancelClick
				}, h.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})))
			}
			var N = o("./src/reddit/icons/svgs/Search/index.tsx"),
				R = o("./src/reddit/controls/EmojiPicker/SearchBar/index.m.less"),
				F = o.n(R);

			function A() {
				return (A = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function M(e) {
				const {
					className: t,
					inputRef: o,
					...n
				} = e;
				return a.a.createElement("div", {
					className: Object(p.a)(F.a.searchBar, t)
				}, a.a.createElement(N.a, {
					className: F.a.searchIcon
				}), a.a.createElement("div", {
					className: F.a.inputWrapper
				}, a.a.createElement("input", A({
					className: F.a.input,
					ref: o,
					placeholder: h.fbt._("Search for emoji", null, {
						hk: "IncEm"
					}),
					spellCheck: !1
				}, n))))
			}
			var L = o("./src/reddit/controls/EmojiPicker/index.m.less"),
				B = o.n(L);
			const U = (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return -1 !== t.toLowerCase().indexOf(o)
					})
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
							n = o.length ? 0 : -1;
						this.setState({
							searchBarValue: t,
							filteredEmojis: o,
							focusedIndex: n
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
					} = this.state, n = t[o];
					return a.a.createElement("div", {
						className: Object(p.a)(B.a.container, e)
					}, a.a.createElement(M, {
						value: this.state.searchBarValue,
						inputRef: this.setInputRef,
						onChange: this.onSearchBarInputChange,
						onKeyDown: this.onKeyDown
					}), a.a.createElement(C, {
						emojis: t,
						focusedIndex: this.state.focusedIndex,
						onEmojiEnter: this.onEmojiEnter,
						onEmojiLeave: this.onEmojiLeave,
						onEmojiSelect: this.onEmojiSelect
					}), a.a.createElement(P, {
						emoji: n,
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
					}, a.a.createElement(w.a, null, a.a.createElement(X.a, {
						className: ee.a.emojiImageDisplay,
						backgroundImage: e.url
					}), a.a.createElement("div", {
						className: ee.a.emojiText
					}, Object(m.b)(e.name))))
				}
			}
			var oe = o("./src/reddit/controls/EmojiDropdown/index.m.less"),
				ne = o.n(oe);
			const se = Object(l.a)(O.c, (e, t) => t.searchValue.toLowerCase(), (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return t.toLowerCase().startsWith(o)
					})
				}),
				ie = Object(l.c)({
					filteredEmojis: se
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
							selectedIndex: n
						} = this.state,
						s = this.props.filteredEmojis.length,
						i = e.scrollTop,
						r = Math.max(0, (n + 1) * o - t),
						a = Math.min(n * o, s * o - t),
						c = Math.max(Math.min(a, i), r);
					e.scrollTop = c, setTimeout(() => {
						this.isKeyScrolling = !1
					}, 100)
				}
				render() {
					return this.props.filteredEmojis.length ? a.a.createElement("div", {
						className: ne.a.container,
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
			var ce = Object(c.b)(ie, re)(ae),
				le = o("./node_modules/draft-js/lib/DraftOffsetKey.js"),
				de = o.n(le),
				pe = o("./src/lib/forEachGroup/index.ts"),
				me = o("./src/lib/memoizeByReference/index.ts"),
				ue = o("./node_modules/lodash/inRange.js"),
				he = o.n(ue),
				fe = o("./node_modules/lodash/times.js"),
				je = o.n(fe);
			const ge = (e, t, o) => {
				const n = t.getText();
				let s, i;
				for (; null !== (s = e.exec(n));) o(i = s.index, i + s[0].length)
			};
			var Ee = {
					strategy: function(e, t, o) {
						ge(Q, e, t)
					},
					component: e => a.a.createElement("span", null, e.children)
				},
				be = o("./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less"),
				xe = o.n(be);
			var Oe = {
					strategy: function(e, t, o) {
						e.getCharacterList().forEach((e, n) => {
							const s = e && e.getEntity();
							if (s) {
								o.getEntity(s).getType() === Ie.InlineImage && t(n, n + 1)
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
			var Te, Ie;
			! function(e) {
				e.Image = "image", e.Text = "text"
			}(Te || (Te = {})),
			function(e) {
				e.InlineImage = "InlineImage"
			}(Ie || (Ie = {}));
			const Se = () => new n.CompositeDecorator([Ee, Oe]),
				_e = (e, t) => {
					return e.createEntity(Ie.InlineImage, "MUTABLE", {
						url: t.url,
						id: t.id
					})
				},
				Ce = (e, t, o) => {
					let s, i = e,
						r = "";
					return o.type === Te.Image ? (s = (i = _e(i, o)).getLastCreatedEntityKey(), r = " ") : (s = void 0, r = o.text), n.Modifier.replaceText(i, t, r, void 0, s)
				},
				ve = (e, t) => {
					const o = e.getSelection(),
						s = o.merge({
							focusOffset: o.getAnchorOffset()
						}),
						i = Ce(e.getCurrentContent(), s, t);
					return n.EditorState.push(e, i, "insert-characters")
				},
				we = Object(me.a)(e => {
					const t = e.getSelection(),
						o = t.getStartOffset();
					if (!t.isCollapsed()) return;
					const n = e.getBlockTree(t.getStartKey()).findEntry(e => he()(o - 1, e.get("start"), e.get("end")));
					if (!n) return;
					const [s, i] = n, r = i.get("start"), a = i.get("end"), c = e.getCurrentContent().getBlockForKey(t.getStartKey()).getText();
					return i.get("decoratorKey") && c.charAt(r) === $ ? {
						emojiString: c.slice(r + 1, a),
						startIndex: r,
						endIndex: a,
						offsetKey: de.a.encode(t.getStartKey(), s, 0)
					} : void 0
				}),
				ke = (e, t) => {
					const o = we(e);
					if (!o) return;
					let s = e.getCurrentContent();
					const i = s.getPlainText().charAt(o.endIndex),
						r = e.getSelection().merge({
							anchorOffset: o.startIndex,
							focusOffset: o.endIndex + (i === $ ? 1 : 0)
						}),
						a = {
							type: Te.Image,
							id: Object(m.b)(t.name),
							url: t.url
						};
					return s = Ce(s, r, a), n.EditorState.push(e, s, "insert-characters")
				},
				De = (e, t) => {
					const o = e.getSelection(),
						s = o.getFocusOffset(),
						i = o.getFocusKey(),
						r = e.getCurrentContent(),
						a = r.getBlockForKey(i),
						c = s > 0 ? a.getEntityAt(s - 1) : null,
						l = c && r.getEntity(c);
					if (l && l.getType() === Ie.InlineImage) {
						const s = n.Modifier.replaceText(r, o, t, e.getCurrentInlineStyle());
						return n.EditorState.push(e, s, "insert-characters")
					}
				},
				Pe = "handled",
				Ne = "not-handled";
			class Re extends a.a.Component {
				constructor(e) {
					super(e), this.setEditorRef = e => this.editorRef = e, this.containerRef = null, this.setContainerRef = e => this.containerRef = e, this.setEmojiDropdownApi = e => this.emojiDropdownApi = e, this.focus = () => this.editorRef && this.editorRef.focus(), this.handleBeforeInput = e => {
						const {
							editorState: t,
							maxLength: o
						} = this.props, n = t.getCurrentContent().getPlainText();
						if (o && n.length >= o) return Pe;
						if (e === $ && this.emojiDropdownApi && this.state.emojiString) {
							const e = this.emojiDropdownApi.getCurrent(),
								t = this.state.emojiString.toLowerCase();
							if (e && e.name.toLowerCase() === t) return this.handleSelectEmoji(e), Pe
						}
						const s = De(t, e);
						return s ? (this.onChange(s), Pe) : Ne
					}, this.checkEditorStateForEmojis = e => {
						const t = we(e);
						this.setState({
							emojiString: t ? t.emojiString : "",
							suppressEmojiDropdown: !!t && this.state.suppressEmojiDropdown
						})
					}, this.handleSelectEmoji = e => {
						if (!this.props.emojisEnabled) return;
						const t = ke(this.props.editorState, e);
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
							maxLength: s
						} = this.props, i = this.editorRef.getClipboard(), r = o.getSelection(), a = e.length - (r.getEndOffset() - r.getStartOffset()), c = o.getCurrentContent().getPlainText().length + a;
						if (s && c > s) return Pe;
						if (i && i.first().getText() === e) return Ne;
						const l = q(e);
						let d = o.getCurrentContent();
						d = n.Modifier.replaceText(d, r, l);
						const p = n.EditorState.push(o, d, "insert-characters");
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
						} = we(this.props.editorState), t = this.containerRef.querySelector(`[data-offset-key="${e}"]`), {
							left: o,
							bottom: n
						} = t.getBoundingClientRect();
						this.updateEmojiDropdownPosition({
							left: o,
							top: n
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
						isFlairModOnly: s,
						placeholder: i,
						editorKey: r,
						subredditId: c,
						emojisEnabled: l
					} = this.props;
					return a.a.createElement("div", {
						className: e,
						ref: this.setContainerRef,
						onKeyDown: this.handleKeyDown
					}, a.a.createElement(n.Editor, {
						ref: this.setEditorRef,
						editorKey: r,
						editorState: t,
						onChange: this.onChange,
						placeholder: i,
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
						isFlairModOnly: s,
						searchValue: this.state.emojiString,
						onSelect: this.handleSelectEmoji,
						subredditId: c
					})))
				}
			}
			var Fe = Re,
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
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
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
							type: Te.Image,
							id: e.a,
							url: e.u
						}) : e.t && t.push({
							type: Te.Text,
							text: e.t
						})
					}) : e.text && t.push({
						type: Te.Text,
						text: e.text
					}), t
				},
				qe = e => {
					return function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (!e) return n.EditorState.createEmpty(Se());
						let o = n.EditorState.createEmpty(Se()),
							s = o.getCurrentContent();
						const i = [],
							r = [];
						e.forEach(e => {
							if ("image" === e.type) {
								i.push(" ");
								const t = (s = _e(s, e)).getLastCreatedEntityKey(),
									o = n.CharacterMetadata.create({
										entity: t
									});
								r.push(o)
							} else if ("text" === e.type) {
								i.push(e.text);
								const t = n.CharacterMetadata.create();
								r.push(...je()(e.text.length, () => t))
							}
						});
						let a = s.getBlockMap(),
							c = s.getFirstBlock().merge({
								text: i.join(""),
								characterList: Object(ye.List)(r)
							});
						a = a.set(c.getKey(), c), c = (s = s.merge({
							blockMap: a
						})).getFirstBlock();
						const l = n.SelectionState.createEmpty(c.getKey()).merge({
							anchorOffset: c.getLength(),
							focusOffset: c.getLength(),
							hasFocus: !1
						});
						return s = s.merge({
							blockMap: n.BlockMapBuilder.createFromArray([c])
						}), o = n.EditorState.set(o, {
							currentContent: s,
							selection: l
						}), t && (o = n.EditorState.forceSelection(o, l)), o
					}(Ye(e))
				},
				Ve = (e, t, o, n, s) => {
					const i = (e => {
						const t = e.getCurrentContent(),
							o = t.getPlainText(),
							n = [],
							s = t.getFirstBlock().getCharacterList();
						return Object(pe.a)(s, {
							keyFn: e => e.getEntity()
						}, (e, s, i, r) => {
							const a = e.getEntity(),
								c = a && t.getEntity(a);
							if (c && c.getType() === Ie.InlineImage) {
								const {
									id: e,
									url: t
								} = c.getData(), o = r - i;
								n.push(...je()(o, () => ({
									type: Te.Image,
									id: e,
									url: t
								})))
							} else n.push({
								type: Te.Text,
								text: o.slice(i, r)
							})
						}), n
					})(e);
					if (!!!i.find(e => e.type === Te.Image)) return {
						backgroundColor: t,
						templateId: o,
						type: Be.f.Text,
						text: i.map(e => e.type === Te.Text ? e.text : "").join(),
						textColor: n,
						cssClass: s
					};
					const r = i.map(e => e.type === Te.Image ? {
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
						textColor: n,
						cssClass: s
					}
				},
				$e = (e, t) => i()(Ye(e), Ye(t)),
				Qe = Object(d.a)(u.a.wrapped(b.a, "Component", We.a)),
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
							} = this.wrapperRef.current.getBoundingClientRect(), n = o > Ge, s = t + Ge < window.innerHeight;
							e = n && !s
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
							type: Te.Image,
							id: Object(m.b)(e.name),
							url: e.url
						};
						let o = ve(this.state.editorState, t);
						o = n.EditorState.forceSelection(o, o.getSelection()), this.setEditorState(o), this.onToggleEmojiPicker()
					}, this.shouldEnableEmojis = () => {
						const {
							flair: e,
							flairTemplate: t
						} = this.props;
						return !(!this.props.areEmojisEnabledInSubreddit || Object(Ae.i)(e) >= E.g || t && !Object(Ae.a)(t)) && (e ? Object(Ae.h)(e) : 0) < (t ? Object(Ae.l)(t) : E.d)
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
					const t = this.props.flairTemplate || E.a;
					return a.a.createElement("div", {
						className: Object(p.a)(We.a.HelperText, this.props.helperTextClass, e ? We.a.hasError : null)
					}, e || Object(Ae.k)(t))
				}
				renderHelperText(e) {
					const {
						flair: t
					} = this.props, o = Object(Ae.i)(t), n = o > E.g, s = E.g - o, i = h.fbt._({
						"*": "{number} characters remaining",
						_1: "1 character remaining"
					}, [h.fbt._plural(s, "number")], {
						hk: "29F3AW"
					});
					return a.a.createElement("div", {
						className: Object(p.a)(We.a.HelperText, this.props.helperTextClass, e ? We.a.hasError : null)
					}, n ? a.a.createElement(a.a.Fragment, null, i, a.a.createElement(H.a, {
						icon: a.a.createElement(Me.a, {
							className: We.a.helpIcon
						}),
						text: h.fbt._("The unicode for the emoji goes against the character count", null, {
							hk: "1gJWyZ"
						})
					})) : e || i)
				}
				render() {
					const {
						allowBlank: e,
						container: t,
						emojiPickerId: o,
						flair: n,
						flairTemplate: s = E.a,
						flairTemplateType: i,
						isCompact: r,
						isEmojiPickerOpen: c,
						isFlairModOnly: l,
						subredditId: d
					} = this.props, m = this.shouldEnableEmojis(), u = Object(Ae.m)(n, s, {
						allowBlank: e
					});
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement("div", {
						className: Object(p.a)(We.a.EditorWrapper, u ? We.a.hasError : null, r ? We.a.isCompact : null),
						ref: this.wrapperRef,
						id: o
					}, a.a.createElement(Fe, {
						ref: this.richTextInputRef,
						editorState: this.state.editorState,
						flairTemplateType: i,
						emojisEnabled: m,
						isFlairModOnly: l,
						maxLength: E.g,
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
						flairTemplateType: i,
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./node_modules/react-redux/es/index.js"),
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
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}
			const h = m.a.div("Text", p.a),
				f = m.a.div("BottomText", p.a),
				j = e => s.a.createElement(h, {
					className: e.className,
					style: e.style
				}, e.text, e.children),
				g = e => {
					const t = e.overflow ? e.overflow.left : 0;
					return s.a.createElement(f, {
						className: e.className,
						style: {
							...e.style,
							"--infoTextTooltip-overflow-left": `${t}px`
						}
					}, e.text, e.children)
				},
				E = Object(r.c)({
					isOpen: (e, t) => {
						let {
							tooltipId: o
						} = t;
						return Object(l.b)(o)(e)
					}
				}),
				b = Object(c.a)(g, [a.a.Click, a.a.Keydown]),
				x = Object(c.a)(j, [a.a.Click, a.a.Keydown]),
				O = Object(i.b)(E);
			t.c = O(e => {
				const {
					caretOnTop: t
				} = e;
				return t ? s.a.createElement(b, u({}, e, {
					targetPosition: ["center", "bottom"],
					tooltipPosition: ["center", "top"]
				})) : s.a.createElement(x, u({}, e, {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/reddit/constants/elementIds.ts"),
				a = o("./src/reddit/contexts/InsideOverlay.tsx");

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n])
					}
					return e
				}).apply(this, arguments)
			}

			function l(e, t) {
				const o = Object(i.a)(e, t);
				class n extends s.a.PureComponent {
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
						return s.a.createElement(o, c({}, this.props, {
							container: this.state.container,
							excludeContainerPosition: this.props.isOverlay
						}))
					}
				}
				return Object(a.b)(n)
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
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
			const h = e => {
				let {
					isBelow: t = !1,
					style: o
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(l.a.triangle, {
						[l.a.triangleBelow]: t
					}),
					style: o
				}, s.a.createElement("div", {
					className: l.a.triangleBack
				}), s.a.createElement("div", {
					className: l.a.triangleFront
				}))
			};
			class f extends n.Component {
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
						n = Math.round(t.height),
						s = this.state.positioning;
					if (!e) {
						if (!s) return;
						if (s.tooltipWidth === o && s.tooltipHeight === n) return
					}
					const i = e ? e.bottom : s.target.bottom,
						r = e ? e.top : s.target.top,
						c = e ? e.left : s.target.left,
						l = Object(a.e)(this.containerRef);
					let d, p, m;
					if (l) {
						const e = l.getBoundingClientRect();
						d = e.bottom - (i || 0), p = c - e.left + l.scrollLeft, m = r - e.top + l.scrollTop
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
						tooltipHeight: n,
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
					const n = t ? t.offsetWidth : document.documentElement.offsetWidth,
						s = n ? Math.max(e.tooltip.left + e.tooltipWidth - n, 0) : 0;
					e.tooltip.left -= s + m;
					const i = s + m - p / 2;
					let r;
					o === u.Above ? (e.tooltip.top += d, r = -d) : (e.tooltip.top -= e.tooltipHeight + d, r = e.tooltipHeight), e.triangle = {
						top: r,
						left: i
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
						positioning: n
					} = this.state, a = n && void 0 !== n.triangle && s.a.createElement(h, {
						isBelow: o === u.Below,
						style: {
							top: n.triangle.top + "px",
							left: n.triangle.left + "px"
						}
					});
					let c = s.a.createElement("div", {
						className: Object(i.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: t
						}),
						style: n ? {
							left: n.tooltip.left,
							...e ? {
								bottom: n.tooltip.bottom
							} : {
								top: n.tooltip.top
							}
						} : {},
						ref: this.updateContainerRef
					}, n && this.props.children && s.a.createElement(s.a.Fragment, null, a, this.props.children));
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = o("./src/reddit/controls/IconTooltip/index.m.less"),
				c = o.n(a);
			const l = Object(i.a)(r.b),
				d = ["center", "top"],
				p = ["center", "bottom"];
			class m extends s.a.Component {
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
					return s.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, s.a.createElement(l, {
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
			var n = o("./node_modules/react/index.js"),
				s = o.n(n),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/ImageDisplay/index.m.less"),
				a = o.n(r);
			t.a = e => {
				let {
					backgroundImage: t,
					children: o,
					className: n
				} = e;
				return s.a.createElement("div", {
					className: Object(i.a)(a.a.imageDisplay, n),
					style: {
						backgroundImage: `url('${t}')`
					},
					children: o
				})
			}
		},
		"./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less": function(e, t, o) {
			e.exports = {
				imageSpan: "_39fVyg7PKE6z039JZgpQLB"
			}
		},
		"./src/reddit/helpers/dom/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "g", (function() {
				return a
			})), o.d(t, "f", (function() {
				return c
			})), o.d(t, "d", (function() {
				return l
			})), o.d(t, "h", (function() {
				return d
			})), o.d(t, "c", (function() {
				return p
			})), o.d(t, "b", (function() {
				return m
			})), o.d(t, "e", (function() {
				return u
			})), o.d(t, "a", (function() {
				return h
			}));
			var n = o("./node_modules/lodash/map.js"),
				s = o.n(n),
				i = o("./src/lib/FocusTrap/index.ts");
			const r = e => "INPUT" === e.tagName.toUpperCase() || "TEXTAREA" === e.tagName.toUpperCase() || "DIV" === e.tagName.toUpperCase() && e.isContentEditable,
				a = e => {
					let t = e;
					do {
						if (r(t)) return !0
					} while (t = t.parentElement);
					return !1
				},
				c = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				l = () => c() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return s()(t, e => e.textContent || "")
				})() : null,
				d = (e, t) => {
					const o = document.createRange();
					return o.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, o) < 0 && e.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				p = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const o = t.getRangeAt(0);
					if (!d(o, e)) return;
					const {
						startContainer: n,
						startOffset: s,
						endContainer: i,
						endOffset: r
					} = o, a = document.createRange();
					a.selectNode(e);
					let c = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, o) && (a.setStart(n, s), c = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, o) && (a.setEnd(i, r), c = !1), c) return [e];
					const l = document.createElement("div");
					return l.appendChild(a.cloneContents()), [...l.childNodes]
				},
				m = (e, t, o) => {
					let n = e;
					for (; n && (!o || !o(n));) {
						if (n && t(n)) return n;
						n = n.parentElement
					}
				},
				u = e => e && e.parentElement && m(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				h = e => {
					e.querySelectorAll(i.a).forEach(e => {
						e.tabIndex = -1
					})
				}
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, s.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, o) {
			"use strict";
			var n = o("./node_modules/react/index.js"),
				s = o.n(n);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		},
		"./src/reddit/models/Emoji/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "d", (function() {
				return n
			})), o.d(t, "a", (function() {
				return s
			})), o.d(t, "b", (function() {
				return i
			})), o.d(t, "c", (function() {
				return r
			})), o.d(t, "e", (function() {
				return a
			}));
			const n = 24,
				s = 64e3,
				i = 128,
				r = 128,
				a = (e, t, o, n) => ({
					name: e,
					url: t,
					subredditId: o,
					...n
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
			var n = o("./node_modules/lodash/values.js"),
				s = o.n(n),
				i = o("./node_modules/reselect/es/index.js"),
				r = o("./src/reddit/models/Flair/index.ts"),
				a = o("./src/reddit/selectors/isModeratorOfSubreddit.ts"),
				c = o("./src/reddit/selectors/subreddit.ts");
			const l = [],
				d = e => e.emojis.models,
				p = Object(i.a)(d, (e, t) => t.subredditId, (e, t) => {
					const o = e[t];
					return o ? [...s()(o.emojis), ...s()(o.snoomojis)] : l
				}),
				m = Object(i.a)(p, a.c, (e, t) => t.isFlairModOnly, (e, t) => t.flairTemplateType, (e, t, o, n) => e.filter(e => !(e.modFlairOnly && !t || e.modFlairOnly && !o) && (!(!e.userFlairAllowed && n === r.d.UserFlair) && !(!e.postFlairAllowed && n === r.d.LinkFlair)))),
				u = Object(i.a)(d, (e, t) => t.subredditId, (e, t) => Object.keys(e[t].snoomojis)),
				h = (e, t) => Object(c.v)(e, {
					subredditName: t
				}).emojisEnabled,
				f = {
					emojis: {},
					snoomojis: {}
				},
				j = (e, t) => {
					let {
						subredditId: o
					} = t;
					return d(e)[o] || f
				},
				g = (e, t) => !!e.emojis.api.list.pending[t]
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FlairEdit.c281a6bf98f16c812ae7.js.map