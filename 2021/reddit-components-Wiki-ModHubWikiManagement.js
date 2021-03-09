// https://www.redditstatic.com/desktop2x/reddit-components-Wiki-ModHubWikiManagement.fd70fe9f69527d4c87f9.js
// Retrieved at 3/9/2021, 3:40:12 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Wiki-ModHubWikiManagement"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var i, s, o;
			s = [t, e], void 0 === (o = "function" == typeof(i = function(e, t) {
				"use strict";
				var n, i, s = "function" == typeof Map ? new Map : (n = [], i = [], {
						has: function(e) {
							return n.indexOf(e) > -1
						},
						get: function(e) {
							return i[n.indexOf(e)]
						},
						set: function(e, t) {
							-1 === n.indexOf(e) && (n.push(e), i.push(t))
						},
						delete: function(e) {
							var t = n.indexOf(e);
							t > -1 && (n.splice(t, 1), i.splice(t, 1))
						}
					}),
					o = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (c) {
					o = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function a(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !s.has(e)) {
						var t, n = null,
							i = e.clientWidth,
							a = null,
							r = function() {
								e.clientWidth !== i && u()
							},
							d = function(t) {
								window.removeEventListener("resize", r, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), s.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", r, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", s.set(e, {
							destroy: d,
							update: u
						}), "vertical" === (t = window.getComputedStyle(e, null)).resize ? e.style.resize = "none" : "both" === t.resize && (e.style.resize = "horizontal"), n = "content-box" === t.boxSizing ? -(parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)) : parseFloat(t.borderTopWidth) + parseFloat(t.borderBottomWidth), isNaN(n) && (n = 0), u()
					}

					function l(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
					}

					function c() {
						var t = e.style.height,
							s = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							o = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var a = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = a + "px", i = e.clientWidth, s.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), o && (document.documentElement.scrollTop = o)) : e.style.height = t
					}

					function u() {
						c();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (i !== t ? "hidden" === n.overflowY && (l("scroll"), c(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), c(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), a !== i) {
							a = i;
							var s = o("autosize:resized");
							try {
								e.dispatchEvent(s)
							} catch (r) {}
						}
					}
				}

				function r(e) {
					var t = s.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = s.get(e);
					t && t.update()
				}
				var l = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((l = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, l.update = function(e) {
					return e
				}) : ((l = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return a(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], r), e
				}, l.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = l
			}) ? i.apply(t, s) : i) || (e.exports = o)
		},
		"./node_modules/computed-style/dist/computedStyle.commonjs.js": function(e, t) {
			e.exports = function(e, t, n) {
				return ((n = window.getComputedStyle) ? n(e) : e.currentStyle)[t.replace(/-(\w)/gi, (function(e, t) {
					return t.toUpperCase()
				}))]
			}
		},
		"./node_modules/line-height/lib/line-height.js": function(e, t, n) {
			var i = n("./node_modules/computed-style/dist/computedStyle.commonjs.js");
			e.exports = function(e) {
				var t = i(e, "line-height"),
					n = parseFloat(t, 10);
				if (t === n + "") {
					var s = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = i(e, "line-height"), n = parseFloat(t, 10), s ? e.style.lineHeight = s : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var o = e.nodeName,
						a = document.createElement(o);
					a.innerHTML = "&nbsp;", "TEXTAREA" === o.toUpperCase() && a.setAttribute("rows", "1");
					var r = i(e, "font-size");
					a.style.fontSize = r, a.style.padding = "0px", a.style.border = "0px";
					var d = document.body;
					d.appendChild(a), n = a.offsetHeight, d.removeChild(a)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i, s, o = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				},
				a = function() {
					function e(e, t) {
						for (var n = 0; n < t.length; n++) {
							var i = t[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
						}
					}
					return function(t, n, i) {
						return n && e(t.prototype, n), i && e(t, i), t
					}
				}(),
				r = u(n("./node_modules/react/index.js")),
				d = u(n("./node_modules/react-autosize-textarea/node_modules/prop-types/index.js")),
				l = u(n("./node_modules/autosize/dist/autosize.js")),
				c = u(n("./node_modules/line-height/lib/line-height.js"));

			function u(e) {
				return e && e.__esModule ? e : {
					default: e
				}
			}

			function m(e, t) {
				var n = {};
				for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
				return n
			}

			function h(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var p = (s = i = function(e) {
				function t() {
					var e, n, i;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var s = arguments.length, a = Array(s), r = 0; r < s; r++) a[r] = arguments[r];
					return n = i = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), i.state = {
						lineHeight: null
					}, i.dispatchEvent = function(e) {
						var t = document.createEvent("Event");
						t.initEvent(e, !0, !1), i.textarea.dispatchEvent(t)
					}, i.getValue = function(e) {
						var t = e.valueLink,
							n = e.value;
						return t ? t.value : n
					}, i.updateLineHeight = function() {
						i.setState({
							lineHeight: (0, c.default)(i.textarea)
						})
					}, i.onChange = function(e) {
						i.currentValue = e.target.value, i.props.onChange && i.props.onChange(e)
					}, i.saveDOMNodeRef = function(e) {
						var t = i.props.innerRef;
						t && t(e), i.textarea = e
					}, i.getLocals = function() {
						var e = i,
							t = e.props,
							n = (t.onResize, t.maxRows),
							s = (t.onChange, t.style),
							a = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							r = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							l = n && r ? r * n : null;
						return o({}, a, {
							saveDOMNodeRef: d,
							style: l ? o({}, s, {
								maxHeight: l
							}) : s,
							onChange: i.onChange
						})
					}, h(i, n)
				}
				return function(e, t) {
					if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
					e.prototype = Object.create(t && t.prototype, {
						constructor: {
							value: e,
							enumerable: !1,
							writable: !0,
							configurable: !0
						}
					}), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
				}(t, e), a(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							n = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, l.default)(e.textarea)
						}))) : (0, l.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
					}
				}, {
					key: "componentWillUnmount",
					value: function() {
						this.props.onResize && this.textarea.removeEventListener("autosize:resized", this.props.onResize), this.dispatchEvent("autosize:destroy")
					}
				}, {
					key: "render",
					value: function() {
						var e = this.getLocals(),
							t = e.children,
							n = e.saveDOMNodeRef,
							i = m(e, ["children", "saveDOMNodeRef"]);
						return r.default.createElement("textarea", o({}, i, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(r.default.Component), i.defaultProps = {
				rows: 1
			}, s);
			t.default = p, p.propTypes = {
				rows: d.default.number,
				maxRows: d.default.number,
				onResize: d.default.func,
				innerRef: d.default.func
			}
		},
		"./node_modules/react-autosize-textarea/lib/index.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i, s = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				o = (i = s) && i.__esModule ? i : {
					default: i
				};
			t.default = o.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function s() {}

			function o() {}
			o.resetWarningCache = s, e.exports = function() {
				function e(e, t, n, s, o, a) {
					if (a !== i) {
						var r = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw r.name = "Invariant Violation", r
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					elementType: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t,
					checkPropTypes: o,
					resetWarningCache: s
				};
				return n.PropTypes = n, n
			}
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/index.js": function(e, t, n) {
			e.exports = n("./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js")()
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js": function(e, t, n) {
			"use strict";
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				u = n.n(c);
			const m = r.a.div("BanLength", u.a),
				h = r.a.wrapped(d.o, "BanLengthDays", u.a),
				p = r.a.wrapped(d.i, "NumberInput", u.a),
				b = r.a.div("StyledPermanentLabel", u.a),
				g = r.a.div("DescriptionText", u.a),
				k = r.a.div("BanLengthContainer", u.a),
				f = r.a.div("CheckboxWrapper", u.a),
				v = r.a.div("PermanentCheckbox", u.a);
			t.a = e => o.a.createElement(d.g, null, o.a.createElement(d.j, null, i.fbt._("How long?", null, {
				hk: "1InKw6"
			})), o.a.createElement(k, null, o.a.createElement(m, {
				className: Object(a.a)({
					[u.a.isDisabled]: e.isDurationPermanent
				})
			}, o.a.createElement(p, {
				tabIndex: 0,
				disabled: e.isDurationPermanent,
				onChange: e.onChangeDuration,
				min: "0",
				type: "number",
				value: void 0 !== e.duration && null !== e.duration ? e.duration : ""
			}), o.a.createElement(h, null, i.fbt._("Days", null, {
				hk: "2TkJg0"
			}))), o.a.createElement(b, {
				onClick: e.togglePermanent
			}, o.a.createElement(v, {
				onKeyDown: e.togglePermanent
			}, o.a.createElement(f, {
				tabIndex: 0
			}, e.isDurationPermanent ? o.a.createElement(l.b, null) : o.a.createElement(l.a, null))), o.a.createElement(g, null, i.fbt._("Permanent", null, {
				hk: "172B1w"
			})))))
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less": function(e, t, n) {
			e.exports = {
				Container: "cCcS9FtX9EtCZndWE2KoT",
				container: "cCcS9FtX9EtCZndWE2KoT",
				Dropdown: "_2SggQ3MVXsSCJaJnZohv5W",
				dropdown: "_2SggQ3MVXsSCJaJnZohv5W",
				Row: "_2_cyr9JIpA0CtkJpzPGSMX",
				row: "_2_cyr9JIpA0CtkJpzPGSMX",
				dropdownTarget: "_16JYr1_9yGQHSLHdyiWlGz",
				targetText: "_2A6qbw0TmdARh8bjwQ2ofj",
				DropdownRow: "_2lfpXKpvpeZ4oyQ-CMp9Le",
				dropdownRow: "_2lfpXKpvpeZ4oyQ-CMp9Le"
			}
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				d = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				u = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				m = n("./src/reddit/selectors/subreddit.ts"),
				h = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less"),
				p = n.n(h);
			const b = [() => i.fbt._("Spam", null, {
					hk: "1I8OLD"
				}), () => i.fbt._("Personal and confidential information", null, {
					hk: "gBQdH"
				}), () => i.fbt._("Threatening, harassing, or inciting violence", null, {
					hk: "2To19l"
				})],
				g = Object(r.c)({
					subredditRules: m.S
				}),
				k = Object(a.b)(g);
			class f extends o.a.Component {
				constructor(e) {
					super(e), this.api = null, this.closeDropdown = () => {
						this.state.isOpen && this.setState({
							isOpen: !1
						})
					}, this.handleToggleDropdown = () => this.setState({
						isOpen: !this.state.isOpen
					}), this.handleSelectReason = (e, t) => {
						this.props.onSelectReason(t), e.key !== d.b.Tab && e.preventDefault(), this.closeDropdown()
					}, this.getRuleShortNames = () => {
						return [...this.props.subredditRules ? this.props.subredditRules.map(e => e.shortName) : [], ...b.map(e => e().toString()), "other"]
					}, this.state = {
						isOpen: !1,
						activeRow: -1
					}, this.api = {
						closeDropdown: this.closeDropdown
					}
				}
				componentDidMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(this.api)
				}
				UNSAFE_componentWillMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(null)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement("div", {
						className: p.a.Container
					}, o.a.createElement("button", {
						className: p.a.dropdownTarget,
						onClick: this.handleToggleDropdown
					}, o.a.createElement("div", {
						className: p.a.targetText
					}, e.reason || i.fbt._("None", null, {
						hk: "1IYbYO"
					})), o.a.createElement(u.b, null)), t.isOpen && o.a.createElement(l.a, {
						className: p.a.Dropdown,
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => o.a.createElement(c.b, {
						key: t,
						className: p.a.DropdownRow,
						displayText: t,
						index: n,
						isSelected: e.reason === t,
						onClick: e => this.handleSelectReason(e, t)
					}))))
				}
			}
			t.a = k(f)
		},
		"./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less": function(e, t, n) {
			e.exports = {
				Unban: "_1MjK_ZbXYkYgjvnYRxXErB",
				unban: "_1MjK_ZbXYkYgjvnYRxXErB",
				UnbanButton: "yByd-IEj7iofnvyb9tmne",
				unbanButton: "yByd-IEj7iofnvyb9tmne",
				PrimaryButton: "EM-EsR6tL9UA_MTsXHtS0",
				primaryButton: "EM-EsR6tL9UA_MTsXHtS0",
				ModalText: "_2Y9SCHsLMT105713rB10IV",
				modalText: "_2Y9SCHsLMT105713rB10IV",
				BanLength: "_14KS1Rt4ecAeHrAVFStL2n",
				banLength: "_14KS1Rt4ecAeHrAVFStL2n",
				isDisabled: "_3FQWLp6TeLNW0P14RMTGUn",
				BanLengthDays: "_34HussaQod-Yr8UQii6_EM",
				banLengthDays: "_34HussaQod-Yr8UQii6_EM",
				NumberInput: "_2_hBB86aqyqySSaODRHCt8",
				numberInput: "_2_hBB86aqyqySSaODRHCt8",
				StyledPermanentLabel: "_28lH71X854yinMNr2pzLlV",
				styledPermanentLabel: "_28lH71X854yinMNr2pzLlV",
				DescriptionText: "_2qrQzheLoaZZVefsJXThbW",
				descriptionText: "_2qrQzheLoaZZVefsJXThbW",
				BanLengthContainer: "Wt-OAd3PRXDzyks4SeiTT",
				banLengthContainer: "Wt-OAd3PRXDzyks4SeiTT",
				Bullet: "LusCMd8yHS-4_9XlhZpDY",
				bullet: "LusCMd8yHS-4_9XlhZpDY",
				VisibilityNote: "_1znuUPndM3k-XpOdaInCRt",
				visibilityNote: "_1znuUPndM3k-XpOdaInCRt",
				PermanentCheckbox: "_2yikAT1fG9F2gljm8b0FM5",
				permanentCheckbox: "_2yikAT1fG9F2gljm8b0FM5",
				ModalFooter: "Zfyj5B049nkMNmpt2F4PK",
				modalFooter: "Zfyj5B049nkMNmpt2F4PK",
				FooterRow: "ayyLCu5N-CWR6bsdVNMwW",
				footerRow: "ayyLCu5N-CWR6bsdVNMwW",
				CheckboxWrapper: "_33C5Xe1t7nuSQoLX8Nkpay",
				checkboxWrapper: "_33C5Xe1t7nuSQoLX8Nkpay"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, n) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./node_modules/react-autosize-textarea/lib/index.js"),
				a = n.n(o),
				r = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				l = n.n(d);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const u = ({
					className: e,
					children: t,
					editorWrapperRef: n,
					initialHeight: i
				}) => s.a.createElement("div", {
					className: Object(r.a)(l.a.editorWrapper, e),
					style: i ? {
						height: i
					} : void 0,
					ref: n
				}, t),
				m = ({
					isFullHeight: e,
					textAreaRef: t,
					...n
				}) => s.a.createElement(a.a, c({
					className: Object(r.a)(l.a.textareaAutosize, {
						[l.a.mIsFullHeight]: e
					}),
					innerRef: t
				}, n));
			class h extends s.a.Component {
				constructor(e) {
					super(e), this.editorHeight = null, this.editorRef = null, this.editorStyleMutationObserver = null, this.onEditorStyleChanged = () => {
						if (!this.editorRef) return;
						const {
							isResized: e
						} = this.state;
						e || this.setState({
							isResized: !0
						});
						const t = this.editorRef.style.height ? Number.parseInt(this.editorRef.style.height) : null;
						this.editorHeight !== t && (this.editorHeight = t, t && this.props.onEditorResize && this.props.onEditorResize(t))
					}, this.setEditorWrapperRef = e => this.editorRef = e, this.state = {
						initialHeight: e.initialHeight,
						isResized: !!e.initialHeight
					}
				}
				componentDidMount() {
					this.editorRef && (this.editorStyleMutationObserver = new MutationObserver(this.onEditorStyleChanged), this.editorStyleMutationObserver.observe(this.editorRef, {
						attributes: !0,
						attributeFilter: ["style"]
					}))
				}
				componentWillUnmount() {
					this.editorStyleMutationObserver && (this.editorStyleMutationObserver.disconnect(), this.editorStyleMutationObserver = null)
				}
				render() {
					const {
						className: e,
						initialHeight: t,
						innerRef: n,
						onEditorResize: i,
						...o
					} = this.props, {
						isResized: a
					} = this.state;
					return s.a.createElement(u, {
						className: e,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: t
					}, s.a.createElement(m, c({}, o, {
						children: !0,
						isFullHeight: !!a,
						textAreaRef: n
					})))
				}
			}
			t.a = h
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/ModHubWikiPage/index.m.less": function(e, t, n) {
			e.exports = {
				container: "mGNUz0KqvrWsrn1xlqXf_",
				pageContent: "_25IEQYEH40hsAC5r5LkR19"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/WikiBannedContributors/index.m.less": function(e, t, n) {
			e.exports = {
				primaryButton: "_2r3vT9CCyiwTgSeXf6RtHn"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/WikiContributors/index.m.less": function(e, t, n) {
			e.exports = {
				inputLabel: "_1nDjMIzhiCt7HWgRXFrc1R",
				primaryButton: "_3k1glSv6XSy5A0En7LZYHW"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/WikiPageSettings/index.m.less": function(e, t, n) {
			e.exports = {
				pageTitle: "_3K9b9vWaE9TuDvOHKsnpxZ",
				cancelButton: "tbuAQl_rbaDSz9IxcnXTR",
				alertBanner: "_3L8Gz5eTr8NgBeJTKk9kiI",
				alertIcon: "_3E4tZufYfJczm55lxiwRkQ",
				content: "Dt_lgwYyjEtbT77GZCi30",
				sectionTitle: "_3BWDhLBCtVqogIc3xGlpE7",
				radioOption: "bYPvzPxaH0T9q-tlg6PNB",
				checkboxInput: "_2TLP8aUCkEOCat2JwsRRRg",
				inputOptionText: "_2GRGQ2mqbZ8bQ7eYspBxAg",
				formGroup: "_1Z7vhGPbRejo38K3k8dTqe",
				contributorsForm: "_3CjUYMONOw114l3U1STBgv",
				contributorInput: "_32godwr0kHXTC5KEQCxyzM",
				addButton: "_3bNA4nqHfh47uG_lar-cr-",
				buttonRow: "_3PCi42qV44IhFfKgdv3ZMM",
				contributorRow: "_3PMSnq_s_rryQTVUy7P_Aa",
				removeButton: "_3kMtQQJGQZPLQhxTuHwe1e",
				loadingUserIcon: "_1Xt2gzEEN0ITln7Q9Vi7Gc",
				loadingUserName: "_2wDJm1c05PrtcJSjqQk6gI"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/index.m.less": function(e, t, n) {
			e.exports = {
				modHubTopBar: "_1ooZMJIDxapoXK4WpulOUj",
				modHubPageEditorContent: "_1uuCFa_ObMyUwixW3reghL"
			}
		},
		"./src/reddit/components/Wiki/ModHubWikiManagement/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/lib/constants/index.ts"),
				a = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				r = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				d = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				l = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/constants/wiki.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				h = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				p = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				k = n("./src/reddit/components/Wiki/ModHubWikiManagement/ModHubWikiPage/index.m.less"),
				f = n.n(k);

			function v(e) {
				const {
					wikiPageName: t,
					subredditName: n
				} = e;
				return i.createElement("div", {
					className: f.a.container
				}, i.createElement(p.c, null, i.createElement(g.a, {
					isModHub: !0,
					wikiPageName: t,
					subredditName: n
				})), i.createElement(b.a, {
					className: f.a.pageContent,
					isModHub: !0,
					subredditName: n,
					wikiPageName: t
				}))
			}
			var x = n("./src/config.ts"),
				w = n("./node_modules/fbt/lib/FbtPublic.js"),
				C = n("./node_modules/react-redux/es/index.js"),
				E = n("./node_modules/reselect/es/index.js"),
				_ = n("./src/lib/timeAgo/index.ts"),
				N = n("./src/reddit/actions/modal.ts"),
				P = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				y = n("./src/reddit/components/BannedUserList/index.tsx"),
				R = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				T = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				M = n("./src/reddit/components/Scroller/Simple.tsx"),
				S = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				O = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				j = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				W = n("./src/reddit/components/TrackingHelper/index.tsx"),
				L = n("./src/reddit/constants/componentSizes.ts"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				H = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				I = n("./src/reddit/selectors/activeModalId.ts"),
				A = n("./src/reddit/selectors/subredditWiki.ts"),
				D = n("./src/higherOrderComponents/asModal/index.tsx"),
				U = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				z = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				F = n("./src/reddit/controls/TextButton/index.tsx"),
				V = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				X = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				G = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				q = n("./src/reddit/models/SubredditModeration/index.ts"),
				K = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				Z = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				J = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiBannedContributors/index.m.less"),
				Y = n.n(J);
			const Q = 300,
				$ = Object(C.b)(null, (e, {
					subredditName: t
				}) => ({
					addBannedWikiContributor: n => e(Object(P.a)(t, n))
				}));
			class ee extends s.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onChangeModNote = e => {
						e.currentTarget.value.length <= Q && this.setState({
							note: e.currentTarget.value
						})
					}, this.onSelectReason = e => {
						this.setState({
							banReason: e
						})
					}, this.onChangeBanDuration = e => {
						const t = Number(e.currentTarget.value);
						"number" == typeof t && (t < 0 || t > q.b || this.setState({
							duration: t
						}))
					}, this.togglePermanent = e => {
						e.key && "Enter" !== e.key || this.setState({
							isDurationPermanent: !this.state.isDurationPermanent,
							duration: void 0
						})
					}, this.onSubmit = () => {
						const e = Object(X.a)(this.state.username),
							{
								note: t,
								banReason: n,
								isDurationPermanent: i,
								duration: s
							} = this.state;
						let o = i ? void 0 : s;
						const a = this.props.bannedUser && null != this.props.bannedUser.daysRemaining && this.props.bannedUser.daysRemaining === s;
						null != o && a && (o += 1), this.props.addBannedWikiContributor({
							note: t,
							username: e,
							banReason: n,
							duration: o
						}), this.props.sendEvent(H.a), this.props.toggleModal()
					}, this.state = {
						duration: e.bannedUser ? e.bannedUser.daysRemaining : void 0,
						isDurationPermanent: !e.bannedUser || !e.bannedUser.daysRemaining,
						note: e.bannedUser ? e.bannedUser.note : "",
						username: e.bannedUser ? e.bannedUser.username : ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(z.d, null, s.a.createElement(z.h, null, s.a.createElement(G.a, null, s.a.createElement(z.p, null, w.fbt._("Ban wiki contributor", null, {
						hk: "1d5Hrk"
					}), e.bannedUser && `: u/${e.bannedUser.username}`), s.a.createElement(F.a, {
						onClick: e.toggleModal
					}, s.a.createElement(z.b, null)))), s.a.createElement(z.k, null, !e.bannedUser && s.a.createElement(s.a.Fragment, null, s.a.createElement(z.g, null, s.a.createElement(z.j, null, w.fbt._("Enter username", null, {
						hk: "2fknjy"
					})), s.a.createElement(z.i, {
						onChange: this.onInputChange,
						placeholder: w.fbt._("u/username", null, {
							hk: "RshBO"
						}),
						value: this.state.username
					})), s.a.createElement(z.g, null, s.a.createElement(z.j, null, w.fbt._("Reason for ban", null, {
						hk: "1e9gZn"
					})), s.a.createElement(Z.a, {
						onSelectReason: this.onSelectReason,
						reason: t.banReason,
						subredditId: e.subredditId
					}))), s.a.createElement(z.g, null, s.a.createElement(z.j, null, w.fbt._("Mod note", null, {
						hk: "1IDrTK"
					})), s.a.createElement(z.i, {
						onChange: this.onChangeModNote,
						placeholder: w.fbt._("Mod note", null, {
							hk: "1dzUjv"
						}),
						value: t.note
					}), s.a.createElement(U.a, {
						maxChars: Q,
						text: t.note
					})), s.a.createElement(K.a, {
						duration: t.duration,
						isDurationPermanent: t.isDurationPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), s.a.createElement(z.f, null, s.a.createElement(B.l, {
						onClick: e.toggleModal
					}, w.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(B.i, {
						className: Y.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(V.a)(t.username)
					}, w.fbt._("Ban user", null, {
						hk: "w8Nwk"
					}))))
				}
			}
			var te = Object(D.a)($(ee));
			const ne = Object(E.c)({
				isAddBannedContributorModalOpen: e => "WikiBannedContributers--BanContributorModal" === Object(I.a)(e),
				isConfirmModalOpen: e => "WikiBannedContributers--RemoveBannedWikiContributor" === Object(I.a)(e),
				isWikiBannedContributorsListPending: A.e,
				loadMoreToken: A.f,
				searchResult: A.g,
				wikiContributors: A.h
			});
			class ie extends s.a.Component {
				constructor(e) {
					super(e), this.onSearch = async e => {
						this.setState({
							isSearchPending: !0,
							searchTerm: e
						}), await this.props.searchWikiBannedContributorByName(e), this.setState({
							isSearchPending: !1
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: void 0
					}), this.onClickEditUser = e => {
						this.setState({
							userToEdit: e
						}), this.props.toggleAddBannedContributorModal()
					}, this.onCloseBannedContributorModal = () => {
						this.props.toggleAddBannedContributorModal(), this.setState({
							userToEdit: void 0
						})
					}, this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveContributor = () => {
						this.state.userToRemove && (this.props.removeWikiBannedContributor(this.state.userToRemove), this.props.sendEvent(H.h))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreBannedContributorsPending && (this.setState({
							isFetchMoreBannedContributorsPending: !0
						}), await this.props.moreWikiBannedContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreBannedContributorsPending: !1
						}))
					}, this.renderBannedContributor = e => {
						const t = this.props.wikiContributors.find(t => t.id === e);
						if (!t) return s.a.createElement(s.a.Fragment, null);
						const n = new Date(t.date),
							i = Object(_.d)(n.valueOf()),
							o = Object(y.b)(t.daysRemaining);
						return s.a.createElement(j.b, {
							description: t.note,
							username: t.username,
							userIcon: t.iconUrl,
							primaryButton: s.a.createElement("a", {
								href: `${x.a.redditUrl}/message/compose/?to=${t.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, s.a.createElement(B.o, null, w.fbt._("Send message", null, {
								hk: "21j5K5"
							}))),
							secondaryButton: s.a.createElement(B.o, {
								onClick: () => this.onClickEditUser(t)
							}, w.fbt._("Edit", null, {
								hk: "1nftDt"
							})),
							tertiaryButton: s.a.createElement(B.o, {
								onClick: () => this.onClickRemove(t.id)
							}, w.fbt._("Remove", null, {
								hk: "1P1gt2"
							})),
							timeAgo: `${i} (${o})`,
							key: t.id
						})
					}, this.renderNoContent = () => this.props.isWikiBannedContributorsListPending ? s.a.createElement(j.a, null) : s.a.createElement(T.c, {
						text: w.fbt._("No banned wiki contributors in {subredditName}", [w.fbt._param("subredditName", this.props.subredditName)], {
							hk: "x9Dwq"
						})
					}), this.renderSearchState = () => s.a.createElement(S.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !this.props.searchResult,
						searchPending: this.state.isSearchPending,
						searchTerm: this.state.searchTerm || ""
					}, this.props.searchResult && this.renderBannedContributor(this.props.searchResult.id)), this.state = {
						isFetchMoreBannedContributorsPending: !1,
						isSearchPending: !1,
						searchTerm: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(p.c, null, s.a.createElement(B.i, {
						onClick: this.props.toggleAddBannedContributorModal
					}, w.fbt._("Ban contributor", null, {
						hk: "1vQTTH"
					}))), s.a.createElement(p.a, null, s.a.createElement(p.b, null, w.fbt._("Banned wiki contributors", null, {
						hk: "338WU8"
					})), s.a.createElement(O.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : s.a.createElement(M.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: L.f + L.j
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderBannedContributor(e.id)
					}))) : this.renderNoContent(), t.isFetchMoreBannedContributorsPending && s.a.createElement(j.a, {
						rows: 3
					})), e.isAddBannedContributorModalOpen && s.a.createElement(te, {
						bannedUser: t.userToEdit,
						subredditId: e.subredditId,
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: this.onCloseBannedContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && s.a.createElement(R.a, {
						actionText: w.fbt._("Remove", null, {
							hk: "1P1gt2"
						}),
						headerText: w.fbt._("Remove banned wiki contributor?", null, {
							hk: "4E1qjp"
						}),
						modalText: w.fbt._("Do you wish to unban this user as a wiki contributor?", null, {
							hk: "2GrHZs"
						}),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var se = Object(C.b)(ne, (e, {
					subredditName: t
				}) => ({
					moreWikiBannedContributorsRequested: n => e(Object(P.b)(t, n)),
					removeWikiBannedContributor: n => e(Object(P.c)(t, n)),
					searchWikiBannedContributorByName: n => e(Object(P.d)(t, n)),
					toggleAddBannedContributorModal: () => e(Object(N.i)("WikiBannedContributers--BanContributorModal")),
					toggleConfirmModal: () => e(Object(N.i)("WikiBannedContributers--RemoveBannedWikiContributor"))
				}))(Object(W.c)(ie)),
				oe = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				ae = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				re = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiContributors/index.m.less"),
				de = n.n(re);
			const le = Object(C.b)(null, (e, {
				subredditName: t
			}) => ({
				addWikiContributor: n => e(Object(oe.a)(t, n))
			}));
			class ce extends s.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = Object(X.a)(this.state.username);
						this.props.addWikiContributor(e), this.props.sendEvent(H.b), this.props.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(z.d, null, s.a.createElement(z.h, null, s.a.createElement(G.a, null, s.a.createElement(z.p, null, w.fbt._("Add wiki contributor", null, {
						hk: "4Df0lQ"
					})), s.a.createElement(F.a, {
						onClick: e.toggleModal
					}, s.a.createElement(z.b, null)))), s.a.createElement(z.k, null, s.a.createElement("div", {
						className: de.a.inputLabel
					}, w.fbt._("Enter username", null, {
						hk: "2NbD93"
					})), s.a.createElement(ae.d, {
						placeholder: w.fbt._("u/username", null, {
							hk: "38dqZm"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), s.a.createElement(z.f, null, s.a.createElement(B.l, {
						onClick: e.toggleModal
					}, w.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(B.i, {
						className: de.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(V.a)(t.username)
					}, w.fbt._("Add user", null, {
						hk: "28WQQq"
					}))))
				}
			}
			var ue = Object(D.a)(le(ce));
			const me = Object(E.c)({
				isAddContributorModalOpen: e => "WikiContributers--AddContributorModal" === Object(I.a)(e),
				isConfirmModalOpen: e => "WikiContributers--RemoveContributor" === Object(I.a)(e),
				isWikiContributorsListPending: A.j,
				loadMoreToken: A.k,
				searchResult: A.l,
				wikiContributors: A.m
			});
			class he extends s.a.Component {
				constructor(e) {
					super(e), this.onSearch = async e => {
						this.setState({
							isSearchPending: !0,
							searchTerm: e
						}), await this.props.searchWikiContributorByName(e), this.setState({
							isSearchPending: !1
						})
					}, this.cancelSearch = () => this.setState({
						searchTerm: void 0
					}), this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveContributor = () => {
						this.state.userToRemove && (this.props.removeWikiContributor(this.state.userToRemove), this.props.sendEvent(H.i))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreContributorsPending && (this.setState({
							isFetchMoreContributorsPending: !0
						}), await this.props.moreWikiContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreContributorsPending: !1
						}))
					}, this.renderContributor = e => {
						const t = new Date(e.date),
							n = Object(_.d)(t.valueOf());
						return s.a.createElement(j.b, {
							username: e.username,
							userIcon: e.iconUrl,
							primaryButton: s.a.createElement("a", {
								href: `${x.a.redditUrl}/message/compose/?to=${e.username}`,
								rel: "noopener noreferrer",
								target: "_blank"
							}, s.a.createElement(B.o, null, w.fbt._("Send message", null, {
								hk: "13WC98"
							}))),
							secondaryButton: s.a.createElement(B.o, {
								onClick: () => this.onClickRemove(e.id)
							}, w.fbt._("Remove", null, {
								hk: "2trU4Z"
							})),
							timeAgo: n
						})
					}, this.renderNoContent = () => this.props.isWikiContributorsListPending ? s.a.createElement(j.a, null) : s.a.createElement(T.c, {
						text: w.fbt._("No wiki contributors in {subredditName}", [w.fbt._param("subredditName", this.props.subredditName)], {
							hk: "37wxec"
						})
					}), this.renderSearchState = () => s.a.createElement(S.a, {
						cancelSearch: this.cancelSearch,
						noResultsFound: !this.props.searchResult,
						searchPending: this.state.isSearchPending,
						searchTerm: this.state.searchTerm || ""
					}, this.props.searchResult && this.renderContributor(this.props.searchResult)), this.state = {
						isFetchMoreContributorsPending: !1,
						isSearchPending: !1,
						searchTerm: "",
						userToRemove: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(p.c, null, s.a.createElement(B.i, {
						onClick: this.props.toggleAddContributorModal
					}, w.fbt._("Add contributor", null, {
						hk: "4v9hcQ"
					}))), s.a.createElement(p.a, null, s.a.createElement(p.b, null, w.fbt._("Added wiki contributors", null, {
						hk: "4FzyZs"
					})), s.a.createElement(O.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : s.a.createElement(M.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: L.f + L.j
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderContributor(e)
					}))) : this.renderNoContent(), t.isFetchMoreContributorsPending && s.a.createElement(j.a, {
						rows: 3
					})), e.isAddContributorModalOpen && s.a.createElement(ue, {
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: e.toggleAddContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && s.a.createElement(R.a, {
						actionText: w.fbt._("Remove", null, {
							hk: "3xHSJ8"
						}),
						headerText: w.fbt._("Remove wiki contributor?", null, {
							hk: "kQXBL"
						}),
						modalText: w.fbt._("Do you wish to remove this user as a wiki contributor?", null, {
							hk: "2HhSjH"
						}),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var pe = Object(C.b)(me, (e, {
					subredditName: t
				}) => ({
					moreWikiContributorsRequested: n => e(Object(oe.b)(t, n)),
					removeWikiContributor: n => e(Object(oe.c)(t, n)),
					searchWikiContributorByName: n => e(Object(oe.d)(t, n)),
					toggleAddContributorModal: () => e(Object(N.i)("WikiContributers--AddContributorModal")),
					toggleConfirmModal: () => e(Object(N.i)("WikiContributers--RemoveContributor"))
				}))(Object(W.c)(he)),
				be = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				ge = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				ke = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				fe = n("./src/reddit/constants/colors.ts"),
				ve = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				xe = n("./src/reddit/controls/RadioInput/index.tsx"),
				we = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				Ce = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				Ee = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				_e = n("./src/reddit/selectors/subreddit.ts"),
				Ne = n("./node_modules/lodash/noop.js"),
				Pe = n.n(Ne),
				ye = n("./node_modules/lodash/times.js"),
				Re = n.n(ye),
				Te = n("./src/lib/classNames/index.ts"),
				Me = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Se = n("./src/reddit/constants/keycodes.ts"),
				Oe = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				je = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiPageSettings/index.m.less"),
				We = n.n(je);
			const Le = Object(E.c)({
					isConfirmModalOpen: e => "WikiPageSettings--RemoveContributor" === Object(I.a)(e)
				}),
				Be = Object(C.b)(Le, (e, {
					subredditName: t,
					wikiPageName: n
				}) => ({
					addWikiPageContributor: i => e(Object(be.a)({
						username: i,
						wikiPageName: n,
						subredditName: t
					})),
					fetchMoreWikiPageContributors: i => e(Object(be.b)(t, n, i)),
					removeWikiPageContributor: i => e(Object(be.d)({
						username: i,
						wikiPageName: n,
						subredditName: t
					})),
					toggleConfirmModal: () => e(Object(N.i)("WikiPageSettings--RemoveContributor"))
				})),
				He = e => s.a.createElement("div", {
					className: Object(Te.a)(e.className, Object(Oe.b)({
						isLoading: !0
					}))
				}),
				Ie = () => s.a.createElement(s.a.Fragment, null, Re()(3, e => s.a.createElement("div", {
					className: We.a.contributorRow,
					key: e
				}, s.a.createElement(He, {
					className: We.a.loadingUserIcon
				}), s.a.createElement(He, {
					className: We.a.loadingUserName
				}))));
			class Ae extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeNewContributorInput = e => {
						this.setState({
							newContributor: e.target.value
						})
					}, this.onKeyDown = e => {
						e.keyCode === Se.a.Enter && this.canAdd() && this.onAddContributor()
					}, this.canAdd = () => !!this.state.newContributor, this.onAddContributor = () => {
						const e = Object(X.a)(this.state.newContributor);
						this.props.addWikiPageContributor(e), this.props.sendEvent(H.c), this.setState({
							newContributor: ""
						})
					}, this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveWikiContributor = () => {
						this.state.userToRemove && (this.props.removeWikiPageContributor(this.state.userToRemove), this.props.sendEvent(H.j))
					}, this.renderContributor = e => s.a.createElement("div", {
						className: We.a.contributorRow
					}, s.a.createElement(Me.a, {
						username: e.username,
						iconSize: 24,
						sendHoverCardEvent: Pe.a,
						tooltipId: `wikiPageContributor--${e.username}`,
						userIcon: e.iconUrl
					}), s.a.createElement(B.o, {
						className: We.a.removeButton,
						onClick: () => this.onClickRemove(e.username)
					}, w.fbt._("Remove", null, {
						hk: "hgHlN"
					}))), this.onLoadMore = async () => {
						this.props.afterToken && !this.state.isFetchMoreContributorsPending && (this.setState({
							isFetchMoreContributorsPending: !0
						}), await this.props.fetchMoreWikiPageContributors(this.props.afterToken), this.setState({
							isFetchMoreContributorsPending: !1
						}))
					}, this.state = {
						isFetchMoreContributorsPending: !1,
						newContributor: "",
						userToRemove: void 0
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return s.a.createElement("div", {
						className: Object(Te.a)(We.a.formGroup, We.a.contributorsForm)
					}, s.a.createElement("div", {
						className: We.a.sectionTitle
					}, w.fbt._("Add approved wiki contributor for this page", null, {
						hk: "35zH60"
					})), s.a.createElement(ae.c, {
						className: We.a.contributorInput,
						placeholder: w.fbt._("u/username", null, {
							hk: "38dqZm"
						}),
						value: t.newContributor,
						onChange: this.onChangeNewContributorInput,
						onKeyDown: this.onKeyDown,
						maxLength: 22
					}), s.a.createElement("div", {
						className: We.a.buttonRow
					}, s.a.createElement(B.i, {
						className: We.a.addButton,
						disabled: !this.canAdd(),
						onClick: this.onAddContributor
					}, w.fbt._("Add", null, {
						hk: "2wi3d4"
					}))), s.a.createElement(M.b, {
						loadMoreToken: e.afterToken ? e.afterToken : void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: L.f + L.j
					}, e.editorsInfo.map((e, t) => ({
						estHeight: 40,
						id: e.username,
						render: () => this.renderContributor(e)
					}))), t.isFetchMoreContributorsPending && s.a.createElement(Ie, null), t.userToRemove && e.isConfirmModalOpen && s.a.createElement(R.a, {
						actionText: w.fbt._("Remove", null, {
							hk: "4bYR3Z"
						}),
						headerText: w.fbt._("Remove wiki contributor?", null, {
							hk: "hADrb"
						}),
						modalText: w.fbt._("Do you wish to remove this user as a wiki contributor?", null, {
							hk: "4hsEY3"
						}),
						onConfirm: this.onRemoveWikiContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var De = Be(Ae);
			const Ue = Object(E.c)({
				subredditSettings: (e, t) => {
					const n = Object(_e.F)(e, t.subredditName);
					return Object(_e.V)(e, n)
				},
				wikiPageSettings: A.d
			});
			class ze extends s.a.Component {
				constructor(e) {
					super(e), this.onChangeEditPermissions = e => {
						this.setState({
							editPermissions: e
						})
					}, this.onChangeVisibilitySettings = e => {
						this.setState({
							isVisible: e
						})
					}, this.onSave = async () => {
						this.sendOnSaveEvents(), this.setState({
							isSavePending: !0
						}), await this.props.saveWikiPageSettings(this.state.editPermissions, this.state.isVisible), this.setState({
							isSavePending: !1
						})
					}, this.sendOnSaveEvents = () => {
						const e = this.props.wikiPageSettings;
						e && (this.state.isVisible !== e.isVisible && this.props.sendEvent(Object(H.n)(!!this.state.isVisible)), this.state.editPermissions !== e.editPermissions && this.props.sendEvent(Object(H.o)(this.state.editPermissions)), this.props.sendEvent(H.p))
					}, this.onCancel = () => {
						this.props.wikiPageSettings && this.setState({
							editPermissions: this.props.wikiPageSettings.editPermissions,
							isVisible: this.props.wikiPageSettings.isVisible
						})
					}, this.state = {
						isSavePending: !1,
						isVisible: e.wikiPageSettings ? e.wikiPageSettings.isVisible : void 0,
						editPermissions: e.wikiPageSettings ? e.wikiPageSettings.editPermissions : void 0
					}
				}
				componentDidUpdate(e) {
					!e.wikiPageSettings && this.props.wikiPageSettings && this.setState({
						editPermissions: this.props.wikiPageSettings.editPermissions,
						isVisible: this.props.wikiPageSettings.isVisible
					})
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					if (!e.wikiPageSettings) return null;
					const n = e.subredditSettings && "disabled" === e.subredditSettings.wikimode,
						i = t.editPermissions !== e.wikiPageSettings.editPermissions || t.isVisible !== e.wikiPageSettings.isVisible,
						o = t.editPermissions === Ee.a.Contributors || t.editPermissions === Ee.a.Inherit;
					return s.a.createElement(s.a.Fragment, null, s.a.createElement(p.c, null, i && s.a.createElement(s.a.Fragment, null, s.a.createElement(B.l, {
						className: We.a.cancelButton,
						onClick: this.onCancel
					}, w.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), s.a.createElement(B.i, {
						disabled: t.isSavePending,
						onClick: this.onSave
					}, w.fbt._("Save", null, {
						hk: "mmRlX"
					})))), s.a.createElement(ke.a, {
						title: w.fbt._("Wiki page settings", null, {
							hk: "2l88sE"
						}),
						className: We.a.pageTitle,
						buttonText: w.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: `/r/${e.subredditName}/about/wiki/${e.wikiPageName}`
					}), n && s.a.createElement(ge.a, {
						className: We.a.alertBanner,
						color: fe.b.quarantine,
						icon: s.a.createElement(Ce.a, {
							className: We.a.alertIcon
						}),
						subtitle: w.fbt._("Only mods may interact with this wiki", null, {
							hk: "4zPGDV"
						}),
						title: w.fbt._("This wiki is currently disabled", null, {
							hk: "X2W9o"
						})
					}), s.a.createElement("div", {
						className: We.a.content
					}, s.a.createElement("div", {
						className: We.a.sectionTitle
					}, w.fbt._("Add to wiki home", null, {
						hk: "2F0uTz"
					})), s.a.createElement(ve.a, {
						className: We.a.checkboxInput,
						value: t.isVisible,
						name: "listed",
						onChange: this.onChangeVisibilitySettings
					}, s.a.createElement("span", {
						className: We.a.inputOptionText
					}, w.fbt._("Show this page in your wiki index", null, {
						hk: "3l4r3U"
					}))), s.a.createElement("div", {
						className: We.a.formGroup
					}, s.a.createElement("div", {
						className: We.a.sectionTitle
					}, w.fbt._("Who can edit this page?", null, {
						hk: "24MlhK"
					})), s.a.createElement(xe.a, {
						value: t.editPermissions,
						name: "permlevel",
						onChange: this.onChangeEditPermissions
					}, s.a.createElement(we.a, {
						className: We.a.radioOption,
						showButton: !0,
						value: Ee.a.Inherit
					}, s.a.createElement("span", {
						className: We.a.inputOptionText
					}, w.fbt._("Use subreddit wiki permissions", null, {
						hk: "3VBjJ5"
					}))), s.a.createElement(we.a, {
						className: We.a.radioOption,
						showButton: !0,
						value: Ee.a.Mods
					}, s.a.createElement("span", {
						className: We.a.inputOptionText
					}, w.fbt._("Only mods may edit and view", null, {
						hk: "3dgrxn"
					}))), s.a.createElement(we.a, {
						className: We.a.radioOption,
						showButton: !0,
						value: Ee.a.Contributors
					}, s.a.createElement("span", {
						className: We.a.inputOptionText
					}, w.fbt._("Only approved wiki contributors for this page may edit", null, {
						hk: "16QJXW"
					}))))), o && s.a.createElement(De, {
						afterToken: e.wikiPageSettings.afterToken,
						sendEvent: this.props.sendEvent,
						subredditName: e.subredditName,
						wikiPageName: e.wikiPageName,
						editorsInfo: e.wikiPageSettings.editorsInfo
					})))
				}
			}
			var Fe = Object(C.b)(Ue, (e, {
					subredditName: t,
					wikiPageName: n
				}) => ({
					saveWikiPageSettings: (i, s) => e(Object(be.e)({
						editPermissions: i,
						isVisible: s,
						subredditName: t,
						wikiPageName: n
					}))
				}))(Object(W.c)(ze)),
				Ve = n("./src/reddit/components/Wiki/ModHubWikiManagement/index.m.less"),
				Xe = n.n(Ve);
			const Ge = Object(u.t)(),
				qe = () => {
					document.body.scrollTop = 0, document.documentElement.scrollTop = 0
				};
			class Ke extends s.a.Component {
				scrollToTopIfNeeded() {
					location.hash || qe()
				}
				componentDidMount() {
					this.scrollToTopIfNeeded()
				}
				componentDidUpdate(e) {
					this.props.pageLayer !== e.pageLayer && this.scrollToTopIfNeeded()
				}
				render() {
					const {
						subreddit: e,
						pageLayer: t
					} = this.props;
					if (!t) return null;
					const {
						urlParams: n,
						queryParams: i
					} = t, {
						wikiSubRoute: u,
						wikiPageName: p,
						pageName: b
					} = n, g = i[l.A], k = i[l.B], f = l.C in i;
					switch (u) {
						case c.m.Create:
						case c.m.Edit:
							return s.a.createElement(r.a, {
								contentClassName: Xe.a.modHubPageEditorContent,
								isCreation: u === c.m.Create,
								subredditName: e.name,
								topBarClassName: Xe.a.modHubTopBar,
								wikiPageName: p
							});
						case c.m.Revisions:
							return s.a.createElement(h.a, {
								isModHub: !0,
								isRecentRevisionsMode: !p,
								key: p,
								subredditName: e.name,
								wikiPageName: p
							});
						case c.m.Settings:
							if (p) return s.a.createElement(Fe, {
								subredditName: e.name,
								wikiPageName: p
							});
							break;
						default:
							return b === o.Sb.WikiBanned ? s.a.createElement(se, {
								subredditId: e.id,
								subredditName: e.name
							}) : b === o.Sb.WikiContributors ? s.a.createElement(pe, {
								subredditName: e.name
							}) : p && g && k ? s.a.createElement(a.a, {
								comparisonRevisionId: Object(m.a)(k),
								isModHub: !0,
								revisionId: Object(m.a)(g),
								subredditName: e.name,
								wikiPageName: p
							}) : p && (g || f) ? s.a.createElement(d.a, {
								isModHub: !0,
								revisionId: g ? Object(m.a)(g) : void 0,
								subredditName: e.name,
								wikiPageName: p
							}) : p ? s.a.createElement(v, {
								wikiPageName: p,
								subredditName: e.name
							}) : null
					}
				}
			}
			t.default = Ge(Ke)
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, n) {
			e.exports = {
				container: "ce8AyHVPoXK2ammlk4dfU",
				mModHub: "lPFQHGq7ZJKxOjbVRcUdL",
				content: "_1VN7jDMwPO-3f4G4d4Uy64",
				pageTitle: "V22-y0iI914ak74zxkV1a",
				pageTitleText: "_3BCuy1seZbIJ-Vw-iWJCTG",
				compareBar: "sT-SyQpGKrzgwl4yACquP",
				compareButton: "_1Mw_9r88mDyglkMA5Pp5Ms",
				table: "_2Lg_uTkZH6amYWXVr49IWM",
				colHeaderCheckbox: "_3qPtBJYDKp7pfTfAUKAzlI",
				colHeaderTime: "_3pBaYFkqpMeop0hSx3HG-b",
				colHeaderPage: "_1n5DuAwDmS92cPgdXSZ0VO",
				colHeaderUser: "_1hHgxs8vZyaUp-aaXVfveR",
				colHeaderReason: "_2eOOtPq7Dwb8YjxxasuXgN",
				colHeaderActions: "_2KyULn42zdubuWRRe3ofMX",
				row: "_1n6bCdFzFTcMb8nbcUVbiz",
				mHidden: "_3MGUJlnTJODLOgfuo6ps3N",
				revertButton: "r_5uSGcfTRKw2BrjrMAR6",
				cellPage: "RApPXNo2Wc734CFMKUP9W",
				wikiPageLink: "_3CiqT117augUjPWWrx2TW0",
				usernameLink: "RxzK_7t17mU6YV5lKPTX-",
				cellReason: "_181zFMPLOrQCybR7mpAjDS",
				reasonTextWrapper: "_2k1ikYAtkuItWLnM2v1FoJ",
				mExpanded: "_2Ek11A--oU1fiuOX4icZFo",
				reasonText: "_3rkoZiwX9xBWbnUj8KdDg_",
				moreButton: "MlwbIZHA-n0l6pJotytjr",
				buttons: "_2NPnlVPBDNk-5rZwESZ9B9",
				viewButton: "_1QQV3g6raY4DMIZmGWf_EB",
				active: "Jkkj0xIEOc5nizoeloGlN",
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return $
			}));
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				u = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = n("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				h = n("./src/reddit/components/TrackingHelper/index.tsx"),
				p = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				k = n("./src/lib/addQueryParams/index.ts"),
				f = n("./src/reddit/constants/parameters.ts"),
				v = n("./src/reddit/helpers/wiki/wikiRevision.ts");

			function x(e, t) {
				const {
					revision: n,
					revisionToCompare: i
				} = t;
				if (!n && !i) return e;
				const s = {};
				return n && (s[f.A] = Object(v.b)(n)), i && (s[f.B] = Object(v.b)(i)), Object(k.a)(e, s)
			}
			var w = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				C = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				E = n("./src/reddit/selectors/activeModalId.ts"),
				_ = n("./src/reddit/selectors/moderatorPermissions.ts"),
				N = n("./src/reddit/selectors/subreddit.ts"),
				P = n("./src/reddit/selectors/subredditWiki.ts"),
				y = n("./node_modules/lodash/times.js"),
				R = n.n(y),
				T = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				M = n("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				S = n.n(M);
			var O = () => {
					const e = s.createElement("div", {
						className: Object(d.a)(S.a.loadingShimmer, Object(T.b)({
							isLoading: !0
						}))
					});
					return s.createElement("div", null, R()(4, t => s.createElement("div", {
						key: t,
						className: S.a.loadingRow
					}, e)))
				},
				j = n("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class W extends o.a.Component {
				constructor() {
					super(...arguments), this.isIntersecting = !1, this.handleChange = e => {
						this.isIntersecting = e.isIntersecting, this.triggerLoadMoreIfNeeded()
					}, this.triggerLoadMoreIfNeeded = () => {
						const {
							isLoading: e,
							hasError: t
						} = this.props;
						!this.isIntersecting || e || t || this.props.onLoadMore()
					}
				}
				componentDidMount() {
					this.triggerLoadMoreIfNeeded()
				}
				componentDidUpdate() {
					this.triggerLoadMoreIfNeeded()
				}
				render() {
					return o.a.createElement(j.a, {
						onChange: this.handleChange
					}, o.a.createElement("div", null))
				}
			}
			var L = n("./node_modules/lodash/noop.js"),
				B = n.n(L),
				H = n("./src/reddit/components/AuthorLink/index.tsx"),
				I = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				A = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				D = n("./src/reddit/controls/Checkbox/index.tsx"),
				U = n("./src/reddit/controls/InternalLink/index.tsx"),
				z = n("./node_modules/lodash/forEach.js"),
				F = n.n(z),
				V = n("./src/lib/fastdom/index.ts");

			function X(e) {
				V.a.read(() => {
					F()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								n = e.parentElement,
								i = "true" === n.dataset.textOverflow;
							t !== i && V.a.write(() => {
								n.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const G = Object(r.c)({
				revision: P.n
			});
			class q extends o.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = o.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: n
						} = this.props, i = e.isHidden;
						this.props.sendEvent(Object(g.l)(i)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: n,
							wikiPageName: e.page.name
						}), this.setState({
							isHideRequestPending: !1
						})
					}, this.onRevertClick = () => {
						this.props.onRevertClick(this.props.revision)
					}, this.onShowMoreButtonClick = () => {
						this.setState({
							expanded: !0
						})
					}, this.onCheckboxToggle = () => {
						this.props.onCheckboxToggle(this.props.revisionId)
					}, this.onViewClick = () => {
						this.props.sendEvent(g.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && X([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: n,
						isRecentRevisionMode: s,
						revision: a,
						subredditName: r
					} = this.props, l = a.page.name, c = a.isHidden, {
						expanded: u
					} = this.state, m = a.authorInfo && a.authorInfo.name, h = Object(C.a)({
						subredditName: r,
						wikiPageName: l
					}, n), p = x(h, {
						revision: a.id
					}), g = !s && e, k = l.split("/").slice(-1)[0];
					return o.a.createElement("tr", {
						className: Object(d.a)(S.a.row, c ? S.a.mHidden : null)
					}, !s && o.a.createElement("td", {
						className: S.a.cellCheckbox
					}, o.a.createElement(D.a, {
						className: S.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), o.a.createElement("td", {
						className: S.a.cellTime
					}, Object(A.b)(a)), s && o.a.createElement("td", {
						className: S.a.cellPage
					}, o.a.createElement(U.a, {
						className: S.a.wikiPageLink,
						title: `/${l}`,
						to: h
					}, k)), o.a.createElement("td", {
						className: S.a.cellUser
					}, m && o.a.createElement(I.a, {
						sendHoverCardEvent: B.a,
						tooltipId: `revision-${a.id}`,
						user: m
					}, o.a.createElement(H.a, {
						author: m,
						className: S.a.usernameLink
					}, m))), o.a.createElement("td", {
						className: S.a.cellReason
					}, o.a.createElement("div", {
						className: Object(d.a)(S.a.reasonTextWrapper, u ? S.a.mExpanded : null)
					}, o.a.createElement("div", {
						ref: this.reasonElementRef,
						className: S.a.reasonText
					}, a.reason), !u && o.a.createElement(b.g, {
						className: S.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, i.fbt._("more", null, {
						hk: "2IGYPS"
					})))), o.a.createElement("td", null, o.a.createElement("div", {
						className: S.a.buttons
					}, o.a.createElement(b.p, {
						className: S.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, i.fbt._("View", null, {
						hk: "4imNnh"
					})), g && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.o, {
						className: S.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, c ? i.fbt._("Show", null, {
						hk: "3YKyhU"
					}) : i.fbt._("Hide", null, {
						hk: "30nwHP"
					})), o.a.createElement(b.o, {
						className: S.a.revertButton,
						onClick: this.onRevertClick
					}, i.fbt._("Revert", null, {
						hk: "5mbFS"
					}))))))
				}
			}
			var K = Object(a.b)(G, e => ({
				toggleIsHidden: t => e(Object(c.b)(t))
			}))(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				}).apply(this, arguments)
			}
			const J = Object(r.c)({
				hasError: P.o,
				hasWikiModPerms: (e, t) => {
					const n = Object(N.A)(e, t);
					return !!n && Object(_.f)(e, {
						subredditId: n.id
					})
				},
				isPending: P.q,
				isRevertConfirmationModalOpen: Object(E.b)("wiki-revert-confirmation"),
				listingInfo: P.p
			});
			class Y extends o.a.Component {
				constructor() {
					super(...arguments), this.containerRef = o.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(g.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(g.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							X(e.getElementsByClassName(S.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, n = t && t.ids || [];
						this.setState(t => {
							let i = t.selectedRevisions;
							return 2 === (i = i.includes(e) ? i.filter(t => t !== e) : i.length < 2 ? [...i, e] : [e]).length && n.indexOf(i[0]) < n.indexOf(i[1]) && i.reverse(), {
								selectedRevisions: i
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: n,
							subredditName: i
						} = this.props, {
							selectedRevisions: s
						} = this.state;
						return o.a.createElement(K, {
							key: e,
							hasWikiModPerms: n,
							isCheckboxSelected: s.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: i
						})
					}
				}
				componentDidMount() {
					window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						hasError: e,
						hasWikiModPerms: t,
						isModHub: n,
						isPending: s,
						isRecentRevisionsMode: a,
						isRevertConfirmationModalOpen: r,
						listingInfo: l,
						subredditName: c,
						wikiPageName: h
					} = this.props, {
						selectedRevisions: g
					} = this.state, k = l && l.ids || [], f = l && l.pageInfo.hasNextPage;
					let v = "",
						w = "#";
					h && (v = Object(C.a)({
						subredditName: c,
						wikiPageName: h
					}, n), 2 === g.length && (w = x(v, {
						revision: g[0],
						revisionToCompare: g[1]
					})));
					const E = !a && t;
					return o.a.createElement("div", {
						ref: this.containerRef,
						className: Object(d.a)(S.a.container, {
							[S.a.mModHub]: n,
							[S.a.mShowActionButtons]: E
						})
					}, o.a.createElement(p.a, {
						buttonText: a ? void 0 : i.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: v,
						className: S.a.pageTitle,
						title: o.a.createElement("span", {
							className: S.a.pageTitleText
						}, a ? i.fbt._("Recent revisions", null, {
							hk: "VsZfq"
						}) : i.fbt._("Page history for {pageName}", [i.fbt._param("pageName", `/${h}`)], {
							hk: "y2LqH"
						}))
					}), o.a.createElement("div", {
						className: S.a.content
					}, !a && o.a.createElement("div", {
						className: S.a.compareBar
					}, o.a.createElement(b.p, {
						className: S.a.compareButton,
						disabled: g.length < 2,
						onClick: this.onCompareClick,
						to: w
					}, i.fbt._("Compare", null, {
						hk: "3grtKa"
					})), i.fbt._("{selectedCnt}/2 selected to compare", [i.fbt._param("selectedCnt", g.length.toString())], {
						hk: "1PfMOM"
					})), o.a.createElement("table", {
						className: S.a.table
					}, o.a.createElement("thead", null, o.a.createElement("tr", null, !a && o.a.createElement("th", {
						className: S.a.colHeaderCheckbox
					}), o.a.createElement("th", {
						className: S.a.colHeaderTime
					}, i.fbt._("time", null, {
						hk: "231ZTq"
					})), a && o.a.createElement("th", {
						className: S.a.colHeaderPage
					}, i.fbt._("Wiki page", null, {
						hk: "2CzzvU"
					})), o.a.createElement("th", {
						className: S.a.colHeaderUser
					}, i.fbt._("Username", null, {
						hk: "3dJxeH"
					})), o.a.createElement("th", {
						className: S.a.colHeaderReason
					}, i.fbt._("Revision Reason", null, {
						hk: "3Z0slk"
					})), o.a.createElement("th", {
						className: S.a.colHeaderActions
					}, E && o.a.createElement(o.a.Fragment, null, i.fbt._("Actions", null, {
						hk: "1V50p1"
					}), o.a.createElement(m.a, null, i.fbt._("View: View current version", null, {
						hk: "1Wp1Qa"
					}), o.a.createElement("br", null), i.fbt._("Hide: Hide revision from page history", null, {
						hk: "1G574c"
					}), o.a.createElement("br", null), i.fbt._("Revert: Revert page to an older version", null, {
						hk: "2IMILE"
					})))))), o.a.createElement("tbody", {
						className: S.a.tableBody
					}, k.map(this.renderRowItem))), s && o.a.createElement(O, null), f && o.a.createElement(W, {
						hasError: e,
						isLoading: s,
						onLoadMore: this.onLoadMore
					})), r && o.a.createElement(u.a, {
						actionText: i.fbt._("Revert", null, {
							hk: "qQOSa"
						}),
						headerText: i.fbt._("Revert wiki page", null, {
							hk: "2ZNWTL"
						}),
						modalText: i.fbt._("Are you sure you wish to change this wiki page to a previously saved version?", null, {
							hk: "4yhcAG"
						}),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(a.b)(J, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(l.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(c.a)(t)),
				onLoadMoreRevisions: () => e(Object(c.c)({
					...t,
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				}))
			}))(Object(h.c)(Y));

			function $(e) {
				const t = !!e.isRecentRevisionsMode,
					n = Object(w.a)({
						...e,
						isRecent: t
					});
				return o.a.createElement(Q, Z({
					key: n,
					listingKey: n
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, n) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/components/TrackingHelper/index.tsx"),
				c = n("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				u = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				m = n("./src/reddit/constants/componentSizes.ts"),
				h = n("./src/reddit/constants/wiki.ts"),
				p = n("./src/reddit/contexts/PageLayer/index.tsx"),
				b = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = n("./src/reddit/helpers/wiki/validatePageName.ts"),
				k = n("./src/reddit/icons/svgs/Hide/index.tsx"),
				f = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				v = n("./src/reddit/selectors/subredditWiki.ts"),
				x = n("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				C = n("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = n("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				_ = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				N = n("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				P = n.n(N);
			const y = e => {
				const {
					item: t,
					subredditName: n,
					isModHub: i
				} = e, o = t.isPagePresent && Object(_.a)({
					subredditName: n,
					wikiPageName: t.path
				}, i);
				return s.createElement("li", null, o ? s.createElement(C.a, {
					className: P.a.link,
					to: o
				}, t.name) : s.createElement("span", null, t.name), !!t.children.length && s.createElement("ul", null, t.children.map(e => s.createElement(y, {
					isModHub: i,
					item: e,
					key: e.path,
					subredditName: n
				}))))
			};
			var R = e => {
					const {
						isModHub: t,
						subredditName: n,
						wikiDirectory: o
					} = e, a = Object(E.a)(o.pageTree || []);
					return s.createElement("div", {
						className: P.a.container
					}, s.createElement("h1", null, i.fbt._("Viewing pages for {subredditName}", [i.fbt._param("subredditName", n)], {
						hk: "1f0dHX"
					})), s.createElement("h2", null, i.fbt._("Below is a list of pages in this wiki visible to you in this subreddit.", null, {
						hk: "3ywypD"
					})), s.createElement("ul", null, a.map(e => s.createElement(y, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: n
					}))))
				},
				T = n("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				M = n.n(T);
			const {
				fbt: S
			} = n("./node_modules/fbt/lib/FbtPublic.js");

			function O(e) {
				const {
					className: t,
					isModHub: n,
					showRevisionInfo: i,
					subredditName: s,
					wikiDirectory: a,
					wikiPage: r,
					wikiPageName: l
				} = e;
				let c = null;
				return a && l === h.j ? c = o.a.createElement(R, {
					isModHub: n,
					subredditName: s,
					wikiDirectory: a
				}) : r && r.content && l === h.h ? c = o.a.createElement("div", {
					className: M.a.automodContent
				}, r.content.markdown) : r && r.content && (c = o.a.createElement(x.a, {
					className: M.a.wikiHtmlContent,
					html: r.content.html
				})), o.a.createElement("div", {
					className: Object(d.a)(t, M.a.container)
				}, l === h.h && o.a.createElement("div", {
					className: M.a.automodInfoBanner
				}, S._("This page is used to configure AutoModerator for the subreddit, please see the {=full documentation} for information", [S._param("=full documentation", o.a.createElement("a", {
					href: "/wiki/automoderator/full-documentation"
				}, S._("full documentation", null, {
					hk: "1iIGFO"
				})))], {
					hk: "C2ew1"
				})), c, i && r && r.revision && o.a.createElement("div", {
					className: M.a.revisionInfo
				}, o.a.createElement(w.a, {
					showTimeAgo: !0,
					isLastRevision: !0,
					revision: r.revision
				})))
			}
			var j = n("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				W = n.n(j);
			const L = Object(a.b)(() => Object(r.c)({
					pending: v.a,
					wikiDirectory: v.b,
					wikiPage: v.c
				})),
				B = Object(p.t)();
			class H extends s.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(b.f)())
					}, this.isListingPage = () => this.props.wikiPageName === h.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						n = this.props.wikiPage !== e.wikiPage;
					(t || n) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = m.f + 10;
						this.props.isModHub && (e += m.j + m.k);
						const n = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, n)
					}
				}
				getWikiPageStatus() {
					const {
						wikiDirectory: e,
						wikiPage: t
					} = this.props;
					return this.isListingPage() ? e && e.status : t && t.status
				}
				renderPageContents() {
					const {
						isModHub: e = !1,
						pending: t,
						showRevisionInfo: n,
						subredditName: o,
						wikiDirectory: a,
						wikiPage: r,
						wikiPageName: d
					} = this.props, l = this.getWikiPageStatus(), m = d === h.i, p = this.props.isModHub ? `/r/${this.props.subredditName}/about/wiki` : `/r/${this.props.subredditName}/wiki`, b = `${p}/index`, v = m ? void 0 : i.fbt._("Wiki home", null, {
						hk: "1E1oVk"
					});
					if (t || !l) return s.createElement(u.a, {
						showTitle: !0
					});
					if (l === f.b.Unknown || l === f.b.PageNotCreated) {
						if (Object(g.b)(d)) return s.createElement(c.a, {
							buttonLink: b,
							buttonText: v,
							description: i.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "VYLjZ"
							}),
							title: i.fbt._('"{pageName}" does not exist', [i.fbt._param("pageName", d)], {
								hk: "33IIrL"
							})
						})
					}
					switch (l) {
						case f.b.Valid:
							return !(!r || !r.content || r.content.markdown) ? s.createElement(c.a, {
								buttonLink: `${p}/edit/${d}`,
								buttonText: i.fbt._("Edit page", null, {
									hk: "2I8ztD"
								}),
								description: i.fbt._("Edit it to add some content", null, {
									hk: "13lGpZ"
								}),
								title: i.fbt._("This page is empty", null, {
									hk: "r0I6D"
								})
							}) : s.createElement(O, {
								isModHub: e,
								showRevisionInfo: n,
								subredditName: o,
								wikiDirectory: a,
								wikiPage: r,
								wikiPageName: d
							});
						case f.b.PageNotCreated:
							return s.createElement(c.a, {
								buttonLink: `${p}/create/${d}`,
								buttonText: i.fbt._("Create page", null, {
									hk: "2JH7OE"
								}),
								description: i.fbt._("Create a wiki page from this URL", null, {
									hk: "NY4dz"
								}),
								title: i.fbt._('"{pageName}" does not exist', [i.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.Unknown:
							return s.createElement(c.a, {
								buttonText: i.fbt._("Reload page", null, {
									hk: "1L70ii"
								}),
								onButtonClick: this.reloadPage,
								title: i.fbt._("An unknown error occurred", null, {
									hk: "3BhfEB"
								})
							});
						case f.b.RestrictedPage:
							return s.createElement(c.a, {
								buttonLink: b,
								buttonText: v,
								description: i.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
									hk: "VYLjZ"
								}),
								title: i.fbt._('"{pageName}" does not exist', [i.fbt._param("pageName", d)], {
									hk: "33IIrL"
								})
							});
						case f.b.MayNotView:
							return s.createElement(c.a, {
								buttonLink: b,
								buttonText: v,
								description: i.fbt._("The mods of this community have disabled this wiki page", null, {
									hk: "y3LOU"
								}),
								icon: s.createElement(k.a, {
									className: W.a.hideIcon
								}),
								title: i.fbt._("This page has been disabled", null, {
									hk: "1v13Nq"
								})
							});
						case f.b.WikiDisabled:
							return s.createElement(c.a, {
								buttonLink: `/r/${o}/`,
								buttonText: i.fbt._("Continue to r/{subredditName}", [i.fbt._param("subredditName", o)], {
									hk: "1oJQF7"
								}),
								description: i.fbt._("The mods of this community have disabled their wiki", null, {
									hk: "3qHJ8v"
								}),
								icon: s.createElement(k.a, {
									className: W.a.hideIcon
								}),
								title: i.fbt._("This wiki has been disabled", null, {
									hk: "3tfoag"
								})
							});
						case f.b.PageNotFound:
							return s.createElement(c.a, {
								buttonLink: b,
								buttonText: v,
								title: i.fbt._('"{pageName}" does not exist', [i.fbt._param("pageName", d)], {
									hk: "4o8Kt8"
								})
							});
						default:
							return null
					}
				}
				render() {
					const {
						className: e
					} = this.props;
					return s.createElement("div", {
						className: Object(d.a)(e, W.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = B(L(Object(l.c)(H)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_38GE9wiaoDeBwytESxgurW",
				mModHub: "FOp_mrprAjmysKAwsxZhy",
				content: "_1FDDEmz6LhrlUvB4ha670Y",
				pageTitle: "_1M_2BWIe9pJyTSD3ZNzB2C",
				loadingPlaceholder: "_2eJGN5qzU3dzM10INVODCG",
				loadingSection: "_97ug2ZsHOzZBsGZ98Mqwl",
				diffWrapper: "_1EwbfNO_skwriCJJeOOslG"
			}
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				l = n("./src/reddit/constants/wiki.ts"),
				c = n("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				u = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = n("./src/reddit/selectors/subredditWiki.ts"),
				h = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				p = n("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				b = n.n(p);
			var g = () => s.createElement("div", {
				className: b.a.loadingPlaceholder
			}, s.createElement("div", {
				className: b.a.loadingSection
			}, s.createElement(h.a, {
				paragraphsCount: 1
			})), s.createElement("div", {
				className: b.a.loadingSection
			}, s.createElement(h.a, {
				paragraphsCount: 1
			})));
			const k = Object(a.c)({
					diffInfo: (e, t) => {
						const n = Object(c.a)(t);
						return Object(m.i)(e, {
							key: n
						})
					}
				}),
				f = Object(o.b)(k);
			class v extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: n,
						diffInfo: o,
						wikiPageName: a
					} = this.props;
					let c = null;
					c = !o || o.pending ? s.createElement(g, null) : o.error ? i.fbt._("Could not load comparison diff", null, {
						hk: "4mrAev"
					}) : s.createElement("div", {
						className: b.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: o.htmlDiff || ""
						}
					});
					const m = Object(u.a)({
						subredditName: n,
						wikiPageName: a,
						wikiSubRoute: l.m.Revisions
					}, t);
					return s.createElement("div", {
						className: Object(r.a)(e, b.a.container, t ? b.a.mModHub : null)
					}, s.createElement(d.a, {
						buttonText: i.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: m,
						className: b.a.pageTitle,
						title: i.fbt._("Comparing revisions for /{pageName}", [i.fbt._param("pageName", a)], {
							hk: "DGV1Y"
						})
					}), s.createElement("div", {
						className: b.a.content
					}, c))
				}
			}
			t.a = f(v)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_1pXEnZ4uzz3OUpnXwRJCtz",
				modalHeader: "_3K-huH_Qa4D32ZPqAH9Ky",
				contentBlock: "N3HQ_fD9TZ7_Mk0iUMrkY",
				labelText: "_12y9PvK2L1LCL-P6PdoQ_B",
				reasonInput: "_3ZAhhe9gmKBwxW31xEmhKG",
				details: "_28OX1xAAmItegIE7yXUOxo",
				modalFooter: "NGYee0xeXDoBFshm7Ad-A",
				loadingIcon: "_2dRNmLURJShL28WViqaeCk"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, n) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n.n(s),
				a = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./node_modules/react-router-redux/es/index.js"),
				u = n("./src/lib/makeActionCreator/index.ts"),
				m = n("./src/reddit/actions/pages/subredditWiki/index.ts"),
				h = n("./src/reddit/actions/toaster.ts"),
				p = n("./src/reddit/constants/wiki.ts"),
				b = n("./src/lib/constants/index.ts"),
				g = n("./src/lib/makeApiRequest/index.ts"),
				k = n("./src/lib/omitHeaders/index.ts"),
				f = n("./src/reddit/constants/headers.ts");
			var v = e => Object(g.a)(Object(k.a)(e.context, [f.a]), {
					endpoint: `${e.context.apiUrl}/r/${e.subredditName}/api/wiki/edit`,
					method: b.cb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				x = n("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				w = n("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				C = n("./src/reddit/models/Toast/index.ts"),
				E = n("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				_ = n("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const N = Object(u.a)(_.a);
			var P = n("./src/reddit/components/BlockNavigation/index.tsx"),
				y = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = n("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				T = n("./src/reddit/components/TrackingHelper/index.tsx"),
				M = n("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				S = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				O = n("./src/reddit/controls/Button/index.tsx"),
				j = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				W = n("./src/reddit/helpers/wiki/validatePageName.ts"),
				L = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				B = n("./src/reddit/selectors/activeModalId.ts"),
				H = n("./src/reddit/selectors/platform.ts"),
				I = n("./src/reddit/selectors/subredditWiki.ts"),
				A = n("./src/higherOrderComponents/asModal/index.tsx"),
				D = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				U = n("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = n("./src/reddit/controls/TextButton/index.tsx"),
				F = n("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				V = n.n(F);
			class X extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.state = {
						text: ""
					}, this.onSaveButtonClick = async () => {
						const {
							text: e
						} = this.state;
						this.props.onSave(e)
					}, this.onTextChange = e => {
						this.setState({
							text: e.target.value
						})
					}
				}
				render() {
					const {
						isPending: e
					} = this.props, {
						text: t
					} = this.state, n = p.g - t.length;
					return o.a.createElement("div", {
						className: V.a.container
					}, o.a.createElement(D.h, {
						className: V.a.modalHeader
					}, o.a.createElement(D.p, null, i.fbt._("Add a reason for your revision", null, {
						hk: "3ozq8e"
					})), o.a.createElement(z.a, {
						onClick: this.props.onCancel
					}, o.a.createElement(D.b, null))), o.a.createElement("div", {
						className: V.a.contentBlock
					}, o.a.createElement("label", null, o.a.createElement("span", {
						className: V.a.labelText
					}, i.fbt._("Revision reason", null, {
						hk: "W55mK"
					})), o.a.createElement("input", {
						autoFocus: !0,
						className: V.a.reasonInput,
						maxLength: p.g,
						onChange: this.onTextChange,
						placeholder: i.fbt._("Ex: Added source to appendix", null, {
							hk: "KB2dD"
						}),
						value: t
					})), o.a.createElement("div", {
						className: V.a.details
					}, i.fbt._({
						"*": "{number} characters left",
						_1: "1 character left"
					}, [i.fbt._plural(n, "number")], {
						hk: "1Ra9c8"
					}))), o.a.createElement(D.f, {
						className: V.a.modalFooter
					}, o.a.createElement(D.a, {
						onClick: this.props.onCancel
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(O.i, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? o.a.createElement(U.a, {
						className: V.a.loadingIcon,
						sizePx: 10
					}) : i.fbt._("Save", null, {
						hk: "1zNlod"
					}))))
				}
			}
			var G = Object(A.a)(X),
				q = n("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				K = n.n(q);
			const Z = "Discard-wiki-page-changes",
				J = "Add-wiki-revision-reason",
				Y = 2,
				Q = (e, t, n) => {
					const s = t.status,
						o = {
							[W.a.InvalidPageName]: i.fbt._("Page name is invalid", null, {
								hk: "3Ogzsc"
							}),
							[W.a.MaxLengthExceed]: i.fbt._("Page name must be shorter than {maxPageLen} characters", [i.fbt._param("maxPageLen", `${p.d}`)], {
								hk: "11HwWR"
							}),
							[W.a.PageAlreadyExists]: i.fbt._("Page with this name already exists", null, {
								hk: "3WRlhT"
							}),
							[W.a.RestrictedPageName]: i.fbt._("This page uses a restricted URL and can not be used as a wiki page", null, {
								hk: "BQtR2"
							})
						};
					if (e) {
						if (s === L.b.Valid) return o[W.a.PageAlreadyExists];
						if (s === L.b.PageNotFound) return i.fbt._("You do not have permission to create this page", null, {
							hk: "423aTf"
						});
						if (n) return o[n]
					} else if (s === L.b.Valid && !t.isRevisable) return i.fbt._("You do not have permission to edit this page", null, {
						hk: "1bUgsZ"
					})
				},
				$ = Object(r.c)({
					allowNavigationCallback: H.a,
					isRevisionReasonModalOpen: Object(B.b)(J),
					isSaveBeforeLeaveModalOpen: Object(B.b)(Z),
					wikiPage: I.c
				}),
				ee = Object(a.b)($, (e, t) => ({
					onSaveWikiPage: (n, s) => e((({
						pageContent: e,
						wikiPageName: t,
						revisionReason: n,
						subredditName: s
					}) => async (o, a, r) => {
						const d = await v({
							context: r.apiContext(),
							pageContent: e,
							revisionReason: n,
							subredditName: s,
							wikiPageName: t
						});
						if (d.ok) o(N({
							pageKey: Object(w.a)({
								subredditName: s,
								wikiPageName: t
							}),
							pageRevisionsListingKey: Object(x.a)({
								subredditName: s,
								wikiPageName: t,
								isRecent: !1
							}),
							recentRevisionsListingKey: Object(x.a)({
								subredditName: s,
								wikiPageName: t,
								isRecent: !0
							})
						})), await o(Object(m.fetchSubredditWikiData)({
							includeDirectory: !0,
							includePageData: !0,
							subredditName: s,
							wikiPageName: t
						}));
						else {
							let e = i.fbt._("Something went wrong", null, {
								hk: "4oNh1E"
							});
							d.body && "RESTRICTED_PAGE" === d.body.reason && (e = i.fbt._("Cannot create/edit restricted page", null, {
								hk: "2pUIkm"
							})), o(Object(h.e)({
								kind: C.b.Error,
								text: e
							}))
						}
						return d.ok
					})({
						pageContent: n,
						revisionReason: s,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(((e = !1) => async (t, n) => {
						const i = n().platform.currentPage,
							s = i.locationState && i.locationState[p.a];
						if (e && s) t(Object(c.a)());
						else {
							const {
								subredditName: e,
								wikiPageName: n
							} = i.urlParams, s = Object(E.a)(i.url, {
								subredditName: e,
								wikiPageName: n
							});
							t(Object(c.c)(s))
						}
					})(t)),
					closeAllModals: () => e(Object(l.f)()),
					toggleModal: t => e(Object(l.i)(t))
				}));
			class te extends o.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(j.m)(this.props.isCreation));
						const n = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), n ? this.setState({
							disableBlocking: !0
						}, () => {
							this.props.onFinishWikiEdit()
						}) : this.finishPendingNavTransition(!1))
					}, this.onLeavePageConfirmed = () => {
						this.finishPendingNavTransition(!0)
					}, this.onAbortLeavingPage = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.onCancelAddingRevisionReason = () => {
						this.finishPendingNavTransition(!1), this.props.closeAllModals()
					}, this.showRevisionReasonModal = () => {
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(J)
					}, this.onCancel = () => {
						this.props.onFinishWikiEdit(!0)
					}, this.onTextChange = e => {
						this.setState({
							markdown: e.target.value
						})
					};
					const t = e.wikiPage && e.wikiPage.content ? e.wikiPage.content.markdown : "";
					this.state = {
						isSavePending: !1,
						markdown: t
					}
				}
				componentDidUpdate(e) {
					const {
						wikiPage: t
					} = this.props;
					if (t && !e.wikiPage) {
						const e = t.content && t.content.markdown || "";
						this.setState({
							markdown: e
						})
					}
				}
				componentWillUnmount() {
					this.isUnmounted = !0, this.finishPendingNavTransition(!1)
				}
				finishPendingNavTransition(e) {
					this.props.allowNavigationCallback && this.props.allowNavigationCallback(e)
				}
				render() {
					const {
						isCreation: e,
						isRevisionReasonModalOpen: t,
						isSaveBeforeLeaveModalOpen: n,
						wikiPage: s,
						wikiPageName: a
					} = this.props, {
						disableBlocking: r,
						isSavePending: l,
						markdown: c
					} = this.state, u = s && s.content && s.content.markdown || "", m = !c.trim(), h = c !== u, p = e && s ? Object(W.b)(s.name) : void 0, b = !(!s || s.status !== L.b.PageNotCreated || p), g = !(!s || s.status !== L.b.Valid || !s.isRevisable), k = e ? b : g, f = k && h && !m && !l && !p;
					return o.a.createElement("div", {
						className: Object(d.a)(K.a.container, this.props.className)
					}, o.a.createElement("div", {
						className: Object(d.a)(this.props.topBarClassName, K.a.topBar)
					}, o.a.createElement(O.l, {
						onClick: this.onCancel,
						disabled: l
					}, i.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(O.i, {
						disabled: !f,
						onClick: this.showRevisionReasonModal
					}, i.fbt._("Save", null, {
						hk: "1zXyaJ"
					}))), o.a.createElement("div", {
						className: Object(d.a)(this.props.contentClassName, K.a.content)
					}, s ? k ? o.a.createElement(R.a, {
						autoFocus: !0,
						className: K.a.resizableTextarea,
						disabled: l,
						onChange: this.onTextChange,
						placeholder: i.fbt._("Add page content here", null, {
							hk: "4fxFCc"
						}),
						value: c
					}) : o.a.createElement(M.a, {
						description: Q(e, s, p),
						title: e ? i.fbt._('"{pageName}" cannot be created', [i.fbt._param("pageName", a)], {
							hk: "235tfC"
						}) : i.fbt._('"{pageName}" cannot be edited', [i.fbt._param("pageName", a)], {
							hk: "4qKJob"
						})
					}) : o.a.createElement(S.a, {
						paragraphsCount: Y
					})), t && o.a.createElement(G, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: l
					}), o.a.createElement(P.a, {
						blockOnBeforeUnload: !0,
						dialogId: Z,
						enabled: h && !r
					}), n && o.a.createElement(y.a, {
						actionText: i.fbt._("Discard", null, {
							hk: "1SiwLl"
						}),
						headerText: i.fbt._("Discard changes before leaving?", null, {
							hk: "354NTe"
						}),
						modalText: i.fbt._("You have made some changes to your wiki page, do you wish to discard the changes?", null, {
							hk: "4sMjD7"
						}),
						onCancel: this.onAbortLeavingPage,
						onClose: this.onAbortLeavingPage,
						onConfirm: this.onLeavePageConfirmed,
						withOverlay: !0
					}))
				}
			}
			t.a = ee(Object(T.c)(te))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, n) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/react/index.js"),
				o = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				r = n("./src/lib/classNames/index.ts"),
				d = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				l = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				u = n("./src/reddit/constants/wiki.ts"),
				m = n("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				h = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				p = n("./src/reddit/selectors/subredditWiki.ts"),
				b = n("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = n.n(b);
			const k = Object(a.c)({
					pending: p.a,
					revision: (e, {
						revisionId: t
					}) => t ? Object(p.n)(e, {
						revisionId: t
					}) : void 0,
					wikiPage: p.c
				}),
				f = Object(o.b)(k);
			class v extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: n,
						revision: o,
						revisionId: a,
						subredditName: p,
						wikiPage: b,
						wikiPageName: k
					} = this.props;
					let f = null;
					f = n ? s.createElement(d.a, null) : b ? b.status === h.b.Valid ? b.content && b.content.markdown : i.fbt._("Cannot show page content", null, {
						hk: "pwCwd"
					}) : i.fbt._("Page not found", null, {
						hk: "26hzSO"
					});
					const v = o || b && b.revision,
						x = !a,
						w = Object(m.a)({
							subredditName: p,
							wikiPageName: k,
							wikiSubRoute: x ? void 0 : u.m.Revisions
						}, t);
					return s.createElement("div", {
						className: Object(r.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, s.createElement(l.a, {
						buttonText: x ? i.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}) : i.fbt._("Go to page history", null, {
							hk: "9szz2"
						}),
						buttonLink: w,
						className: g.a.pageTitle,
						title: !x && v ? i.fbt._("Revision from {timeAgo}", [i.fbt._param("timeAgo", Object(c.b)(v))], {
							hk: "36r4TU"
						}) : i.fbt._("Page source", null, {
							hk: "33sFXM"
						})
					}), s.createElement("div", {
						className: g.a.content
					}, s.createElement("div", {
						className: g.a.headerRow
					}, v && s.createElement(c.a, {
						isLastRevision: x,
						revision: v,
						showReason: !0,
						showTimeAgo: !1
					})), s.createElement("div", {
						className: g.a.pageSource
					}, f)))
				}
			}
			t.a = f(v)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, n) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/fbt/lib/FbtPublic.js"),
				s = n("./node_modules/history/esm/history.js"),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/lib/classNames/index.ts"),
				c = n("./src/lib/copyToClipboard/index.ts"),
				u = n("./src/reddit/actions/toaster.ts"),
				m = n("./src/reddit/components/TrackingHelper/index.tsx"),
				h = n("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				p = n("./src/reddit/constants/wiki.ts"),
				b = n("./src/reddit/controls/Button/index.tsx"),
				g = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = n("./src/reddit/models/Toast/index.ts"),
				f = n("./src/reddit/selectors/moderatorPermissions.ts"),
				v = n("./src/reddit/selectors/subreddit.ts"),
				x = n("./src/reddit/selectors/subredditWiki.ts"),
				w = n("./src/config.ts"),
				C = n("./src/reddit/components/OverflowMenu/index.tsx"),
				E = n("./src/reddit/constants/parameters.ts"),
				_ = n("./src/reddit/controls/Dropdown/Row.tsx"),
				N = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				P = n("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				y = n.n(P);
			const R = ["right", "bottom"],
				T = ["right", "top"];
			class M extends a.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(N.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, n = `${w.a.redditUrl}/r/${e}/wiki/${t}`;
						this.props.onCopyPageUrl(n), this.props.sendEvent(N.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: n,
						subredditName: s,
						wikiPage: o,
						wikiPageName: r
					} = this.props, d = n ? `/r/${s}/about/wiki` : `/r/${s}/wiki`;
					return a.a.createElement(C.b, {
						className: Object(l.a)(e, y.a.container),
						dropdownClassName: y.a.dropdown,
						dropdownId: t,
						targetPosition: R,
						tooltipPosition: T
					}, o && a.a.createElement(_.b, {
						className: y.a.row,
						displayText: i.fbt._("View page history", null, {
							hk: "fy9yY"
						}),
						href: `${d}/revisions/${r}`
					}), o && a.a.createElement(_.b, {
						className: y.a.row,
						displayText: i.fbt._("View page source", null, {
							hk: "1d5vg5"
						}),
						href: `${d}/${r}?${E.C}`,
						onClick: this.onViewPageSourceClick
					}), n && a.a.createElement(_.b, {
						className: y.a.row,
						displayText: i.fbt._("View in community", null, {
							hk: "mSFod"
						}),
						href: `/r/${s}/wiki/${r}`
					}), a.a.createElement(_.b, {
						className: y.a.row,
						displayText: i.fbt._("Copy URL", null, {
							hk: "3yBYUk"
						}),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var S = M,
				O = n("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				j = n.n(O);
			const W = Object(d.c)({
					hasWikiModPerms: (e, t) => {
						const n = Object(v.A)(e, t);
						return !!n && Object(f.f)(e, {
							subredditId: n.id
						})
					},
					wikiPage: x.c
				}),
				L = Object(r.b)(W, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(c.a)(e) && t(Object(u.e)(Object(u.d)(i.fbt._("Copied page URL", null, {
							hk: "4qKWjj"
						}), k.b.SuccessCommunity)))
					})(t))
				}));
			class B extends a.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: n,
						wikiPageName: o,
						subredditName: r,
						className: d
					} = this.props, c = !!n && n.status === g.b.Valid, u = !!n && n.isRevisable, m = e && u && c, k = t ? `/r/${r}/about/wiki/edit/${o}` : `/r/${r}/wiki/edit/${o}`;
					return a.a.createElement("div", {
						className: Object(l.a)(d, j.a.container)
					}, t && n && n.revision && a.a.createElement(h.a, {
						showTimeAgo: !0,
						className: j.a.revisionInfo,
						isLastRevision: !0,
						revision: n.revision
					}), a.a.createElement("div", {
						className: j.a.flexSpacer
					}), m && a.a.createElement(b.n, {
						className: j.a.button,
						to: `/r/${r}/about/wiki/settings/${o}`
					}, i.fbt._("Page settings", null, {
						hk: "2IAvWU"
					})), c && u && a.a.createElement(b.k, {
						className: j.a.button,
						to: Object(s.c)(k, {
							[p.a]: !0
						})
					}, i.fbt._("Edit", null, {
						hk: "1nftDt"
					})), c && a.a.createElement(S, {
						className: j.a.overflowMenu,
						dropdownId: `wikiPage-OverflowMenu-${o}-${t}`,
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: r,
						wikiPage: n,
						wikiPageName: o
					}))
				}
			}
			t.a = L(Object(m.c)(B))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return r
			}));
			var i = n("./node_modules/react/index.js"),
				s = n("./src/reddit/controls/Button/index.tsx"),
				o = n("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = n.n(o);

			function r(e) {
				const {
					buttonLink: t,
					buttonText: n,
					description: o,
					icon: r,
					onButtonClick: d,
					title: l
				} = e;
				let c = null;
				return n && t ? c = i.createElement(s.k, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, n) : n && d && (c = i.createElement(s.i, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, n)), i.createElement("div", {
					className: a.a.container
				}, r, l && i.createElement("div", {
					className: a.a.title
				}, l), o && i.createElement("div", {
					className: a.a.description
				}, o), c)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, n) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/lodash/range.js"),
				s = n.n(i),
				o = n("./node_modules/react/index.js"),
				a = n("./src/lib/classNames/index.ts"),
				r = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				d = n("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				l = n.n(d);
			const c = e => o.createElement("div", {
				className: Object(a.a)(e.className, Object(r.b)({
					isLoading: !0
				}))
			});
			t.a = e => o.createElement(o.Fragment, null, e.showTitle && o.createElement(c, {
				className: l.a.placeholderTitle
			}), s()(e.paragraphsCount || 6).map(e => o.createElement("div", {
				className: l.a.placeholderParagraph,
				key: e
			}, s()(10).map(e => o.createElement(c, {
				className: l.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz",
				active: "_2DijTkAaakBaDtqxBeulFO"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return l
			}));
			var i = n("./node_modules/react/index.js"),
				s = n.n(i),
				o = n("./src/lib/classNames/index.ts"),
				a = n("./src/reddit/controls/Button/index.tsx"),
				r = n("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				d = n.n(r);

			function l(e) {
				const {
					buttonLink: t,
					buttonText: n,
					className: i,
					title: r
				} = e;
				return s.a.createElement("div", {
					className: Object(o.a)(i, d.a.container)
				}, r, n && t && s.a.createElement(a.p, {
					className: d.a.linkButton,
					to: t
				}, n))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, n) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "b", (function() {
				return C
			})), n.d(t, "a", (function() {
				return E
			}));
			var i = n("./node_modules/lodash/noop.js"),
				s = n.n(i),
				o = n("./node_modules/react/index.js"),
				a = n.n(o),
				r = n("./src/higherOrderComponents/asTooltip.tsx"),
				d = n("./src/lib/classNames/index.ts"),
				l = n("./src/lib/constants/index.ts"),
				c = n("./src/lib/timeAgo/index.ts"),
				u = n("./src/reddit/components/AuthorLink/index.tsx"),
				m = n("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				h = n("./src/reddit/components/InfoTextTooltip/index.tsx"),
				p = n("./src/reddit/helpers/graphql/helpers.ts"),
				b = n("./src/reddit/models/Post/index.ts"),
				g = n("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				k = n.n(g);
			const {
				fbt: f
			} = n("./node_modules/fbt/lib/FbtPublic.js"), v = ["center", "top"], x = ["center", "bottom"], w = Object(r.a)(h.b), C = e => {
				const t = new Date(Object(p.d)(e.revisedAt));
				return Object(c.d)(t.valueOf() / 1e3)
			};
			class E extends a.a.Component {
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
					const {
						className: e,
						isLastRevision: t,
						revision: n,
						showReason: i = !1,
						showTimeAgo: o = !1
					} = this.props, {
						showTooltip: r
					} = this.state, c = n.authorInfo && n.authorInfo.name || l.A, h = new Date(Object(p.d)(n.revisedAt)), g = a.a.createElement(m.a, {
						tooltipId: "wikipage-revision-author",
						user: c,
						sendHoverCardEvent: s.a
					}, a.a.createElement(u.a, {
						className: k.a.authorLink,
						author: c,
						isAuthorDeleted: Object(b.m)(c),
						isUnstyled: !0
					}, c));
					return a.a.createElement("span", {
						className: Object(d.a)(e, k.a.container)
					}, t ? f._("Last revised by {username}", [f._param("username", g)], {
						hk: "jNOhx"
					}) : f._("Revised by {username}", [f._param("username", g)], {
						hk: "2Q35rs"
					}), o && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", C(n), a.a.createElement(w, {
						text: h.toString(),
						isOpen: r,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: v,
						tooltipPosition: x
					})), i && n.reason && a.a.createElement("span", null, " - ", n.reason))
				}
			}
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, n) {
			"use strict";
			n.d(t, "f", (function() {
				return a
			})), n.d(t, "g", (function() {
				return r
			})), n.d(t, "m", (function() {
				return l
			})), n.d(t, "d", (function() {
				return c
			})), n.d(t, "k", (function() {
				return u
			})), n.d(t, "q", (function() {
				return m
			})), n.d(t, "r", (function() {
				return h
			})), n.d(t, "c", (function() {
				return p
			})), n.d(t, "j", (function() {
				return b
			})), n.d(t, "p", (function() {
				return g
			})), n.d(t, "e", (function() {
				return k
			})), n.d(t, "b", (function() {
				return f
			})), n.d(t, "i", (function() {
				return v
			})), n.d(t, "a", (function() {
				return x
			})), n.d(t, "h", (function() {
				return w
			})), n.d(t, "l", (function() {
				return C
			})), n.d(t, "n", (function() {
				return _
			})), n.d(t, "o", (function() {
				return N
			}));
			var i = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => ({
					...s.defaults(e),
					subreddit: s.subreddit(e),
					userSubreddit: s.userSubreddit(e)
				}),
				a = () => e => ({
					source: "wiki",
					action: "click",
					noun: "edit",
					...o(e)
				}),
				r = () => e => ({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki",
					...o(e)
				}),
				d = e => t => ({
					source: "wiki",
					action: "click",
					noun: e,
					...o(t)
				}),
				l = (e = !1) => d(e ? "create_wiki_page" : "save_wiki_page"),
				c = d("compare_wiki_pages"),
				u = d("revert_wiki_page"),
				m = d("view_wiki_page"),
				h = d("view_source"),
				p = d("add_wiki_page_contributor"),
				b = d("remove_wiki_page_contributor"),
				g = d("save_wiki_page_settings"),
				k = d("copy_url"),
				f = d("add_wiki_subreddit_contributor"),
				v = d("remove_wiki_subreddit_contributor"),
				x = d("ban_wiki_contributor"),
				w = d("unban_wiki_contributor"),
				C = e => d(e ? "show_wiki_revision" : "hide_wiki_revision"),
				E = {
					[i.a.Inherit]: "subreddit_wiki_perms",
					[i.a.Contributors]: "only_wiki_contributors",
					[i.a.Mods]: "only_mods"
				},
				_ = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: s.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				N = e => t => ({
					...o(t),
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: s.actionInfo(t, {
						settingValue: E[e]
					})
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react/index.js"),
				s = n.n(i);
			t.a = e => s.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, s.a.createElement("g", null, s.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=https://www.redditstatic.com/desktop2x/reddit-components-Wiki-ModHubWikiManagement.fd70fe9f69527d4c87f9.js.map