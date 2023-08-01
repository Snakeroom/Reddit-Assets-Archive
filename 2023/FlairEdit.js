// https://www.redditstatic.com/desktop2x/FlairEdit.2e7ee4cd5e7747fa45a1.js
// Retrieved at 8/1/2023, 4:10:04 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["FlairEdit"], {
		"./node_modules/lodash/_baseInRange.js": function(e, t) {
			var o = Math.max,
				s = Math.min;
			e.exports = function(e, t, n) {
				return e >= s(t, n) && e < o(t, n)
			}
		},
		"./node_modules/lodash/inRange.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseInRange.js"),
				n = o("./node_modules/lodash/toFinite.js"),
				i = o("./node_modules/lodash/toNumber.js");
			e.exports = function(e, t, o) {
				return t = n(t), void 0 === o ? (o = t, t = 0) : o = n(o), e = i(e), s(e, t, o)
			}
		},
		"./node_modules/lodash/map.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_arrayMap.js"),
				n = o("./node_modules/lodash/_baseIteratee.js"),
				i = o("./node_modules/lodash/_baseMap.js"),
				r = o("./node_modules/lodash/isArray.js");
			e.exports = function(e, t) {
				return (r(e) ? s : i)(e, n(t, 3))
			}
		},
		"./node_modules/lodash/times.js": function(e, t, o) {
			var s = o("./node_modules/lodash/_baseTimes.js"),
				n = o("./node_modules/lodash/_castFunction.js"),
				i = o("./node_modules/lodash/toInteger.js"),
				r = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = i(e)) < 1 || e > r) return [];
				var o = a,
					l = c(e, a);
				t = n(t), e -= a;
				for (var d = s(l, t); ++o < e;) t(o);
				return d
			}
		},
		"./src/lib/forEachGroup/index.ts": function(e, t, o) {
			"use strict";
			o.d(t, "a", (function() {
				return n
			}));
			const s = e => e;

			function n(e, t, o) {
				const [n, i] = Array.isArray(e) ? [e.length, t => e[t]] : [e.size, t => e.get(t)], {
					keyFn: r = s
				} = t || {};
				let {
					start: a = 0,
					end: c = n
				} = t || {};
				if ((a = a < 0 ? 0 : a) >= (c = c > n ? n : c)) return;
				let l = i(a),
					d = r(l, a),
					p = a;
				for (let s = a + 1; s < c; s++) {
					const e = i(s),
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
				n = o("./node_modules/lodash/isEqual.js"),
				i = o.n(n),
				r = o("./node_modules/react/index.js"),
				a = o.n(r),
				c = o("./node_modules/react-redux/es/index.js"),
				l = o("./node_modules/reselect/es/index.js"),
				d = o("./src/higherOrderComponents/asTooltip.tsx"),
				p = o("./src/lib/classNames/index.ts"),
				m = o("./src/lib/formatEmojiName/index.ts"),
				h = o("./src/lib/lessComponent.tsx"),
				u = o("./node_modules/fbt/lib/FbtPublic.js"),
				g = o("./src/reddit/actions/emoji.ts"),
				f = o("./src/reddit/actions/tooltip.ts"),
				E = o("./src/reddit/constants/elementClassNames.ts"),
				j = o("./src/reddit/constants/flair.ts"),
				x = o("./src/reddit/controls/Dropdown/index.tsx"),
				b = o("./src/reddit/constants/keycodes.ts"),
				S = o("./src/reddit/selectors/emojis.ts"),
				C = o("./src/reddit/controls/EmojiPicker/EmojiGrid/EmojiItem/index.m.less"),
				y = o.n(C);
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
						className: Object(p.a)(y.a.emojiImg, {
							[y.a.mIsFocused]: t
						}),
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onClick: this.onClick
					})
				}
			}
			var T = o("./src/reddit/controls/EmojiPicker/EmojiGrid/index.m.less"),
				v = o.n(T);

			function w(e) {
				const {
					emojis: t,
					focusedIndex: o
				} = e;
				return a.a.createElement("div", {
					className: v.a.container
				}, a.a.createElement("div", {
					className: v.a.gridWrapper
				}, t.map((t, s) => a.a.createElement(I, {
					emoji: t,
					itemIndex: s,
					isFocused: s === o,
					onMouseEnter: e.onEmojiEnter,
					onMouseLeave: e.onEmojiLeave,
					onClick: e.onEmojiSelect
				}))))
			}
			var _ = o("./src/reddit/controls/Button/index.tsx"),
				D = o("./src/reddit/layout/row/Inline/index.tsx"),
				O = o("./src/reddit/controls/EmojiPicker/Footer/index.m.less"),
				P = o.n(O);

			function R(e) {
				const {
					className: t,
					emoji: o
				} = e;
				return a.a.createElement("div", {
					className: Object(p.a)(P.a.footer, t)
				}, o && a.a.createElement(D.a, {
					className: P.a.emojiInfo
				}, a.a.createElement("img", {
					className: P.a.emojiPreview,
					src: o.url
				}), a.a.createElement("span", {
					className: P.a.emojiLabel
				}, Object(m.b)(o.name))), a.a.createElement(_.r, {
					className: P.a.cancelButton,
					onClick: e.onCancelClick
				}, u.fbt._("Cancel", null, {
					hk: "2TSLl5"
				})))
			}
			var N = o("./src/reddit/icons/svgs/Search/index.tsx"),
				k = o("./src/reddit/controls/EmojiPicker/SearchBar/index.m.less"),
				B = o.n(k);

			function F() {
				return (F = Object.assign || function(e) {
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
					className: Object(p.a)(B.a.searchBar, t)
				}, a.a.createElement(N.a, {
					className: B.a.searchIcon
				}), a.a.createElement("div", {
					className: B.a.inputWrapper
				}, a.a.createElement("input", F({
					className: B.a.input,
					ref: o,
					placeholder: u.fbt._("Search for emoji", null, {
						hk: "IncEm"
					}),
					spellCheck: !1
				}, s))))
			}
			var A = o("./src/reddit/controls/EmojiPicker/index.m.less"),
				L = o.n(A);
			const K = (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return -1 !== t.toLowerCase().indexOf(o)
					})
				},
				W = Object(l.c)({
					emojis: S.c
				}),
				U = {
					onGetSubredditEmojis: g.k
				};
			class H extends a.a.Component {
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
							o = K(this.props.emojis, t),
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
						const t = K(e.emojis, this.state.searchBarValue);
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
						className: Object(p.a)(L.a.container, e)
					}, a.a.createElement(M, {
						value: this.state.searchBarValue,
						inputRef: this.setInputRef,
						onChange: this.onSearchBarInputChange,
						onKeyDown: this.onKeyDown
					}), a.a.createElement(w, {
						emojis: t,
						focusedIndex: this.state.focusedIndex,
						onEmojiEnter: this.onEmojiEnter,
						onEmojiLeave: this.onEmojiLeave,
						onEmojiSelect: this.onEmojiSelect
					}), a.a.createElement(R, {
						emoji: s,
						onCancelClick: this.props.onCancel
					}))
				}
			}
			var G = Object(c.b)(W, U)(H),
				J = o("./src/reddit/controls/IconTooltip/index.tsx");
			o("./node_modules/draft-js/dist/Draft.css");
			const q = /\r?\n|\r/g;
			var z, Y = e => e.replace(q, ""),
				Q = o("./src/reddit/components/RichTextEditor/Tooltip/index.tsx");
			! function(e) {
				e.AddImage = "add_image", e.Add = "add", e.Delete = "delete", e.Edit = "edit", e.EnableOff = "enable_off", e.EnableOn = "enable_on"
			}(z || (z = {}));
			const V = ":",
				X = /:[A-Za-z0-9_-]+/g;
			var Z = o("./src/reddit/controls/ImageDisplay/index.tsx"),
				$ = o("./src/reddit/controls/EmojiDropdown/EmojiItem/index.m.less"),
				ee = o.n($);
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
					}, a.a.createElement(D.a, null, a.a.createElement(Z.a, {
						className: ee.a.emojiImageDisplay,
						backgroundImage: e.url
					}), a.a.createElement("div", {
						className: ee.a.emojiText
					}, Object(m.b)(e.name))))
				}
			}
			var oe = o("./src/reddit/controls/EmojiDropdown/index.m.less"),
				se = o.n(oe);
			const ne = Object(l.a)(S.c, (e, t) => t.searchValue.toLowerCase(), (e, t) => {
					const o = t.toLowerCase();
					return e.filter(e => {
						let {
							name: t
						} = e;
						return t.toLowerCase().startsWith(o)
					})
				}),
				ie = Object(l.c)({
					filteredEmojis: ne
				}),
				re = {
					onGetSubredditEmojis: g.l
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
						n = this.props.filteredEmojis.length,
						i = e.scrollTop,
						r = Math.max(0, (s + 1) * o - t),
						a = Math.min(s * o, n * o - t),
						c = Math.max(Math.min(a, i), r);
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
			var ce = Object(c.b)(ie, re)(ae),
				le = o("./node_modules/draft-js/lib/DraftOffsetKey.js"),
				de = o.n(le),
				pe = o("./src/lib/forEachGroup/index.ts"),
				me = o("./src/lib/memoizeByReference/index.ts"),
				he = o("./node_modules/lodash/inRange.js"),
				ue = o.n(he),
				ge = o("./node_modules/lodash/times.js"),
				fe = o.n(ge);
			const Ee = (e, t, o) => {
				const s = t.getText();
				let n, i;
				for (; null !== (n = e.exec(s));) o(i = n.index, i + n[0].length)
			};
			var je = {
					strategy: function(e, t, o) {
						Ee(X, e, t)
					},
					component: e => a.a.createElement("span", null, e.children)
				},
				xe = o("./src/reddit/controls/RichTextInput/imageDecoratorStyles.m.less"),
				be = o.n(xe);
			var Se = {
					strategy: function(e, t, o) {
						e.getCharacterList().forEach((e, s) => {
							const n = e && e.getEntity();
							if (n) {
								o.getEntity(n).getType() === Ie.InlineImage && t(s, s + 1)
							}
						})
					},
					component: e => {
						const t = e.contentState.getEntity(e.entityKey),
							{
								url: o
							} = t.getData();
						return a.a.createElement("span", {
							className: be.a.imageSpan,
							style: {
								backgroundImage: `url(${o})`
							}
						}, e.children)
					}
				},
				Ce = o("./node_modules/immutable/dist/immutable.js");
			var ye, Ie;
			! function(e) {
				e.Image = "image", e.Text = "text"
			}(ye || (ye = {})),
			function(e) {
				e.InlineImage = "InlineImage"
			}(Ie || (Ie = {}));
			const Te = () => new s.CompositeDecorator([je, Se]),
				ve = (e, t) => {
					return e.createEntity(Ie.InlineImage, "MUTABLE", {
						url: t.url,
						id: t.id
					})
				},
				we = (e, t, o) => {
					let n, i = e,
						r = "";
					return o.type === ye.Image ? (n = (i = ve(i, o)).getLastCreatedEntityKey(), r = " ") : (n = void 0, r = o.text), s.Modifier.replaceText(i, t, r, void 0, n)
				},
				_e = (e, t) => {
					const o = e.getSelection(),
						n = o.merge({
							focusOffset: o.getAnchorOffset()
						}),
						i = we(e.getCurrentContent(), n, t);
					return s.EditorState.push(e, i, "insert-characters")
				},
				De = Object(me.a)(e => {
					const t = e.getSelection(),
						o = t.getStartOffset();
					if (!t.isCollapsed()) return;
					const s = e.getBlockTree(t.getStartKey()).findEntry(e => ue()(o - 1, e.get("start"), e.get("end")));
					if (!s) return;
					const [n, i] = s, r = i.get("start"), a = i.get("end"), c = e.getCurrentContent().getBlockForKey(t.getStartKey()).getText();
					return i.get("decoratorKey") && c.charAt(r) === V ? {
						emojiString: c.slice(r + 1, a),
						startIndex: r,
						endIndex: a,
						offsetKey: de.a.encode(t.getStartKey(), n, 0)
					} : void 0
				}),
				Oe = (e, t) => {
					const o = De(e);
					if (!o) return;
					let n = e.getCurrentContent();
					const i = n.getPlainText().charAt(o.endIndex),
						r = e.getSelection().merge({
							anchorOffset: o.startIndex,
							focusOffset: o.endIndex + (i === V ? 1 : 0)
						}),
						a = {
							type: ye.Image,
							id: Object(m.b)(t.name),
							url: t.url
						};
					return n = we(n, r, a), s.EditorState.push(e, n, "insert-characters")
				},
				Pe = (e, t) => {
					const o = e.getSelection(),
						n = o.getFocusOffset(),
						i = o.getFocusKey(),
						r = e.getCurrentContent(),
						a = r.getBlockForKey(i),
						c = n > 0 ? a.getEntityAt(n - 1) : null,
						l = c && r.getEntity(c);
					if (l && l.getType() === Ie.InlineImage) {
						const n = s.Modifier.replaceText(r, o, t, e.getCurrentInlineStyle());
						return s.EditorState.push(e, n, "insert-characters")
					}
				},
				Re = "handled",
				Ne = "not-handled";
			class ke extends a.a.Component {
				constructor(e) {
					super(e), this.setEditorRef = e => this.editorRef = e, this.containerRef = null, this.setContainerRef = e => this.containerRef = e, this.setEmojiDropdownApi = e => this.emojiDropdownApi = e, this.focus = () => this.editorRef && this.editorRef.focus(), this.handleBeforeInput = e => {
						const {
							editorState: t,
							maxLength: o
						} = this.props, s = t.getCurrentContent().getPlainText();
						if (o && s.length >= o) return Re;
						if (e === V && this.emojiDropdownApi && this.state.emojiString) {
							const e = this.emojiDropdownApi.getCurrent(),
								t = this.state.emojiString.toLowerCase();
							if (e && e.name.toLowerCase() === t) return this.handleSelectEmoji(e), Re
						}
						const n = Pe(t, e);
						return n ? (this.onChange(n), Re) : Ne
					}, this.checkEditorStateForEmojis = e => {
						const t = De(e);
						this.setState({
							emojiString: t ? t.emojiString : "",
							suppressEmojiDropdown: !!t && this.state.suppressEmojiDropdown
						})
					}, this.handleSelectEmoji = e => {
						if (!this.props.emojisEnabled) return;
						const t = Oe(this.props.editorState, e);
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
						if (!this.editorRef) return Re;
						const {
							editorState: o,
							maxLength: n
						} = this.props, i = this.editorRef.getClipboard(), r = o.getSelection(), a = e.length - (r.getEndOffset() - r.getStartOffset()), c = o.getCurrentContent().getPlainText().length + a;
						if (n && c > n) return Re;
						if (i && i.first().getText() === e) return Ne;
						const l = Y(e);
						let d = o.getCurrentContent();
						d = s.Modifier.replaceText(d, r, l);
						const p = s.EditorState.push(o, d, "insert-characters");
						return this.onChange(p), Re
					}, this.handleReturn = e => (e.preventDefault(), Re), this.onChange = e => {
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
						} = De(this.props.editorState), t = this.containerRef.querySelector(`[data-offset-key="${e}"]`), {
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
						isFlairModOnly: n,
						placeholder: i,
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
						placeholder: i,
						handleBeforeInput: this.handleBeforeInput,
						handleReturn: this.handleReturn,
						handlePastedText: this.handlePastedText,
						onBlur: this.props.onBlur
					}), l && a.a.createElement(Q.b, {
						onSetPositionUpdater: this.setEmojiDropdownPositionUpdater,
						usePortal: !0
					}, a.a.createElement(ce, {
						key: this.state.emojiString,
						onDropdownApi: this.setEmojiDropdownApi,
						flairTemplateType: o,
						isFlairModOnly: n,
						searchValue: this.state.emojiString,
						onSelect: this.handleSelectEmoji,
						subredditId: c
					})))
				}
			}
			var Be = ke,
				Fe = o("./src/reddit/helpers/flair.ts"),
				Me = o("./src/reddit/icons/svgs/Help/index.tsx"),
				Ae = o("./src/reddit/icons/svgs/Smile/index.tsx"),
				Le = o("./src/reddit/models/Flair/index.ts"),
				Ke = o("./src/reddit/selectors/tooltip.ts"),
				We = o("./src/reddit/components/FlairSearch/FlairEdit/index.m.less"),
				Ue = o.n(We);

			function He() {
				return (He = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var o = arguments[t];
						for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (e[s] = o[s])
					}
					return e
				}).apply(this, arguments)
			}
			const Ge = 450,
				Je = {
					targetPosition: ["right", "top"],
					tooltipPosition: ["right", "bottom"]
				},
				qe = {
					targetPosition: ["right", "bottom"],
					tooltipPosition: ["right", "top"]
				},
				ze = e => {
					const t = [];
					return e.type === Le.f.Richtext ? e.richtext.forEach(e => {
						e.e === Le.c.Emoji ? t.push({
							type: ye.Image,
							id: e.a,
							url: e.u
						}) : e.t && t.push({
							type: ye.Text,
							text: e.t
						})
					}) : e.text && t.push({
						type: ye.Text,
						text: e.text
					}), t
				},
				Ye = e => {
					return function(e) {
						let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
						if (!e) return s.EditorState.createEmpty(Te());
						let o = s.EditorState.createEmpty(Te()),
							n = o.getCurrentContent();
						const i = [],
							r = [];
						e.forEach(e => {
							if ("image" === e.type) {
								i.push(" ");
								const t = (n = ve(n, e)).getLastCreatedEntityKey(),
									o = s.CharacterMetadata.create({
										entity: t
									});
								r.push(o)
							} else if ("text" === e.type) {
								i.push(e.text);
								const t = s.CharacterMetadata.create();
								r.push(...fe()(e.text.length, () => t))
							}
						});
						let a = n.getBlockMap(),
							c = n.getFirstBlock().merge({
								text: i.join(""),
								characterList: Object(Ce.List)(r)
							});
						a = a.set(c.getKey(), c), c = (n = n.merge({
							blockMap: a
						})).getFirstBlock();
						const l = s.SelectionState.createEmpty(c.getKey()).merge({
							anchorOffset: c.getLength(),
							focusOffset: c.getLength(),
							hasFocus: !1
						});
						return n = n.merge({
							blockMap: s.BlockMapBuilder.createFromArray([c])
						}), o = s.EditorState.set(o, {
							currentContent: n,
							selection: l
						}), t && (o = s.EditorState.forceSelection(o, l)), o
					}(ze(e))
				},
				Qe = (e, t, o, s, n) => {
					const i = (e => {
						const t = e.getCurrentContent(),
							o = t.getPlainText(),
							s = [],
							n = t.getFirstBlock().getCharacterList();
						return Object(pe.a)(n, {
							keyFn: e => e.getEntity()
						}, (e, n, i, r) => {
							const a = e.getEntity(),
								c = a && t.getEntity(a);
							if (c && c.getType() === Ie.InlineImage) {
								const {
									id: e,
									url: t
								} = c.getData(), o = r - i;
								s.push(...fe()(o, () => ({
									type: ye.Image,
									id: e,
									url: t
								})))
							} else s.push({
								type: ye.Text,
								text: o.slice(i, r)
							})
						}), s
					})(e);
					if (!!!i.find(e => e.type === ye.Image)) return {
						backgroundColor: t,
						templateId: o,
						type: Le.f.Text,
						text: i.map(e => e.type === ye.Text ? e.text : "").join(),
						textColor: s,
						cssClass: n
					};
					const r = i.map(e => e.type === ye.Image ? {
						e: Le.c.Emoji,
						a: e.id,
						u: e.url
					} : {
						e: Le.c.Text,
						t: e.text
					});
					return {
						backgroundColor: t,
						templateId: o,
						type: Le.f.Richtext,
						richtext: r,
						textColor: s,
						cssClass: n
					}
				},
				Ve = (e, t) => i()(ze(e), ze(t)),
				Xe = Object(d.a)(h.a.wrapped(x.a, "Component", Ue.a)),
				Ze = e => {
					e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
				},
				$e = Object(l.c)({
					areEmojisEnabledInSubreddit: (e, t) => {
						const o = e.subreddits.about[t.subredditId];
						return !!o && o.emojisEnabled
					},
					isEmojiPickerOpen: (e, t) => Object(Ke.b)(t.emojiPickerId)(e)
				}),
				et = {
					toggleTooltip: e => Object(f.h)({
						tooltipId: e
					}),
					onGetSubredditEmojis: g.l
				},
				tt = Object(c.b)($e, et);
			class ot extends a.a.Component {
				constructor(e) {
					super(e), this.richTextInputRef = a.a.createRef(), this.wrapperRef = a.a.createRef(), this.onToggleEmojiPicker = () => {
						let e = !1;
						if (this.wrapperRef.current) {
							const {
								bottom: t,
								top: o
							} = this.wrapperRef.current.getBoundingClientRect(), s = o > Ge, n = t + Ge < window.innerHeight;
							e = s && !n
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
								const t = Qe(e, this.props.flair.backgroundColor, this.props.flair.templateId, this.props.flair.textColor, this.props.flair.cssClass);
								this.props.onChange(t)
							}
						})
					}, this.onSelectEmoji = e => {
						const t = {
							type: ye.Image,
							id: Object(m.b)(e.name),
							url: e.url
						};
						let o = _e(this.state.editorState, t);
						o = s.EditorState.forceSelection(o, o.getSelection()), this.setEditorState(o), this.onToggleEmojiPicker()
					}, this.shouldEnableEmojis = () => {
						const {
							flair: e,
							flairTemplate: t
						} = this.props;
						return !(!this.props.areEmojisEnabledInSubreddit || Object(Fe.i)(e) >= j.g || t && !Object(Fe.a)(t)) && (e ? Object(Fe.h)(e) : 0) < (t ? Object(Fe.l)(t) : j.d)
					}, this.onBlur = () => {
						this.props.onBlur && this.props.onBlur()
					}, this.state = {
						editorState: Ye(e.flair)
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
						o = Qe(this.state.editorState, t.backgroundColor, t.templateId, t.textColor, t.cssClass);
					Ve(o, t) || this.setEditorState(Ye(t))
				}
				renderCompactHelperText(e) {
					const t = this.props.flairTemplate || j.a;
					return a.a.createElement("div", {
						className: Object(p.a)(Ue.a.HelperText, this.props.helperTextClass, e ? Ue.a.hasError : null)
					}, e || Object(Fe.k)(t))
				}
				renderHelperText(e) {
					const {
						flair: t
					} = this.props, o = Object(Fe.i)(t), s = o > j.g, n = j.g - o, i = u.fbt._({
						"*": "{number} characters remaining",
						_1: "1 character remaining"
					}, [u.fbt._plural(n, "number")], {
						hk: "29F3AW"
					});
					return a.a.createElement("div", {
						className: Object(p.a)(Ue.a.HelperText, this.props.helperTextClass, e ? Ue.a.hasError : null)
					}, s ? a.a.createElement(a.a.Fragment, null, i, a.a.createElement(J.a, {
						icon: a.a.createElement(Me.a, {
							className: Ue.a.helpIcon
						}),
						text: u.fbt._("The unicode for the emoji goes against the character count", null, {
							hk: "1gJWyZ"
						})
					})) : e || i)
				}
				render() {
					const {
						allowBlank: e,
						container: t,
						emojiPickerId: o,
						flair: s,
						flairTemplate: n = j.a,
						flairTemplateType: i,
						isCompact: r,
						isEmojiPickerOpen: c,
						isFlairModOnly: l,
						subredditId: d
					} = this.props, m = this.shouldEnableEmojis(), h = Object(Fe.m)(s, n, {
						allowBlank: e
					});
					return a.a.createElement("div", {
						className: this.props.className
					}, a.a.createElement("div", {
						className: Object(p.a)(Ue.a.EditorWrapper, h ? Ue.a.hasError : null, r ? Ue.a.isCompact : null),
						ref: this.wrapperRef,
						id: o
					}, a.a.createElement(Be, {
						ref: this.richTextInputRef,
						editorState: this.state.editorState,
						flairTemplateType: i,
						emojisEnabled: m,
						isFlairModOnly: l,
						maxLength: j.g,
						onChange: this.setEditorState,
						subredditId: d,
						onBlur: this.onBlur,
						className: E.c
					}), m && a.a.createElement("div", {
						className: Object(p.a)(Ue.a.EmojiPickerButton, c ? Ue.a.isActive : null),
						id: o,
						onClick: this.onToggleEmojiPicker
					}, a.a.createElement(Ae.a, {
						className: Object(p.a)(Ue.a.SmileIcon, r ? Ue.a.isCompact : null)
					}), a.a.createElement(Xe, He({
						className: Object(p.a)({
							[Ue.a.hasError]: !!h
						}),
						container: t,
						isOverlay: !0,
						isOpen: c,
						tooltipId: o
					}, this.state.shouldPositionPickerOnTop ? Je : qe), a.a.createElement("div", {
						onClick: Ze
					}, a.a.createElement(G, {
						flairTemplateType: i,
						isFlairModOnly: l,
						onCancel: this.onToggleEmojiPicker,
						onSelect: this.onSelectEmoji,
						subredditId: this.props.subredditId
					}))))), r ? this.renderCompactHelperText(h) : this.renderHelperText(h))
				}
			}
			t.default = tt(ot)
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
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
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
				return n.a.createElement("div", {
					className: Object(i.a)(l.a.triangle, {
						[l.a.triangleBelow]: t
					}),
					style: o
				}, n.a.createElement("div", {
					className: l.a.triangleBack
				}), n.a.createElement("div", {
					className: l.a.triangleFront
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
					const t = this.containerRef.getBoundingClientRect(),
						o = Math.round(t.width),
						s = Math.round(t.height),
						n = this.state.positioning;
					if (!e) {
						if (!n) return;
						if (n.tooltipWidth === o && n.tooltipHeight === s) return
					}
					const i = e ? e.bottom : n.target.bottom,
						r = e ? e.top : n.target.top,
						c = e ? e.left : n.target.left,
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
					const h = {
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
					this.adjustPositionForTriangle(h, l), this.setState({
						positioning: h
					})
				}
				adjustPositionForTriangle(e, t) {
					const {
						trianglePlacement: o
					} = this.props;
					if (!o) return;
					const s = t ? t.offsetWidth : document.documentElement.offsetWidth,
						n = s ? Math.max(e.tooltip.left + e.tooltipWidth - s, 0) : 0;
					e.tooltip.left -= n + m;
					const i = n + m - p / 2;
					let r;
					o === h.Above ? (e.tooltip.top += d, r = -d) : (e.tooltip.top -= e.tooltipHeight + d, r = e.tooltipHeight), e.triangle = {
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
						positioning: s
					} = this.state, a = s && void 0 !== s.triangle && n.a.createElement(u, {
						isBelow: o === h.Below,
						style: {
							top: s.triangle.top + "px",
							left: s.triangle.left + "px"
						}
					});
					let c = n.a.createElement("div", {
						className: Object(i.a)(l.a.tooltipBox, this.props.className, {
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
					}, s && this.props.children && n.a.createElement(n.a.Fragment, null, a, this.props.children));
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
				n = o.n(s),
				i = o("./src/higherOrderComponents/asTooltip.tsx"),
				r = o("./src/reddit/components/InfoTextTooltip/index.tsx"),
				a = o("./src/reddit/controls/IconTooltip/index.m.less"),
				c = o.n(a);
			const l = Object(i.a)(r.b),
				d = ["center", "top"],
				p = ["center", "bottom"];
			class m extends n.a.Component {
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
					return n.a.createElement("span", {
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip,
						ref: this.setTooltipTargetRef
					}, this.props.icon, n.a.createElement(l, {
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
				n = o.n(s),
				i = o("./src/lib/classNames/index.ts"),
				r = o("./src/reddit/controls/ImageDisplay/index.m.less"),
				a = o.n(r);
			t.a = e => {
				let {
					backgroundImage: t,
					children: o,
					className: s
				} = e;
				return n.a.createElement("div", {
					className: Object(i.a)(a.a.imageDisplay, s),
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
			o.d(t, "f", (function() {
				return r
			})), o.d(t, "d", (function() {
				return a
			})), o.d(t, "h", (function() {
				return c
			})), o.d(t, "c", (function() {
				return l
			})), o.d(t, "b", (function() {
				return d
			})), o.d(t, "e", (function() {
				return p
			})), o.d(t, "a", (function() {
				return m
			})), o.d(t, "g", (function() {
				return h
			}));
			var s = o("./node_modules/lodash/map.js"),
				n = o.n(s),
				i = o("./src/lib/FocusTrap/index.ts");
			const r = () => {
					const e = document.getSelection();
					return !!e && (e.rangeCount > 0 && e.getRangeAt(0).toString().length > 0)
				},
				a = () => r() ? (() => {
					const e = document.getSelection();
					if (!e) return [];
					const t = e.getRangeAt(0).cloneContents().childNodes;
					return n()(t, e => e.textContent || "")
				})() : null,
				c = (e, t) => {
					const o = document.createRange();
					return o.selectNode(t), e.compareBoundaryPoints(Range.END_TO_START, o) < 0 && e.compareBoundaryPoints(Range.START_TO_END, o) > 0
				},
				l = e => {
					const t = window.getSelection();
					if (1 !== t.rangeCount) return;
					const o = t.getRangeAt(0);
					if (!c(o, e)) return;
					const {
						startContainer: s,
						startOffset: n,
						endContainer: i,
						endOffset: r
					} = o, a = document.createRange();
					a.selectNode(e);
					let l = !0;
					if (-1 === a.compareBoundaryPoints(Range.START_TO_START, o) && (a.setStart(s, n), l = !1), 1 === a.compareBoundaryPoints(Range.END_TO_END, o) && (a.setEnd(i, r), l = !1), l) return [e];
					const d = document.createElement("div");
					return d.appendChild(a.cloneContents()), [...d.childNodes]
				},
				d = (e, t, o) => {
					let s = e;
					for (; s && (!o || !o(s));) {
						if (s && t(s)) return s;
						s = s.parentElement
					}
				},
				p = e => e && e.parentElement && d(e.parentElement, e => "static" !== window.getComputedStyle(e).getPropertyValue("position")),
				m = e => {
					e.querySelectorAll(i.a).forEach(e => {
						e.tabIndex = -1
					})
				},
				h = e => t => {
					if (t.preventDefault(), e && "function" == typeof e) return e(t)
				}
		},
		"./src/reddit/icons/svgs/Help/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 16 16",
				xmlns: "http://www.w3.org/2000/svg"
			}, n.a.createElement("path", {
				fill: "inherit",
				d: "M8.622 10.616c.078.08.14.175.183.28.044.105.07.218.07.332 0 .237-.087.456-.253.62-.167.168-.385.255-.622.255-.236 0-.455-.087-.62-.254-.167-.166-.255-.385-.255-.622 0-.114.027-.227.07-.332.044-.105.105-.2.184-.28.087-.088.174-.15.288-.193.324-.13.71-.052.954.193zm-.205-6.242c1.595 0 2.466.807 2.466 1.92 0 .976-.556 1.448-1.238 1.816-.615.317-.83.518-.904.898 0 .004-.034.207-.036.21-.034.126-.087.244-.18.336-.14.14-.323.21-.524.21-.097 0-.192-.017-.29-.052-.087-.035-.165-.088-.235-.158-.14-.14-.22-.333-.22-.533 0-.11.02-.188.074-.348.16-.472.55-.896 1.056-1.17.577-.327.84-.558.84-1.07 0-.42-.357-.715-.987-.715-.496 0-.996.218-1.39.52-.26.2-.62.202-.858-.02l-.05-.05c-.313-.29-.27-.787.075-1.04.603-.444 1.394-.753 2.4-.753zM8 13.25c-2.895 0-5.25-2.355-5.25-5.25S5.105 2.75 8 2.75 13.25 5.105 13.25 8 10.895 13.25 8 13.25M8 1C4.14 1 1 4.14 1 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7"
			}))
		},
		"./src/reddit/icons/svgs/Smile/index.tsx": function(e, t, o) {
			"use strict";
			var s = o("./node_modules/react/index.js"),
				n = o.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("path", {
				fill: "inherit",
				fillRule: "evenodd",
				d: "M13 9.0074c-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406m-3 5.581c-2.206 0-4-1.57-4-3.5 0-.276.224-.5.5-.5h7c.276 0 .5.224.5.5 0 1.93-1.794 3.5-4 3.5m-3-8.394c.777 0 1.406.63 1.406 1.407 0 .776-.629 1.406-1.406 1.406-.777 0-1.406-.63-1.406-1.406 0-.777.629-1.407 1.406-1.407m3-4.194c-4.411 0-8 3.588-8 8 0 4.411 3.589 8 8 8s8-3.589 8-8c0-4.412-3.589-8-8-8"
			}))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/FlairEdit.2e7ee4cd5e7747fa45a1.js.map