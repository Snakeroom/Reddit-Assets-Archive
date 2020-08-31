// https://www.redditstatic.com/desktop2x/FlairEdit.177148e0842a28f34402.js
// Retrieved at 8/31/2020, 3:30:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FlairEdit"], {
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
				h = o("./src/lib/lessComponent.tsx"),
				u = o("./node_modules/fbt/lib/FbtPublic.js"),
				f = o("./src/reddit/actions/emoji.ts"),
				g = o("./src/reddit/actions/tooltip.ts"),
				j = o("./src/reddit/constants/elementClassNames.ts"),
				E = o("./src/reddit/constants/flair.ts"),
				x = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/constants/keycodes.ts"),
				y = o("./src/reddit/selectors/emojis.ts"),
				I = o("./src/reddit/controls/EmojiPicker/EmojiGrid/EmojiItem/index.m.less"),
				S = o.n(I);
			class C extends r.Component {
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
						className: Object(p.a)(S.a.emojiImg, {
							[S.a.mIsFocused]: t
						}),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					})
				}
			}
			var v = o("./src/reddit/controls/EmojiPicker/EmojiGrid/index.m.less"),
				w = o.n(v);

			function T(e) {
				const {
					emojis: t,
					focusedIndex: o
				} = e;
				return a.a.createElement("div", {
					className: w.a.container
				}, a.a.createElement("div", {
					className: w.a.gridWrapper
				}, t.map((t, s) => a.a.createElement(C, {
					emoji: t,
					itemIndex: s,
					isFocused: s === o,
					onMouseEnter: e.onEmojiEnter,
					onMouseLeave: e.onEmojiLeave,
					onClick: e.onEmojiSelect
				}))))
			}
			var O = o("./src/reddit/controls/Button/index.tsx"),
				D = o("./src/reddit/layout/row/Inline/index.tsx"),
				P = o("./src/reddit/controls/EmojiPicker/Footer/index.m.less"),
				_ = o.n(P);

			function k(e) {
				const {
					className: t,
					emoji: o
				} = e;
				return a.a.createElement("div", {
					className: Object(p.a)(_.a.footer, t)
				}, o && a.a.createElement(D.a, {
					className: _.a.emojiInfo
				}, a.a.createElement("img", {
					className: _.a.emojiPreview,
					src: o.url
				}), a.a.createElement("span", {
					className: _.a.emojiLabel
				}, Object(m.b)(o.name))), a.a.createElement(O.n, {
					className: _.a.cancelButton,
					onClick: e.onCancelClick
				}, u.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})))
			}
			o("./node_modules/core-js/modules/es6.symbol.js");
			var N = o("./src/reddit/icons/svgs/Search/index.tsx"),
				R = o("./src/reddit/controls/EmojiPicker/SearchBar/index.m.less"),
				F = o.n(R);

			function B() {
				return (B = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			var M = function(e, t) {
				var o = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (o[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var i = 0;
					for (s = Object.getOwnPropertySymbols(e); i < s.length; i++) t.indexOf(s[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[i]) && (o[s[i]] = e[s[i]])
				}
				return o
			};

			function L(e) {
				const {
					className: t,
					inputRef: o
				} = e, s = M(e, ["className", "inputRef"]);
				return a.a.createElement("div", {
					className: Object(p.a)(F.a.searchBar, t)
				}, a.a.createElement(N.a, {
					className: F.a.searchIcon
				}), a.a.createElement("div", {
					className: F.a.inputWrapper
				}, a.a.createElement("input", B({
					className: F.a.input,
					ref: o,
					placeholder: u.fbt._("Search for emoji", null, {
						hk: "IncEm"
					}),
					spellCheck: !1
				}, s))))
			}
			var A = o("./src/reddit/controls/EmojiPicker/index.m.less"),
				K = o.n(A);
			const W = (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return -1 !== t.toLowerCase().indexOf(o)
					})
				},
				U = Object(l.c)({
					emojis: y.c
				}),
				H = {
					onGetSubredditEmojis: f.l
				};
			class G extends a.a.Component {
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
							o = W(this.props.emojis, t),
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
						const t = W(e.emojis, this.state.searchBarValue);
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
						className: Object(p.a)(K.a.container, e)
					}, a.a.createElement(L, {
						value: this.state.searchBarValue,
						inputRef: this.setInputRef,
						onChange: this.onSearchBarInputChange,
						onKeyDown: this.onKeyDown
					}), a.a.createElement(T, {
						emojis: t,
						focusedIndex: this.state.focusedIndex,
						onEmojiEnter: this.onEmojiEnter,
						onEmojiLeave: this.onEmojiLeave,
						onEmojiSelect: this.onEmojiSelect
					}), a.a.createElement(k, {
						emoji: s,
						onCancelClick: this.props.onCancel
					}))
				}
			}
			var J = Object(c.b)(U, H)(G),
				q = o("./src/reddit/controls/IconTooltip/index.tsx");
			o("./node_modules/draft-js/dist/Draft.css"), o("./node_modules/core-js/modules/es6.regexp.replace.js");
			const z = /\r?\n|\r/g;
			var Y, Q = e => e.replace(z, ""),
				V = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx");
			! function(e) {
				e.AddImage = "add_image", e.Add = "add", e.Delete = "delete", e.Edit = "edit", e.EnableOff = "enable_off", e.EnableOn = "enable_on"
			}(Y || (Y = {}));
			const X = ":",
				Z = /:[A-Za-z0-9_-]+/g;
			var $ = o("./src/reddit/controls/ImageDisplay/index.tsx"),
				ee = o("./src/reddit/controls/EmojiDropdown/EmojiItem/index.m.less"),
				te = o.n(ee);
			class oe extends r.Component {
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
						className: Object(p.a)(te.a.emojiListItemWrapper, {
							[te.a.mIsFocused]: t
						}),
						onMouseDown: this.handleMouseDown,
						onClick: this.handleClick,
						onMouseOver: this.handleMouseOver
					}, a.a.createElement(D.a, null, a.a.createElement($.a, {
						className: te.a.emojiImageDisplay,
						backgroundImage: e.url
					}), a.a.createElement("div", {
						className: te.a.emojiText
					}, Object(m.b)(e.name))))
				}
			}
			var se = o("./src/reddit/controls/EmojiDropdown/index.m.less"),
				ie = o.n(se);
			const ne = Object(l.a)(y.c, (e, t) => t.searchValue.toLowerCase(), (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return t.toLowerCase().startsWith(o)
					})
				}),
				re = Object(l.c)({
					filteredEmojis: ne
				}),
				ae = {
					onGetSubredditEmojis: f.m
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
						c = Math.max(Math.min(a, n), r);
					e.scrollTop = c, setTimeout(() => {
						this.isKeyScrolling = !1
					}, 100)
				}
				render() {
					return this.props.filteredEmojis.length ? a.a.createElement("div", {
						className: ie.a.container,
						onMouseDown: this.onMouseDown,
						ref: this.containerRef
					}, this.props.filteredEmojis.map((e, t) => a.a.createElement(oe, {
						key: e.url,
						emoji: e,
						isFocused: t === this.state.selectedIndex,
						itemIndex: t,
						onFocus: this.onEmojiFocus,
						onClick: this.selectEmoji
					}))) : null
				}
			}
			var le = Object(c.b)(re, ae)(ce),
				de = o("./node_modules/draft-js/lib/DraftOffsetKey.js"),
				pe = o.n(de),
				me = o("./src/lib/forEachGroup/index.ts"),
				he = o("./src/lib/memoizeByReference/index.ts"),
				ue = o("./node_modules/lodash/inRange.js"),
				fe = o.n(ue),
				ge = o("./node_modules/lodash/times.js"),
				je = o.n(ge);
			const Ee = (e, t, o) => {
				const s = t.getText();
				let i, n;
				for (; null !== (i = e.exec(s));) o(n = i.index, n + i[0].length)
			};
			var xe = {
					strategy: function(e, t, o) {
						Ee(Z, e, t)
					},
					component: e => a.a.createElement("span", null, e.children)
				},
				be = o("./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less"),
				ye = o.n(be);
			var Ie = {
					strategy: function(e, t, o) {
						e.getCharacterList().forEach((e, s) => {
							const i = e && e.getEntity();
							if (i) {
								o.getEntity(i).getType() === ve.InlineImage && t(s, s + 1)
							}
						})
					},
					component: e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: o
							} = t.getData();
						return a.a.createElement("span", {
							className: ye.a.imageSpan,
							style: {
								backgroundImage: "url(".concat(o, ")")
							}
						}, e.children)
					}
				},
				Se = o("./node_modules/immutable/dist/immutable.js");
			var Ce, ve;
			! function(e) {
				e.Image = "image", e.Text = "text"
			}(Ce || (Ce = {})),
			function(e) {
				e.InlineImage = "InlineImage"
			}(ve || (ve = {}));
			const we = () => new s.CompositeDecorator([xe, Ie]),
				Te = (e, t) => {
					return e.createEntity(ve.InlineImage, "MUTABLE", {
						url: t.url,
						id: t.id
					})
				},
				Oe = (e, t, o) => {
					let i, n = e,
						r = "";
					return o.type === Ce.Image ? (i = (n = Te(n, o)).getLastCreatedEntityKey(), r = " ") : (i = void 0, r = o.text), s.Modifier.replaceText(n, t, r, void 0, i)
				},
				De = (e, t) => {
					const o = e.getSelection(),
						i = o.merge({
							focusOffset: o.getAnchorOffset()
						}),
						n = Oe(e.getCurrentContent(), i, t);
					return s.EditorState.push(e, n, "insert-characters")
				},
				Pe = Object(he.a)(e => {
					const t = e.getSelection(),
						o = t.getStartOffset();
					if (!t.isCollapsed()) return;
					const s = e.getBlockTree(t.getStartKey()).findEntry(e => fe()(o - 1, e.get("start"), e.get("end")));
					if (!s) return;
					const [i, n] = s, r = n.get("start"), a = n.get("end"), c = e.getCurrentContent().getBlockForKey(t.getStartKey()).getText();
					return n.get("decoratorKey") && c.charAt(r) === X ? {
						emojiString: c.slice(r + 1, a),
						startIndex: r,
						endIndex: a,
						offsetKey: pe.a.encode(t.getStartKey(), i, 0)
					} : void 0
				}),
				_e = (e, t) => {
					const o = Pe(e);
					if (!o) return;
					let i = e.getCurrentContent();
					const n = i.getPlainText().charAt(o.endIndex),
						r = e.getSelection().merge({
							anchorOffset: o.startIndex,
							focusOffset: o.endIndex + (n === X ? 1 : 0)
						}),
						a = {
							type: Ce.Image,
							id: Object(m.b)(t.name),
							url: t.url
						};
					return i = Oe(i, r, a), s.EditorState.push(e, i, "insert-characters")
				},
				ke = (e, t) => {
					const o = e.getSelection(),
						i = o.getFocusOffset(),
						n = o.getFocusKey(),
						r = e.getCurrentContent(),
						a = r.getBlockForKey(n),
						c = i > 0 ? a.getEntityAt(i - 1) : null,
						l = c && r.getEntity(c);
					if (l && l.getType() === ve.InlineImage) {
						const i = s.Modifier.replaceText(r, o, t, e.getCurrentInlineStyle());
						return s.EditorState.push(e, i, "insert-characters")
					}
				},
				Ne = "handled",
				Re = "not-handled";
			class Fe extends a.a.Component {
				constructor(e) {
					super(e), this.setEditorRef = e => this.editorRef = e, this.containerRef = null, this.setContainerRef = e => this.containerRef = e, this.setEmojiDropdownApi = e => this.emojiDropdownApi = e, this.focus = () => this.editorRef && this.editorRef.focus(), this.handleBeforeInput = e => {
						const {
							editorState: t,
							maxLength: o
						} = this.props, s = t.getCurrentContent().getPlainText();
						if (o && s.length >= o) return Ne;
						if (e === X && this.emojiDropdownApi && this.state.emojiString) {
							const e = this.emojiDropdownApi.getCurrent(),
								t = this.state.emojiString.toLowerCase();
							if (e && e.name.toLowerCase() === t) return this.handleSelectEmoji(e), Ne
						}
						const i = ke(t, e);
						return i ? (this.onChange(i), Ne) : Re
					}, this.checkEditorStateForEmojis = e => {
						const t = Pe(e);
						this.setState({
							emojiString: t ? t.emojiString : "",
							suppressEmojiDropdown: !!t && this.state.suppressEmojiDropdown
						})
					}, this.handleSelectEmoji = e => {
						if (!this.props.emojisEnabled) return;
						const t = _e(this.props.editorState, e);
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
						} = this.props, n = this.editorRef.getClipboard(), r = o.getSelection(), a = e.length - (r.getEndOffset() - r.getStartOffset()), c = o.getCurrentContent().getPlainText().length + a;
						if (i && c > i) return Ne;
						if (n && n.first().getText() === e) return Re;
						const l = Q(e);
						let d = o.getCurrentContent();
						d = s.Modifier.replaceText(d, r, l);
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
						} = Pe(this.props.editorState), t = this.containerRef.querySelector('[data-offset-key="'.concat(e, '"]')), {
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
					}, a.a.createElement(le, {
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
			var Be = Fe,
				Me = o("./src/reddit/helpers/flair.ts"),
				Le = o("./src/reddit/icons/svgs/Help/index.tsx"),
				Ae = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				Ke = o("./src/reddit/models/Flair/index.ts"),
				We = o("./src/reddit/selectors/tooltip.ts"),
				Ue = o("./src/reddit/components/FlairSearch/FlairEdit/index.m.less"),
				He = o.n(Ue);

			function Ge() {
				return (Ge = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Je = 450,
				qe = {
					targetPosition: ["right", "top"],
					tooltipPosition: ["right", "bottom"]
				},
				ze = {
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				},
				Ye = e => {
					const t = [];
					return e.type === Ke.f.Richtext ? e.richtext.forEach(e => {
						e.e === Ke.c.Emoji ? t.push({
							type: Ce.Image,
							id: e.a,
							url: e.u
						}) : e.t && t.push({
							type: Ce.Text,
							text: e.t
						})
					}) : e.text && t.push({
						type: Ce.Text,
						text: e.text
					}), t
				},
				Qe = e => {
					return function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (!e) return s.EditorState.createEmpty(we());
						let o = s.EditorState.createEmpty(we()),
							i = o.getCurrentContent();
						const n = [],
							r = [];
						e.forEach(e => {
							if ("image" === e.type) {
								n.push(" ");
								const t = (i = Te(i, e)).getLastCreatedEntityKey(),
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
								characterList: Object(Se.List)(r)
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
					}(Ye(e))
				},
				Ve = (e, t, o, s, i) => {
					const n = (e => {
						const t = e.getCurrentContent(),
							o = t.getPlainText(),
							s = [],
							i = t.getFirstBlock().getCharacterList();
						return Object(me.a)(i, {
							keyFn: e => e.getEntity()
						}, (e, i, n, r) => {
							const a = e.getEntity(),
								c = a && t.getEntity(a);
							if (c && c.getType() === ve.InlineImage) {
								const {
									id: e,
									url: t
								} = c.getData(), o = r - n;
								s.push(...je()(o, () => ({
									type: Ce.Image,
									id: e,
									url: t
								})))
							} else s.push({
								type: Ce.Text,
								text: o.slice(n, r)
							})
						}), s
					})(e);
					if (!!!n.find(e => e.type === Ce.Image)) return {
						backgroundColor: t,
						templateId: o,
						type: Ke.f.Text,
						text: n.map(e => e.type === Ce.Text ? e.text : "").join(),
						textColor: s,
						cssClass: i
					};
					const r = n.map(e => e.type === Ce.Image ? {
						e: Ke.c.Emoji,
						a: e.id,
						u: e.url
					} : {
						e: Ke.c.Text,
						t: e.text
					});
					return {
						backgroundColor: t,
						templateId: o,
						type: Ke.f.Richtext,
						richtext: r,
						textColor: s,
						cssClass: i
					}
				},
				Xe = (e, t) => n()(Ye(e), Ye(t)),
				Ze = Object(d.a)(h.a.wrapped(x.a, "Component", He.a)),
				$e = e => {
					e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
				},
				et = Object(l.c)({
					areEmojisEnabledInSubreddit: (e, t) => {
						const o = e.subreddits.about[t.subredditId];
						return !!o && o.emojisEnabled
					},
					isEmojiPickerOpen: (e, t) => Object(We.b)(t.emojiPickerId)(e)
				}),
				tt = {
					toggleTooltip: e => Object(g.h)({
						tooltipId: e
					}),
					onGetSubredditEmojis: f.m
				},
				ot = Object(c.b)(et, tt);
			class st extends a.a.Component {
				constructor(e) {
					super(e), this.richTextInputRef = a.a.createRef(), this.wrapperRef = a.a.createRef(), this.onToggleEmojiPicker = () => {
						let e = !1;
						if (this.wrapperRef.current) {
							const {
								bottom: t,
								top: o
							} = this.wrapperRef.current.getBoundingClientRect(), s = o > Je, i = t + Je < window.innerHeight;
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
							type: Ce.Image,
							id: Object(m.b)(e.name),
							url: e.url
						};
						let o = De(this.state.editorState, t);
						o = s.EditorState.forceSelection(o, o.getSelection()), this.setEditorState(o), this.onToggleEmojiPicker()
					}, this.shouldEnableEmojis = () => {
						const {
							flair: e,
							flairTemplate: t
						} = this.props;
						return !(!this.props.areEmojisEnabledInSubreddit || Object(Me.i)(e) >= E.g || t && !Object(Me.a)(t)) && (e ? Object(Me.h)(e) : 0) < (t ? Object(Me.l)(t) : E.d)
					}, this.onBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.state = {
						editorState: Qe(e.flair)
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
					Xe(o, t) || this.setEditorState(Qe(t))
				}
				renderCompactHelperText(e) {
					const t = this.props.flairTemplate || E.a;
					return a.a.createElement("div", {
						className: Object(p.a)(He.a.HelperText, this.props.helperTextClass, e ? He.a.hasError : null)
					}, e || Object(Me.k)(t))
				}
				renderHelperText(e) {
					const {
						flair: t
					} = this.props, o = Object(Me.i)(t), s = o > E.g, i = E.g - o, n = u.fbt._({
						"*": "{number} characters remaining",
						_1: "1 character remaining"
					}, [u.fbt._plural(i, "number")], {
						hk: "29F3AW"
					});
					return a.a.createElement("div", {
						className: Object(p.a)(He.a.HelperText, this.props.helperTextClass, e ? He.a.hasError : null)
					}, s ? a.a.createElement(a.a.Fragment, null, n, a.a.createElement(q.a, {
						icon: a.a.createElement(Le.a, {
							className: He.a.helpIcon
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
						isEmojiPickerOpen: c,
						isFlairModOnly: l,
						subredditId: d
					} = this.props, m = this.shouldEnableEmojis(), h = Object(Me.m)(s, i, {
						allowBlank: e
					});
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement("div", {
						className: Object(p.a)(He.a.EditorWrapper, h ? He.a.hasError : null, r ? He.a.isCompact : null),
						ref: this.wrapperRef,
						id: o
					}, a.a.createElement(Be, {
						ref: this.richTextInputRef,
						editorState: this.state.editorState,
						flairTemplateType: n,
						emojisEnabled: m,
						isFlairModOnly: l,
						maxLength: E.g,
						onChange: this.setEditorState,
						subredditId: d,
						onBlur: this.onBlur,
						className: j.c
					}), m && a.a.createElement("div", {
						className: Object(p.a)(He.a.EmojiPickerButton, c ? He.a.isActive : null),
						id: o,
						onClick: this.onToggleEmojiPicker
					}, a.a.createElement(Ae.a, {
						className: Object(p.a)(He.a.SmileIcon, r ? He.a.isCompact : null)
					}), a.a.createElement(Ze, Ge({
						className: Object(p.a)({
							[He.a.hasError]: !!h
						}),
						container: t,
						isOverlay: !0,
						isOpen: c,
						tooltipId: o
					}, this.state.shouldPositionPickerOnTop ? qe : ze), a.a.createElement("div", {
						onClick: $e
					}, a.a.createElement(J, {
						flairTemplateType: n,
						isFlairModOnly: l,
						onCancel: this.onToggleEmojiPicker,
						onSelect: this.onSelectEmoji,
						subredditId: this.props.subredditId
					}))))), r ? this.renderCompactHelperText(h) : this.renderHelperText(h))
				}
			}
			t.default = ot(st)
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
					className: Object(n.a)(l.a.triangle, {
						[l.a.triangleBelow]: t
					}),
					style: o
				}, i.a.createElement("div", {
					className: l.a.triangleBack
				}), i.a.createElement("div", {
					className: l.a.triangleFront
				}))
			};
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
						c = Object(a.e)(this.containerRef);
					let l, d, p;
					if (c) {
						const e = c.getBoundingClientRect();
						l = e.bottom - (i || 0), d = r - e.left + c.scrollLeft, p = n - e.top + c.scrollTop
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
							bottom: l
						}
					};
					this.adjustPositionForTriangle(m, c), this.setState({
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
					let c = i.a.createElement("div", {
						className: Object(n.a)(l.a.tooltipBox, this.props.className, {
							[l.a.dropdown]: t
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
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FlairEdit.177148e0842a28f34402.js.map