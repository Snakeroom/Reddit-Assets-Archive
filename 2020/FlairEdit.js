// https://www.redditstatic.com/desktop2x/FlairEdit.6e71d344d9aa71270a8c.js
// Retrieved at 4/28/2020, 12:40:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FlairEdit"], {
		"./node_modules/fbjs/lib/emptyFunction.js": function(e, t, o) {
			"use strict";

			function s(e) {
				return function() {
					return e
				}
			}
			var i = function() {};
			i.thatReturns = s, i.thatReturnsFalse = s(!1), i.thatReturnsTrue = s(!0), i.thatReturnsNull = s(null), i.thatReturnsThis = function() {
				return this
			}, i.thatReturnsArgument = function(e) {
				return e
			}, e.exports = i
		},
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
				l = Math.min;
			e.exports = function(e, t) {
				if ((e = n(e)) < 1 || e > r) return [];
				var o = a,
					c = l(e, a);
				t = i(t), e -= a;
				for (var d = s(c, t); ++o < e;) t(o);
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
					end: l = i
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (l = l > i ? i : l)) return;
				let c = n(a),
					d = r(c, a),
					p = a;
				for (let s = a + 1; s < l; s++) {
					const e = n(s),
						t = r(e, s);
					if (t !== d) {
						if (!1 === o(c, d, p, s)) return;
						d = t, p = s, c = e
					}
				}
				o(c, d, p, l)
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
				l = o("./node_modules/react-redux/es/index.js"),
				c = o("./node_modules/reselect/es/index.js"),
				d = o("./src/higherOrderComponents/asTooltip.tsx"),
				p = o("./src/lib/classNames/index.ts"),
				m = o("./src/lib/formatEmojiName/index.ts"),
				h = o("./src/lib/lessComponent.tsx"),
				u = o("./node_modules/fbt/lib/FbtPublic.js"),
				g = o("./src/reddit/actions/emoji.ts"),
				f = o("./src/reddit/actions/tooltip.ts"),
				j = o("./src/reddit/constants/elementClassNames.ts"),
				E = o("./src/reddit/constants/flair.ts"),
				x = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/constants/keycodes.ts"),
				y = o("./src/reddit/selectors/emojis.ts"),
				I = o("./src/reddit/selectors/user.ts"),
				S = o("./src/reddit/controls/EmojiPicker/EmojiGrid/EmojiItem/index.m.less"),
				C = o.n(S);
			class v extends r.Component {
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
						className: Object(p.a)(C.a.emojiImg, {
							[C.a.mIsFocused]: t
						}),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					})
				}
			}
			var w = o("./src/reddit/controls/EmojiPicker/EmojiGrid/index.m.less"),
				T = o.n(w),
				O = e => {
					const {
						emojis: t,
						focusedIndex: o
					} = e;
					return a.a.createElement("div", {
						className: T.a.container
					}, a.a.createElement("div", {
						className: T.a.gridWrapper
					}, t.map((t, s) => a.a.createElement(v, {
						emoji: t,
						itemIndex: s,
						isFocused: s === o,
						onMouseEnter: e.onEmojiEnter,
						onMouseLeave: e.onEmojiLeave,
						onClick: e.onEmojiSelect
					}))))
				},
				D = o("./src/reddit/controls/Button/index.tsx"),
				P = o("./src/reddit/layout/row/Inline/index.tsx"),
				_ = o("./src/reddit/controls/EmojiPicker/Footer/index.m.less"),
				k = o.n(_),
				R = e => {
					const {
						className: t,
						emoji: o
					} = e;
					return a.a.createElement("div", {
						className: Object(p.a)(k.a.footer, t)
					}, o && a.a.createElement(P.a, {
						className: k.a.emojiInfo
					}, a.a.createElement("img", {
						className: k.a.emojiPreview,
						src: o.url
					}), a.a.createElement("span", {
						className: k.a.emojiLabel
					}, Object(m.b)(o.name))), a.a.createElement(D.n, {
						className: k.a.cancelButton,
						onClick: e.onCancelClick
					}, u.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})))
				},
				N = (o("./node_modules/core-js/modules/es6.symbol.js"), o("./src/reddit/icons/svgs/Search/index.tsx")),
				F = o("./src/reddit/controls/EmojiPicker/SearchBar/index.m.less"),
				B = o.n(F);

			function M() {
				return (M = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var A = function(e, t) {
					var o = {};
					for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var i = 0;
						for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (o[s[i]] = e[s[i]])
					}
					return o
				},
				L = e => {
					const {
						className: t,
						inputRef: o
					} = e, s = A(e, ["className", "inputRef"]);
					return a.a.createElement("div", {
						className: Object(p.a)(B.a.searchBar, t)
					}, a.a.createElement(N.a, {
						className: B.a.searchIcon
					}), a.a.createElement("div", {
						className: B.a.inputWrapper
					}, a.a.createElement("input", M({
						className: B.a.input,
						ref: o,
						placeholder: u.fbt._("Search for emoji", null, {
							hk: "IncEm"
						}),
						spellCheck: !1
					}, s))))
				},
				K = o("./src/reddit/controls/EmojiPicker/index.m.less"),
				W = o.n(K);
			const U = (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return -1 !== t.toLowerCase().indexOf(o)
					})
				},
				H = Object(c.c)({
					emojis: y.c,
					language: I.P
				}),
				G = {
					onGetSubredditEmojis: g.l
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
						e.which === b.a.Enter ? (e.preventDefault(), this.selectEmoji(this.state.focusedIndex)) : e.which === b.a.Escape && this.props.onCancel()
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
						className: Object(p.a)(W.a.container, e)
					}, a.a.createElement(L, {
						value: this.state.searchBarValue,
						inputRef: this.setInputRef,
						onChange: this.onSearchBarInputChange,
						onKeyDown: this.onKeyDown
					}), a.a.createElement(O, {
						emojis: t,
						focusedIndex: this.state.focusedIndex,
						language: this.props.language,
						onEmojiEnter: this.onEmojiEnter,
						onEmojiLeave: this.onEmojiLeave,
						onEmojiSelect: this.onEmojiSelect
					}), a.a.createElement(R, {
						emoji: s,
						onCancelClick: this.props.onCancel
					}))
				}
			}
			var q = Object(l.b)(H, G)(J),
				z = o("./src/reddit/controls/IconTooltip/index.tsx");
			o("./node_modules/draft-js/dist/Draft.css"), o("./node_modules/core-js/modules/es6.regexp.replace.js");
			const Y = /\r?\n|\r/g;
			var Q, V = e => e.replace(Y, ""),
				X = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx");
			! function(e) {
				e.AddImage = "add_image", e.Add = "add", e.Delete = "delete", e.Edit = "edit", e.EnableOff = "enable_off", e.EnableOn = "enable_on"
			}(Q || (Q = {}));
			const Z = ":",
				$ = /:[A-Za-z0-9_-]+/g;
			var ee = o("./src/reddit/controls/ImageDisplay/index.tsx"),
				te = o("./src/reddit/controls/EmojiDropdown/EmojiItem/index.m.less"),
				oe = o.n(te);
			class se extends r.Component {
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
						className: Object(p.a)(oe.a.emojiListItemWrapper, {
							[oe.a.mIsFocused]: t
						}),
						onMouseDown: this.handleMouseDown,
						onClick: this.handleClick,
						onMouseOver: this.handleMouseOver
					}, a.a.createElement(P.a, null, a.a.createElement(ee.a, {
						className: oe.a.emojiImageDisplay,
						backgroundImage: e.url
					}), a.a.createElement("div", {
						className: oe.a.emojiText
					}, Object(m.b)(e.name))))
				}
			}
			var ie = o("./src/reddit/controls/EmojiDropdown/index.m.less"),
				ne = o.n(ie);
			const re = Object(c.a)(y.c, (e, t) => t.searchValue.toLowerCase(), (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return t.toLowerCase().startsWith(o)
					})
				}),
				ae = Object(c.c)({
					language: I.P,
					filteredEmojis: re
				}),
				le = {
					onGetSubredditEmojis: g.m
				};
			class ce extends a.a.Component {
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
						l = Math.max(Math.min(a, n), r);
					e.scrollTop = l, setTimeout(() => {
						this.isKeyScrolling = !1
					}, 100)
				}
				render() {
					return this.props.filteredEmojis.length ? a.a.createElement("div", {
						className: ne.a.container,
						onMouseDown: this.onMouseDown,
						ref: this.containerRef
					}, this.props.filteredEmojis.map((e, t) => a.a.createElement(se, {
						key: e.url,
						emoji: e,
						isFocused: t === this.state.selectedIndex,
						itemIndex: t,
						onFocus: this.onEmojiFocus,
						onClick: this.selectEmoji
					}))) : null
				}
			}
			var de = Object(l.b)(ae, le)(ce),
				pe = o("./node_modules/draft-js/lib/DraftOffsetKey.js"),
				me = o.n(pe),
				he = o("./src/lib/forEachGroup/index.ts"),
				ue = o("./src/lib/memoizeByReference/index.ts"),
				ge = o("./node_modules/lodash/inRange.js"),
				fe = o.n(ge),
				je = o("./node_modules/lodash/times.js"),
				Ee = o.n(je);
			const xe = (e, t, o) => {
				const s = t.getText();
				let i, n;
				for (; null !== (i = e.exec(s));) o(n = i.index, n + i[0].length)
			};
			var be = {
					strategy: function(e, t, o) {
						xe($, e, t)
					},
					component: e => a.a.createElement("span", null, e.children)
				},
				ye = o("./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less"),
				Ie = o.n(ye);
			var Se = {
					strategy: function(e, t, o) {
						e.getCharacterList().forEach((e, s) => {
							const i = e && e.getEntity();
							if (i) {
								o.getEntity(i).getType() === we.InlineImage && t(s, s + 1)
							}
						})
					},
					component: e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: o
							} = t.getData();
						return a.a.createElement("span", {
							className: Ie.a.imageSpan,
							style: {
								backgroundImage: "url(".concat(o, ")")
							}
						}, e.children)
					}
				},
				Ce = o("./node_modules/immutable/dist/immutable.js");
			var ve, we;
			! function(e) {
				e.Image = "image", e.Text = "text"
			}(ve || (ve = {})),
			function(e) {
				e.InlineImage = "InlineImage"
			}(we || (we = {}));
			const Te = () => new s.CompositeDecorator([be, Se]),
				Oe = (e, t) => {
					return e.createEntity(we.InlineImage, "MUTABLE", {
						url: t.url,
						id: t.id
					})
				},
				De = (e, t, o) => {
					let i, n = e,
						r = "";
					return o.type === ve.Image ? (i = (n = Oe(n, o)).getLastCreatedEntityKey(), r = " ") : (i = void 0, r = o.text), s.Modifier.replaceText(n, t, r, void 0, i)
				},
				Pe = (e, t) => {
					const o = e.getSelection(),
						i = o.merge({
							focusOffset: o.getAnchorOffset()
						}),
						n = De(e.getCurrentContent(), i, t);
					return s.EditorState.push(e, n, "insert-characters")
				},
				_e = Object(ue.a)(e => {
					const t = e.getSelection(),
						o = t.getStartOffset();
					if (!t.isCollapsed()) return;
					const s = e.getBlockTree(t.getStartKey()).findEntry(e => fe()(o - 1, e.get("start"), e.get("end")));
					if (!s) return;
					const [i, n] = s, r = n.get("start"), a = n.get("end"), l = e.getCurrentContent().getBlockForKey(t.getStartKey()).getText();
					return n.get("decoratorKey") && l.charAt(r) === Z ? {
						emojiString: l.slice(r + 1, a),
						startIndex: r,
						endIndex: a,
						offsetKey: me.a.encode(t.getStartKey(), i, 0)
					} : void 0
				}),
				ke = (e, t) => {
					const o = _e(e);
					if (!o) return;
					let i = e.getCurrentContent();
					const n = i.getPlainText().charAt(o.endIndex),
						r = e.getSelection().merge({
							anchorOffset: o.startIndex,
							focusOffset: o.endIndex + (n === Z ? 1 : 0)
						}),
						a = {
							type: ve.Image,
							id: Object(m.b)(t.name),
							url: t.url
						};
					return i = De(i, r, a), s.EditorState.push(e, i, "insert-characters")
				},
				Re = (e, t) => {
					const o = e.getSelection(),
						i = o.getFocusOffset(),
						n = o.getFocusKey(),
						r = e.getCurrentContent(),
						a = r.getBlockForKey(n),
						l = i > 0 ? a.getEntityAt(i - 1) : null,
						c = l && r.getEntity(l);
					if (c && c.getType() === we.InlineImage) {
						const i = s.Modifier.replaceText(r, o, t, e.getCurrentInlineStyle());
						return s.EditorState.push(e, i, "insert-characters")
					}
				},
				Ne = "handled",
				Fe = "not-handled";
			class Be extends a.a.Component {
				constructor(e) {
					super(e), this.setEditorRef = e => this.editorRef = e, this.containerRef = null, this.setContainerRef = e => this.containerRef = e, this.setEmojiDropdownApi = e => this.emojiDropdownApi = e, this.focus = () => this.editorRef && this.editorRef.focus(), this.handleBeforeInput = e => {
						const {
							editorState: t,
							maxLength: o
						} = this.props, s = t.getCurrentContent().getPlainText();
						if (o && s.length >= o) return Ne;
						if (e === Z && this.emojiDropdownApi && this.state.emojiString) {
							const e = this.emojiDropdownApi.getCurrent(),
								t = this.state.emojiString.toLowerCase();
							if (e && e.name.toLowerCase() === t) return this.handleSelectEmoji(e), Ne
						}
						const i = Re(t, e);
						return i ? (this.onChange(i), Ne) : Fe
					}, this.checkEditorStateForEmojis = e => {
						const t = _e(e);
						this.setState({
							emojiString: t ? t.emojiString : "",
							suppressEmojiDropdown: !!t && this.state.suppressEmojiDropdown
						})
					}, this.handleSelectEmoji = e => {
						if (!this.props.emojisEnabled) return;
						const t = ke(this.props.editorState, e);
						t && this.onChange(t)
					}, this.handleKeyDown = e => {
						if (e.stopPropagation(), e.which === b.a.Escape && this.state.emojiString) e.preventDefault(), this.setState({
							suppressEmojiDropdown: !0
						});
						else if (e.which === b.a.ArrowDown && this.emojiDropdownApi) e.preventDefault(), this.emojiDropdownApi.moveDown();
						else if (e.which === b.a.ArrowUp && this.emojiDropdownApi) e.preventDefault(), this.emojiDropdownApi.moveUp();
						else if ((e.which === b.a.Enter || e.which === b.a.Tab) && this.emojiDropdownApi) {
							const t = this.emojiDropdownApi.getCurrent();
							t && (e.preventDefault(), this.handleSelectEmoji(t))
						}
					}, this.handlePastedText = (e, t) => {
						if (!this.editorRef) return Ne;
						const {
							editorState: o,
							maxLength: i
						} = this.props, n = this.editorRef.getClipboard(), r = o.getSelection(), a = e.length - (r.getEndOffset() - r.getStartOffset()), l = o.getCurrentContent().getPlainText().length + a;
						if (i && l > i) return Ne;
						if (n && n.first().getText() === e) return Fe;
						const c = V(e);
						let d = o.getCurrentContent();
						d = s.Modifier.replaceText(d, r, c);
						const p = s.EditorState.push(o, d, "insert-characters");
						return this.onChange(p), Ne
					}, this.handleReturn = e => (e.preventDefault(), Ne), this.onChange = e => {
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
						} = _e(this.props.editorState), t = this.containerRef.querySelector('[data-offset-key="'.concat(e, '"]')), {
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
						subredditId: l,
						emojisEnabled: c
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
					}), c && a.a.createElement(X.b, {
						onSetPositionUpdater: this.setEmojiDropdownPositionUpdater,
						usePortal: !0
					}, a.a.createElement(de, {
						key: this.state.emojiString,
						onDropdownApi: this.setEmojiDropdownApi,
						flairTemplateType: o,
						isFlairModOnly: i,
						searchValue: this.state.emojiString,
						onSelect: this.handleSelectEmoji,
						subredditId: l
					})))
				}
			}
			var Me = Be,
				Ae = o("./src/reddit/helpers/flair.ts"),
				Le = o("./src/reddit/icons/svgs/Help/index.tsx"),
				Ke = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				We = o("./src/reddit/models/Flair/index.ts"),
				Ue = o("./src/reddit/selectors/tooltip.ts"),
				He = o("./src/reddit/components/FlairSearch/FlairEdit/index.m.less"),
				Ge = o.n(He);

			function Je() {
				return (Je = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const qe = 450,
				ze = {
					targetPosition: ["right", "top"],
					tooltipPosition: ["right", "bottom"]
				},
				Ye = {
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				},
				Qe = e => {
					const t = [];
					return e.type === We.f.Richtext ? e.richtext.forEach(e => {
						e.e === We.c.Emoji ? t.push({
							type: ve.Image,
							id: e.a,
							url: e.u
						}) : e.t && t.push({
							type: ve.Text,
							text: e.t
						})
					}) : e.text && t.push({
						type: ve.Text,
						text: e.text
					}), t
				},
				Ve = e => {
					return function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (!e) return s.EditorState.createEmpty(Te());
						let o = s.EditorState.createEmpty(Te()),
							i = o.getCurrentContent();
						const n = [],
							r = [];
						e.forEach(e => {
							if ("image" === e.type) {
								n.push(" ");
								const t = (i = Oe(i, e)).getLastCreatedEntityKey(),
									o = s.CharacterMetadata.create({
										entity: t
									});
								r.push(o)
							} else if ("text" === e.type) {
								n.push(e.text);
								const t = s.CharacterMetadata.create();
								r.push(...Ee()(e.text.length, () => t))
							}
						});
						let a = i.getBlockMap(),
							l = i.getFirstBlock().merge({
								text: n.join(""),
								characterList: Object(Ce.List)(r)
							});
						a = a.set(l.getKey(), l), l = (i = i.merge({
							blockMap: a
						})).getFirstBlock();
						const c = s.SelectionState.createEmpty(l.getKey()).merge({
							anchorOffset: l.getLength(),
							focusOffset: l.getLength(),
							hasFocus: !1
						});
						return i = i.merge({
							blockMap: s.BlockMapBuilder.createFromArray([l])
						}), o = s.EditorState.set(o, {
							currentContent: i,
							selection: c
						}), t && (o = s.EditorState.forceSelection(o, c)), o
					}(Qe(e))
				},
				Xe = (e, t, o, s, i) => {
					const n = (e => {
						const t = e.getCurrentContent(),
							o = t.getPlainText(),
							s = [],
							i = t.getFirstBlock().getCharacterList();
						return Object(he.a)(i, {
							keyFn: e => e.getEntity()
						}, (e, i, n, r) => {
							const a = e.getEntity(),
								l = a && t.getEntity(a);
							if (l && l.getType() === we.InlineImage) {
								const {
									id: e,
									url: t
								} = l.getData(), o = r - n;
								s.push(...Ee()(o, () => ({
									type: ve.Image,
									id: e,
									url: t
								})))
							} else s.push({
								type: ve.Text,
								text: o.slice(n, r)
							})
						}), s
					})(e);
					if (!!!n.find(e => e.type === ve.Image)) return {
						backgroundColor: t,
						templateId: o,
						type: We.f.Text,
						text: n.map(e => e.type === ve.Text ? e.text : "").join(),
						textColor: s,
						cssClass: i
					};
					const r = n.map(e => e.type === ve.Image ? {
						e: We.c.Emoji,
						a: e.id,
						u: e.url
					} : {
						e: We.c.Text,
						t: e.text
					});
					return {
						backgroundColor: t,
						templateId: o,
						type: We.f.Richtext,
						richtext: r,
						textColor: s,
						cssClass: i
					}
				},
				Ze = (e, t) => n()(Qe(e), Qe(t)),
				$e = Object(d.a)(h.a.wrapped(x.a, "Component", Ge.a)),
				et = e => {
					e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
				},
				tt = Object(c.c)({
					areEmojisEnabledInSubreddit: (e, t) => {
						const o = e.subreddits.about[t.subredditId];
						return !!o && o.emojisEnabled
					},
					isEmojiPickerOpen: (e, t) => Object(Ue.b)(t.emojiPickerId)(e)
				}),
				ot = {
					toggleTooltip: e => Object(f.h)({
						tooltipId: e
					}),
					onGetSubredditEmojis: g.m
				},
				st = Object(l.b)(tt, ot);
			class it extends a.a.Component {
				constructor(e) {
					super(e), this.richTextInputRef = a.a.createRef(), this.wrapperRef = a.a.createRef(), this.onToggleEmojiPicker = () => {
						let e = !1;
						if (this.wrapperRef.current) {
							const {
								bottom: t,
								top: o
							} = this.wrapperRef.current.getBoundingClientRect(), s = o > qe, i = t + qe < window.innerHeight;
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
								const t = Xe(e, this.props.flair.backgroundColor, this.props.flair.templateId, this.props.flair.textColor, this.props.flair.cssClass);
								this.props.onChange(t)
							}
						})
					}, this.onSelectEmoji = e => {
						const t = {
							type: ve.Image,
							id: Object(m.b)(e.name),
							url: e.url
						};
						let o = Pe(this.state.editorState, t);
						o = s.EditorState.forceSelection(o, o.getSelection()), this.setEditorState(o), this.onToggleEmojiPicker()
					}, this.shouldEnableEmojis = () => {
						const {
							flair: e,
							flairTemplate: t
						} = this.props;
						return !(!this.props.areEmojisEnabledInSubreddit || Object(Ae.i)(e) >= E.g || t && !Object(Ae.a)(t)) && (e ? Object(Ae.h)(e) : 0) < (t ? Object(Ae.l)(t) : E.d)
					}, this.onBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.state = {
						editorState: Ve(e.flair)
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
						o = Xe(this.state.editorState, t.backgroundColor, t.templateId, t.textColor, t.cssClass);
					Ze(o, t) || this.setEditorState(Ve(t))
				}
				renderCompactHelperText(e) {
					const t = this.props.flairTemplate || E.a;
					return a.a.createElement("div", {
						className: Object(p.a)(Ge.a.HelperText, this.props.helperTextClass, e ? Ge.a.hasError : null)
					}, e || Object(Ae.k)(t))
				}
				renderHelperText(e) {
					const {
						flair: t
					} = this.props, o = Object(Ae.i)(t), s = o > E.g, i = E.g - o, n = u.fbt._({
						"*": "{number} characters remaining",
						_1: "1 character remaining"
					}, [u.fbt._plural(i, "number")], {
						hk: "29F3AW"
					});
					return a.a.createElement("div", {
						className: Object(p.a)(Ge.a.HelperText, this.props.helperTextClass, e ? Ge.a.hasError : null)
					}, s ? a.a.createElement(a.a.Fragment, null, n, a.a.createElement(z.a, {
						icon: a.a.createElement(Le.a, {
							className: Ge.a.helpIcon
						}),
						text: u.fbt._("The unicode for the emoji goes against the character count", null, {
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
						flairTemplate: i = E.a,
						flairTemplateType: n,
						isCompact: r,
						isEmojiPickerOpen: l,
						isFlairModOnly: c,
						subredditId: d
					} = this.props, m = this.shouldEnableEmojis(), h = Object(Ae.m)(s, i, {
						allowBlank: e
					});
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement("div", {
						className: Object(p.a)(Ge.a.EditorWrapper, h ? Ge.a.hasError : null, r ? Ge.a.isCompact : null),
						ref: this.wrapperRef,
						id: o
					}, a.a.createElement(Me, {
						ref: this.richTextInputRef,
						editorState: this.state.editorState,
						flairTemplateType: n,
						emojisEnabled: m,
						isFlairModOnly: c,
						maxLength: E.g,
						onChange: this.setEditorState,
						subredditId: d,
						onBlur: this.onBlur,
						className: j.c
					}), m && a.a.createElement("div", {
						className: Object(p.a)(Ge.a.EmojiPickerButton, l ? Ge.a.isActive : null),
						id: o,
						onClick: this.onToggleEmojiPicker
					}, a.a.createElement(Ke.a, {
						className: Object(p.a)(Ge.a.SmileIcon, r ? Ge.a.isCompact : null)
					}), a.a.createElement($e, Je({
						className: Object(p.a)({
							[Ge.a.hasError]: !!h
						}),
						container: t,
						isOverlay: !0,
						isOpen: l,
						tooltipId: o
					}, this.state.shouldPositionPickerOnTop ? ze : Ye), a.a.createElement("div", {
						onClick: et
					}, a.a.createElement(q, {
						flairTemplateType: n,
						isFlairModOnly: c,
						onCancel: this.onToggleEmojiPicker,
						onSelect: this.onSelectEmoji,
						subredditId: this.props.subredditId
					}))))), r ? this.renderCompactHelperText(h) : this.renderHelperText(h))
				}
			}
			t.default = st(it)
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
				return h
			})), o.d(t, "b", (function() {
				return g
			}));
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/lib/classNames/index.ts"),
				r = o("./src/lib/CSSVariableProvider/index.tsx"),
				a = o("./src/reddit/helpers/dom/index.ts"),
				l = o("./src/reddit/components/RichTextEditor/Tooltip/index.m.less"),
				c = o.n(l);
			const d = 8,
				p = 16,
				m = 15 + p / 2;
			var h;
			! function(e) {
				e[e.None = 0] = "None", e[e.Above = 1] = "Above", e[e.Below = 2] = "Below"
			}(h || (h = {}));
			const u = e => {
				let {
					isBelow: t = !1,
					style: o
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(c.a.triangle, {
						[c.a.triangleBelow]: t
					}),
					style: o
				}, i.a.createElement("div", {
					className: c.a.triangleBack
				}), i.a.createElement("div", {
					className: c.a.triangleFront
				}))
			};
			class g extends s.Component {
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
					const t = this.containerRef.offsetWidth,
						o = this.containerRef.offsetHeight,
						s = this.state.positioning;
					if (!e) {
						if (!s) return;
						if (s.tooltipWidth === t && s.tooltipHeight === o) return
					}
					const i = e ? e.bottom : s.target.bottom,
						n = e ? e.top : s.target.top,
						r = e ? e.left : s.target.left,
						l = Object(a.e)(this.containerRef);
					let c, d, p;
					if (l) {
						const e = l.getBoundingClientRect();
						c = e.bottom - (i || 0), d = r - e.left + l.scrollLeft, p = n - e.top + l.scrollTop
					} else {
						const e = document.documentElement,
							t = window.pageYOffset || e.scrollTop;
						d = r + (window.pageXOffset || e.scrollLeft), p = n + t
					}
					const m = {
						target: {
							top: n,
							left: r
						},
						tooltipWidth: t,
						tooltipHeight: o,
						tooltip: {
							top: p,
							left: d,
							bottom: c
						}
					};
					this.adjustPositionForTriangle(m, l), this.setState({
						positioning: m
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
					o === h.Above ? (e.tooltip.top += d, r = -d) : (e.tooltip.top -= e.tooltipHeight + d, r = e.tooltipHeight), e.triangle = {
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
					} = this.state, a = s && void 0 !== s.triangle && i.a.createElement(u, {
						isBelow: o === h.Below,
						style: {
							top: s.triangle.top + "px",
							left: s.triangle.left + "px"
						}
					});
					let l = i.a.createElement("div", {
						className: Object(n.a)(c.a.tooltipBox, this.props.className, {
							[c.a.dropdown]: t
						}),
						style: s ? Object.assign({
							left: s.tooltip.left
						}, e ? {
							bottom: s.tooltip.bottom
						} : {
							top: s.tooltip.top
						}) : {},
						ref: this.updateContainerRef
					}, s && this.props.children && i.a.createElement(i.a.Fragment, null, a, this.props.children));
					return this.props.usePortal && (l = Object(r.d)(l, this.props.portalContainer || document.body)), l
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
			var s = o("./node_modules/react/index.js"),
				i = o.n(s),
				n = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = o("./src/reddit/controls/IconTooltip/index.m.less"),
				l = o.n(a);
			const c = Object(n.a)(r.b),
				d = ["center", "top"],
				p = ["center", "bottom"];
			t.a = class extends i.a.Component {
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
					}, this.props.icon, i.a.createElement(c, {
						className: l.a.tooltip,
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
			t.a = e => {
				let {
					backgroundImage: t,
					children: o,
					className: s
				} = e;
				return i.a.createElement("div", {
					className: Object(n.a)(a.a.imageDisplay, s),
					style: {
						backgroundImage: "url('".concat(t, "')")
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
		}
	}
]);
//# sourceMappingURL=FlairEdit.6e71d344d9aa71270a8c.js.map