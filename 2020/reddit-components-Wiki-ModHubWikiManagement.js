// https://www.redditstatic.com/desktop2x/reddit-components-Wiki-ModHubWikiManagement.7e1a6d84b10f415ab745.js
// Retrieved at 3/24/2020, 12:40:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Wiki-ModHubWikiManagement"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var i, o, r;
			o = [t, e], void 0 === (r = "function" == typeof(i = function(e, t) {
				"use strict";
				var n, i, o = "function" == typeof Map ? new Map : (n = [], i = [], {
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
					r = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (c) {
					r = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function s(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
						var t, n = null,
							i = e.clientWidth,
							s = null,
							a = function() {
								e.clientWidth !== i && u()
							},
							d = function(t) {
								window.removeEventListener("resize", a, !1), e.removeEventListener("input", u, !1), e.removeEventListener("keyup", u, !1), e.removeEventListener("autosize:destroy", d, !1), e.removeEventListener("autosize:update", u, !1), Object.keys(t).forEach((function(n) {
									e.style[n] = t[n]
								})), o.delete(e)
							}.bind(e, {
								height: e.style.height,
								resize: e.style.resize,
								overflowY: e.style.overflowY,
								overflowX: e.style.overflowX,
								wordWrap: e.style.wordWrap
							});
						e.addEventListener("autosize:destroy", d, !1), "onpropertychange" in e && "oninput" in e && e.addEventListener("keyup", u, !1), window.addEventListener("resize", a, !1), e.addEventListener("input", u, !1), e.addEventListener("autosize:update", u, !1), e.style.overflowX = "hidden", e.style.wordWrap = "break-word", o.set(e, {
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
							o = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							r = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var s = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = s + "px", i = e.clientWidth, o.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), r && (document.documentElement.scrollTop = r)) : e.style.height = t
					}

					function u() {
						c();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (i !== t ? "hidden" === n.overflowY && (l("scroll"), c(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (l("hidden"), c(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), s !== i) {
							s = i;
							var o = r("autosize:resized");
							try {
								e.dispatchEvent(o)
							} catch (a) {}
						}
					}
				}

				function a(e) {
					var t = o.get(e);
					t && t.destroy()
				}

				function d(e) {
					var t = o.get(e);
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
						return s(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, l.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = l
			}) ? i.apply(t, o) : i) || (e.exports = r)
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
					var o = e.style.lineHeight;
					e.style.lineHeight = t + "em", t = i(e, "line-height"), n = parseFloat(t, 10), o ? e.style.lineHeight = o : delete e.style.lineHeight
				}
				if (-1 !== t.indexOf("pt") ? (n *= 4, n /= 3) : -1 !== t.indexOf("mm") ? (n *= 96, n /= 25.4) : -1 !== t.indexOf("cm") ? (n *= 96, n /= 2.54) : -1 !== t.indexOf("in") ? n *= 96 : -1 !== t.indexOf("pc") && (n *= 16), n = Math.round(n), "normal" === t) {
					var r = e.nodeName,
						s = document.createElement(r);
					s.innerHTML = "&nbsp;", "TEXTAREA" === r.toUpperCase() && s.setAttribute("rows", "1");
					var a = i(e, "font-size");
					s.style.fontSize = a, s.style.padding = "0px", s.style.border = "0px";
					var d = document.body;
					d.appendChild(s), n = s.offsetHeight, d.removeChild(s)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i, o, r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				},
				s = function() {
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
				a = u(n("./node_modules/react/index.js")),
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

			function p(e, t) {
				if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
				return !t || "object" != typeof t && "function" != typeof t ? e : t
			}
			var h = (o = i = function(e) {
				function t() {
					var e, n, i;
					! function(e, t) {
						if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
					}(this, t);
					for (var o = arguments.length, s = Array(o), a = 0; a < o; a++) s[a] = arguments[a];
					return n = i = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(s))), i.state = {
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
							o = (t.onChange, t.style),
							s = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							l = n && a ? a * n : null;
						return r({}, s, {
							saveDOMNodeRef: d,
							style: l ? r({}, o, {
								maxHeight: l
							}) : o,
							onChange: i.onChange
						})
					}, p(i, n)
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
				}(t, e), s(t, [{
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
						return a.default.createElement("textarea", r({}, i, {
							ref: n
						}), t)
					}
				}, {
					key: "componentDidUpdate",
					value: function() {
						this.getValue(this.props) !== this.currentValue && this.dispatchEvent("autosize:update")
					}
				}]), t
			}(a.default.Component), i.defaultProps = {
				rows: 1
			}, o);
			t.default = h, h.propTypes = {
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
			var i, o = n("./node_modules/react-autosize-textarea/lib/TextareaAutosize.js"),
				r = (i = o) && i.__esModule ? i : {
					default: i
				};
			t.default = r.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}
			e.exports = function() {
				function e(e, t, n, o, r, s) {
					if (s !== i) {
						var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw a.name = "Invariant Violation", a
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
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return n.checkPropTypes = o, n.PropTypes = n, n
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
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				r = n("./src/lib/classNames/index.ts"),
				s = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				l = n("./src/reddit/i18n/utils.ts"),
				c = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				u = n.n(c);
			const m = s.a.div("BanLength", u.a),
				p = s.a.wrapped(a.m, "BanLengthDays", u.a),
				h = s.a.wrapped(a.h, "NumberInput", u.a),
				b = s.a.div("StyledPermanentLabel", u.a),
				g = s.a.div("DescriptionText", u.a),
				f = s.a.div("BanLengthContainer", u.a),
				k = s.a.div("CheckboxWrapper", u.a),
				C = s.a.div("PermanentCheckbox", u.a);
			t.a = e => o.a.createElement(a.f, null, o.a.createElement(a.i, null, Object(l.c)("How long?")), o.a.createElement(f, null, o.a.createElement(m, {
				className: Object(r.a)({
					[u.a.isDisabled]: e.isDurationPermanent
				})
			}, o.a.createElement(h, {
				tabIndex: 0,
				disabled: e.isDurationPermanent,
				onChange: e.onChangeDuration,
				min: "0",
				type: "number",
				value: void 0 !== e.duration && null !== e.duration ? e.duration : ""
			}), o.a.createElement(p, null, Object(l.c)("Days"))), o.a.createElement(b, {
				onClick: e.togglePermanent
			}, o.a.createElement(C, {
				onKeyDown: e.togglePermanent
			}, o.a.createElement(k, {
				tabIndex: 0
			}, e.isDurationPermanent ? o.a.createElement(d.b, null) : o.a.createElement(d.a, null))), o.a.createElement(g, null, Object(l.c)("Permanent")))))
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
			var i = n("./node_modules/react/index.js"),
				o = n.n(i),
				r = n("./node_modules/react-redux/es/index.js"),
				s = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/keycodes.ts"),
				l = n("./src/reddit/controls/Dropdown/index.tsx"),
				c = n("./src/reddit/controls/Dropdown/Row.tsx"),
				u = n("./src/reddit/i18n/utils.ts"),
				m = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				p = n("./src/reddit/selectors/oldSiteRules.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less"),
				g = n.n(b);
			const f = a.a.div("Container", g.a),
				k = a.a.wrapped(l.a, "Dropdown", g.a),
				C = a.a.wrapped(c.b, "DropdownRow", g.a),
				v = Object(s.c)({
					oldSiteRules: p.a,
					subredditRules: h.O
				}),
				E = Object(r.b)(v);
			class y extends o.a.Component {
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
						return [...this.props.subredditRules ? this.props.subredditRules.map(e => e.shortName) : [], ...this.props.oldSiteRules, "other"]
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
				componentWillMount() {
					this.props.onDropdownApi && this.props.onDropdownApi(null)
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(f, null, o.a.createElement("button", {
						className: g.a.dropdownTarget,
						onClick: this.handleToggleDropdown
					}, o.a.createElement("div", {
						className: g.a.targetText
					}, e.reason || Object(u.c)("None")), o.a.createElement(m.b, null)), t.isOpen && o.a.createElement(k, {
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => o.a.createElement(C, {
						key: t,
						displayText: t,
						index: n,
						isSelected: e.reason === t,
						onClick: e => this.handleSelectReason(e, t)
					}))))
				}
			}
			t.a = E(y)
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
				o = n.n(i),
				r = n("./src/lib/constants/index.ts"),
				s = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				a = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				d = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				l = n("./src/reddit/constants/parameters.ts"),
				c = n("./src/reddit/constants/wiki.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				p = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				h = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				f = n("./src/reddit/components/Wiki/ModHubWikiManagement/ModHubWikiPage/index.m.less"),
				k = n.n(f),
				C = e => {
					const {
						wikiPageName: t,
						subredditName: n
					} = e;
					return i.createElement("div", {
						className: k.a.container
					}, i.createElement(h.c, null, i.createElement(g.a, {
						isModHub: !0,
						wikiPageName: t,
						subredditName: n
					})), i.createElement(b.a, {
						className: k.a.pageContent,
						isModHub: !0,
						subredditName: n,
						wikiPageName: t
					}))
				},
				v = n("./src/config.ts"),
				E = n("./node_modules/fbt/lib/FbtPublic.js"),
				y = n("./node_modules/react-redux/es/index.js"),
				w = n("./node_modules/reselect/es/index.js"),
				x = n("./src/lib/timeAgo/index.ts"),
				S = n("./src/reddit/actions/modal.ts"),
				M = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				_ = n("./src/reddit/components/BannedUserList/index.tsx"),
				P = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				T = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				R = n("./src/reddit/components/Scroller/Simple.tsx"),
				N = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				O = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				W = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				j = n("./src/reddit/components/TrackingHelper/index.tsx"),
				B = n("./src/reddit/constants/componentSizes.ts"),
				L = n("./src/reddit/controls/Button/index.tsx"),
				D = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				A = n("./src/reddit/selectors/activeModalId.ts"),
				H = n("./src/reddit/selectors/subredditWiki.ts"),
				U = n("./src/higherOrderComponents/asModal/index.tsx"),
				z = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				I = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				F = n("./src/reddit/controls/TextButton/index.tsx"),
				X = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				V = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				Q = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Z = n("./src/reddit/models/SubredditModeration/index.ts"),
				q = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				Y = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				K = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiBannedContributors/index.m.less"),
				G = n.n(K);
			const J = 300,
				$ = Object(y.b)(null, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						addBannedWikiContributor: t => e(Object(M.a)(n, t))
					}
				});
			class ee extends o.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onChangeModNote = e => {
						e.currentTarget.value.length <= J && this.setState({
							note: e.currentTarget.value
						})
					}, this.onSelectReason = e => {
						this.setState({
							banReason: e
						})
					}, this.onChangeBanDuration = e => {
						const t = Number(e.currentTarget.value);
						"number" == typeof t && (t < 0 || t > Z.b || this.setState({
							duration: t
						}))
					}, this.togglePermanent = e => {
						e.key && "Enter" !== e.key || this.setState({
							isDurationPermanent: !this.state.isDurationPermanent,
							duration: void 0
						})
					}, this.onSubmit = () => {
						const e = Object(V.a)(this.state.username),
							{
								note: t,
								banReason: n,
								isDurationPermanent: i,
								duration: o
							} = this.state;
						let r = i ? void 0 : o;
						const s = this.props.bannedUser && null != this.props.bannedUser.daysRemaining && this.props.bannedUser.daysRemaining === o;
						null != r && s && (r += 1), this.props.addBannedWikiContributor({
							note: t,
							username: e,
							banReason: n,
							duration: r
						}), this.props.sendEvent(D.a), this.props.toggleModal()
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
					return o.a.createElement(I.c, null, o.a.createElement(I.g, null, o.a.createElement(Q.a, null, o.a.createElement(I.n, null, E.fbt._("Ban wiki contributor", null, {
						hk: "1d5Hrk"
					}), e.bannedUser && ": u/".concat(e.bannedUser.username)), o.a.createElement(F.a, {
						onClick: e.toggleModal
					}, o.a.createElement(I.b, null)))), o.a.createElement(I.j, null, !e.bannedUser && o.a.createElement(o.a.Fragment, null, o.a.createElement(I.f, null, o.a.createElement(I.i, null, E.fbt._("Enter username", null, {
						hk: "2fknjy"
					})), o.a.createElement(I.h, {
						onChange: this.onInputChange,
						placeholder: E.fbt._("u/username", null, {
							hk: "RshBO"
						}),
						value: this.state.username
					})), o.a.createElement(I.f, null, o.a.createElement(I.i, null, E.fbt._("Reason for ban", null, {
						hk: "1e9gZn"
					})), o.a.createElement(Y.a, {
						onSelectReason: this.onSelectReason,
						reason: t.banReason,
						subredditId: e.subredditId
					}))), o.a.createElement(I.f, null, o.a.createElement(I.i, null, E.fbt._("Mod note", null, {
						hk: "1IDrTK"
					})), o.a.createElement(I.h, {
						onChange: this.onChangeModNote,
						placeholder: E.fbt._("Mod note", null, {
							hk: "1dzUjv"
						}),
						value: t.note
					}), o.a.createElement(z.a, {
						maxChars: J,
						text: t.note
					})), o.a.createElement(q.a, {
						duration: t.duration,
						isDurationPermanent: t.isDurationPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), o.a.createElement(I.e, null, o.a.createElement(L.i, {
						onClick: e.toggleModal
					}, E.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})), o.a.createElement(L.f, {
						className: G.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(X.a)(t.username)
					}, E.fbt._("Ban user", null, {
						hk: "w8Nwk"
					}))))
				}
			}
			var te = Object(U.a)($(ee));
			const ne = Object(w.c)({
				isAddBannedContributorModalOpen: e => "WikiBannedContributers--BanContributorModal" === Object(A.a)(e),
				isConfirmModalOpen: e => "WikiBannedContributers--RemoveBannedWikiContributor" === Object(A.a)(e),
				isWikiBannedContributorsListPending: H.e,
				loadMoreToken: H.f,
				searchResult: H.g,
				wikiContributors: H.h
			});
			class ie extends o.a.Component {
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
						this.state.userToRemove && (this.props.removeWikiBannedContributor(this.state.userToRemove), this.props.sendEvent(D.h))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreBannedContributorsPending && (this.setState({
							isFetchMoreBannedContributorsPending: !0
						}), await this.props.moreWikiBannedContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreBannedContributorsPending: !1
						}))
					}, this.renderBannedContributor = e => {
						const t = this.props.wikiContributors.find(t => t.id === e);
						if (!t) return o.a.createElement(o.a.Fragment, null);
						const n = new Date(t.date),
							i = Object(x.d)("en", n),
							r = Object(_.b)("en", t.daysRemaining);
						return o.a.createElement(W.b, {
							description: t.note,
							username: t.username,
							userIcon: t.iconUrl,
							primaryButton: o.a.createElement("a", {
								href: "".concat(v.a.redditUrl, "/message/compose/?to=").concat(t.username),
								rel: "noopener noreferrer",
								target: "_blank"
							}, o.a.createElement(L.n, null, E.fbt._("Send message", null, {
								hk: "21j5K5"
							}))),
							secondaryButton: o.a.createElement(L.n, {
								onClick: () => this.onClickEditUser(t)
							}, E.fbt._("Edit", null, {
								hk: "tOPsn"
							})),
							tertiaryButton: o.a.createElement(L.n, {
								onClick: () => this.onClickRemove(t.id)
							}, E.fbt._("Remove", null, {
								hk: "1P1gt2"
							})),
							timeAgo: "".concat(i, " (").concat(r, ")"),
							key: t.id
						})
					}, this.renderNoContent = () => this.props.isWikiBannedContributorsListPending ? o.a.createElement(W.a, null) : o.a.createElement(T.c, {
						text: E.fbt._("No banned wiki contributors in {subredditName}", [E.fbt._param("subredditName", this.props.subredditName)], {
							hk: "x9Dwq"
						})
					}), this.renderSearchState = () => o.a.createElement(N.a, {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, null, o.a.createElement(L.f, {
						onClick: this.props.toggleAddBannedContributorModal
					}, E.fbt._("Ban contributor", null, {
						hk: "1vQTTH"
					}))), o.a.createElement(h.a, null, o.a.createElement(h.b, null, E.fbt._("Banned wiki contributors", null, {
						hk: "338WU8"
					})), o.a.createElement(O.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : o.a.createElement(R.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: B.f + B.j
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderBannedContributor(e.id)
					}))) : this.renderNoContent(), t.isFetchMoreBannedContributorsPending && o.a.createElement(W.a, {
						rows: 3
					})), e.isAddBannedContributorModalOpen && o.a.createElement(te, {
						bannedUser: t.userToEdit,
						subredditId: e.subredditId,
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: this.onCloseBannedContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && o.a.createElement(P.a, {
						actionText: E.fbt._("Remove", null, {
							hk: "1P1gt2"
						}),
						headerText: E.fbt._("Remove banned wiki contributor?", null, {
							hk: "4E1qjp"
						}),
						modalText: E.fbt._("Do you wish to unban this user as a wiki contributor?", null, {
							hk: "2GrHZs"
						}),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var oe = Object(y.b)(ne, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						moreWikiBannedContributorsRequested: t => e(Object(M.b)(n, t)),
						removeWikiBannedContributor: t => e(Object(M.c)(n, t)),
						searchWikiBannedContributorByName: t => e(Object(M.d)(n, t)),
						toggleAddBannedContributorModal: () => e(Object(S.i)("WikiBannedContributers--BanContributorModal")),
						toggleConfirmModal: () => e(Object(S.i)("WikiBannedContributers--RemoveBannedWikiContributor"))
					}
				})(Object(j.c)(ie)),
				re = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				se = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ae = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiContributors/index.m.less"),
				de = n.n(ae);
			const le = Object(y.b)(null, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					addWikiContributor: t => e(Object(re.a)(n, t))
				}
			});
			class ce extends o.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = Object(V.a)(this.state.username);
						this.props.addWikiContributor(e), this.props.sendEvent(D.b), this.props.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(I.c, null, o.a.createElement(I.g, null, o.a.createElement(Q.a, null, o.a.createElement(I.n, null, E.fbt._("Add wiki contributor", null, {
						hk: "4Df0lQ"
					})), o.a.createElement(F.a, {
						onClick: e.toggleModal
					}, o.a.createElement(I.b, null)))), o.a.createElement(I.j, null, o.a.createElement("div", {
						className: de.a.inputLabel
					}, E.fbt._("Enter username", null, {
						hk: "2NbD93"
					})), o.a.createElement(se.d, {
						placeholder: E.fbt._("u/username", null, {
							hk: "38dqZm"
						}),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), o.a.createElement(I.e, null, o.a.createElement(L.i, {
						onClick: e.toggleModal
					}, E.fbt._("Cancel", null, {
						hk: "1gau4O"
					})), o.a.createElement(L.f, {
						className: de.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(X.a)(t.username)
					}, E.fbt._("Add user", null, {
						hk: "28WQQq"
					}))))
				}
			}
			var ue = Object(U.a)(le(ce));
			const me = Object(w.c)({
				isAddContributorModalOpen: e => "WikiContributers--AddContributorModal" === Object(A.a)(e),
				isConfirmModalOpen: e => "WikiContributers--RemoveContributor" === Object(A.a)(e),
				isWikiContributorsListPending: H.j,
				loadMoreToken: H.k,
				searchResult: H.l,
				wikiContributors: H.m
			});
			class pe extends o.a.Component {
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
						this.state.userToRemove && (this.props.removeWikiContributor(this.state.userToRemove), this.props.sendEvent(D.i))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreContributorsPending && (this.setState({
							isFetchMoreContributorsPending: !0
						}), await this.props.moreWikiContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreContributorsPending: !1
						}))
					}, this.renderContributor = e => {
						const t = new Date(e.date),
							n = Object(x.d)("en", t);
						return o.a.createElement(W.b, {
							username: e.username,
							userIcon: e.iconUrl,
							primaryButton: o.a.createElement("a", {
								href: "".concat(v.a.redditUrl, "/message/compose/?to=").concat(e.username),
								rel: "noopener noreferrer",
								target: "_blank"
							}, o.a.createElement(L.n, null, E.fbt._("Send message", null, {
								hk: "13WC98"
							}))),
							secondaryButton: o.a.createElement(L.n, {
								onClick: () => this.onClickRemove(e.id)
							}, E.fbt._("Remove", null, {
								hk: "2trU4Z"
							})),
							timeAgo: n
						})
					}, this.renderNoContent = () => this.props.isWikiContributorsListPending ? o.a.createElement(W.a, null) : o.a.createElement(T.c, {
						text: E.fbt._("No wiki contributors in {subredditName}", [E.fbt._param("subredditName", this.props.subredditName)], {
							hk: "37wxec"
						})
					}), this.renderSearchState = () => o.a.createElement(N.a, {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, null, o.a.createElement(L.f, {
						onClick: this.props.toggleAddContributorModal
					}, E.fbt._("Add contributor", null, {
						hk: "4v9hcQ"
					}))), o.a.createElement(h.a, null, o.a.createElement(h.b, null, E.fbt._("Added wiki contributors", null, {
						hk: "4FzyZs"
					})), o.a.createElement(O.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : o.a.createElement(R.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: B.f + B.j
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderContributor(e)
					}))) : this.renderNoContent(), t.isFetchMoreContributorsPending && o.a.createElement(W.a, {
						rows: 3
					})), e.isAddContributorModalOpen && o.a.createElement(ue, {
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: e.toggleAddContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && o.a.createElement(P.a, {
						actionText: E.fbt._("Remove", null, {
							hk: "3xHSJ8"
						}),
						headerText: E.fbt._("Remove wiki contributor?", null, {
							hk: "kQXBL"
						}),
						modalText: E.fbt._("Do you wish to remove this user as a wiki contributor?", null, {
							hk: "2HhSjH"
						}),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var he = Object(y.b)(me, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						moreWikiContributorsRequested: t => e(Object(re.b)(n, t)),
						removeWikiContributor: t => e(Object(re.c)(n, t)),
						searchWikiContributorByName: t => e(Object(re.d)(n, t)),
						toggleAddContributorModal: () => e(Object(S.i)("WikiContributers--AddContributorModal")),
						toggleConfirmModal: () => e(Object(S.i)("WikiContributers--RemoveContributor"))
					}
				})(Object(j.c)(pe)),
				be = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				ge = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				fe = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				ke = n("./src/reddit/constants/colors.ts"),
				Ce = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				ve = n("./src/reddit/controls/RadioInput/index.tsx"),
				Ee = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				ye = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				we = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				Se = n("./node_modules/lodash/noop.js"),
				Me = n.n(Se),
				_e = n("./node_modules/lodash/times.js"),
				Pe = n.n(_e),
				Te = n("./src/lib/classNames/index.ts"),
				Re = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Ne = n("./src/reddit/constants/keycodes.ts"),
				Oe = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				We = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiPageSettings/index.m.less"),
				je = n.n(We);
			const Be = Object(w.c)({
					isConfirmModalOpen: e => "WikiPageSettings--RemoveContributor" === Object(A.a)(e)
				}),
				Le = Object(y.b)(Be, (e, t) => {
					let {
						subredditName: n,
						wikiPageName: i
					} = t;
					return {
						addWikiPageContributor: t => e(Object(be.a)({
							username: t,
							wikiPageName: i,
							subredditName: n
						})),
						fetchMoreWikiPageContributors: t => e(Object(be.b)(n, i, t)),
						removeWikiPageContributor: t => e(Object(be.d)({
							username: t,
							wikiPageName: i,
							subredditName: n
						})),
						toggleConfirmModal: () => e(Object(S.i)("WikiPageSettings--RemoveContributor"))
					}
				}),
				De = e => o.a.createElement("div", {
					className: Object(Te.a)(e.className, Object(Oe.b)({
						isLoading: !0
					}))
				}),
				Ae = () => o.a.createElement(o.a.Fragment, null, Pe()(3, e => o.a.createElement("div", {
					className: je.a.contributorRow,
					key: e
				}, o.a.createElement(De, {
					className: je.a.loadingUserIcon
				}), o.a.createElement(De, {
					className: je.a.loadingUserName
				}))));
			class He extends o.a.Component {
				constructor(e) {
					super(e), this.onChangeNewContributorInput = e => {
						this.setState({
							newContributor: e.target.value
						})
					}, this.onKeyDown = e => {
						e.keyCode === Ne.a.Enter && this.canAdd() && this.onAddContributor()
					}, this.canAdd = () => !!this.state.newContributor, this.onAddContributor = () => {
						const e = Object(V.a)(this.state.newContributor);
						this.props.addWikiPageContributor(e), this.props.sendEvent(D.c), this.setState({
							newContributor: ""
						})
					}, this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveWikiContributor = () => {
						this.state.userToRemove && (this.props.removeWikiPageContributor(this.state.userToRemove), this.props.sendEvent(D.j))
					}, this.renderContributor = e => o.a.createElement("div", {
						className: je.a.contributorRow
					}, o.a.createElement(Re.a, {
						username: e.username,
						iconSize: 24,
						sendHoverCardEvent: Me.a,
						tooltipId: "wikiPageContributor--".concat(e.username),
						userIcon: e.iconUrl
					}), o.a.createElement(L.n, {
						className: je.a.removeButton,
						onClick: () => this.onClickRemove(e.username)
					}, E.fbt._("Remove", null, {
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
					return o.a.createElement("div", {
						className: Object(Te.a)(je.a.formGroup, je.a.contributorsForm)
					}, o.a.createElement("div", {
						className: je.a.sectionTitle
					}, E.fbt._("Add approved wiki contributor for this page", null, {
						hk: "35zH60"
					})), o.a.createElement(se.c, {
						className: je.a.contributorInput,
						placeholder: E.fbt._("u/username", null, {
							hk: "38dqZm"
						}),
						value: t.newContributor,
						onChange: this.onChangeNewContributorInput,
						onKeyDown: this.onKeyDown,
						maxLength: 22
					}), o.a.createElement("div", {
						className: je.a.buttonRow
					}, o.a.createElement(L.f, {
						className: je.a.addButton,
						disabled: !this.canAdd(),
						onClick: this.onAddContributor
					}, E.fbt._("Add", null, {
						hk: "btpmh"
					}))), o.a.createElement(R.b, {
						loadMoreToken: e.afterToken ? e.afterToken : void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: B.f + B.j
					}, e.editorsInfo.map((e, t) => ({
						estHeight: 40,
						id: e.username,
						render: () => this.renderContributor(e)
					}))), t.isFetchMoreContributorsPending && o.a.createElement(Ae, null), t.userToRemove && e.isConfirmModalOpen && o.a.createElement(P.a, {
						actionText: E.fbt._("Remove", null, {
							hk: "4bYR3Z"
						}),
						headerText: E.fbt._("Remove wiki contributor?", null, {
							hk: "hADrb"
						}),
						modalText: E.fbt._("Do you wish to remove this user as a wiki contributor?", null, {
							hk: "4hsEY3"
						}),
						onConfirm: this.onRemoveWikiContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var Ue = Le(He);
			const ze = Object(w.c)({
				subredditSettings: (e, t) => {
					const n = Object(xe.D)(e, t.subredditName);
					return Object(xe.R)(e, n)
				},
				wikiPageSettings: H.d
			});
			class Ie extends o.a.Component {
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
						e && (this.state.isVisible !== e.isVisible && this.props.sendEvent(Object(D.n)(!!this.state.isVisible)), this.state.editPermissions !== e.editPermissions && this.props.sendEvent(Object(D.o)(this.state.editPermissions)), this.props.sendEvent(D.p))
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
						r = t.editPermissions === we.a.Contributors || t.editPermissions === we.a.Inherit;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, null, i && o.a.createElement(o.a.Fragment, null, o.a.createElement(L.i, {
						className: je.a.cancelButton,
						onClick: this.onCancel
					}, E.fbt._("Cancel", null, {
						hk: "1f5Zk8"
					})), o.a.createElement(L.f, {
						disabled: t.isSavePending,
						onClick: this.onSave
					}, E.fbt._("Save", null, {
						hk: "mmRlX"
					})))), o.a.createElement(fe.a, {
						title: E.fbt._("Wiki page settings", null, {
							hk: "2l88sE"
						}),
						className: je.a.pageTitle,
						buttonText: E.fbt._("Go to wiki page", null, {
							hk: "3tJUXk"
						}),
						buttonLink: "/r/".concat(e.subredditName, "/about/wiki/").concat(e.wikiPageName)
					}), n && o.a.createElement(ge.a, {
						className: je.a.alertBanner,
						color: ke.a.quarantine,
						icon: o.a.createElement(ye.a, {
							className: je.a.alertIcon
						}),
						subtitle: E.fbt._("Only mods may interact with this wiki", null, {
							hk: "4zPGDV"
						}),
						title: E.fbt._("This wiki is currently disabled", null, {
							hk: "X2W9o"
						})
					}), o.a.createElement("div", {
						className: je.a.content
					}, o.a.createElement("div", {
						className: je.a.sectionTitle
					}, E.fbt._("Add to wiki home", null, {
						hk: "2F0uTz"
					})), o.a.createElement(Ce.a, {
						className: je.a.checkboxInput,
						value: t.isVisible,
						name: "listed",
						onChange: this.onChangeVisibilitySettings
					}, o.a.createElement("span", {
						className: je.a.inputOptionText
					}, E.fbt._("Show this page in your wiki index", null, {
						hk: "3l4r3U"
					}))), o.a.createElement("div", {
						className: je.a.formGroup
					}, o.a.createElement("div", {
						className: je.a.sectionTitle
					}, E.fbt._("Who can edit this page?", null, {
						hk: "24MlhK"
					})), o.a.createElement(ve.a, {
						value: t.editPermissions,
						name: "permlevel",
						onChange: this.onChangeEditPermissions
					}, o.a.createElement(Ee.a, {
						className: je.a.radioOption,
						showButton: !0,
						value: we.a.Inherit
					}, o.a.createElement("span", {
						className: je.a.inputOptionText
					}, E.fbt._("Use subreddit wiki permissions", null, {
						hk: "3VBjJ5"
					}))), o.a.createElement(Ee.a, {
						className: je.a.radioOption,
						showButton: !0,
						value: we.a.Mods
					}, o.a.createElement("span", {
						className: je.a.inputOptionText
					}, E.fbt._("Only mods may edit and view", null, {
						hk: "3dgrxn"
					}))), o.a.createElement(Ee.a, {
						className: je.a.radioOption,
						showButton: !0,
						value: we.a.Contributors
					}, o.a.createElement("span", {
						className: je.a.inputOptionText
					}, E.fbt._("Only approved wiki contributors for this page may edit", null, {
						hk: "16QJXW"
					}))))), r && o.a.createElement(Ue, {
						afterToken: e.wikiPageSettings.afterToken,
						sendEvent: this.props.sendEvent,
						subredditName: e.subredditName,
						wikiPageName: e.wikiPageName,
						editorsInfo: e.wikiPageSettings.editorsInfo
					})))
				}
			}
			var Fe = Object(y.b)(ze, (e, t) => {
					let {
						subredditName: n,
						wikiPageName: i
					} = t;
					return {
						saveWikiPageSettings: (t, o) => e(Object(be.e)({
							editPermissions: t,
							isVisible: o,
							subredditName: n,
							wikiPageName: i
						}))
					}
				})(Object(j.c)(Ie)),
				Xe = n("./src/reddit/components/Wiki/ModHubWikiManagement/index.m.less"),
				Ve = n.n(Xe);
			const Qe = Object(u.t)(),
				Ze = () => {
					document.body.scrollTop = 0, document.documentElement.scrollTop = 0
				};
			class qe extends o.a.Component {
				scrollToTopIfNeeded() {
					location.hash || Ze()
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
						wikiPageName: h,
						pageName: b
					} = n, g = i[l.w], f = i[l.x], k = l.y in i;
					switch (u) {
						case c.m.Create:
						case c.m.Edit:
							return o.a.createElement(a.a, {
								contentClassName: Ve.a.modHubPageEditorContent,
								isCreation: u === c.m.Create,
								subredditName: e.name,
								topBarClassName: Ve.a.modHubTopBar,
								wikiPageName: h
							});
						case c.m.Revisions:
							return o.a.createElement(p.a, {
								isModHub: !0,
								isRecentRevisionsMode: !h,
								key: h,
								subredditName: e.name,
								wikiPageName: h
							});
						case c.m.Settings:
							if (h) return o.a.createElement(Fe, {
								subredditName: e.name,
								wikiPageName: h
							});
							break;
						default:
							return b === r.Pb.WikiBanned ? o.a.createElement(oe, {
								subredditId: e.id,
								subredditName: e.name
							}) : b === r.Pb.WikiContributors ? o.a.createElement(he, {
								subredditName: e.name
							}) : h && g && f ? o.a.createElement(s.a, {
								comparisonRevisionId: Object(m.a)(f),
								isModHub: !0,
								revisionId: Object(m.a)(g),
								subredditName: e.name,
								wikiPageName: h
							}) : h && (g || k) ? o.a.createElement(d.a, {
								isModHub: !0,
								revisionId: g ? Object(m.a)(g) : void 0,
								subredditName: e.name,
								wikiPageName: h
							}) : h ? o.a.createElement(C, {
								wikiPageName: h,
								subredditName: e.name
							}) : null
					}
				}
			}
			t.default = Qe(qe)
		}
	}
]);
//# sourceMappingURL=reddit-components-Wiki-ModHubWikiManagement.7e1a6d84b10f415ab745.js.map