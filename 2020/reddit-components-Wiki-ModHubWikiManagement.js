// https://www.redditstatic.com/desktop2x/reddit-components-Wiki-ModHubWikiManagement.e2cc9873352e90b508df.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["reddit-components-Wiki-ModHubWikiManagement"], {
		"./node_modules/autosize/dist/autosize.js": function(e, t, n) {
			var i, o, s;
			o = [t, e], void 0 === (s = "function" == typeof(i = function(e, t) {
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
					s = function(e) {
						return new Event(e, {
							bubbles: !0
						})
					};
				try {
					new Event("test")
				} catch (l) {
					s = function(e) {
						var t = document.createEvent("Event");
						return t.initEvent(e, !0, !1), t
					}
				}

				function r(e) {
					if (e && e.nodeName && "TEXTAREA" === e.nodeName && !o.has(e)) {
						var t, n = null,
							i = e.clientWidth,
							r = null,
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

					function c(t) {
						var n = e.style.width;
						e.style.width = "0px", e.offsetWidth, e.style.width = n, e.style.overflowY = t
					}

					function l() {
						var t = e.style.height,
							o = function(e) {
								for (var t = []; e && e.parentNode && e.parentNode instanceof Element;) e.parentNode.scrollTop && t.push({
									node: e.parentNode,
									scrollTop: e.parentNode.scrollTop
								}), e = e.parentNode;
								return t
							}(e),
							s = document.documentElement && document.documentElement.scrollTop;
						e.style.height = "auto";
						var r = e.scrollHeight + n;
						0 !== e.scrollHeight ? (e.style.height = r + "px", i = e.clientWidth, o.forEach((function(e) {
							e.node.scrollTop = e.scrollTop
						})), s && (document.documentElement.scrollTop = s)) : e.style.height = t
					}

					function u() {
						l();
						var t = Math.round(parseFloat(e.style.height)),
							n = window.getComputedStyle(e, null),
							i = "content-box" === n.boxSizing ? Math.round(parseFloat(n.height)) : e.offsetHeight;
						if (i !== t ? "hidden" === n.overflowY && (c("scroll"), l(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight) : "hidden" !== n.overflowY && (c("hidden"), l(), i = "content-box" === n.boxSizing ? Math.round(parseFloat(window.getComputedStyle(e, null).height)) : e.offsetHeight), r !== i) {
							r = i;
							var o = s("autosize:resized");
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
				var c = null;
				"undefined" == typeof window || "function" != typeof window.getComputedStyle ? ((c = function(e) {
					return e
				}).destroy = function(e) {
					return e
				}, c.update = function(e) {
					return e
				}) : ((c = function(e, t) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], (function(e) {
						return r(e)
					})), e
				}).destroy = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], a), e
				}, c.update = function(e) {
					return e && Array.prototype.forEach.call(e.length ? e : [e], d), e
				}), t.exports = c
			}) ? i.apply(t, o) : i) || (e.exports = s)
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
					var s = e.nodeName,
						r = document.createElement(s);
					r.innerHTML = "&nbsp;", "TEXTAREA" === s.toUpperCase() && r.setAttribute("rows", "1");
					var a = i(e, "font-size");
					r.style.fontSize = a, r.style.padding = "0px", r.style.border = "0px";
					var d = document.body;
					d.appendChild(r), n = r.offsetHeight, d.removeChild(r)
				}
				return n
			}
		},
		"./node_modules/react-autosize-textarea/lib/TextareaAutosize.js": function(e, t, n) {
			"use strict";
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), t.default = void 0;
			var i, o, s = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
					}
					return e
				},
				r = function() {
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
				c = u(n("./node_modules/autosize/dist/autosize.js")),
				l = u(n("./node_modules/line-height/lib/line-height.js"));

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
					for (var o = arguments.length, r = Array(o), a = 0; a < o; a++) r[a] = arguments[a];
					return n = i = p(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(r))), i.state = {
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
							lineHeight: (0, l.default)(i.textarea)
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
							r = (t.innerRef, m(t, ["onResize", "maxRows", "onChange", "style", "innerRef"])),
							a = e.state.lineHeight,
							d = e.saveDOMNodeRef,
							c = n && a ? a * n : null;
						return s({}, r, {
							saveDOMNodeRef: d,
							style: c ? s({}, o, {
								maxHeight: c
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
				}(t, e), r(t, [{
					key: "componentDidMount",
					value: function() {
						var e = this,
							t = this.props,
							n = t.onResize;
						"number" == typeof t.maxRows ? (this.updateLineHeight(), setTimeout((function() {
							return (0, c.default)(e.textarea)
						}))) : (0, c.default)(this.textarea), n && this.textarea.addEventListener("autosize:resized", this.props.onResize)
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
						return a.default.createElement("textarea", s({}, i, {
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
				s = (i = o) && i.__esModule ? i : {
					default: i
				};
			t.default = s.default
		},
		"./node_modules/react-autosize-textarea/node_modules/prop-types/factoryWithThrowingShims.js": function(e, t, n) {
			"use strict";
			var i = n("./node_modules/react-autosize-textarea/node_modules/prop-types/lib/ReactPropTypesSecret.js");

			function o() {}
			e.exports = function() {
				function e(e, t, n, o, s, r) {
					if (r !== i) {
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
				s = n("./src/lib/classNames/index.ts"),
				r = n("./src/lib/lessComponent.tsx"),
				a = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				d = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				c = n("./src/reddit/i18n/utils.ts"),
				l = n("./src/reddit/components/BannedUserList/AddBannedUserModal/_AddBannedUserModal.m.less"),
				u = n.n(l);
			const m = r.a.div("BanLength", u.a),
				p = r.a.wrapped(a.m, "BanLengthDays", u.a),
				h = r.a.wrapped(a.h, "NumberInput", u.a),
				b = r.a.div("StyledPermanentLabel", u.a),
				g = r.a.div("DescriptionText", u.a),
				C = r.a.div("BanLengthContainer", u.a),
				v = r.a.div("CheckboxWrapper", u.a),
				k = r.a.div("PermanentCheckbox", u.a);
			t.a = e => o.a.createElement(a.f, null, o.a.createElement(a.i, null, Object(c.c)("How long?")), o.a.createElement(C, null, o.a.createElement(m, {
				className: Object(s.a)({
					[u.a.isDisabled]: e.isDurationPermanent
				})
			}, o.a.createElement(h, {
				tabIndex: 0,
				disabled: e.isDurationPermanent,
				onChange: e.onChangeDuration,
				min: "0",
				type: "number",
				value: void 0 !== e.duration && null !== e.duration ? e.duration : ""
			}), o.a.createElement(p, null, Object(c.c)("Days"))), o.a.createElement(b, {
				onClick: e.togglePermanent
			}, o.a.createElement(k, {
				onKeyDown: e.togglePermanent
			}, o.a.createElement(v, {
				tabIndex: 0
			}, e.isDurationPermanent ? o.a.createElement(d.b, null) : o.a.createElement(d.a, null))), o.a.createElement(g, null, Object(c.c)("Permanent")))))
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
				s = n("./node_modules/react-redux/es/index.js"),
				r = n("./node_modules/reselect/es/index.js"),
				a = n("./src/lib/lessComponent.tsx"),
				d = n("./src/reddit/constants/keycodes.ts"),
				c = n("./src/reddit/controls/Dropdown/index.tsx"),
				l = n("./src/reddit/controls/Dropdown/Row.tsx"),
				u = n("./src/reddit/i18n/utils.ts"),
				m = n("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				p = n("./src/reddit/selectors/oldSiteRules.ts"),
				h = n("./src/reddit/selectors/subreddit.ts"),
				b = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.m.less"),
				g = n.n(b);
			const C = a.a.div("Container", g.a),
				v = a.a.wrapped(c.a, "Dropdown", g.a),
				k = a.a.wrapped(l.b, "DropdownRow", g.a),
				f = Object(r.c)({
					oldSiteRules: p.a,
					subredditRules: h.O
				}),
				E = Object(s.b)(f);
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
					return o.a.createElement(C, null, o.a.createElement("button", {
						className: g.a.dropdownTarget,
						onClick: this.handleToggleDropdown
					}, o.a.createElement("div", {
						className: g.a.targetText
					}, e.reason || Object(u.c)("None")), o.a.createElement(m.b, null)), t.isOpen && o.a.createElement(v, {
						isOverlay: !0
					}, this.getRuleShortNames().map((t, n) => o.a.createElement(k, {
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
				s = n("./src/lib/constants/index.ts"),
				r = n("./src/reddit/components/Wiki/WikiPageDiff/index.tsx"),
				a = n("./src/reddit/components/Wiki/WikiPageEditor/index.tsx"),
				d = n("./src/reddit/components/Wiki/WikiPageSource/index.tsx"),
				c = n("./src/reddit/constants/parameters.ts"),
				l = n("./src/reddit/constants/wiki.ts"),
				u = n("./src/reddit/contexts/PageLayer/index.tsx"),
				m = n("./src/reddit/helpers/wiki/wikiRevision.ts"),
				p = n("./src/reddit/components/Wiki/RevisionsHistory/index.tsx"),
				h = n("./src/reddit/components/ModHub/StyledComponents/index.tsx"),
				b = n("./src/reddit/components/Wiki/WikiPageContent/index.tsx"),
				g = n("./src/reddit/components/Wiki/WikiPageTopBar/index.tsx"),
				C = n("./src/reddit/components/Wiki/ModHubWikiManagement/ModHubWikiPage/index.m.less"),
				v = n.n(C),
				k = e => {
					const {
						wikiPageName: t,
						subredditName: n
					} = e;
					return i.createElement("div", {
						className: v.a.container
					}, i.createElement(h.c, null, i.createElement(g.a, {
						isModHub: !0,
						wikiPageName: t,
						subredditName: n
					})), i.createElement(b.a, {
						className: v.a.pageContent,
						isModHub: !0,
						subredditName: n,
						wikiPageName: t
					}))
				},
				f = n("./src/config.ts"),
				E = n("./node_modules/react-redux/es/index.js"),
				y = n("./node_modules/reselect/es/index.js"),
				w = n("./src/lib/timeAgo/index.ts"),
				x = n("./src/reddit/actions/modal.ts"),
				O = n("./src/reddit/actions/wiki/wikiBannedContributors/index.ts"),
				S = n("./src/reddit/components/BannedUserList/index.tsx"),
				M = n("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				j = n("./src/reddit/components/ModerationPagesEmptyList/index.tsx"),
				P = n("./src/reddit/components/Scroller/Simple.tsx"),
				T = n("./src/reddit/components/SubredditModerationSearch/index.tsx"),
				R = n("./src/reddit/components/SubredditModerationTopBar/index.tsx"),
				N = n("./src/reddit/components/SubredditModerationUserItem/index.tsx"),
				_ = n("./src/reddit/components/TrackingHelper/index.tsx"),
				W = n("./src/reddit/constants/componentSizes.ts"),
				B = n("./src/reddit/controls/Button/index.tsx"),
				L = n("./src/reddit/helpers/trackers/subredditWiki.ts"),
				D = n("./src/reddit/i18n/utils.ts"),
				A = n("./src/reddit/selectors/activeModalId.ts"),
				U = n("./src/reddit/selectors/subredditWiki.ts"),
				H = n("./src/higherOrderComponents/asModal/index.tsx"),
				z = n("./src/reddit/components/CharacterCountdown/index.tsx"),
				I = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				F = n("./src/reddit/controls/TextButton/index.tsx"),
				X = n("./src/reddit/helpers/isValidUsername/index.tsx"),
				V = n("./src/reddit/helpers/normalizeUsername/index.tsx"),
				Q = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				Y = n("./src/reddit/models/SubredditModeration/index.ts"),
				Z = n("./src/reddit/components/BannedUserList/AddBannedUserModal/DaysInput.tsx"),
				q = n("./src/reddit/components/BannedUserList/AddBannedUserModal/RulesDropdown.tsx"),
				K = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiBannedContributors/index.m.less"),
				G = n.n(K);
			const J = 300,
				$ = Object(E.b)(null, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						addBannedWikiContributor: t => e(Object(O.a)(n, t))
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
						"number" == typeof t && (t < 0 || t > Y.b || this.setState({
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
						let s = i ? void 0 : o;
						const r = this.props.bannedUser && null != this.props.bannedUser.daysRemaining && this.props.bannedUser.daysRemaining === o;
						null != s && r && (s += 1), this.props.addBannedWikiContributor({
							note: t,
							username: e,
							banReason: n,
							duration: s
						}), this.props.sendEvent(L.a), this.props.toggleModal()
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
					return o.a.createElement(I.c, null, o.a.createElement(I.g, null, o.a.createElement(Q.a, null, o.a.createElement(I.n, null, Object(D.c)("Ban wiki contributor"), e.bannedUser && ": u/".concat(e.bannedUser.username)), o.a.createElement(F.a, {
						onClick: e.toggleModal
					}, o.a.createElement(I.b, null)))), o.a.createElement(I.j, null, !e.bannedUser && o.a.createElement(o.a.Fragment, null, o.a.createElement(I.f, null, o.a.createElement(I.i, null, Object(D.c)("Enter username")), o.a.createElement(I.h, {
						onChange: this.onInputChange,
						placeholder: Object(D.c)("u/username"),
						value: this.state.username
					})), o.a.createElement(I.f, null, o.a.createElement(I.i, null, Object(D.c)("Reason for ban")), o.a.createElement(q.a, {
						onSelectReason: this.onSelectReason,
						reason: t.banReason,
						subredditId: e.subredditId
					}))), o.a.createElement(I.f, null, o.a.createElement(I.i, null, Object(D.c)("Mod note")), o.a.createElement(I.h, {
						onChange: this.onChangeModNote,
						placeholder: Object(D.c)("Mod note"),
						value: t.note
					}), o.a.createElement(z.a, {
						maxChars: J,
						text: t.note
					})), o.a.createElement(Z.a, {
						duration: t.duration,
						isDurationPermanent: t.isDurationPermanent,
						onChangeDuration: this.onChangeBanDuration,
						togglePermanent: this.togglePermanent
					})), o.a.createElement(I.e, null, o.a.createElement(B.i, {
						onClick: e.toggleModal
					}, Object(D.c)("Cancel")), o.a.createElement(B.f, {
						className: G.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(X.a)(t.username)
					}, Object(D.c)("Ban user"))))
				}
			}
			var te = Object(H.a)($(ee));
			const ne = Object(y.c)({
				isAddBannedContributorModalOpen: e => "WikiBannedContributers--BanContributorModal" === Object(A.a)(e),
				isConfirmModalOpen: e => "WikiBannedContributers--RemoveBannedWikiContributor" === Object(A.a)(e),
				isWikiBannedContributorsListPending: U.e,
				loadMoreToken: U.f,
				searchResult: U.g,
				wikiContributors: U.h
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
						this.state.userToRemove && (this.props.removeWikiBannedContributor(this.state.userToRemove), this.props.sendEvent(L.h))
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
							i = Object(w.d)("en", n),
							s = Object(S.b)("en", t.daysRemaining);
						return o.a.createElement(N.b, {
							description: t.note,
							username: t.username,
							userIcon: t.iconUrl,
							primaryButton: o.a.createElement("a", {
								href: "".concat(f.a.redditUrl, "/message/compose/?to=").concat(t.username),
								target: "_blank"
							}, o.a.createElement(B.n, null, Object(D.c)("Send message"))),
							secondaryButton: o.a.createElement(B.n, {
								onClick: () => this.onClickEditUser(t)
							}, Object(D.c)("Edit")),
							tertiaryButton: o.a.createElement(B.n, {
								onClick: () => this.onClickRemove(t.id)
							}, Object(D.c)("Remove")),
							timeAgo: "".concat(i, " (").concat(s, ")"),
							key: t.id
						})
					}, this.renderNoContent = () => this.props.isWikiBannedContributorsListPending ? o.a.createElement(N.a, null) : o.a.createElement(j.c, {
						text: Object(D.c)("No banned wiki contributors in ".concat(Object(D.b)("subredditName", this.props.subredditName)))
					}), this.renderSearchState = () => o.a.createElement(T.a, {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, null, o.a.createElement(B.f, {
						onClick: this.props.toggleAddBannedContributorModal
					}, Object(D.c)("Ban contributor"))), o.a.createElement(h.a, null, o.a.createElement(h.b, null, Object(D.c)("Banned wiki contributors")), o.a.createElement(R.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : o.a.createElement(P.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: W.f + W.j
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderBannedContributor(e.id)
					}))) : this.renderNoContent(), t.isFetchMoreBannedContributorsPending && o.a.createElement(N.a, {
						rows: 3
					})), e.isAddBannedContributorModalOpen && o.a.createElement(te, {
						bannedUser: t.userToEdit,
						subredditId: e.subredditId,
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: this.onCloseBannedContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && o.a.createElement(M.a, {
						actionText: Object(D.c)("Remove"),
						headerText: Object(D.c)("Remove banned wiki contributor?"),
						modalText: Object(D.c)("Do you wish to unban this user as a wiki contributor?"),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var oe = Object(E.b)(ne, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						moreWikiBannedContributorsRequested: t => e(Object(O.b)(n, t)),
						removeWikiBannedContributor: t => e(Object(O.c)(n, t)),
						searchWikiBannedContributorByName: t => e(Object(O.d)(n, t)),
						toggleAddBannedContributorModal: () => e(Object(x.i)("WikiBannedContributers--BanContributorModal")),
						toggleConfirmModal: () => e(Object(x.i)("WikiBannedContributers--RemoveBannedWikiContributor"))
					}
				})(Object(_.c)(ie)),
				se = n("./src/reddit/actions/wiki/wikiContributors/index.ts"),
				re = n("./src/reddit/components/StructuredStyles/StyledComponents/inputs.ts"),
				ae = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiContributors/index.m.less"),
				de = n.n(ae);
			const ce = Object(E.b)(null, (e, t) => {
				let {
					subredditName: n
				} = t;
				return {
					addWikiContributor: t => e(Object(se.a)(n, t))
				}
			});
			class le extends o.a.Component {
				constructor(e) {
					super(e), this.onInputChange = e => {
						this.setState({
							username: e.currentTarget.value
						})
					}, this.onSubmit = () => {
						const e = Object(V.a)(this.state.username);
						this.props.addWikiContributor(e), this.props.sendEvent(L.b), this.props.toggleModal()
					}, this.state = {
						username: ""
					}
				}
				render() {
					const {
						props: e,
						state: t
					} = this;
					return o.a.createElement(I.c, null, o.a.createElement(I.g, null, o.a.createElement(Q.a, null, o.a.createElement(I.n, null, Object(D.c)("Add wiki contributor")), o.a.createElement(F.a, {
						onClick: e.toggleModal
					}, o.a.createElement(I.b, null)))), o.a.createElement(I.j, null, o.a.createElement("div", {
						className: de.a.inputLabel
					}, Object(D.c)("Enter username")), o.a.createElement(re.d, {
						placeholder: Object(D.c)("u/username"),
						onChange: this.onInputChange,
						value: this.state.username,
						autoFocus: !0
					})), o.a.createElement(I.e, null, o.a.createElement(B.i, {
						onClick: e.toggleModal
					}, Object(D.c)("Cancel")), o.a.createElement(B.f, {
						className: de.a.primaryButton,
						onClick: this.onSubmit,
						disabled: !Object(X.a)(t.username)
					}, Object(D.c)("Add user"))))
				}
			}
			var ue = Object(H.a)(ce(le));
			const me = Object(y.c)({
				isAddContributorModalOpen: e => "WikiContributers--AddContributorModal" === Object(A.a)(e),
				isConfirmModalOpen: e => "WikiContributers--RemoveContributor" === Object(A.a)(e),
				isWikiContributorsListPending: U.j,
				loadMoreToken: U.k,
				searchResult: U.l,
				wikiContributors: U.m
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
						this.state.userToRemove && (this.props.removeWikiContributor(this.state.userToRemove), this.props.sendEvent(L.i))
					}, this.onLoadMore = async () => {
						this.props.loadMoreToken && !this.state.isFetchMoreContributorsPending && (this.setState({
							isFetchMoreContributorsPending: !0
						}), await this.props.moreWikiContributorsRequested(this.props.loadMoreToken), this.setState({
							isFetchMoreContributorsPending: !1
						}))
					}, this.renderContributor = e => {
						const t = new Date(e.date),
							n = Object(w.d)("en", t);
						return o.a.createElement(N.b, {
							username: e.username,
							userIcon: e.iconUrl,
							primaryButton: o.a.createElement("a", {
								href: "".concat(f.a.redditUrl, "/message/compose/?to=").concat(e.username),
								target: "_blank"
							}, o.a.createElement(B.n, null, Object(D.c)("Send message"))),
							secondaryButton: o.a.createElement(B.n, {
								onClick: () => this.onClickRemove(e.id)
							}, Object(D.c)("Remove")),
							timeAgo: n
						})
					}, this.renderNoContent = () => this.props.isWikiContributorsListPending ? o.a.createElement(N.a, null) : o.a.createElement(j.c, {
						text: Object(D.c)("No wiki contributors in ".concat(Object(D.b)("subredditName", this.props.subredditName)))
					}), this.renderSearchState = () => o.a.createElement(T.a, {
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
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, null, o.a.createElement(B.f, {
						onClick: this.props.toggleAddContributorModal
					}, Object(D.c)("Add contributor"))), o.a.createElement(h.a, null, o.a.createElement(h.b, null, Object(D.c)("Added wiki contributors")), o.a.createElement(R.b, {
						activeSearchQuery: this.state.searchTerm,
						onSearch: this.onSearch
					}), e.wikiContributors.length ? t.searchTerm ? this.renderSearchState() : o.a.createElement(P.b, {
						loadMoreToken: e.loadMoreToken || void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: W.f + W.j
					}, e.wikiContributors.map(e => ({
						estHeight: 40,
						id: e.id,
						render: () => this.renderContributor(e)
					}))) : this.renderNoContent(), t.isFetchMoreContributorsPending && o.a.createElement(N.a, {
						rows: 3
					})), e.isAddContributorModalOpen && o.a.createElement(ue, {
						sendEvent: e.sendEvent,
						subredditName: e.subredditName,
						toggleModal: e.toggleAddContributorModal,
						withOverlay: !0
					}), t.userToRemove && e.isConfirmModalOpen && o.a.createElement(M.a, {
						actionText: Object(D.c)("Remove"),
						headerText: Object(D.c)("Remove wiki contributor?"),
						modalText: Object(D.c)("Do you wish to remove this user as a wiki contributor?"),
						onConfirm: this.onRemoveContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var he = Object(E.b)(me, (e, t) => {
					let {
						subredditName: n
					} = t;
					return {
						moreWikiContributorsRequested: t => e(Object(se.b)(n, t)),
						removeWikiContributor: t => e(Object(se.c)(n, t)),
						searchWikiContributorByName: t => e(Object(se.d)(n, t)),
						toggleAddContributorModal: () => e(Object(x.i)("WikiContributers--AddContributorModal")),
						toggleConfirmModal: () => e(Object(x.i)("WikiContributers--RemoveContributor"))
					}
				})(Object(_.c)(pe)),
				be = n("./src/reddit/actions/wiki/wikiPageSettings/index.tsx"),
				ge = n("./src/reddit/components/InfoBanners/BannerBase/index.tsx"),
				Ce = n("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				ve = n("./src/reddit/constants/colors.ts"),
				ke = n("./src/reddit/controls/CheckboxInput/index.tsx"),
				fe = n("./src/reddit/controls/RadioInput/index.tsx"),
				Ee = n("./src/reddit/controls/RadioInput/RadioOption/index.tsx"),
				ye = n("./src/reddit/icons/svgs/QuarantineWarning/index.tsx"),
				we = n("./src/reddit/models/SubredditWikiPage/index.ts"),
				xe = n("./src/reddit/selectors/subreddit.ts"),
				Oe = n("./node_modules/lodash/noop.js"),
				Se = n.n(Oe),
				Me = n("./node_modules/lodash/times.js"),
				je = n.n(Me),
				Pe = n("./src/lib/classNames/index.ts"),
				Te = n("./src/reddit/components/UserNameAndIcon/index.tsx"),
				Re = n("./src/reddit/constants/keycodes.ts"),
				Ne = n("./src/reddit/helpers/styles/mixins/loading.ts"),
				_e = n("./src/reddit/components/Wiki/ModHubWikiManagement/WikiPageSettings/index.m.less"),
				We = n.n(_e);
			const Be = Object(y.c)({
					isConfirmModalOpen: e => "WikiPageSettings--RemoveContributor" === Object(A.a)(e)
				}),
				Le = Object(E.b)(Be, (e, t) => {
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
						toggleConfirmModal: () => e(Object(x.i)("WikiPageSettings--RemoveContributor"))
					}
				}),
				De = e => o.a.createElement("div", {
					className: Object(Pe.a)(e.className, Object(Ne.b)({
						isLoading: !0
					}))
				}),
				Ae = () => o.a.createElement(o.a.Fragment, null, je()(3, e => o.a.createElement("div", {
					className: We.a.contributorRow,
					key: e
				}, o.a.createElement(De, {
					className: We.a.loadingUserIcon
				}), o.a.createElement(De, {
					className: We.a.loadingUserName
				}))));
			class Ue extends o.a.Component {
				constructor(e) {
					super(e), this.onChangeNewContributorInput = e => {
						this.setState({
							newContributor: e.target.value
						})
					}, this.onKeyDown = e => {
						e.keyCode === Re.a.Enter && this.canAdd() && this.onAddContributor()
					}, this.canAdd = () => !!this.state.newContributor, this.onAddContributor = () => {
						const e = Object(V.a)(this.state.newContributor);
						this.props.addWikiPageContributor(e), this.props.sendEvent(L.c), this.setState({
							newContributor: ""
						})
					}, this.onClickRemove = e => {
						this.setState({
							userToRemove: e
						}), this.props.toggleConfirmModal()
					}, this.onRemoveWikiContributor = () => {
						this.state.userToRemove && (this.props.removeWikiPageContributor(this.state.userToRemove), this.props.sendEvent(L.j))
					}, this.renderContributor = e => o.a.createElement("div", {
						className: We.a.contributorRow
					}, o.a.createElement(Te.a, {
						username: e.username,
						iconSize: 24,
						sendHoverCardEvent: Se.a,
						tooltipId: "wikiPageContributor--".concat(e.username),
						userIcon: e.iconUrl
					}), o.a.createElement(B.n, {
						className: We.a.removeButton,
						onClick: () => this.onClickRemove(e.username)
					}, Object(D.c)("Remove"))), this.onLoadMore = async () => {
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
						className: Object(Pe.a)(We.a.formGroup, We.a.contributorsForm)
					}, o.a.createElement("div", {
						className: We.a.sectionTitle
					}, Object(D.c)("Add approved wiki contributor for this page")), o.a.createElement(re.c, {
						className: We.a.contributorInput,
						placeholder: Object(D.c)("u/username"),
						value: t.newContributor,
						onChange: this.onChangeNewContributorInput,
						onKeyDown: this.onKeyDown,
						maxLength: 22
					}), o.a.createElement("div", {
						className: We.a.buttonRow
					}, o.a.createElement(B.f, {
						className: We.a.addButton,
						disabled: !this.canAdd(),
						onClick: this.onAddContributor
					}, Object(D.c)("Add"))), o.a.createElement(P.b, {
						loadMoreToken: e.afterToken ? e.afterToken : void 0,
						onLoadMore: this.onLoadMore,
						viewportTopPadding: W.f + W.j
					}, e.editorsInfo.map((e, t) => ({
						estHeight: 40,
						id: e.username,
						render: () => this.renderContributor(e)
					}))), t.isFetchMoreContributorsPending && o.a.createElement(Ae, null), t.userToRemove && e.isConfirmModalOpen && o.a.createElement(M.a, {
						actionText: Object(D.c)("Remove"),
						headerText: Object(D.c)("Remove wiki contributor?"),
						modalText: Object(D.c)("Do you wish to remove this user as a wiki contributor?"),
						onConfirm: this.onRemoveWikiContributor,
						toggleModal: this.props.toggleConfirmModal,
						withOverlay: !0
					}))
				}
			}
			var He = Le(Ue);
			const ze = Object(y.c)({
				subredditSettings: (e, t) => {
					const n = Object(xe.D)(e, t.subredditName);
					return Object(xe.R)(e, n)
				},
				wikiPageSettings: U.d
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
						e && (this.state.isVisible !== e.isVisible && this.props.sendEvent(Object(L.n)(!!this.state.isVisible)), this.state.editPermissions !== e.editPermissions && this.props.sendEvent(Object(L.o)(this.state.editPermissions)), this.props.sendEvent(L.p))
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
						s = t.editPermissions === we.a.Contributors || t.editPermissions === we.a.Inherit;
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(h.c, null, i && o.a.createElement(o.a.Fragment, null, o.a.createElement(B.i, {
						className: We.a.cancelButton,
						onClick: this.onCancel
					}, Object(D.c)("Cancel")), o.a.createElement(B.f, {
						disabled: t.isSavePending,
						onClick: this.onSave
					}, Object(D.c)("Save")))), o.a.createElement(Ce.a, {
						title: Object(D.c)("Wiki page settings"),
						className: We.a.pageTitle,
						buttonText: Object(D.c)("Go to wiki page"),
						buttonLink: "/r/".concat(e.subredditName, "/about/wiki/").concat(e.wikiPageName)
					}), n && o.a.createElement(ge.a, {
						className: We.a.alertBanner,
						color: ve.a.quarantine,
						icon: o.a.createElement(ye.a, {
							className: We.a.alertIcon
						}),
						subtitle: Object(D.c)("Only mods may interact with this wiki"),
						title: Object(D.c)("This wiki is currently disabled")
					}), o.a.createElement("div", {
						className: We.a.content
					}, o.a.createElement("div", {
						className: We.a.sectionTitle
					}, Object(D.c)("Add to wiki home")), o.a.createElement(ke.a, {
						className: We.a.checkboxInput,
						value: t.isVisible,
						name: "listed",
						onChange: this.onChangeVisibilitySettings
					}, o.a.createElement("span", {
						className: We.a.inputOptionText
					}, Object(D.c)("Show this page in your wiki index"))), o.a.createElement("div", {
						className: We.a.formGroup
					}, o.a.createElement("div", {
						className: We.a.sectionTitle
					}, Object(D.c)("Who can edit this page?")), o.a.createElement(fe.a, {
						value: t.editPermissions,
						name: "permlevel",
						onChange: this.onChangeEditPermissions
					}, o.a.createElement(Ee.a, {
						className: We.a.radioOption,
						showButton: !0,
						value: we.a.Inherit
					}, o.a.createElement("span", {
						className: We.a.inputOptionText
					}, Object(D.c)("Use subreddit wiki permissions"))), o.a.createElement(Ee.a, {
						className: We.a.radioOption,
						showButton: !0,
						value: we.a.Mods
					}, o.a.createElement("span", {
						className: We.a.inputOptionText
					}, Object(D.c)("Only mods may edit and view"))), o.a.createElement(Ee.a, {
						className: We.a.radioOption,
						showButton: !0,
						value: we.a.Contributors
					}, o.a.createElement("span", {
						className: We.a.inputOptionText
					}, Object(D.c)("Only approved wiki contributors for this page may edit"))))), s && o.a.createElement(He, {
						afterToken: e.wikiPageSettings.afterToken,
						sendEvent: this.props.sendEvent,
						subredditName: e.subredditName,
						wikiPageName: e.wikiPageName,
						editorsInfo: e.wikiPageSettings.editorsInfo
					})))
				}
			}
			var Fe = Object(E.b)(ze, (e, t) => {
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
				})(Object(_.c)(Ie)),
				Xe = n("./src/reddit/components/Wiki/ModHubWikiManagement/index.m.less"),
				Ve = n.n(Xe);
			const Qe = Object(u.t)(),
				Ye = () => {
					document.body.scrollTop = 0, document.documentElement.scrollTop = 0
				};
			class Ze extends o.a.Component {
				scrollToTopIfNeeded() {
					location.hash || Ye()
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
					} = n, g = i[c.w], C = i[c.x], v = c.y in i;
					switch (u) {
						case l.m.Create:
						case l.m.Edit:
							return o.a.createElement(a.a, {
								contentClassName: Ve.a.modHubPageEditorContent,
								isCreation: u === l.m.Create,
								subredditName: e.name,
								topBarClassName: Ve.a.modHubTopBar,
								wikiPageName: h
							});
						case l.m.Revisions:
							return o.a.createElement(p.a, {
								isModHub: !0,
								isRecentRevisionsMode: !h,
								key: h,
								subredditName: e.name,
								wikiPageName: h
							});
						case l.m.Settings:
							if (h) return o.a.createElement(Fe, {
								subredditName: e.name,
								wikiPageName: h
							});
							break;
						default:
							return b === s.Ob.WikiBanned ? o.a.createElement(oe, {
								subredditId: e.id,
								subredditName: e.name
							}) : b === s.Ob.WikiContributors ? o.a.createElement(he, {
								subredditName: e.name
							}) : h && g && C ? o.a.createElement(r.a, {
								comparisonRevisionId: Object(m.a)(C),
								isModHub: !0,
								revisionId: Object(m.a)(g),
								subredditName: e.name,
								wikiPageName: h
							}) : h && (g || v) ? o.a.createElement(d.a, {
								isModHub: !0,
								revisionId: g ? Object(m.a)(g) : void 0,
								subredditName: e.name,
								wikiPageName: h
							}) : h ? o.a.createElement(k, {
								wikiPageName: h,
								subredditName: e.name
							}) : null
					}
				}
			}
			t.default = Qe(Ze)
		}
	}
]);
//# sourceMappingURL=reddit-components-Wiki-ModHubWikiManagement.e2cc9873352e90b508df.js.map