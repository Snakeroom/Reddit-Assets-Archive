// https://www.redditstatic.com/desktop2x/ProfileOverview.d78a902785c334393ee1.js
// Retrieved at 1/24/2020, 9:19:31 AM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ProfileOverview", "Explore~ProfileSnoobuilder~SubredditWiki", "PostDraft~ProfileSnoobuilder"], {
		"./node_modules/intersection-observer/intersection-observer.js": function(e, t) {
			! function(e, t) {
				"use strict";
				if ("IntersectionObserver" in e && "IntersectionObserverEntry" in e && "intersectionRatio" in e.IntersectionObserverEntry.prototype) "isIntersecting" in e.IntersectionObserverEntry.prototype || Object.defineProperty(e.IntersectionObserverEntry.prototype, "isIntersecting", {
					get: function() {
						return this.intersectionRatio > 0
					}
				});
				else {
					var s = [];
					o.prototype.THROTTLE_TIMEOUT = 100, o.prototype.POLL_INTERVAL = null, o.prototype.observe = function(e) {
						if (!this._observationTargets.some((function(t) {
								return t.element == e
							}))) {
							if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
							this._registerInstance(), this._observationTargets.push({
								element: e,
								entry: null
							}), this._monitorIntersections(), this._checkForIntersections()
						}
					}, o.prototype.unobserve = function(e) {
						this._observationTargets = this._observationTargets.filter((function(t) {
							return t.element != e
						})), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
					}, o.prototype.disconnect = function() {
						this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
					}, o.prototype.takeRecords = function() {
						var e = this._queuedEntries.slice();
						return this._queuedEntries = [], e
					}, o.prototype._initThresholds = function(e) {
						var t = e || [0];
						return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, s) {
							if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
							return e !== s[t - 1]
						}))
					}, o.prototype._parseRootMargin = function(e) {
						var t = (e || "0px").split(/\s+/).map((function(e) {
							var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
							if (!t) throw new Error("rootMargin must be specified in pixels or percent");
							return {
								value: parseFloat(t[1]),
								unit: t[2]
							}
						}));
						return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
					}, o.prototype._monitorIntersections = function() {
						this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(e, "resize", this._checkForIntersections, !0), r(t, "scroll", this._checkForIntersections, !0), "MutationObserver" in e && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(t, {
							attributes: !0,
							childList: !0,
							characterData: !0,
							subtree: !0
						}))))
					}, o.prototype._unmonitorIntersections = function() {
						this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(e, "resize", this._checkForIntersections, !0), i(t, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
					}, o.prototype._checkForIntersections = function() {
						var t = this._rootIsInDom(),
							s = t ? this._getRootRect() : {
								top: 0,
								bottom: 0,
								left: 0,
								right: 0,
								width: 0,
								height: 0
							};
						this._observationTargets.forEach((function(o) {
							var r = o.element,
								i = a(r),
								c = this._rootContainsTarget(r),
								d = o.entry,
								l = t && c && this._computeTargetAndRootIntersection(r, s),
								m = o.entry = new n({
									time: e.performance && performance.now && performance.now(),
									target: r,
									boundingClientRect: i,
									rootBounds: s,
									intersectionRect: l
								});
							d ? t && c ? this._hasCrossedThreshold(d, m) && this._queuedEntries.push(m) : d && d.isIntersecting && this._queuedEntries.push(m) : this._queuedEntries.push(m)
						}), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
					}, o.prototype._computeTargetAndRootIntersection = function(s, n) {
						if ("none" != e.getComputedStyle(s).display) {
							for (var o, r, i, c, l, m, p, u, h = a(s), b = d(s), g = !1; !g;) {
								var x = null,
									v = 1 == b.nodeType ? e.getComputedStyle(b) : {};
								if ("none" == v.display) return;
								if (b == this.root || b == t ? (g = !0, x = n) : b != t.body && b != t.documentElement && "visible" != v.overflow && (x = a(b)), x && (o = x, r = h, i = void 0, c = void 0, l = void 0, m = void 0, p = void 0, u = void 0, i = Math.max(o.top, r.top), c = Math.min(o.bottom, r.bottom), l = Math.max(o.left, r.left), m = Math.min(o.right, r.right), u = c - i, !(h = (p = m - l) >= 0 && u >= 0 && {
										top: i,
										bottom: c,
										left: l,
										right: m,
										width: p,
										height: u
									}))) break;
								b = d(b)
							}
							return h
						}
					}, o.prototype._getRootRect = function() {
						var e;
						if (this.root) e = a(this.root);
						else {
							var s = t.documentElement,
								n = t.body;
							e = {
								top: 0,
								left: 0,
								right: s.clientWidth || n.clientWidth,
								width: s.clientWidth || n.clientWidth,
								bottom: s.clientHeight || n.clientHeight,
								height: s.clientHeight || n.clientHeight
							}
						}
						return this._expandRectByRootMargin(e)
					}, o.prototype._expandRectByRootMargin = function(e) {
						var t = this._rootMarginValues.map((function(t, s) {
								return "px" == t.unit ? t.value : t.value * (s % 2 ? e.width : e.height) / 100
							})),
							s = {
								top: e.top - t[0],
								right: e.right + t[1],
								bottom: e.bottom + t[2],
								left: e.left - t[3]
							};
						return s.width = s.right - s.left, s.height = s.bottom - s.top, s
					}, o.prototype._hasCrossedThreshold = function(e, t) {
						var s = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
							n = t.isIntersecting ? t.intersectionRatio || 0 : -1;
						if (s !== n)
							for (var o = 0; o < this.thresholds.length; o++) {
								var r = this.thresholds[o];
								if (r == s || r == n || r < s != r < n) return !0
							}
					}, o.prototype._rootIsInDom = function() {
						return !this.root || c(t, this.root)
					}, o.prototype._rootContainsTarget = function(e) {
						return c(this.root || t, e)
					}, o.prototype._registerInstance = function() {
						s.indexOf(this) < 0 && s.push(this)
					}, o.prototype._unregisterInstance = function() {
						var e = s.indexOf(this); - 1 != e && s.splice(e, 1)
					}, e.IntersectionObserver = o, e.IntersectionObserverEntry = n
				}

				function n(e) {
					this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}, this.isIntersecting = !!e.intersectionRect;
					var t = this.boundingClientRect,
						s = t.width * t.height,
						n = this.intersectionRect,
						o = n.width * n.height;
					this.intersectionRatio = s ? o / s : this.isIntersecting ? 1 : 0
				}

				function o(e, t) {
					var s, n, o, r = t || {};
					if ("function" != typeof e) throw new Error("callback must be a function");
					if (r.root && 1 != r.root.nodeType) throw new Error("root must be an Element");
					this._checkForIntersections = (s = this._checkForIntersections.bind(this), n = this.THROTTLE_TIMEOUT, o = null, function() {
						o || (o = setTimeout((function() {
							s(), o = null
						}), n))
					}), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(r.rootMargin), this.thresholds = this._initThresholds(r.threshold), this.root = r.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
						return e.value + e.unit
					})).join(" ")
				}

				function r(e, t, s, n) {
					"function" == typeof e.addEventListener ? e.addEventListener(t, s, n || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, s)
				}

				function i(e, t, s, n) {
					"function" == typeof e.removeEventListener ? e.removeEventListener(t, s, n || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, s)
				}

				function a(e) {
					var t;
					try {
						t = e.getBoundingClientRect()
					} catch (s) {}
					return t ? (t.width && t.height || (t = {
						top: t.top,
						right: t.right,
						bottom: t.bottom,
						left: t.left,
						width: t.right - t.left,
						height: t.bottom - t.top
					}), t) : {
						top: 0,
						bottom: 0,
						left: 0,
						right: 0,
						width: 0,
						height: 0
					}
				}

				function c(e, t) {
					for (var s = t; s;) {
						if (s == e) return !0;
						s = d(s)
					}
					return !1
				}

				function d(e) {
					var t = e.parentNode;
					return t && 11 == t.nodeType && t.host ? t.host : t
				}
			}(window, document)
		},
		"./node_modules/lodash/_baseFindKey.js": function(e, t) {
			e.exports = function(e, t, s) {
				var n;
				return s(e, (function(e, s, o) {
					if (t(e, s, o)) return n = s, !1
				})), n
			}
		},
		"./node_modules/lodash/compact.js": function(e, t) {
			e.exports = function(e) {
				for (var t = -1, s = null == e ? 0 : e.length, n = 0, o = []; ++t < s;) {
					var r = e[t];
					r && (o[n++] = r)
				}
				return o
			}
		},
		"./node_modules/lodash/findKey.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseFindKey.js"),
				o = s("./node_modules/lodash/_baseForOwn.js"),
				r = s("./node_modules/lodash/_baseIteratee.js");
			e.exports = function(e, t) {
				return n(e, r(t, 3), o)
			}
		},
		"./node_modules/lodash/take.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseSlice.js"),
				o = s("./node_modules/lodash/toInteger.js");
			e.exports = function(e, t, s) {
				return e && e.length ? (t = s || void 0 === t ? 1 : o(t), n(e, 0, t < 0 ? 0 : t)) : []
			}
		},
		"./node_modules/lodash/times.js": function(e, t, s) {
			var n = s("./node_modules/lodash/_baseTimes.js"),
				o = s("./node_modules/lodash/_castFunction.js"),
				r = s("./node_modules/lodash/toInteger.js"),
				i = 9007199254740991,
				a = 4294967295,
				c = Math.min;
			e.exports = function(e, t) {
				if ((e = r(e)) < 1 || e > i) return [];
				var s = a,
					d = c(e, a);
				t = o(t), e -= a;
				for (var l = n(d, t); ++s < e;) t(s);
				return l
			}
		},
		"./node_modules/lodash/uniqueId.js": function(e, t, s) {
			var n = s("./node_modules/lodash/toString.js"),
				o = 0;
			e.exports = function(e) {
				var t = ++o;
				return n(e) + t
			}
		},
		"./src/lib/humanizeDate/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return d
			}));
			var n = s("./src/reddit/i18n/utils.ts");
			const o = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				r = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				i = (e, t) => t ? e.getUTCDate() : e.getDate(),
				a = (e, t, s) => {
					const i = t ? e.getUTCMonth() : e.getMonth(),
						a = s ? r : o;
					return Object(n.c)(a[i])
				},
				c = (e, t) => t ? e.getUTCFullYear() : e.getFullYear();

			function d(e, t, s, n) {
				const o = new Date(1e3 * e),
					r = a(o, s, n),
					d = t ? i(o, s) + ", " : "";
				return "".concat(r, " ").concat(d).concat(c(o, s))
			}
		},
		"./src/reddit/components/BackToTop/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_365FiUZ11efXHV7l7fNp6K",
				button: "_1m03hmspTHlre1O1CXbY9Y"
			}
		},
		"./src/reddit/components/ChatButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/actions/chat/toggle.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/controls/Button/index.tsx"),
				d = s("./src/reddit/helpers/trackers/authorHovercard.ts");
			const l = e => {
				let {
					onStartChat: t,
					children: s,
					className: n
				} = e;
				return o.a.createElement(c.f, {
					onClick: t,
					className: n
				}, s)
			};
			l.displayName = "ChatButton";
			const m = Object(r.b)(null, (e, t) => ({
				onStartChat: () => {
					const {
						contextId: s,
						userId: n,
						sendEvent: o
					} = t;
					e(Object(i.a)(n, s)), o(Object(d.b)(s))
				}
			}));
			t.a = m(Object(a.b)(l))
		},
		"./src/reddit/components/CommentBodyExpander/index.m.less": function(e, t, s) {
			e.exports = {
				collapsedCommentWrapper: "_3eqiPvSIRa-NZBdZNmskLn",
				collapsedCommentLine: "_3w5mzp5LqE702onvC_Wok3",
				rtjCollapsed: "_1J7xT7G-fgDlzIqRgaBrrB",
				seeMore: "_3NPaMDmW2g_XhEdxfn6inI"
			}
		},
		"./src/reddit/components/CommentContainer/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/higherOrderComponents/withClickTracking.tsx");
			const d = Object(i.c)({
					clickTrackingId: (e, t) => {
						let {
							comment: s
						} = t;
						return s.id
					}
				}),
				l = Object(r.b)(d);
			class m extends o.a.Component {
				constructor() {
					super(...arguments), this.cancelClick = !1
				}
				render() {
					const {
						afterClickTracking: e,
						children: t,
						className: s,
						comment: n,
						onClick: r,
						style: i
					} = this.props;
					return o.a.createElement("div", {
						className: Object(a.a)(s, "Comment ".concat(n.id)),
						onMouseUp: e => {
							0 !== window.getSelection().toString().length && (this.cancelClick = !0, window.setTimeout(() => {
								this.cancelClick = !1
							}, 1e3))
						},
						onClick: t => {
							!this.cancelClick && t.button < 2 && e(() => r && r(t, n))(t)
						},
						style: i
					}, t)
				}
			}
			t.a = l(Object(c.c)(m))
		},
		"./src/reddit/components/CommentModModeDropdown/index.m.less": function(e, t, s) {
			e.exports = {
				StyledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				styledDropdown: "_1PC9CIsUh5fq8cQdx3iMRr",
				Show: "BmpGQCO3oZBeUMzSaC5yX",
				show: "BmpGQCO3oZBeUMzSaC5yX"
			}
		},
		"./src/reddit/components/CommentModModeDropdown/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/actions/comment/index.ts"),
				c = s("./src/reddit/components/OverlayAwareTooltip/index.tsx"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/controls/Dropdown/index.tsx"),
				m = s("./src/reddit/helpers/trackers/modTools.ts"),
				p = s("./src/reddit/selectors/tooltip.ts"),
				u = s("./src/app/strings/index.ts"),
				h = s("./src/lib/lessComponent.tsx"),
				b = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx"),
				g = s("./src/reddit/icons/svgs/Show/index.tsx"),
				x = s("./src/reddit/components/CommentModModeDropdown/index.m.less"),
				v = s.n(x);
			const f = h.a.wrapped(g.a, "Show", v.a);
			var O = e => o.a.createElement(b.d, null, !e.comment.isApproved && o.a.createElement(b.c, {
				displayText: e.comment.approvedBy ? Object(u.a)(e.language, "modTools.approved") : Object(u.a)(e.language, "modTools.approve"),
				onClick: e.onApproveComment
			}, o.a.createElement(b.a, null)), !e.comment.bannedBy && o.a.createElement(o.a.Fragment, null, o.a.createElement(b.c, {
				displayText: e.comment.isRemoved ? Object(u.a)(e.language, "modTools.removed") : Object(u.a)(e.language, "modTools.remove"),
				onClick: e.onRemoveComment
			}, o.a.createElement(b.f, null)), o.a.createElement(b.c, {
				displayText: e.comment.isSpam ? Object(u.a)(e.language, "modTools.removedAsSpam") : Object(u.a)(e.language, "modTools.removeAsSpam"),
				onClick: e.onSpamComment
			}, o.a.createElement(b.g, null)), o.a.createElement(b.c, {
				displayText: e.comment.isLocked ? Object(u.a)(e.language, "modTools.unlockComment") : Object(u.a)(e.language, "modTools.lockComment"),
				onClick: e.onLockComment
			}, o.a.createElement(b.e, null))), e.comment.collapsedBecauseCrowdControl && o.a.createElement(b.c, {
				displayText: Object(u.a)(e.language, "modTools.showComment"),
				onClick: e.onShowComment
			}, o.a.createElement(f, null)));
			const C = h.a.wrapped(l.a, "StyledDropdown", v.a),
				y = Object(i.c)({
					isDropdownOpen: (e, t) => {
						let {
							tooltipId: s
						} = t;
						return Object(p.b)(s)(e)
					}
				}),
				w = Object(r.b)(y, (e, t) => {
					let {
						comment: s
					} = t;
					return {
						onApproveComment: () => e(Object(a.H)(s.id)),
						onLockComment: () => e(Object(a.X)(s.id)),
						onRemoveComment: () => e(Object(a.cb)(s.id, !1)),
						onSpamComment: () => e(Object(a.cb)(s.id, !0)),
						onShowComment: () => e(Object(a.Y)(s.id))
					}
				}),
				E = Object(c.a)(C),
				j = w(Object(d.b)(e => {
					const {
						comment: t,
						isDropdownOpen: s,
						language: n,
						onApproveComment: r,
						onLockComment: i,
						onRemoveComment: a,
						onSpamComment: c,
						onShowComment: d,
						sendEvent: l,
						tooltipId: p
					} = e;
					return o.a.createElement(E, {
						isOpen: s,
						tooltipId: p
					}, o.a.createElement(O, {
						language: n,
						onApproveComment: () => {
							r(), l(Object(m.c)("approve", t.id))
						},
						onRemoveComment: () => {
							a(), l(Object(m.c)("remove", t.id))
						},
						onSpamComment: () => {
							c(), l(Object(m.c)("spam", t.id))
						},
						onLockComment: () => {
							i(), l(Object(m.c)(t.isLocked ? "unlock" : "lock", t.id))
						},
						onShowComment: () => {
							d(), l(Object(m.c)("showComment", t.id))
						},
						comment: t
					}))
				}));
			t.a = j
		},
		"./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less": function(e, t, s) {
			e.exports = {
				DropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				dropdownRow: "_2LNy1r5iuFMrf0PLh4UdV-",
				DeleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				deleteIcon: "_1iKLz-XMCxtewhk3nusoiP",
				ReportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				reportIcon: "_2cI15gf51WKaEHlpw-HjhG",
				PencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				pencilIcon: "_1bLoeor2W-QStNmx_KRhZL",
				SaveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				saveIcon: "XOeF-g_i5E2Oaxwt9wDdS",
				SavedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				savedIcon: "_4rjQO_f0JDhjAgz1a8hLR",
				OverflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				overflowMenu: "_11rZyhzMB3OOh_i10q1kGT",
				ModToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				modToolsFlatlist: "_3y5_xjgWBNlHiMIlznzmOH",
				ModActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				modActionsMenu: "_2Ff8ezLTpKg92h7e8lIWkW",
				Flatlist: "_1PB2jayxHhG493U6RP5qLr",
				flatlist: "_1PB2jayxHhG493U6RP5qLr",
				Button: "VFryWeVNuBPgqyjc5h68S",
				button: "VFryWeVNuBPgqyjc5h68S"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.m.less": function(e, t, s) {
			e.exports = {
				CommentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				commentAuthorLink: "f3THgbzMYccGW8vbqZBUH",
				badgeIconStyle: "_2MlVoXUc3Eo3KGWDukM9xn",
				modBadgeIconStyle: "_1kqPGnOAdnd9gPUXDU2_AS",
				DonationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				donationAmount: "_3sY3k4LLYR5dbXRxnGkhwG",
				RightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				rightPositionedAuthorFlair: "_zMIUk6t-WDI7fxfkvD02",
				EditedText: "uMVXpG5M2xxHNW2g94S8K",
				editedText: "uMVXpG5M2xxHNW2g94S8K",
				MetaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				metaSeparator: "yJGcpQjpmA13QcuUz2h0B",
				publicPoints: "_2LXcsgibmlCEsBPk8MLy7e",
				AuthorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				authorHoverCard: "_16AAktgl_rVbXAeiWU9CQd",
				Component: "_36uQqfCEixcb8d3_aWB5H6",
				component: "_36uQqfCEixcb8d3_aWB5H6",
				AdminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				adminIcon: "_2IdAWdzNdIq-LUdJv0lpD6",
				Approve: "_34mJxMS9sOCTo8dtFMQOLR",
				approve: "_34mJxMS9sOCTo8dtFMQOLR",
				Lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				lock: "_3ATarJMtY0XRI9Lgu7e7DC",
				AdminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				adminEmeritus: "xIZgDbR-AMck1mC6sZI1m",
				Automoderator: "EytgzUMjj1jcbKtFsodey",
				automoderator: "EytgzUMjj1jcbKtFsodey",
				removed: "_2jIbl66ymb_twdJlZslQ-e",
				CakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				cakeIcon: "_1HLCDx7CkNvQgmNroGXenu",
				Moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				moderator: "_174Mk1p6pYIrr6f1y6b4fn",
				Remove: "_1DQWCB93pHPVVJCXOGsblO",
				remove: "_1DQWCB93pHPVVJCXOGsblO",
				Report: "_2wYWDvjfG1JR6VNK9ryPFk",
				report: "_2wYWDvjfG1JR6VNK9ryPFk",
				Spam: "_3kK86gdpll9ihjOPWJE6f2",
				spam: "_3kK86gdpll9ihjOPWJE6f2",
				Op: "_2pZswNTz_uW46hN02djL7j",
				op: "_2pZswNTz_uW46hN02djL7j",
				Contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				contractor: "_1hbZy7yehvtj0w4ec-2u3Y",
				redditorIcon: "_2SkK42s487b14gsRa4zinm",
				MetaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				metaLink: "_1sA-1jNHouHDpgCp1fCQ_F",
				StickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				stickiedText: "_1eNQE7Kj1TEqCLAn1BUKJy",
				DeletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				deletedText: "_2Wu4MNMVl4bsJ9iVnQz0dF",
				RemovalReason: "Gtgj2P-Js5aSN72H6Mqms",
				removalReason: "Gtgj2P-Js5aSN72H6Mqms",
				container: "_3ezOJqKdLbgkHsXcfvS5SA",
				collapsed: "_2k27lgIDltx9kOzVGXt48i",
				hasBadges: "_1KMFaeLEhRikeFEOlWE9Ti",
				liveStreaming: "_1iUed95f0HTc84gBtoOxdc",
				metaText: "_3_GZIIN1xcMEC5AVuv4kfa",
				CrowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N",
				crowdControlText: "Eoj3NCGwtl7hQcr7Rnc0N"
			}
		},
		"./src/reddit/components/Comments/Comment/TopMeta/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/reddit/actions/tooltip.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/lib/humanizeDateTime/index.ts"),
				p = s("./src/lib/lessComponent.tsx"),
				u = s("./src/lib/timeAgo/index.ts"),
				h = s("./src/reddit/components/AuthorLink/index.tsx"),
				b = s("./src/reddit/components/AwardBadges/index.tsx"),
				g = s("./src/reddit/components/Economics/SubredditPremium/Badges/UserDisplay/index.tsx"),
				x = s("./src/reddit/components/Economics/SubredditPremium/Badges/UsernameDisplay/index.tsx"),
				v = s("./src/reddit/components/Economics/Support/DonationAmount/async.tsx"),
				f = s("./src/reddit/featureFlags/index.ts"),
				O = s("./src/reddit/selectors/economics.ts"),
				C = s("./src/reddit/components/Economics/TopTippers/Icon/index.tsx"),
				y = s("./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less"),
				w = s.n(y);
			const E = e => {
				switch (e) {
					case 1:
						return {
							color: "#FF2500", fontWeight: 700
						};
					case 2:
						return {
							color: "#FF7300", fontWeight: 700
						};
					case 3:
						return {
							color: "#FFA200", fontWeight: 700
						};
					default:
						return {}
				}
			};
			var j = Object(r.b)(() => Object(i.c)({
					post: (e, t) => {
						let {
							contentId: s
						} = t;
						return e.posts.models[s]
					},
					tippers: (e, t) => {
						if (f.d.spTopTippers(e)) return Object(O.s)(e, t)
					}
				}))((function(e) {
					if (e.tippers && e.tippers.allTippers.has(e.userId)) {
						const t = e.tippers.topTippers.ranking[e.userId] || 5,
							s = o.a.cloneElement(o.a.Children.only(e.children), {
								style: E(t)
							});
						return o.a.createElement("div", {
							className: w.a.container
						}, o.a.createElement(C.a, {
							className: w.a.badge,
							creatorId: e.creatorId || e.post && e.post.authorId,
							rank: t,
							subredditId: e.subredditId
						}), s)
					}
					return e.children
				})),
				I = s("./src/reddit/components/Flair/index.tsx"),
				S = s("./src/reddit/components/Governance/UserPublicPointsDisplay/async.tsx"),
				_ = s("./src/reddit/components/Hovercards/AuthorHovercard/index.tsx"),
				P = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				N = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				L = s("./src/reddit/components/PostTopMeta/index.tsx"),
				T = s("./src/reddit/helpers/isRemoved.ts"),
				k = s("./src/reddit/helpers/modTooltipTemplates/index.ts"),
				M = s("./src/reddit/helpers/showReportIndicator/index.ts"),
				R = s("./src/reddit/i18n/utils.ts"),
				B = s("./src/reddit/actions/comment/index.ts"),
				D = s("./src/reddit/models/Comment/index.ts"),
				A = s("./src/reddit/models/Flair/index.ts"),
				F = s("./src/reddit/icons/fonts/Admin/index.tsx"),
				H = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				W = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				U = s("./src/reddit/icons/fonts/helpers.tsx"),
				V = s("./src/reddit/icons/fonts/Op/index.m.less"),
				G = s.n(V);
			var z = p.a.wrapped(e => o.a.createElement("i", {
					className: "".concat(Object(U.b)("op"), " ").concat(e.className),
					id: e.id,
					onMouseEnter: e.onMouseEnter,
					onMouseLeave: e.onMouseLeave
				}, o.a.createElement(U.a, null, e.desc)), "OpIcon", G.a),
				K = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				Z = s("./src/reddit/icons/fonts/Report/index.tsx"),
				J = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				q = s("./src/reddit/icons/svgs/Automoderator/index.tsx"),
				Q = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				Y = s("./src/reddit/icons/svgs/Moderate/index.tsx"),
				X = s("./src/reddit/controls/MetaData/index.tsx"),
				$ = s("./src/reddit/selectors/experiments/publicAwarding.ts"),
				ee = s("./src/reddit/selectors/subreddit.ts"),
				te = s("./src/reddit/selectors/userFlair.ts"),
				se = s("./src/reddit/components/Comments/Comment/TopMeta/index.m.less"),
				ne = s.n(se);

			function oe() {
				return (oe = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var re = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const ie = p.a.wrapped(I.b, "RightPositionedAuthorFlair", ne.a),
				ae = p.a.wrapped(F.a, "AdminIcon", ne.a),
				ce = p.a.wrapped(H.a, "Approve", ne.a),
				de = p.a.wrapped(W.a, "Lock", ne.a),
				le = p.a.div("AdminEmeritus", ne.a),
				me = p.a.wrapped(q.a, "Automoderator", ne.a),
				pe = p.a.wrapped(Q.a, "CakeIcon", ne.a),
				ue = p.a.wrapped(Y.a, "Moderator", ne.a),
				he = p.a.wrapped(K.a, "Remove", ne.a),
				be = p.a.wrapped(Z.a, "Report", ne.a),
				ge = p.a.wrapped(J.a, "Spam", ne.a),
				xe = p.a.wrapped(z, "Op", ne.a),
				ve = p.a.wrapped(F.a, "Contractor", ne.a),
				fe = p.a.a("MetaLink", ne.a),
				Oe = p.a.wrapped(X.a, "EditedText", ne.a),
				Ce = p.a.wrapped(X.a, "StickiedText", ne.a),
				ye = p.a.span("DeletedText", ne.a),
				we = p.a.wrapped(X.a, "MetaSeparator", ne.a),
				Ee = p.a.wrapped(X.a, "CrowdControlText", ne.a),
				je = p.a.wrapped(_.b, "AuthorHoverCard", ne.a),
				Ie = p.a.a("RemovalReason", ne.a),
				Se = p.a.wrapped(g.b, "Component", ne.a),
				_e = Object(a.d)("comment.children"),
				Pe = Object(a.d)("comment.moreThanChildren"),
				Ne = e => (t, s) => {
					let {
						comment: n,
						renderedInOverlay: o
					} = s;
					return "".concat(e).concat(n.id).concat(o ? "inOverlay" : "")
				},
				Le = Object(a.e)("comment.tooltips.admin"),
				Te = Object(a.e)("comment.tooltips.cakeday"),
				ke = Object(a.e)("comment.tooltips.adminEmeritus"),
				Me = Object(a.e)("comment.tooltips.moderator"),
				Re = Object(a.e)("comment.tooltips.op"),
				Be = Object(a.e)("comment.tooltips.contractor"),
				De = Object(r.b)(() => Object(i.c)({
					adminTooltipId: Ne("CommentTopMeta--Admin--"),
					cakedayTooltipId: Ne("CommentTopMeta--cakeday--"),
					adminEmeritusTooltipId: Ne("CommentTopMeta--AdEm--"),
					automodTooltipId: Ne("CommentTopMeta--Automod--"),
					approveTooltipId: Ne("CommentTopMeta--Approve--"),
					createdTooltipId: Ne("CommentTopMeta--Created--"),
					contractorTooltipId: Ne("CommentTopMeta--Contractor--"),
					gildedTooltipId: Ne("CommentTopMeta--Gold--"),
					lockedTooltipId: Ne("CommentTopMeta--Locked--"),
					modTooltipId: Ne("CommentTopMeta--Mod--"),
					opTooltipId: Ne("CommentTopMeta--OP--"),
					publicAwardersEnabled: e => !!Object($.a)(e),
					removeTooltipId: Ne("CommentTopMeta--Remove--"),
					reportTooltipId: Ne("CommentTopMeta--Report--"),
					spamTooltipId: Ne("CommentTopMeta--Spam--"),
					hasBadges: (e, t) => {
						let {
							comment: s
						} = t;
						return !!Object(O.q)(e, s.subredditId, s.authorId).length
					},
					subredditDisplayText: (e, t) => {
						const s = Object(ee.J)(e, {
							commentId: t.comment.id
						});
						return s ? s.displayText : ""
					},
					topTippersEnabled: f.d.spTopTippers,
					flairPosition: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(te.d)(e, {
							subredditId: s.subredditId
						})
					}
				}), (e, t) => ({
					onCreatedClick: () => {
						window.addEventListener("focus", (function s() {
							((e, t, s) => {
								window.removeEventListener("focus", s), e(Object(B.N)({
									commentListNodeId: t
								})), window.setTimeout(() => e(Object(B.N)({
									commentListNodeId: t
								})), 5e3)
							})(e, t.comment.id, s)
						}))
					},
					onHideTooltip: () => e(Object(c.h)()),
					onShowTooltip: t => e(Object(c.f)({
						tooltipId: t
					})),
					openRemovalReasonModal: () => {
						s.e("removalReasonActions").then(s.bind(null, "./src/reddit/actions/removalReasons/index.ts")).then(s => e(s.fetchReasonsAndOpenModal(t.comment.subredditId, [t.comment.id])))
					}
				}));
			t.a = De(e => {
				const {
					adminEmeritusTooltipId: t,
					adminTooltipId: s,
					approveTooltipId: n,
					automodTooltipId: r,
					cakedayTooltipId: i,
					children: a,
					className: c,
					collapsed: m,
					collapsedBecauseCrowdControl: p,
					comment: u,
					commentsPageKey: h,
					contractorTooltipId: g,
					compact: f,
					flair: O,
					flairPosition: C,
					hasBadges: y,
					isLivestreaming: w,
					ignoreFlairPosition: E,
					ignoreLock: j,
					language: _,
					lockedTooltipId: P,
					modTooltipId: T,
					onHideTooltip: k,
					onShowTooltip: M,
					opTooltipId: R,
					openRemovalReasonModal: B,
					publicAwardersEnabled: F,
					removeTooltipId: H,
					renderContractorBadge: W,
					renderedInOverlay: U,
					reportTooltipId: V,
					spamTooltipId: G,
					subredditDisplayText: z,
					topTippersEnabled: K
				} = e;
				if (u.isDeleted) return o.a.createElement(Ae, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				if (m) return o.a.createElement(Fe, oe({}, e, {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m
					})
				}));
				const Z = !E && C === A.b.Left;
				return o.a.createElement("div", {
					className: Object(d.a)(c, ne.a.container, {
						[ne.a.collapsed]: m,
						[ne.a.hasBadges]: y,
						[ne.a.liveStreaming]: w
					})
				}, O && Z && o.a.createElement(I.b, {
					flair: O,
					forceSmallEmojis: f
				}), !Object(D.d)(u) && o.a.createElement(Se, {
					showAddCustom: !0,
					subredditId: u.subredditId,
					userId: u.authorId,
					uniqueIdentifier: u.id
				}), o.a.createElement(je, {
					postOrComment: u,
					tooltipType: U ? L.c.Lightbox : void 0
				}, o.a.createElement(x.b, {
					ignore: Object(D.d)(u) || !!u.distinguishType && u.distinguishType !== l.B.NONE,
					subredditId: u.subredditId,
					userId: u.authorId
				}, o.a.createElement(We, {
					comment: u,
					isLivestreaming: w,
					isStrong: !!f,
					isAuthorDeleted: Object(D.d)(u),
					topTippersEnabled: K
				}, a && a))), p && o.a.createElement(Ee, null, "Crowd Control"), p && o.a.createElement(X.c, {
					className: ne.a.metaText,
					key: "crowdControlSeparator"
				}), O && !Z && o.a.createElement(ie, {
					flair: O,
					forceSmallEmojis: f
				}), !f && o.a.createElement(S.a, {
					className: ne.a.publicPoints,
					contentId: u.id,
					subredditId: u.subredditId,
					userId: u.authorId,
					username: u.author
				}), o.a.createElement(o.a.Fragment, null, o.a.createElement(N.b, {
					commentId: u.id
				}), o.a.createElement(N.a, {
					commentId: u.id,
					commentsPageKey: h
				}), o.a.createElement(Ge, {
					comment: u,
					compact: f,
					adminTooltipId: s,
					adminEmeritusTooltipId: t,
					cakedayTooltipId: i,
					contractorTooltipId: g,
					language: _,
					modTooltipId: T,
					onHideTooltip: k,
					onShowTooltip: M,
					opTooltipId: R,
					renderContractorBadge: W,
					subredditDisplayText: z
				})), !f && o.a.createElement(o.a.Fragment, null, !u.isDeleted && o.a.createElement(X.b, {
					className: ne.a.metaText,
					isScoreHidden: u.isScoreHidden,
					language: _,
					score: u.score
				}), o.a.createElement(X.c, {
					className: ne.a.metaText,
					key: "scoreCreatedSeparator"
				}), o.a.createElement(Ue, oe({
					key: "Created"
				}, e)), u.isStickied && Ke(_), u.editedAt && He(_, u.editedAt)), o.a.createElement(o.a.Fragment, null, o.a.createElement(ze, {
					comment: u,
					approveTooltipId: n,
					automodTooltipId: r,
					ignoreLock: j,
					language: _,
					lockedTooltipId: P,
					onHideTooltip: k,
					onShowTooltip: M,
					openRemovalReasonModal: B,
					removeTooltipId: H,
					reportTooltipId: V,
					spamTooltipId: G
				}), o.a.createElement(v.a, {
					className: ne.a.DonationAmount,
					contentId: u.id,
					subredditId: u.subredditId
				})), o.a.createElement(b.a, {
					showAwarders: F,
					tooltipType: U ? L.c.Lightbox : void 0,
					thing: u
				}))
			});
			const Ae = e => {
					const {
						language: t,
						childrenInfo: s,
						collapsed: n,
						className: r,
						comment: i
					} = e;
					return o.a.createElement("div", {
						className: r
					}, o.a.createElement(ye, null, i.deletedBy === D.a.User ? Object(a.a)(t, "comment.commentDeletedByAuthor") : Object(a.a)(t, "comment.commentDeletedByMod")), o.a.createElement(Ue, oe({
						key: "Created"
					}, e)), n && Ve({
						childrenInfo: s,
						language: t
					}))
				},
				Fe = e => {
					const {
						comment: t,
						language: s,
						className: n,
						childrenInfo: r
					} = e;
					return o.a.createElement("div", {
						className: n
					}, o.a.createElement("div", null, o.a.createElement(We, {
						comment: t,
						isAuthorDeleted: Object(D.d)(t),
						topTippersEnabled: !1
					})), o.a.createElement(X.b, {
						className: ne.a.metaText,
						isScoreHidden: t.isScoreHidden,
						language: s,
						score: t.score
					}), o.a.createElement(X.c, {
						className: ne.a.metaText,
						key: "scoreCreatedSeparator"
					}), o.a.createElement(Ue, oe({
						key: "Created"
					}, e)), Ve({
						childrenInfo: r,
						language: s
					}))
				},
				He = (e, t) => o.a.createElement(n.Fragment, null, o.a.createElement(X.c, {
					className: ne.a.metaText
				}), o.a.createElement(Oe, null, Object(a.a)(e, "comment.edited", {
					time: Object(u.d)(e, t)
				}))),
				We = e => {
					const t = o.a.createElement(h.a, {
						className: ne.a.CommentAuthorLink,
						author: e.comment.author,
						isAdmin: e.comment.isAdmin,
						isAdminEmeritus: e.comment.distinguishType === l.B.ALUMNI_ADMIN,
						isAuthorDeleted: e.isAuthorDeleted,
						isLivestreaming: e.isLivestreaming,
						isMod: e.comment.isMod,
						isOp: e.comment.isOp,
						isStrong: e.isStrong,
						style: e.style
					}, e.children && e.children, e.comment.author);
					return e.topTippersEnabled ? o.a.createElement(j, {
						contentId: e.comment.postId,
						subredditId: e.comment.subredditId,
						userId: e.comment.authorId
					}, t) : t
				};
			class Ue extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCreatedTooltip = () => this.props.onShowTooltip(this.props.createdTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t,
							language: s,
							onCreatedClick: n
						} = e,
						r = re(e, ["comment", "language", "onCreatedClick"]);
					return o.a.createElement(fe, {
						href: t.permalink,
						id: r.createdTooltipId,
						onClick: n,
						onMouseEnter: this.onShowCreatedTooltip,
						onMouseLeave: r.onHideTooltip,
						rel: "nofollow",
						target: "_blank"
					}, o.a.createElement("span", null, Object(u.d)(s, t.created)), Ze(r.createdTooltipId, Object(m.a)(t.created)))
				}
			}
			const Ve = e => {
				const {
					hasContinueThread: t,
					numChildren: s
				} = e.childrenInfo || {
					hasContinueThread: !1,
					numChildren: 0
				};
				return o.a.createElement(we, {
					className: ne.a.metaText
				}, "(", t ? Pe(e.language, s, {
					numChildren: s
				}) : _e(e.language, s, {
					numChildren: s
				}), ")")
			};
			class Ge extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowCakedayTooltip = () => this.props.onShowTooltip(this.props.cakedayTooltipId), this.onShowAdminTooltip = () => this.props.onShowTooltip(this.props.adminTooltipId), this.onShowAdminEmeritusTooltip = () => this.props.onShowTooltip(this.props.adminEmeritusTooltipId), this.onShowModTooltip = () => this.props.onShowTooltip(this.props.modTooltipId), this.onShowOpTooltip = () => this.props.onShowTooltip(this.props.opTooltipId), this.onShowContractorTooltip = () => this.props.onShowTooltip(this.props.contractorTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, t.isAuthorCakeday && o.a.createElement(pe, {
						"aria-label": Te(s.language),
						id: s.cakedayTooltipId,
						onMouseEnter: this.onShowCakedayTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAuthorCakeday && Ze(s.cakedayTooltipId, Te(s.language)), t.isAdmin && o.a.createElement(ae, {
						desc: Le(s.language),
						id: s.adminTooltipId,
						onMouseEnter: this.onShowAdminTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isAdmin && Ze(s.adminTooltipId, Le(s.language)), t.distinguishType === l.B.ALUMNI_ADMIN && o.a.createElement(le, {
						"aria-label": ke(s.language),
						children: "Δ",
						id: s.adminEmeritusTooltipId,
						onMouseEnter: this.onShowAdminEmeritusTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.distinguishType === l.B.ALUMNI_ADMIN && Ze(s.adminEmeritusTooltipId, ke(s.language)), t.isMod && o.a.createElement(ue, {
						desc: Me(s.language, {
							displayText: s.subredditDisplayText
						}),
						id: s.modTooltipId,
						onMouseEnter: this.onShowModTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isMod && Ze(s.modTooltipId, Me(s.language, {
						displayText: s.subredditDisplayText
					})), t.isOp && o.a.createElement(xe, {
						desc: Re(s.language),
						id: s.opTooltipId,
						onMouseEnter: this.onShowOpTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.isOp && Ze(s.opTooltipId, Re(s.language)), s.renderContractorBadge && o.a.createElement(ve, {
						desc: Be(s.language),
						id: s.contractorTooltipId,
						onMouseEnter: this.onShowContractorTooltip,
						onMouseLeave: s.onHideTooltip
					}), s.renderContractorBadge && Ze(s.contractorTooltipId, Be(s.language)))
				}
			}
			class ze extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.onShowApproveTooltip = () => this.props.onShowTooltip(this.props.approveTooltipId), this.onShowRemoveTooltip = () => this.props.onShowTooltip(this.props.removeTooltipId), this.onShowSpamTooltip = () => this.props.onShowTooltip(this.props.spamTooltipId), this.onShowAutomodTooltip = () => this.props.onShowTooltip(this.props.automodTooltipId), this.onShowReportTooltip = () => this.props.onShowTooltip(this.props.reportTooltipId)
				}
				render() {
					const e = this.props,
						{
							comment: t
						} = e,
						s = re(e, ["comment"]);
					return o.a.createElement(n.Fragment, null, (t.approvedBy || t.isApproved) && o.a.createElement(ce, {
						desc: Object(k.a)(s.language, t),
						id: s.approveTooltipId,
						onMouseEnter: this.onShowApproveTooltip,
						onMouseLeave: s.onHideTooltip
					}), (t.approvedBy || t.isApproved) && Ze(s.approveTooltipId, Object(k.a)(s.language, t)), Object(T.a)(t) && o.a.createElement(he, {
						desc: Object(k.c)(s.language, t),
						id: s.removeTooltipId,
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(T.a)(t) && Ze(s.removeTooltipId, Object(k.c)(s.language, t)), Object(T.a)(t) && t.isRemoved && !t.modNote && !t.modRemovalReason && o.a.createElement(Ie, {
						onClick: s.openRemovalReasonModal
					}, Object(a.a)(s.language, "modTools.addARemovalReason")), Object(T.a)(t) && !(t.isRemoved && !t.modNote && !t.modRemovalReason) && o.a.createElement(Ie, {
						onMouseEnter: this.onShowRemoveTooltip,
						onMouseLeave: s.onHideTooltip
					}, Object(a.a)(s.language, "modTools.removalReason")), t.isLocked && !s.ignoreLock && o.a.createElement(de, {
						desc: Object(R.c)("Locked"),
						id: s.lockedTooltipId,
						onMouseEnter: () => {
							s.onShowTooltip(s.lockedTooltipId)
						},
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && o.a.createElement(ge, {
						desc: Object(k.e)(s.language, t),
						id: s.spamTooltipId,
						onMouseEnter: this.onShowSpamTooltip,
						onMouseLeave: s.onHideTooltip
					}), t.bannedBy && t.isSpam && Ze(s.spamTooltipId, Object(k.e)(s.language, t)), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && o.a.createElement(me, {
						className: Object(d.a)({
							[ne.a.removed]: !!t.bannedBy
						}),
						desc: Object(k.b)(s.language),
						id: s.automodTooltipId,
						key: s.automodTooltipId,
						onMouseEnter: this.onShowAutomodTooltip,
						onMouseLeave: s.onHideTooltip
					}), ("AutoModerator" === t.bannedBy || "AutoModerator" === t.approvedBy) && Ze(s.automodTooltipId, Object(k.b)(s.language)), Object(M.a)(t) && o.a.createElement(be, {
						desc: Object(k.d)(s.language, t.numReports),
						id: s.reportTooltipId,
						onMouseEnter: this.onShowReportTooltip,
						onMouseLeave: s.onHideTooltip
					}), Object(M.a)(t) && Ze(s.reportTooltipId, Object(k.d)(s.language, t.numReports)))
				}
			}
			const Ke = e => o.a.createElement(n.Fragment, null, o.a.createElement(X.c, {
					className: ne.a.metaText
				}), o.a.createElement(Ce, null, Object(a.a)(e, "comment.stickied"))),
				Ze = (e, t) => o.a.createElement(P.c, {
					tooltipId: e,
					text: t
				})
		},
		"./src/reddit/components/Comments/ProfileComment/index.m.less": function(e, t, s) {
			e.exports = {
				TopMeta: "Ov9DvczDidxNqJMR_axF2",
				topMeta: "Ov9DvczDidxNqJMR_axF2",
				CommentBody: "_a5_x7qimk18YbGSwE8Fy",
				commentBody: "_a5_x7qimk18YbGSwE8Fy",
				ProfileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				profileCommentWrapper: "_2QR1H6z3qpmyHNdkMUnzVu",
				isRemoved: "_7kIPhlgZcmDxoV_xaWnX9"
			}
		},
		"./src/reddit/components/Comments/ProfileComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/objectSelector/index.ts"),
				l = s("./node_modules/lodash/throttle.js"),
				m = s.n(l),
				p = s("./src/lib/fastdom/index.ts"),
				u = s("./src/reddit/i18n/components.tsx"),
				h = s("./src/reddit/components/CommentBodyExpander/index.m.less"),
				b = s.n(h);
			const g = .75,
				x = 10 * c.F;
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.commentElement = null, this.handleResize = m()(() => {
						if (this.state.expandToggled) return null;
						p.a.read(() => {
							(this.commentElement ? this.commentElement.offsetHeight : 0) <= this.props.height * (g + 1) && p.a.write(() => {
								this.setState({
									expandToggled: !0
								})
							})
						})
					}, x), this.onShowMore = e => {
						e.preventDefault(), this.setState({
							expandToggled: !0
						})
					}, this.state = {
						expandToggled: e.isExpanded
					}
				}
				render() {
					const {
						children: e,
						height: t
					} = this.props, {
						expandToggled: s
					} = this.state;
					return s ? o.a.createElement("div", null, e()) : o.a.createElement("div", {
						className: b.a.collapsedCommentWrapper
					}, o.a.createElement("div", {
						className: b.a.collapsedCommentLine,
						style: {
							height: t
						}
					}, o.a.createElement("div", {
						ref: e => this.commentElement = e
					}, e(b.a.rtjCollapsed))), o.a.createElement("a", {
						className: b.a.seeMore,
						href: "javascript: void 0;",
						onClick: this.onShowMore
					}, o.a.createElement(u.c, null, "see more")))
				}
				componentDidUpdate() {
					const {
						expandToggled: e
					} = this.state;
					e && window && window.removeEventListener("resize", this.handleResize)
				}
				componentDidMount() {
					if (this.state.expandToggled) return null;
					this.commentElement && !this.commentElement.innerText.trim().includes("\n") && (window.addEventListener("resize", this.handleResize), this.handleResize())
				}
				componentWillUnmount() {
					window && window.removeEventListener("resize", this.handleResize)
				}
			}
			var f = v,
				O = s("./node_modules/lodash/noop.js"),
				C = s.n(O),
				y = s("./src/lib/makeCommentPermalink/index.ts"),
				w = s("./src/lib/makeCommentsPageKey/index.ts"),
				E = s("./src/lib/makeDraftKey/index.ts"),
				j = s("./src/reddit/actions/comment/index.ts"),
				I = s("./src/reddit/actions/gold/modals.ts"),
				S = s("./src/reddit/actions/modal.ts"),
				_ = s("./src/reddit/actions/reportFlow.ts"),
				P = s("./src/reddit/actions/tooltip.ts"),
				N = s("./src/reddit/components/CommentModModeDropdown/index.tsx"),
				L = s("./src/reddit/components/Comments/Comment/ModToolsFlatlist/index.tsx"),
				T = s("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				k = s("./src/reddit/components/DistinguishCommentDropdown/index.tsx"),
				M = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				R = s("./src/reddit/components/ModModeReports/helpers.ts"),
				B = s("./src/reddit/components/ViewReportsDropdown/index.tsx"),
				D = s("./src/reddit/contexts/InsideOverlay.tsx"),
				A = s("./src/reddit/contexts/PageLayer/index.tsx"),
				F = s("./src/reddit/helpers/correlationIdTracker.ts"),
				H = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				W = s("./src/reddit/helpers/overlay/index.ts"),
				U = s("./src/reddit/helpers/trackers/lightbox.ts"),
				V = s("./src/reddit/i18n/utils.ts"),
				G = s("./src/reddit/models/PostDraft/index.ts"),
				z = s("./src/reddit/selectors/activeModalId.ts"),
				K = s("./src/reddit/selectors/comments.ts"),
				Z = s("./src/reddit/selectors/moderatorPermissions.ts"),
				J = s("./src/reddit/selectors/posts.ts"),
				q = s("./src/reddit/selectors/tooltip.ts"),
				Q = s("./src/reddit/selectors/user.ts"),
				Y = s("./src/reddit/components/OverflowMenu/index.tsx"),
				X = s("./src/reddit/components/ReportFlow/index.tsx"),
				$ = s("./src/reddit/components/ShareMenu/index.tsx"),
				ee = s("./src/reddit/components/TrackingHelper/index.tsx"),
				te = s("./src/reddit/controls/Dropdown/Row.tsx"),
				se = s("./src/reddit/helpers/trackers/modTools.ts"),
				ne = s("./src/reddit/layout/row/Inline/index.tsx"),
				oe = s("./src/reddit/icons/fonts/IgnoreReport/index.tsx"),
				re = s("./src/reddit/icons/fonts/ModActions/index.tsx"),
				ie = s("./src/reddit/icons/fonts/Report/index.tsx"),
				ae = s("./src/reddit/icons/svgs/Flag/index.tsx"),
				ce = s("./src/reddit/icons/svgs/Pencil/index.tsx"),
				de = s("./src/reddit/icons/svgs/Save/index.m.less"),
				le = s.n(de);
			var me = e => o.a.createElement("svg", {
					className: Object(a.a)(le.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("defs", null, o.a.createElement("path", {
					id: "".concat("save-svg", "a"),
					d: "M14 16.209l-3.403-1.486a1.52 1.52 0 0 0-1.198.002L6 16.21V5.5c0-.52-.087-1.024-.255-1.5H12.5c.827 0 1.5.673 1.5 1.5V16.21zM12.5 2h-11a.5.5 0 1 0 0 1C2.879 3 4 4.12 4 5.5v12.236a.999.999 0 0 0 1.4.916l4.6-2.008 4.6 2.008a1 1 0 0 0 1.4-.917V5.5C16 3.57 14.43 2 12.5 2z"
				})), o.a.createElement("g", {
					fill: "inherit",
					fillRule: "evenodd"
				}, o.a.createElement("path", {
					d: "M0 20h20V0H0z",
					fill: "none"
				}), o.a.createElement("mask", {
					id: "".concat("save-svg", "b"),
					fill: "none"
				}, o.a.createElement("use", {
					xlinkHref: "#".concat("save-svg", "a")
				})), o.a.createElement("use", {
					fill: "inherit",
					xlinkHref: "#".concat("save-svg", "a")
				}), o.a.createElement("g", {
					mask: "url(#".concat("save-svg", "b)"),
					fill: "none"
				}, o.a.createElement("path", {
					d: "M0 0h20v20H0z"
				})))),
				pe = s("./src/reddit/icons/svgs/Saved/index.tsx"),
				ue = s("./src/reddit/icons/svgs/Trash2/index.tsx"),
				he = s("./src/reddit/components/Comments/Comment/ProfileCommentFlatlist/index.m.less"),
				be = s.n(he),
				ge = s("./src/lib/lessComponent.tsx");
			const xe = ge.a.wrapped(ue.b, "DeleteIcon", be.a),
				ve = ge.a.wrapped(ae.a, "ReportIcon", be.a),
				fe = ge.a.wrapped(ce.a, "PencilIcon", be.a),
				Oe = ge.a.wrapped(me, "SaveIcon", be.a),
				Ce = ge.a.wrapped(pe.a, "SavedIcon", be.a),
				ye = ge.a.wrapped(Y.b, "OverflowMenu", be.a),
				we = ge.a.wrapped(L.c, "ModToolsFlatlist", be.a),
				Ee = ge.a.wrapped(M.a, "ModActionsMenu", be.a),
				je = ge.a.wrapped(te.b, "DropdownRow", be.a),
				Ie = ge.a.wrapped(ne.a, "Flatlist", be.a),
				Se = ge.a.button("Button", be.a),
				_e = Object(A.t)(),
				Pe = e => "Comment-".concat(e, "--Modal--DeleteComment"),
				Ne = e => "Distinguish--Dropdown--".concat(e),
				Le = (e, t) => "".concat(e, "--").concat(t, "-overflow-menu"),
				Te = e => "View--Reports--".concat(e),
				ke = Object(i.c)({
					activeTooltipId: q.a,
					isConfirmModalOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(z.a)(e) === Pe(s.id)
					},
					isPendingDeletion: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(K.A)(e, {
							commentId: s.postId
						})
					},
					isLoggedIn: Q.J,
					moderatorPermissions: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(Z.j)(e, {
							subredditId: s.subredditId
						})
					},
					currentUser: Q.i,
					modModeEnabled: A.O,
					postIsLocked: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.E)(e, {
							postId: s.postId
						})
					},
					postPermalink: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.H)(e, {
							postId: s.postId
						})
					},
					reportFlowIsOpen: (e, t) => {
						let {
							comment: s
						} = t;
						return e.reportFlow.postOrCommentId === s.id
					},
					subreddit: A.q,
					subredditOrProfile: (e, t) => {
						let {
							comment: s
						} = t;
						return Object(J.T)(e, {
							postId: s.postId
						})
					}
				});
			class Me extends o.a.PureComponent {
				constructor() {
					super(...arguments), this.handleDistinguishToggle = () => {
						this.props.sendEvent(Object(se.a)("mod_distinguish_menu", this.props.comment.id)), this.props.onToggleDistinguishDropdown()
					}, this.handleEdit = () => this.props.handleEdit(this.props.comment.permalink), this.handleIgnoreReports = () => {
						this.props.onIgnoreReports(), this.sendCommentReportEvent(this.props.comment.ignoreReports ? "restore_reports" : "ignore_reports")
					}, this.handleGild = async () => {
						Object(F.d)(F.a.GildingFlow), this.props.onGildClick();
						const {
							clickGildEvent: e
						} = await Promise.resolve().then(s.bind(null, "./src/reddit/helpers/trackers/gild.ts"));
						this.props.sendEvent(e(this.props.comment.id))
					}, this.handleModActionsMenu = () => this.props.sendEvent(Object(se.a)("comment_mod_action_menu", this.props.comment.id)), this.handleOverflowMenuClick = () => this.props.sendEvent(Object(se.a)("comment_overflow_menu", this.props.comment.id)), this.handleDelete = () => this.props.handleDelete(), this.handleReply = () => this.props.handleReply(this.props.comment.permalink), this.handleRestrictedButtonClick = () => {
						this.props.onToggleReportsDropdown(), this.sendCommentModEventWithName("comment_report_menu")
					}, this.handleSave = () => {
						this.props.comment.isSaved ? this.props.sendEvent(Object(se.a)("unsave", this.props.comment.id)) : this.props.sendEvent(Object(se.a)("save", this.props.comment.id)), this.props.onToggleSave()
					}, this.sendCommentDistinguishEvent = e => this.props.sendEvent(Object(se.b)(e, this.props.comment.id)), this.sendCommentEventWithName = e => this.props.sendEvent(Object(U.b)(this.props.comment.postId, "comment_".concat(e))), this.sendCommentEventWithNameShare = () => this.sendCommentEventWithName("share"), this.sendCommentModEventWithName = e => this.props.sendEvent(Object(se.a)(e, this.props.comment.id)), this.sendCommentReportEvent = e => this.props.sendEvent(Object(se.e)(e, this.props.comment.id))
				}
				renderModTools() {
					const {
						comment: e,
						currentUser: t,
						language: s,
						moderatorPermissions: n,
						modModeEnabled: r,
						showModTools: i
					} = this.props, a = Object(H.a)(n), c = !!t && t.displayText === e.author;
					if (i && a) return r ? o.a.createElement(we, {
						comment: e,
						isCommentAuthor: c,
						language: s
					}) : o.a.createElement(Ee, {
						dropdownId: "".concat(e.id, "-profile-mod-actions-menu"),
						inCommentFlatlist: !0,
						onClick: this.handleModActionsMenu
					}, o.a.createElement(re.a, null), o.a.createElement(N.a, {
						comment: e,
						language: s,
						tooltipId: "".concat(e.id, "-profile-mod-actions-menu")
					}))
				}
				renderReportsDropdown() {
					const {
						comment: e,
						modModeEnabled: t,
						showModTools: s
					} = this.props, n = Object(R.a)(e);
					if (s && Object(R.c)(e) && !t) return o.a.createElement(L.b, {
						text: "".concat(n),
						onClick: this.handleRestrictedButtonClick,
						selected: this.props.activeTooltipId === Te(e.id),
						id: Te(e.id)
					}, o.a.createElement(B.a, {
						model: e,
						onIgnoreReports: this.handleIgnoreReports,
						tooltipId: Te(e.id)
					}), e.ignoreReports ? o.a.createElement(oe.a, null) : o.a.createElement(ie.a, null))
				}
				renderDistinguishDropdown() {
					const {
						comment: e,
						currentUser: t,
						moderatorPermissions: s,
						modModeEnabled: n,
						onDistinguishComment: r,
						showModTools: i
					} = this.props, a = Object(H.a)(s), c = !!t && t.displayText === e.author, d = !!t && t.isEmployee;
					if (i && c && !e.bannedBy && (d || a && !n)) return o.a.createElement(L.b, {
						onClick: this.handleDistinguishToggle,
						selected: this.props.activeTooltipId === Ne(e.id)
					}, o.a.createElement(L.a, null), o.a.createElement(k.a, {
						isAdminDistinguished: e.isAdmin,
						isDropdownOpen: this.props.activeTooltipId === Ne(e.id),
						isModDistinguished: e.isMod,
						isStickied: e.isStickied,
						isTopLevelComment: !e.parentId,
						isUserEmployee: d,
						isUserMod: a,
						onDistinguishComment: r,
						sendEventWithName: this.sendCommentDistinguishEvent,
						tooltipId: Ne(e.id)
					}))
				}
				render() {
					const {
						comment: e,
						className: t,
						commentsPageKey: s,
						currentUser: n,
						deleteComment: r,
						isLoggedIn: i,
						isPendingDeletion: a,
						moderatorPermissions: c,
						postIsLocked: d,
						postPermalink: l,
						subreddit: m,
						toggleDeleteCommentModal: p
					} = this.props, h = Object(H.a)(c), b = !!n && n.displayText === e.author, g = !d && !e.isLocked || h && i, x = n && e.isGildable;
					return o.a.createElement("div", {
						className: t
					}, o.a.createElement(Ie, null, g && o.a.createElement(Se, {
						onClick: this.handleReply,
						disabled: a
					}, o.a.createElement(u.c, null, "Reply")), x && o.a.createElement(Se, {
						onClick: this.handleGild
					}, o.a.createElement(u.c, null, "Give Award")), o.a.createElement($.a, {
						dropdownId: "".concat(s, "--").concat(e.id, "-comment-share-menu"),
						permalink: Object(y.a)(l, e.id),
						sendEventWithName: this.sendCommentEventWithName,
						subreddit: m
					}, o.a.createElement(Se, {
						onClick: this.sendCommentEventWithNameShare
					}, o.a.createElement(u.c, null, "share"))), this.renderReportsDropdown(), o.a.createElement(ye, {
						dropdownId: Le(s, e.id),
						onClick: this.handleOverflowMenuClick
					}, !b && !a && o.a.createElement(je, {
						displayText: Object(V.c)("report"),
						onClick: this.props.onReportClick
					}, o.a.createElement(ve, null)), o.a.createElement(je, {
						displayText: e.isSaved ? Object(V.c)("Unsave") : Object(V.c)("Save"),
						isSelected: e.isSaved,
						onClick: this.handleSave
					}, e.isSaved ? o.a.createElement(Ce, null) : o.a.createElement(Oe, null)), b && o.a.createElement(je, {
						displayText: Object(V.c)("edit"),
						onClick: this.handleEdit
					}, o.a.createElement(fe, null)), b && o.a.createElement(je, {
						displayText: Object(V.c)("delete"),
						onClick: this.handleDelete
					}, o.a.createElement(xe, null))), this.props.isConfirmModalOpen && o.a.createElement(T.a, {
						actionText: Object(V.c)("delete"),
						cancelActionText: Object(V.c)("keep"),
						headerText: Object(V.c)("Delete comment"),
						modalText: Object(V.c)("Are you sure you want to delete your comment?"),
						onConfirm: r,
						toggleModal: p,
						trackClick: C.a,
						withOverlay: !0
					}), this.renderModTools(), this.renderDistinguishDropdown()), this.props.reportFlowIsOpen && o.a.createElement(X.a, {
						withOverlay: !0,
						commentId: this.props.comment.id,
						overlayCustomStyles: X.b,
						postId: this.props.comment.postId
					}))
				}
			}
			var Re = _e(Object(r.b)(ke, (e, t) => {
					let {
						comment: s,
						commentsPageKey: n,
						language: o
					} = t;
					return {
						deleteComment: () => n && e(Object(j.db)(o, s.id, s.postId)),
						onDistinguishComment: (t, n) => e(Object(j.S)(s.id, t, n)),
						onIgnoreReports: () => e(Object(j.pb)(s.id)),
						onGildClick: () => e(Object(I.d)(s.id)),
						onReportClick: () => e(Object(_.j)(s.id)),
						onToggleDistinguishDropdown: () => e(Object(P.g)({
							tooltipId: Ne(s.id)
						})),
						onToggleReportsDropdown: () => e(Object(P.g)({
							tooltipId: Te(s.id)
						})),
						onToggleSave: () => e(Object(j.gb)(s.id)),
						handleDelete: () => {
							e(Object(S.i)(Pe(s.id))), e(Object(P.g)({
								tooltipId: Le(n, s.id)
							}))
						},
						handleEdit: t => {
							const n = Object(w.a)(s.postId, s.id, {}),
								o = {
									commentId: s.id,
									draftKey: Object(E.a)(G.c.edit, s.id),
									text: s.bodyMD || "",
									commentMode: s.media && s.media.rteMode,
									commentsPageKey: n
								};
							e(Object(W.a)(t)), e(Object(j.ab)(o))
						},
						handleReply: t => {
							const n = Object(w.a)(s.postId, s.id, {}),
								o = {
									parentCommentId: s.id,
									commentsPageKey: n
								};
							e(Object(W.a)(t)), e(Object(j.bb)(o))
						},
						toggleDeleteCommentModal: () => e(Object(S.i)(Pe(s.id)))
					}
				})(Object(ee.b)(Object(D.b)(Me)))),
				Be = s("./src/reddit/components/Comments/Comment/TopMeta/index.tsx"),
				De = s("./src/reddit/components/GildModal/getGildModalId.ts"),
				Ae = s("./src/reddit/components/GildModal/Loader.tsx"),
				Fe = s("./src/reddit/components/RichTextJson/index.tsx"),
				He = s("./src/reddit/helpers/getRichTextContent/index.ts"),
				We = s("./src/reddit/selectors/gild.ts"),
				Ue = s("./src/reddit/components/Comments/ProfileComment/index.m.less"),
				Ve = s.n(Ue);
			const Ge = ge.a.wrapped(Be.a, "TopMeta", Ve.a),
				ze = ge.a.div("ProfileCommentWrapper", Ve.a),
				Ke = ge.a.div("CommentBody", Ve.a),
				Ze = Object(r.b)(() => Object(i.c)({
					comment: (e, t) => Object(K.n)(e, t),
					gildModalIsOpen: (e, t) => {
						let {
							commentId: s
						} = t;
						const n = Object(De.b)(s);
						return Object(We.c)(e, n)
					},
					flair: K.e,
					language: Q.S
				})),
				Je = Object(d.b)(e => ({
					renderingObjectInfo: e.comment
				}));
			t.a = Ze(e => {
				const {
					comment: t,
					commentsPageKey: s,
					flair: n,
					gildModalIsOpen: r,
					isExpanded: i,
					language: d,
					showFlatlist: l,
					showModTools: m
				} = e, p = s => o.a.createElement(Fe.a, {
					className: s,
					content: Object(He.a)(t),
					rtJsonElementProps: Je(e)
				});
				return o.a.createElement(ze, {
					className: Object(a.a)({
						[Ve.a.isRemoved]: !!t.bannedBy
					})
				}, o.a.createElement(Ge, {
					collapsedBecauseCrowdControl: !1,
					collapsed: !1,
					comment: t,
					commentsPageKey: s,
					flair: n,
					language: d,
					renderedInOverlay: !1
				}), o.a.createElement("div", null, !t.isDeleted && o.a.createElement(Ke, null, i ? p() : o.a.createElement(f, {
					height: c.Db,
					isExpanded: i
				}, p)), !t.isDeleted && l && o.a.createElement(Re, {
					comment: t,
					commentsPageKey: s,
					language: d,
					showModTools: m
				})), r && o.a.createElement(Ae.a, null))
			})
		},
		"./src/reddit/components/CountrySort/index.m.less": function(e, t, s) {
			e.exports = {
				countrySort: "_1JaK9h42mq2UXvugO7VriI"
			}
		},
		"./src/reddit/components/Economics/TopTippers/CommentUsername/index.m.less": function(e, t, s) {
			e.exports = {
				badge: "_17rA6EEcc6RUglkZkHnYGO",
				container: "EorVQyBcpl50FYvpH-VTa"
			}
		},
		"./src/reddit/components/Economics/TopTippers/Icon/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/config.ts");
			const i = new Set(["t2_ktrtg"]),
				a = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
						t = arguments.length > 1 ? arguments[1] : void 0;
					return "".concat(r.a.assetPath, "/img/badges/topTippers/").concat(t, "/rank-").concat(e, ".png")
				};
			t.a = e => o.a.createElement("img", {
				className: e.className,
				src: a(e.rank, e.creatorId && i.has(e.creatorId) ? e.creatorId : e.subredditId)
			})
		},
		"./src/reddit/components/EmptyProfile/EmptyListing.m.less": function(e, t, s) {
			e.exports = {
				PrimaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				primaryText: "_2nAClDbEIBvjhmrBuWTQ4V",
				BackgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				backgroundPlaceholder: "_2GUSBISj9vzh-x940Nmq40",
				Wrapper: "_1aYPXfy_h5ZUIu0k_69eX1",
				wrapper: "_1aYPXfy_h5ZUIu0k_69eX1"
			}
		},
		"./src/reddit/components/EmptyProfile/forbidden.m.less": function(e, t, s) {
			e.exports = {
				container: "_1RecBWgyCRDIwbumVv_1eu",
				hideIcon: "_2ahl77ziD4jsIXBLc18_Hc",
				title: "_1MRoVpNql4popp175MVxl6",
				subtitle: "_3HccUrmIe42WfjCGgNekWK",
				buttons: "_1BrhZvjQw9AWs6w5xlkj2F"
			}
		},
		"./src/reddit/components/EmptyProfile/index.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/lessComponent.tsx"),
				l = s("./src/reddit/components/PostList/Placeholder.tsx"),
				m = s("./src/reddit/constants/postLayout.ts"),
				p = s("./src/reddit/components/EmptyProfile/EmptyListing.m.less"),
				u = s.n(p);
			const h = d.a.div("PrimaryText", u.a),
				b = d.a.wrapped(l.a, "BackgroundPlaceholder", u.a),
				g = d.a.div("Wrapper", u.a);
			var x = e => {
					let {
						children: t,
						className: s
					} = e;
					return o.a.createElement(g, {
						className: s
					}, o.a.createElement(b, {
						isLoading: !1,
						layout: m.g.Classic
					}), o.a.createElement(h, null, t))
				},
				v = s("./src/reddit/selectors/user.ts");
			const f = Object(i.c)({
				language: v.S
			});
			var O = Object(r.b)(f)(e => {
				let {
					className: t,
					language: s,
					profileName: n,
					timeSort: r = a.Ob.ALL
				} = e;
				return o.a.createElement(x, {
					className: t
				}, r === a.Ob.ALL ? Object(c.a)(s, "listings.noComments", {
					profileName: n
				}) : Object(c.a)(s, "listings.noRecentComments", {
					profileName: n
				}))
			});
			const C = Object(i.c)({
				language: v.S
			});
			var y = Object(r.b)(C)(e => {
					let {
						className: t,
						language: s,
						profileName: n,
						timeSort: r = a.Ob.ALL
					} = e;
					return o.a.createElement(x, {
						className: t
					}, r === a.Ob.ALL ? Object(c.a)(s, "listings.noPosts", {
						profileName: n
					}) : Object(c.a)(s, "listings.noRecentPosts", {
						profileName: n
					}))
				}),
				w = s("./src/reddit/components/Translated/index.tsx");
			var E = e => {
					let {
						className: t,
						verb: s
					} = e;
					return o.a.createElement(x, {
						className: t
					}, o.a.createElement(w.a, {
						msgId: "listings.privateEmpty",
						replacements: {
							verb: s
						}
					}))
				},
				j = s("./src/reddit/icons/svgs/Hide/index.tsx"),
				I = s("./src/reddit/components/EmptyProfile/forbidden.m.less"),
				S = s.n(I),
				_ = () => o.a.createElement("div", {
					className: S.a.container
				}, o.a.createElement(j.a, {
					className: S.a.hideIcon
				}), o.a.createElement("h3", {
					className: S.a.title
				}, o.a.createElement(w.a, {
					msgId: "profile.forbidden.title"
				})), o.a.createElement("p", {
					className: S.a.subtitle
				}, o.a.createElement(w.a, {
					msgId: "profile.forbidden.savedSubtitle"
				})));
			s.d(t, "b", (function() {
				return O
			})), s.d(t, "c", (function() {
				return y
			})), s.d(t, "d", (function() {
				return E
			})), s.d(t, "a", (function() {
				return _
			}))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				container: "_2ZvnlxtjA4YPENO_OgH0Pw",
				Title: "_6Sb8zEFmf-xF6UJ5SowYB",
				title: "_6Sb8zEFmf-xF6UJ5SowYB",
				DropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				dropdownContainer: "U2iuzTD5-OeYSFP8fg9ky",
				LayoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				layoutItem: "_1F02c6Yw0dfhdWwl99UrYn",
				LayoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				layoutItemIconWrapper: "_1WRDpeSLbiEc03Pp3Nh9H1",
				LayoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				layoutItemTextClassName: "PEJfazq4pplDD3Ti9Yaj3",
				Dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				dropdown: "_3R-HO3gwoomy9obdIHmDLx",
				selected: "_1fiOgAxLiYfEU41C1NOX9B",
				LayoutIcon: "_2ONLRjLuDplXKbcaS8dGe_",
				layoutIcon: "_2ONLRjLuDplXKbcaS8dGe_"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/postLayout.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/i18n/utils.ts"),
				f = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				O = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				C = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				y = s("./src/reddit/selectors/telemetry.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.m.less"),
				j = s.n(E);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = "view--layout--FUE",
				_ = "LayoutSwitch--picker",
				P = Object(a.a)(g.a),
				N = {
					[u.d.Card]: C.a,
					[u.d.Classic]: f.a,
					[u.d.Compact]: O.a
				},
				L = {
					[u.d.Card]: Object(v.c)("card"),
					[u.d.Classic]: Object(v.c)("classic"),
					[u.d.Compact]: Object(v.c)("compact")
				},
				T = Object(h.t)(),
				k = Object(i.c)({
					dropdownIsOpen: Object(w.b)(_),
					postLayout: h.M,
					redditStyle: h.B
				}),
				M = Object(r.b)(k, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					openDropdown: () => e(Object(m.g)({
						tooltipId: _
					}))
				}));
			class R extends o.a.Component {
				constructor() {
					super(...arguments), this.changeLayout = e => {
						const {
							onChange: t,
							onListingLayoutChange: s,
							sendEvent: n,
							subredditId: o
						} = this.props;
						t ? t(e) : (s(e, o), n(t => ({
							source: "layout_switch",
							action: "click",
							noun: e,
							screen: Object(y.screen)(t),
							subreddit: Object(y.subreddit)(t)
						})))
					}, this.renderItem = (e, t) => {
						const {
							layout: s,
							onLayoutClick: n,
							postLayout: r
						} = this.props, i = s || u.e[r], a = e === i, d = N[e];
						return o.a.createElement(x.b, I({}, t, {
							className: Object(c.a)(j.a.LayoutItem, {
								[j.a.selected]: a
							}),
							"data-layout": e,
							displayText: L[e],
							iconWrapperClassName: j.a.LayoutItemIconWrapper,
							isSelected: a,
							noHover: a,
							onClick: a ? void 0 : () => this.changeLayout(e),
							textClassName: j.a.LayoutItemTextClassName
						}), o.a.createElement(d, {
							className: j.a.LayoutIcon,
							onClick: a ? void 0 : n
						}))
					}, this.renderDropdown = e => {
						const {
							dropdownIsOpen: t
						} = this.props;
						return o.a.createElement(P, I({}, e, {
							className: j.a.Dropdown,
							isOpen: t,
							renderContentsHidden: !0,
							rowClassName: j.a.DropdownRow,
							rowIconClassName: j.a.DropdownRowIcon,
							rowSelectedClassName: j.a.DropdownRowSelected,
							tooltipId: _
						}), this.renderItem(u.d.Card), this.renderItem(u.d.Classic), this.renderItem(u.d.Compact))
					}
				}
				render() {
					const {
						className: e,
						layout: t,
						openDropdown: s,
						postLayout: n
					} = this.props, r = t || u.e[n];
					return o.a.createElement("div", {
						className: Object(c.a)(j.a.Container, e),
						id: S
					}, o.a.createElement("div", {
						className: j.a.DropdownContainer,
						onClick: s
					}, this.renderItem(r, {
						id: _,
						showDropdownTriangle: !0
					}), o.a.createElement(b.a.Consumer, null, this.renderDropdown)))
				}
			}
			t.a = T(M(Object(p.b)(Object(d.a)(R))))
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				SortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				sortDropdown: "tsl4Q1J90HdQwt_L2rJC9",
				SortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				sortButtons: "_2pUO1Sfe7WlIHvq6goN3Pz",
				SortLink: "M2Hk_S2yvXpsNPfZMBMur",
				sortLink: "M2Hk_S2yvXpsNPfZMBMur",
				selected: "_1s79QnBguPbckxiiPvFXGP",
				SortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				sortIcon: "_2bDYspp_i6ETGHhD6zIa94",
				SortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				sortLabel: "_1lwNBHmCQJObvqs1fXKSYR",
				SortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				sortOverflowButton: "_2yF1lH154qN6wYff1cVkh6",
				TimeSort: "GzkzdrqG-NjAYH7eKJan4",
				timeSort: "GzkzdrqG-NjAYH7eKJan4",
				TimeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				timeSortWrapper: "TT_m3EkILWCY4CQjHY9FQ",
				DropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				dropdownButton: "_3zv8UgDcsOix4lXOk2qE9v",
				DropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				dropdownRow: "_3LjUrsRA9MkUFLGB6ZCWaX",
				DropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				dropdownRowIcon: "_3HQa2czyzeTD5qteZcHyI2",
				DropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT",
				dropdownRowSelected: "_1yVJwSS9tASrkJ6R6wvXpT"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "wBtTDilkW_rtT2k5x3eie",
				container: "wBtTDilkW_rtT2k5x3eie",
				LayoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5",
				layoutSwitch: "_1g_Ul7rGanet-Y5dydxeq5"
			}
		},
		"./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/lib/listingSort/index.ts"),
				c = s("./src/reddit/actions/preferences.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				p = s("./src/reddit/components/GeneralCleanup/SortViewBar/LayoutSwitch/index.tsx"),
				u = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/reselect/es/index.js")),
				h = s("./src/lib/addQueryParams/index.ts"),
				b = s("./src/lib/constants/index.ts"),
				g = s("./src/reddit/components/ListingSort/index.tsx"),
				x = s("./src/reddit/components/TimeSort/index.tsx"),
				v = s("./src/reddit/constants/listingSorts.ts"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/helpers/path/index.ts"),
				C = s("./src/reddit/helpers/trackers/navigation.ts"),
				y = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				w = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/GeneralCleanup/SortViewBar/ListingSort/index.m.less"),
				j = s.n(E);

			function I() {
				return (I = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const S = new Set([b.N.CONTROVERSIAL, b.N.TOP]),
				_ = new Set([b.N.CONTROVERSIAL, b.N.RISING]),
				P = "ListingSort--Overflow",
				N = Object(l.t)({
					isFrontpage: l.z,
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				L = Object(u.a)((e, t) => t.sortOptions, (e, t) => t.isFrontpage, w.i, (e, t, s) => {
					if (e) return e;
					const n = [b.N.HOT, b.N.NEW, b.N.TOP, b.N.RISING];
					return t && s && n.unshift(b.N.BEST), n
				}),
				T = Object(u.c)({
					sortOptions: L
				});
			class k extends o.a.Component {
				constructor() {
					super(...arguments), this.changeSort = e => {
						this.props.onChange(e), this.props.sendEvent(Object(C.d)(e))
					}, this.getSortUrl = e => {
						const {
							baseUrl: t,
							isProfilePage: s
						} = this.props;
						return s ? Object(h.a)(t, {
							sort: e
						}) : Object(O.a)(t, "".concat(e, "/"))
					}, this.renderSort = e => {
						const {
							sort: t
						} = this.props;
						return o.a.createElement(f.a, {
							className: Object(i.a)(j.a.SortLink, e === t && j.a.selected),
							onClick: () => this.changeSort(e),
							to: this.getSortUrl(e),
							key: e
						}, o.a.createElement(g.a, {
							className: j.a.SortIcon,
							sort: e
						}), o.a.createElement("div", {
							className: j.a.SortLabel
						}, v.a[e]))
					}
				}
				render() {
					const {
						className: e,
						disabled: t,
						onTimeSortChange: s,
						sort: n,
						sortOptions: r,
						timeSort: a
					} = this.props, c = !t && S.has(n), d = _.has(n), l = r.filter(e => !_.has(e)), m = r.filter(e => _.has(e) && e !== n);
					return o.a.createElement(o.a.Fragment, null, o.a.createElement(g.d, I({}, this.props, {
						buttonClassName: j.a.DropdownButton,
						className: Object(i.a)(j.a.SortDropdown, e),
						rowClassName: j.a.DropdownRow,
						rowIconClassName: j.a.DropdownRowIcon,
						rowSelectedClassName: j.a.DropdownRowSelected,
						showTitle: !1
					})), o.a.createElement("div", {
						className: Object(i.a)(j.a.SortButtons, e)
					}, l.map(this.renderSort)), d && this.renderSort(n), c && o.a.createElement(x.a, {
						baseUrl: this.getSortUrl(n),
						buttonClassName: j.a.DropdownButton,
						className: j.a.TimeSort,
						listingSort: n,
						onChange: s,
						rowClassName: j.a.DropdownRow,
						rowSelectedClassName: j.a.DropdownRowSelected,
						timeSort: a || b.Pb,
						wrapperClassName: j.a.TimeSortWrapper
					}), m.length > 0 && o.a.createElement(g.d, I({}, this.props, {
						className: Object(i.a)(j.a.SortOverflow, e),
						dropdownId: P,
						rowClassName: j.a.DropdownRow,
						rowIconClassName: j.a.DropdownRowIcon,
						rowSelectedClassName: j.a.DropdownRowSelected,
						showTitle: !1,
						sortOptions: m
					}), o.a.createElement("button", {
						className: j.a.SortOverflowButton,
						id: P
					}, o.a.createElement(y.a, null))))
				}
			}
			var M = N(Object(r.b)(T)(Object(d.b)(k))),
				R = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.m.less"),
				B = s.n(R);
			const D = Object(l.t)({
					isProfilePage: l.H,
					pageLayer: e => e
				}),
				A = Object(r.b)(null, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const o = Object(a.c)({
									sort: t,
									timeSort: n
								});
								e(Object(c.G)(s, o))
							}
						}
					}
				});
			class F extends o.a.Component {
				constructor() {
					super(...arguments), this.blurListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !1
						})
					}, this.focusListingBroadcast = () => {
						m.a.setState({
							isListingFocused: !0
						})
					}, this.updateTimeSort = e => {
						this.props.updateSortPreference(this.props.sort, e)
					}
				}
				render() {
					const {
						baseUrl: e,
						className: t,
						countrySort: s,
						disabled: n = !1,
						isProfilePage: r,
						sort: a,
						sortOptions: c,
						subredditId: d,
						timeSort: l,
						updateSortPreference: m
					} = this.props;
					return o.a.createElement("div", {
						className: Object(i.a)(B.a.Container, t),
						onBlur: this.blurListingBroadcast,
						onFocus: this.focusListingBroadcast
					}, o.a.createElement(M, {
						baseUrl: e,
						disabled: n,
						geopopularSort: s,
						onChange: m,
						onTimeSortChange: this.updateTimeSort,
						sort: a,
						sortOptions: c,
						timeSort: l
					}), !r && o.a.createElement(p.a, {
						className: B.a.LayoutSwitch,
						subredditId: d
					}))
				}
			}
			t.a = D(A(Object(d.b)(F)))
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2cB6ysPhgaYtknebHcCXGH",
				container: "_2cB6ysPhgaYtknebHcCXGH",
				Component: "qQD1kUtHq2K4gyBqJrEnF",
				component: "qQD1kUtHq2K4gyBqJrEnF",
				"m-consider-sidebar": "gd0BrpRBoY73xB5YwvDWU",
				mConsiderSidebar: "gd0BrpRBoY73xB5YwvDWU"
			}
		},
		"./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/reddit/constants/componentSizes.ts"),
				d = s("./src/reddit/constants/postLayout.ts"),
				l = s("./src/reddit/constants/screenWidths.ts"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.m.less"),
				u = s.n(p),
				h = s("./src/lib/lessComponent.tsx");
			const b = Object(m.t)(),
				g = Object(i.c)({
					layout: m.M
				}),
				x = Object(r.b)(g);
			class v extends o.a.Component {
				constructor(e) {
					super(e), this.onClickIcon = e => {
						if (void 0 === this.state.left) {
							const e = this.ref.offsetLeft;
							this.setState({
								left: e
							})
						}
					}, this.onMouseEnter = () => {
						this.state.mouseInside || this.setState({
							mouseInside: !0
						})
					}, this.onMouseLeave = () => {
						this.state.mouseInside && this.setState({
							left: void 0,
							mouseInside: !1
						})
					}, this.ref = null, this.state = {
						left: void 0,
						mouseInside: !1
					}
				}
				componentWillReceiveProps(e) {
					0 !== e.offsetLeft - this.props.offsetLeft && (this.noTransition = !0)
				}
				componentDidUpdate() {
					this.noTransition && (this.noTransition = !1)
				}
				getDynamicStyleTags() {
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n          .".concat(u.a.Component, " {\n            --layoutNavigation-considerateNav-offsetLeft: ").concat(this.props.offsetLeft, "px;\n          }\n        ")
						}
					}), this.getLargeLayoutStyle())
				}
				getLargeLayoutStyle() {
					const e = this.props.offsetLeft + 2 * c.n + c.r + c.s,
						t = l.a - e,
						s = c.h - t,
						n = l.a + s + (this.props.bladeOpen ? c.a : 0);
					return this.props.layout !== d.g.Large ? null : o.a.createElement("style", {
						dangerouslySetInnerHTML: {
							__html: "\n            @media (min-width: ".concat(n, "px) {\n              .").concat(u.a.Component, " {\n                left: calc((100% + var(--layoutNavigation-considerateNav-offsetLeft) - ").concat(c.h + c.r + c.s, "px) / 2);\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.s, "px) / 2);\n              }\n\n              .").concat(u.a.Component, ".").concat(u.a["m-consider-sidebar"], " {\n                right: calc(((100% - var(--layoutNavigation-considerateNav-offsetLeft)) - ").concat(c.h + c.r + c.s, "px) / 2);\n              }\n            }\n          ")
						}
					})
				}
				render() {
					const e = Object(a.a)(this.props.className, u.a.Component, {
						[u.a["m-consider-sidebar"]]: this.props.considerSidebar
					});
					return o.a.createElement("div", {
						className: u.a.Container
					}, o.a.createElement("div", {
						className: e,
						onMouseEnter: this.onMouseEnter,
						onMouseLeave: this.onMouseLeave,
						onMouseMove: this.onMouseEnter,
						ref: e => this.ref = e,
						style: {
							left: this.state.left || void 0,
							transition: this.noTransition ? "initial" : void 0
						}
					}, this.getDynamicStyleTags(), this.props.render(this.onClickIcon)))
				}
			}
			t.a = b(x(h.a.wrapped(v, "Component", u.a)))
		},
		"./src/reddit/components/LayoutNavigation/Container.m.less": function(e, t, s) {
			e.exports = {
				BodyContainer: "_1levonEFuP4txDjgWG4Akb",
				bodyContainer: "_1levonEFuP4txDjgWG4Akb",
				SidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				sidebarPlaceholder: "_1CZxyZF9URlq6yGv7rGLFk",
				"m-collectionLayout": "_2QBg8k5_IhSEfaeA4P26Ix",
				mCollectionLayout: "_2QBg8k5_IhSEfaeA4P26Ix",
				InnerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				innerContainer: "_342tHkB-Rwz4OVqGfKgPab",
				Component: "_12Ewyh01Y1cMPB3Ri_F1C4",
				component: "_12Ewyh01Y1cMPB3Ri_F1C4"
			}
		},
		"./src/reddit/components/LayoutNavigation/Container.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/reddit/constants/componentSizes.ts"),
				c = s("./src/reddit/helpers/toggleBodyScroll/index.ts"),
				d = s("./src/reddit/layout/page/Listing/Content.tsx"),
				l = s("./src/reddit/selectors/structuredStyles.ts"),
				m = s("./src/reddit/selectors/userPrefs.ts"),
				p = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				u = s("./src/reddit/components/LayoutNavigation/Container.m.less"),
				h = s.n(u),
				b = s("./src/lib/lessComponent.tsx");
			const g = b.a.div("BodyContainer", h.a),
				x = b.a.div("SidebarPlaceholder", h.a),
				v = b.a.div("InnerContainer", h.a),
				f = Object(i.c)({
					bladeOpen: e => !!Object(l.j)(e),
					isSubscriptionsPinned: m.b
				}),
				O = Object(r.b)(f);
			class C extends o.a.Component {
				constructor(e) {
					super(e), this.state = {
						bodyScrollOffset: 0
					}
				}
				componentDidMount() {
					const e = () => {
						const {
							marginRight: e
						} = document.body.style;
						!!e != !!this.state.bodyScrollOffset && (e ? this.setState({
							bodyScrollOffset: Object(c.c)(document.body)
						}) : this.setState({
							bodyScrollOffset: 0
						}))
					};
					try {
						this.docObserver = new MutationObserver(e)
					} catch (t) {}
					this.docObserver && this.docObserver.observe(document.body, {
						attributes: !0
					})
				}
				componentWillUnmount() {
					this.docObserver && this.docObserver.disconnect()
				}
				render() {
					const {
						bladeOpen: e,
						considerPinnedSubscriptions: t = !0,
						containerClassName: s,
						isSubscriptionsPinned: n,
						considerSidebar: r = !0,
						onFocus: i,
						onBlur: c
					} = this.props;
					let l = 0;
					return n && !e && t && (l += a.v), 0 !== this.state.bodyScrollOffset && (l -= this.state.bodyScrollOffset), o.a.createElement("div", {
						className: this.props.className
					}, o.a.createElement(g, {
						onFocus: i,
						onBlur: c
					}, o.a.createElement(d.a, {
						fitPageToContent: !0
					}, o.a.createElement(v, {
						className: s
					}, o.a.createElement(p.a, {
						bladeOpen: e,
						considerSidebar: r,
						offsetLeft: l,
						render: this.props.render
					}))), r && o.a.createElement(x, null)))
				}
			}
			t.a = b.a.wrapped(O(C), "Component", h.a)
		},
		"./src/reddit/components/LayoutNavigation/index.m.less": function(e, t, s) {
			e.exports = {
				listingSort: "_3E6INjIzonJwM0r4N1QJYK",
				separator: "lMwVtd6llwkRVdjCNiCAl"
			}
		},
		"./src/reddit/components/LayoutNavigation/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/constants/index.ts"),
				c = s("./src/lib/listingSort/index.ts"),
				d = s("./src/reddit/components/LayoutNavigation/Container.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-router-redux/es/index.js")),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/lib/classNames/index.ts"),
				h = s("./src/reddit/components/ListingSort/index.tsx"),
				b = (s("./node_modules/core-js/modules/es6.regexp.split.js"), s("./src/higherOrderComponents/asTooltip.tsx")),
				g = s("./src/lib/lessComponent.tsx"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/app/strings/index.ts");
			const f = {
				[a.Lb.AllStates]: Object(v.e)("stateSorts.allStates"),
				[a.Lb.Alaska]: Object(v.e)("stateSorts.alaska"),
				[a.Lb.Alabama]: Object(v.e)("stateSorts.alabama"),
				[a.Lb.Arkansas]: Object(v.e)("stateSorts.arkansas"),
				[a.Lb.Arizona]: Object(v.e)("stateSorts.arizona"),
				[a.Lb.California]: Object(v.e)("stateSorts.california"),
				[a.Lb.Colorado]: Object(v.e)("stateSorts.colorado"),
				[a.Lb.Connecticut]: Object(v.e)("stateSorts.connecticut"),
				[a.Lb.DistrictOfColumbia]: Object(v.e)("stateSorts.districtOfColumbia"),
				[a.Lb.Delaware]: Object(v.e)("stateSorts.delaware"),
				[a.Lb.Florida]: Object(v.e)("stateSorts.florida"),
				[a.Lb.Georgia]: Object(v.e)("stateSorts.georgia"),
				[a.Lb.Hawaii]: Object(v.e)("stateSorts.hawaii"),
				[a.Lb.Iowa]: Object(v.e)("stateSorts.iowa"),
				[a.Lb.Idaho]: Object(v.e)("stateSorts.idaho"),
				[a.Lb.Illinois]: Object(v.e)("stateSorts.illinois"),
				[a.Lb.Indiana]: Object(v.e)("stateSorts.indiana"),
				[a.Lb.Kansas]: Object(v.e)("stateSorts.kansas"),
				[a.Lb.Kentucky]: Object(v.e)("stateSorts.kentucky"),
				[a.Lb.Louisiana]: Object(v.e)("stateSorts.louisiana"),
				[a.Lb.Massachusetts]: Object(v.e)("stateSorts.massachusetts"),
				[a.Lb.Maryland]: Object(v.e)("stateSorts.maryland"),
				[a.Lb.Maine]: Object(v.e)("stateSorts.maine"),
				[a.Lb.Michigan]: Object(v.e)("stateSorts.michigan"),
				[a.Lb.Minnesota]: Object(v.e)("stateSorts.minnesota"),
				[a.Lb.Missouri]: Object(v.e)("stateSorts.missouri"),
				[a.Lb.Mississippi]: Object(v.e)("stateSorts.mississippi"),
				[a.Lb.Montana]: Object(v.e)("stateSorts.montana"),
				[a.Lb.NorthCarolina]: Object(v.e)("stateSorts.northCarolina"),
				[a.Lb.NorthDakota]: Object(v.e)("stateSorts.northDakota"),
				[a.Lb.Nebraska]: Object(v.e)("stateSorts.nebraska"),
				[a.Lb.NewHampshire]: Object(v.e)("stateSorts.newHampshire"),
				[a.Lb.NewJersey]: Object(v.e)("stateSorts.newJersey"),
				[a.Lb.NewMexico]: Object(v.e)("stateSorts.newMexico"),
				[a.Lb.Nevada]: Object(v.e)("stateSorts.nevada"),
				[a.Lb.NewYork]: Object(v.e)("stateSorts.newYork"),
				[a.Lb.Ohio]: Object(v.e)("stateSorts.ohio"),
				[a.Lb.Oklahoma]: Object(v.e)("stateSorts.oklahoma"),
				[a.Lb.Oregon]: Object(v.e)("stateSorts.oregon"),
				[a.Lb.Pennsylvania]: Object(v.e)("stateSorts.pennsylvania"),
				[a.Lb.RhodeIsland]: Object(v.e)("stateSorts.rhodeIsland"),
				[a.Lb.SouthCarolina]: Object(v.e)("stateSorts.southCarolina"),
				[a.Lb.SouthDakota]: Object(v.e)("stateSorts.southDakota"),
				[a.Lb.Tennessee]: Object(v.e)("stateSorts.tennessee"),
				[a.Lb.Texas]: Object(v.e)("stateSorts.texas"),
				[a.Lb.Utah]: Object(v.e)("stateSorts.utah"),
				[a.Lb.Virginia]: Object(v.e)("stateSorts.virginia"),
				[a.Lb.Vermont]: Object(v.e)("stateSorts.vermont"),
				[a.Lb.Washington]: Object(v.e)("stateSorts.washington"),
				[a.Lb.Wisconsin]: Object(v.e)("stateSorts.wisconsin"),
				[a.Lb.WestVirginia]: Object(v.e)("stateSorts.westVirginia"),
				[a.Lb.Wyoming]: Object(v.e)("stateSorts.wyoming")
			};
			var O = s("./src/reddit/contexts/PageLayer/index.tsx"),
				C = s("./src/reddit/contexts/Tooltip.ts"),
				y = s("./src/reddit/controls/Dropdown/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/Row.tsx"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/components/StateSort/index.m.less"),
				S = s.n(I);

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = g.a.wrapped(y.a, "_Dropdown", S.a),
				N = Object(b.a)(P),
				L = e => {
					return e.indexOf("_") > 0 && k(e) === a.v.UnitedStates
				},
				T = e => {
					if (L(e)) {
						return e.split("_")[1]
					}
					return a.Lb.AllStates
				},
				k = e => {
					if (e && e.indexOf("_") > 0) {
						return e.split("_")[0]
					}
					return e
				},
				M = e => {
					const t = k(e),
						s = T(e);
					return L(e) ? "".concat(t, "_").concat(s) : t
				},
				R = Object(O.t)(),
				B = Object(i.c)({
					dropdownIsOpen: Object(E.b)("StateSort--StateSortPicker"),
					language: j.S
				}),
				D = Object(r.b)(B, e => ({
					onOpenDropdown: () => e(Object(p.g)({
						tooltipId: "StateSort--StateSortPicker"
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(a.v.UnitedStates + "_" + s))
					}
				}));
			var A = g.a.wrapped(R(D(e => {
					const t = "".concat(e.baseUrl, "?").concat(x.g, "=").concat(a.v.UnitedStates);
					return o.a.createElement("div", {
						className: e.className,
						onClick: e.onOpenDropdown
					}, o.a.createElement(h.c, {
						disabled: e.disabled
					}, o.a.createElement(h.b, {
						displayText: f[e.sort](e.language),
						id: "StateSort--StateSortPicker",
						showDropdownTriangle: !0
					})), o.a.createElement(C.a.Consumer, null, s => o.a.createElement(N, _({
						isOpen: e.dropdownIsOpen,
						tooltipId: "StateSort--StateSortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(a.Lb).map(s => o.a.createElement("div", {
						onClick: () => e.onClickLink((e => e === a.Lb.AllStates ? t : "".concat(t, "_").concat(e))(a.Lb[s]), M(a.Lb[s]))
					}, o.a.createElement(w.b, {
						displayText: f[a.Lb[s]](e.language),
						isSelected: e.sort === s
					}))))))
				})), "Component", S.a),
				F = s("./src/reddit/constants/countrySorts.ts"),
				H = s("./src/reddit/components/CountrySort/index.m.less"),
				W = s.n(H);

			function U() {
				return (U = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const V = Object(O.t)(),
				G = Object(i.c)({
					dropdownIsOpen: Object(E.b)("CountrySort--CountrySortPicker"),
					language: j.S
				});
			var z = V(Object(r.b)(G, e => ({
					onOpenDropdown: t => e(Object(p.g)({
						tooltipId: t
					})),
					onClickLink: (t, s) => {
						e(Object(m.b)(t)), e(Object(l.t)(s))
					}
				}))(e => {
					const t = k(e.sort),
						s = T(e.sort),
						n = "".concat(e.baseUrl, "?").concat(x.g, "=");
					return o.a.createElement(o.a.Fragment, null, o.a.createElement("div", {
						className: Object(u.a)(W.a.countrySort, e.className),
						onClick: () => e.onOpenDropdown("CountrySort--CountrySortPicker")
					}, o.a.createElement(h.c, {
						disabled: e.disabled
					}, o.a.createElement(h.b, {
						displayText: (() => t in F.a ? F.a[t] : F.a[a.v.Everywhere])(),
						id: "CountrySort--CountrySortPicker",
						showDropdownTriangle: !0
					})), o.a.createElement(C.a.Consumer, null, s => o.a.createElement(N, U({
						isOpen: e.dropdownIsOpen,
						tooltipId: "CountrySort--CountrySortPicker"
					}, s, {
						renderContentsHidden: !0
					}), Object.keys(a.v).map(s => o.a.createElement("div", {
						key: s,
						onClick: () => e.onClickLink("".concat(n).concat(M(a.v[s])), a.v[s])
					}, o.a.createElement(w.b, {
						displayText: F.a[a.v[s]],
						isSelected: t === s
					})))))), t === a.v.UnitedStates && o.a.createElement(A, {
						baseUrl: e.baseUrl,
						disabled: e.disabled,
						sort: s
					}))
				})),
				K = s("./src/reddit/components/TimeSort/index.tsx"),
				Z = s("./src/reddit/components/TrackingHelper/index.tsx"),
				J = s("./src/reddit/constants/page.ts"),
				q = s("./src/reddit/controls/LayoutSwitch/index.tsx"),
				Q = s("./src/reddit/helpers/isListingFocused/index.tsx"),
				Y = s("./src/reddit/components/LayoutNavigation/index.m.less"),
				X = s.n(Y);
			const $ = Object(O.t)({
					isProfilePage: O.H,
					pageLayer: e => e
				}),
				ee = Object(i.c)({
					currentUser: j.i,
					language: j.S,
					isPopularListing: O.D,
					redditStyle: O.B
				}),
				te = Object(r.b)(ee, (e, t) => {
					let {
						subredditId: s
					} = t;
					return {
						updateSortPreference: (t, n) => {
							if (s) {
								const o = Object(c.c)({
									sort: t,
									timeSort: n
								});
								e(Object(l.G)(s, o))
							}
						}
					}
				});
			t.a = $(te(Object(Z.b)(e => {
				const {
					disabled: t = !1,
					isPopularListing: s,
					isProfilePage: n
				} = e, r = e.sort === a.N.TOP || e.sort === a.N.CONTROVERSIAL, i = s && e.countrySort && e.sort === a.N.HOT, c = e => {
					Q.a.setState({
						isListingFocused: e
					})
				};
				return o.a.createElement(d.a, {
					className: e.className,
					onFocus: () => c(!0),
					onBlur: () => c(!1),
					render: s => o.a.Children.toArray([n ? null : o.a.createElement(q.a, {
						onLayoutClick: s,
						subredditId: e.subredditId
					}), n ? null : o.a.createElement("div", {
						className: X.a.separator
					}), o.a.createElement(h.d, {
						className: X.a.listingSort,
						baseUrl: e.baseUrl,
						disabled: t,
						geopopularSort: e.countrySort,
						onChange: e.updateSortPreference,
						sort: e.sort,
						sortOptions: e.sortOptions
					}), !t && r && [o.a.createElement(K.a, {
						baseUrl: "".concat(e.baseUrl, "/").concat(e.sort),
						listingSort: e.sort,
						onChange: t => e.updateSortPreference(e.sort, t),
						timeSort: e.timeSort || a.Pb
					})], i && o.a.createElement(z, {
						baseUrl: e.isPopularListing ? "/r/".concat(J.g, "/") : "",
						disabled: t,
						sort: e.countrySort
					})])
				})
			})))
		},
		"./src/reddit/components/ListingSort/ListingSortIcon.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/lib/constants/index.ts"),
				a = s("./src/reddit/icons/svgs/Best/index.m.less"),
				c = s.n(a);
			var d = e => o.a.createElement("svg", {
					className: Object(r.a)(c.a.best, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					d: "M18.06,3a1,1,0,0,0-1-1A11.16,11.16,0,0,0,9.11,5.29L6.72,7.68A4.45,4.45,0,0,0,4.33,7,4.5,4.5,0,0,0,1.15,8.3a.5.5,0,0,0,0,.71L4,11.84l4.25,4.24,2.83,2.83h0a.48.48,0,0,0,.7,0,4.49,4.49,0,0,0,.62-5.57L14.76,11A11.15,11.15,0,0,0,18.06,3ZM13.47,9.41a2,2,0,0,1-2.88-2.77l.05,0a2,2,0,0,1,2.83,2.82Z"
				}), o.a.createElement("path", {
					d: "M3.21,14.73h0A3.89,3.89,0,0,0,2.06,17.5a.5.5,0,0,0,.5.5,4,4,0,0,0,2.83-1.21,1.5,1.5,0,1,0-2.18-2.06Z"
				})),
				l = s("./src/reddit/icons/svgs/Controversial/index.m.less"),
				m = s.n(l);
			var p = e => o.a.createElement("svg", {
					className: Object(r.a)(m.a.controversial, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "16 0 7.25 0 3.5 10.108 8.5 10.108 4.475 20 16 8 11 8"
				}))),
				u = s("./src/reddit/icons/svgs/Hot/index.m.less"),
				h = s.n(u);
			var b = e => o.a.createElement("svg", {
					className: Object(r.a)(h.a.icon, e.className),
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, o.a.createElement("title", null, "Hot"), o.a.createElement("path", {
					d: "M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"
				})),
				g = s("./src/reddit/icons/svgs/New/index.m.less"),
				x = s.n(g);
			var v = e => o.a.createElement("svg", {
					className: Object(r.a)(x.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("polygon", {
					fill: "inherit",
					points: "17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
				}))),
				f = s("./src/reddit/icons/svgs/Rising/index.m.less"),
				O = s.n(f);
			var C = e => o.a.createElement("svg", {
					className: Object(r.a)(O.a.icon, e.className),
					viewBox: "0 0 20 20",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("g", null, o.a.createElement("path", {
					fill: "inherit",
					d: "M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
				}))),
				y = s("./src/reddit/icons/svgs/Top/index.tsx"),
				w = s("./src/reddit/controls/Dropdown/index.m.less"),
				E = s.n(w);
			const j = {
				[i.N.BEST]: d,
				[i.N.HOT]: b,
				[i.N.NEW]: v,
				[i.N.CONTROVERSIAL]: p,
				[i.N.TOP]: y.a,
				[i.N.RISING]: C
			};
			t.a = e => {
				let {
					className: t,
					sort: s
				} = e;
				const n = j[s];
				return n ? o.a.createElement(n, {
					className: Object(r.a)(t, E.a.iconStyles)
				}) : null
			}
		},
		"./src/reddit/components/ListingSort/index.m.less": function(e, t, s) {
			e.exports = {
				Dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				dropdown: "_3RzIwmCawx9KWuyuEKa-3s",
				DropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				dropdownTriangle: "_3zQzIg3Hu-gfh_XW8Eh7N3",
				Title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				title: "_3ZXcN-Nu8QmOxd_hGrsjKD",
				Row: "_1gYorLdXyKMUS-i9loCkHd",
				row: "_1gYorLdXyKMUS-i9loCkHd",
				SortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				sortWrapper: "_3-LItr7eURRBwGwCaMD0eB",
				isDisabled: "_1BlN3qzijbBTtkKxs6CX-N",
				DropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				dropdownRowDisabled: "_3BSqU_xxc6w7390EfssLhp",
				ListingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				listingSort: "_1oAH8WzvQU6SeYEsM1msMu",
				ListingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW",
				listingSortIcon: "_2_BnLcYdo9EaJjSVrN0kdW"
			}
		},
		"./src/reddit/components/ListingSort/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return T
			})), s.d(t, "b", (function() {
				return M
			})), s.d(t, "c", (function() {
				return R
			}));
			s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/higherOrderComponents/asTooltip.tsx"),
				c = s("./src/lib/addQueryParams/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/components/TrackingHelper/index.tsx"),
				u = s("./src/reddit/constants/listingSorts.ts"),
				h = s("./src/reddit/contexts/PageLayer/index.tsx"),
				b = s("./src/reddit/contexts/Tooltip.ts"),
				g = s("./src/reddit/controls/Dropdown/index.tsx"),
				x = s("./src/reddit/controls/Dropdown/Row.tsx"),
				v = s("./src/reddit/helpers/path/index.ts"),
				f = s("./src/reddit/helpers/trackers/navigation.ts"),
				O = s("./src/reddit/i18n/components.tsx"),
				C = s("./src/reddit/icons/svgs/Dropdown/index.tsx"),
				y = s("./src/reddit/selectors/tooltip.ts"),
				w = s("./src/reddit/selectors/user.ts"),
				E = s("./src/reddit/components/ListingSort/ListingSortIcon.tsx"),
				j = s("./src/reddit/components/ListingSort/index.m.less"),
				I = s.n(j),
				S = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const N = "ListingSort--SortPicker",
				L = Object(a.a)(S.a.wrapped(g.a, "Dropdown", I.a)),
				T = S.a.wrapped(E.a, "ListingSortIcon", I.a),
				k = (S.a.wrapped(C.b, "DropdownTriangle", I.a), S.a.div("Title", I.a)),
				M = S.a.wrapped(e => o.a.createElement(x.b, _({}, e, {
					noHover: !0,
					isSelected: !1
				})), "Row", I.a),
				R = e => {
					var {
						disabled: t
					} = e, s = P(e, ["disabled"]);
					return o.a.createElement("div", _({}, s, {
						className: Object(d.a)(I.a.SortWrapper, s.className, {
							[I.a.isDisabled]: t
						})
					}))
				},
				B = S.a.div("DropdownRowDisabled", I.a),
				D = Object(h.t)({
					isFrontpage: h.z,
					isProfilePage: h.H,
					pageLayer: e => e
				}),
				A = Object(i.c)({
					user: w.i,
					dropdownIsOpen: (e, t) => Object(y.b)(t.dropdownId || N)(e),
					language: w.S
				}),
				F = Object(r.b)(A, (e, t) => {
					let {
						dropdownId: s,
						pageLayer: n
					} = t;
					return {
						onOpenDropdown: () => e(Object(m.g)({
							tooltipId: s || N
						}))
					}
				});
			t.d = S.a.wrapped(D(F(Object(p.b)(e => o.a.createElement("div", {
				className: e.className,
				onClick: e.onOpenDropdown
			}, !1 !== e.showTitle && o.a.createElement(k, null, o.a.createElement(O.c, null, "Sort")), o.a.createElement(R, {
				disabled: e.disabled
			}, e.children || o.a.createElement(M, {
				className: e.buttonClassName,
				displayText: u.a[e.sort],
				id: e.dropdownId || N,
				showDropdownTriangle: !0
			}, o.a.createElement(T, {
				sort: e.sort
			}))), o.a.createElement(b.a.Consumer, null, t => o.a.createElement(L, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: e.dropdownId || N
			}, t, {
				renderContentsHidden: !0
			}), e.disabled ? o.a.createElement(B, null, o.a.createElement(O.c, null, "Coming soon")) : (e.sortOptions || ((e, t) => {
				const s = [l.N.HOT, l.N.NEW, l.N.TOP, l.N.RISING];
				return e && t && s.unshift(l.N.BEST), s
			})(e.isFrontpage, e.user)).map(t => o.a.createElement(x.b, {
				className: Object(d.a)(e.rowClassName, e.sort === t ? e.rowSelectedClassName : void 0),
				displayText: u.a[t],
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(f.d)(t))
				},
				href: e.isProfilePage ? Object(c.a)(e.baseUrl, {
					sort: t
				}) : Object(v.a)(e.baseUrl, "".concat(t, "/")),
				isSelected: e.sort === t,
				key: t
			}, o.a.createElement(T, {
				className: e.rowIconClassName,
				sort: t
			}))))))))), "ListingSort", I.a)
		},
		"./src/reddit/components/MiniCardPost/Flatlist/index.m.less": function(e, t, s) {
			e.exports = {
				flatlistContainer: "_3TV1zxvLEbF8phHfZ17hyU",
				shareIcon: "_2-No1ECt3Twm8oRh3GhL5T",
				shareMenu: "_1Y9kO8WxKheHpQbgAgYk9P",
				shareText: "_3ZNfZZMmSFZUWWm-nHK327",
				HorizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				horizontalVotes: "c9IwhuiqPbgYHi-fLlAUH",
				score: "_3O9hIPB_M3zadlrD7rXaEG",
				ShareButton: "_3VIaRwebVBflQjPct1Wz6l",
				shareButton: "_3VIaRwebVBflQjPct1Wz6l"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_35Bx3s8VlFspHwPlg1MaHt",
				subredditNameLink: "_20yDd2SHTuiJkQnTV4zehJ",
				subredditIcon: "_32Ni_aGBoPzRxNSy5eC_ck",
				CrosspostIcon: "y4hzYjyQqdKpwuDyNnLeW",
				crosspostIcon: "y4hzYjyQqdKpwuDyNnLeW"
			}
		},
		"./src/reddit/components/MiniCardPost/MetaLine/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/components/QuarantinedLabel/index.tsx"),
				c = s("./src/reddit/components/SubredditIcon/index.tsx"),
				d = s("./src/reddit/components/SubredditNameLink/index.tsx"),
				l = s("./src/reddit/helpers/name/index.ts"),
				m = s("./src/reddit/icons/fonts/Crosspost/index.tsx"),
				p = s("./src/reddit/components/MiniCardPost/MetaLine/index.m.less"),
				u = s.n(p);
			const h = s("./src/lib/lessComponent.tsx").a.wrapped(m.a, "CrosspostIcon", u.a);
			t.a = e => {
				const {
					className: t,
					crosspostSubredditOrProfile: s,
					hideNSFWPref: n,
					language: m,
					post: p,
					subredditOrProfile: b
				} = e;
				return o.a.createElement("div", {
					className: Object(i.a)(u.a.container, t)
				}, o.a.createElement(d.a, {
					className: u.a.subredditNameLink,
					onMouseDown: e.onCommunityClick,
					to: b.url
				}, o.a.createElement(c.b, {
					className: u.a.subredditIcon,
					shouldHideNsfwIcon: n,
					subredditOrProfile: b
				}), o.a.createElement("span", null, b.displayText)), ((e, t, s) => {
					if (s) return o.a.createElement("div", {
						role: "img",
						"aria-label": Object(r.a)(e, "posts.crosspostedByFrom", {
							by: Object(l.c)(t),
							from: s.displayText
						})
					}, o.a.createElement(h, null))
				})(m, p.author, s), b && b.isQuarantined && o.a.createElement(a.a, null))
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1HoOlmppFDBC4s5XWY-Qcd",
				thumbnail: "_1XZerRCUnHmbtEN1gqPwnw",
				thumbnailContainer: "_3fS9xUAmm4zWkzfM1ce7Jk",
				thumbnailLinkIcon: "_2JCMpuchwaEmL9S0QsJ9Ok",
				thumbnailLinkText: "_2vJWD7kgxbAQRGL328NxHg",
				thumbnailOutboundLinkIcon: "_4GTpE-l9TNXVeix3ZOE-_"
			}
		},
		"./src/reddit/components/MiniCardPost/Thumbnail/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/Thumbnail/index.tsx"),
				a = s("./src/reddit/components/MiniCardPost/Thumbnail/index.m.less"),
				c = s.n(a);
			t.a = e => {
				const {
					source: t
				} = e.post;
				return o.a.createElement("div", {
					className: Object(r.a)(c.a.container, e.className)
				}, o.a.createElement(i.a, {
					className: Object(r.a)(c.a.thumbnail, e.thumbnailClassName),
					containerClassName: Object(r.a)(c.a.thumbnailContainer, e.thumbnailContainerClassName),
					linkIconClassName: Object(r.a)(c.a.thumbnailLinkIcon, e.thumbnailLinkIconClassName),
					linkTextClassName: c.a.thumbnailLinkText,
					outboundLinkIconClassName: c.a.thumbnailOutboundLinkIcon,
					post: e.post,
					showContentType: e.showPlaceholderContentType,
					templatePlaceholderImage: e.templatePlaceholderImage,
					text: t ? t.url : "",
					usePreview: e.usePreview
				}))
			}
		},
		"./src/reddit/components/MiniCardPost/index.m.less": function(e, t, s) {
			e.exports = {
				flexSpacer: "_3FMwep96W9D-wkC9u2Pc0L",
				backgroundWrapper: "_2yVioz8mzc0YBV2JyNXzRj",
				innerContainer: "_3mrITcnODXcvMf9oonBXeD",
				metaLine: "_20xUo-97VDWkydk8rn74dR",
				media: "_1qlC_L_v_Aher9NBsvBIMR",
				mediaWrapper: "_1UmG626eNsebZt_eyKdDL4",
				postTitleCompact: "_3wSK3_gZiuaUZtqPKu9z3M",
				mediaImageBox: "Xqhz61TRPUo_ek11O2hcV",
				mediaImageBoxContentImage: "_2t6Z9GgOnrWn2b5Ndv_T5K",
				postContainer: "_3Ud8ZDEFc0kXFg6R9KhDPS"
			}
		},
		"./src/reddit/components/MiniCardPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/lib/isUrl/index.ts"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/actions/postFlair.ts"),
				p = s("./src/reddit/actions/tooltip.ts"),
				u = s("./src/reddit/components/JSAPIContainers/index.tsx"),
				h = s("./src/reddit/components/Media/index.tsx"),
				b = s("./src/reddit/components/PostBackgroundWrapper/index.tsx"),
				g = s("./src/reddit/components/PostContainer/index.tsx"),
				x = s("./src/reddit/components/PostFlairPicker/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/contexts/PageLayer/index.tsx"),
				O = s("./src/reddit/helpers/hasModFlairPermissions/index.ts"),
				C = s("./src/reddit/helpers/hasModPostPermissions/index.ts"),
				y = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				w = s("./src/reddit/models/Media/index.ts"),
				E = s("./src/reddit/models/Vote/index.ts"),
				j = s("./src/reddit/selectors/activeModalId.ts"),
				I = s("./src/reddit/selectors/moderatorPermissions.ts"),
				S = s("./src/reddit/selectors/postFlair.ts"),
				_ = s("./src/reddit/selectors/posts.ts"),
				P = s("./src/reddit/selectors/user.ts"),
				N = s("./src/reddit/components/CommentsLink/index.tsx"),
				L = s("./src/reddit/components/CompactPost/HorizontalVotes/index.tsx"),
				T = s("./src/reddit/components/Flatlist/index.tsx"),
				k = s("./src/reddit/components/ModActionsMenu/index.tsx"),
				M = s("./src/reddit/components/PostModModeDropdown/index.tsx"),
				R = s("./src/reddit/components/PostOverflowMenu/index.tsx"),
				B = s("./src/reddit/components/ShareMenu/index.tsx"),
				D = s("./src/reddit/components/TrackingHelper/index.tsx"),
				A = s("./src/reddit/constants/postLayout.ts"),
				F = s("./src/reddit/helpers/trackers/post.ts"),
				H = s("./src/reddit/i18n/components.tsx"),
				W = s("./src/reddit/icons/fonts/Share/index.tsx"),
				U = s("./src/reddit/models/User/index.ts"),
				V = s("./src/reddit/components/MiniCardPost/Flatlist/index.m.less"),
				G = s.n(V),
				z = s("./src/lib/lessComponent.tsx");
			const K = "-MiniCardModMenu",
				Z = "-MiniCardOverflowMenu",
				J = "-MiniCardShareMenu",
				q = z.a.wrapped(L.a, "HorizontalVotes", G.a),
				Q = z.a.button("ShareButton", G.a),
				Y = Object(f.t)({
					currentProfileName: f.h,
					isCommentPermalink: f.v,
					isCommentsPage: f.w,
					isProfilePostListing: f.I,
					pageLayer: e => e
				}),
				X = Object(i.c)({
					layout: f.M,
					subreddit: f.q
				});
			var $ = Y(Object(r.b)(X, {})(Object(D.b)(e => {
					const {
						currentProfileName: t,
						className: s,
						currentUser: n,
						handleVote: r,
						hasModFlairPerms: i,
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						isProfilePostListing: p,
						isSticky: u,
						language: h,
						layout: b,
						modModeEnabled: g,
						onCommentsClick: x,
						post: v,
						sendEvent: f,
						showEditFlair: O,
						showEditPost: C,
						subreddit: y
					} = e, w = e => f(Object(F.f)(v.id, e)), E = v.postId, j = Object(T.d)(K, v.id, m, u), I = !!n && Object(U.f)(n) === v.author;
					return o.a.createElement("div", {
						className: Object(a.a)(G.a.flatlistContainer, s)
					}, o.a.createElement(q, {
						compact: !1,
						model: v,
						onVoteClick: r,
						scoreClassName: G.a.score
					}), o.a.createElement(N.a, {
						hasModPostPerms: c,
						isCommentsPage: d,
						isCommentPermalink: l,
						isOverlay: m,
						postId: v.id,
						modModeEnabled: g,
						numComments: v.numComments,
						type: A.g.Compact,
						onClick: x
					}), o.a.createElement(B.a, {
						className: G.a.shareMenu,
						dropdownId: Object(T.d)(J, v.id, m, u),
						permalink: v.permalink,
						post: v,
						sendEventWithName: w,
						subreddit: y
					}, o.a.createElement(Q, null, o.a.createElement(W.a, {
						className: G.a.shareIcon
					}), o.a.createElement("span", {
						className: G.a.shareText
					}, o.a.createElement(H.c, null, "share")))), c && o.a.createElement(k.a, {
						dropdownId: j,
						onClick: () => w("post_mod_action_menu")
					}, o.a.createElement(T.b, {
						className: G.a.modActionsIcon
					}), o.a.createElement(M.a, {
						canEditFlair: i && !!O,
						hasModPostPerms: c,
						isOverlay: !!m,
						isPostAuthor: I,
						language: h,
						modModeEnabled: g,
						post: v,
						tooltipId: j
					})), o.a.createElement(R.g, {
						currentProfileName: t,
						isCommentsPage: d,
						isOverlay: !!m,
						isProfilePostListing: p,
						layout: b,
						pageLayer: e.pageLayer,
						permalink: v.permalink,
						postId: E,
						dropdownId: Object(T.d)(Z, v.id, m, u),
						isFixed: u,
						sendEvent: f,
						showEditPost: !!C,
						showEditFlair: !!O,
						useFlatlistBreakpoints: Object(R.h)({
							editPost: !1,
							save: !1,
							hide: !1,
							report: !1
						})
					}))
				}))),
				ee = s("./src/reddit/components/MiniCardPost/MetaLine/index.tsx"),
				te = s("./src/reddit/components/MiniCardPost/Thumbnail/index.tsx"),
				se = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				ne = s.n(se),
				oe = s("./src/reddit/components/MiniCardPost/index.m.less"),
				re = s.n(oe);
			s.d(t, "a", (function() {
				return ae
			}));
			const ie = Object(f.t)(),
				ae = Object(r.b)(() => Object(i.c)({
					activeModalId: j.a,
					autoplayPref: P.b,
					crosspostRoot: _.c,
					crosspostSubredditOrProfile: _.d,
					currentUser: P.i,
					flairStyleTemplate: f.Q,
					hideNSFWPref: P.z,
					isActive: _.g,
					language: P.S,
					moderatorPermissions: I.i,
					modModeEnabled: f.O,
					post: _.I,
					showEditFlair: S.a,
					subredditOrProfile: _.T,
					userIsOp: P.jb
				}), (e, t) => {
					let {
						postId: s
					} = t;
					return {
						dispatchFlairChanged: t => {
							let {
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							} = t;
							return e(Object(m.h)({
								post: s,
								previewFlair: n,
								selectedTemplateId: o
							}))
						},
						handleVote: t => {
							const n = t === E.a.upvoted ? Object(l.N)(s) : Object(l.o)(s);
							e(n)
						},
						onIgnoreReports: () => e(Object(l.L)(s)),
						onOpenReportsDropdown: t => e(Object(p.g)({
							tooltipId: t
						}))
					}
				}, (e, t, s) => Object.assign({}, s, e, t, {
					onFlairChanged: s => {
						let {
							previewFlair: n,
							selectedTemplateId: o
						} = s;
						return t.dispatchFlairChanged({
							post: e.post,
							previewFlair: n,
							selectedTemplateId: o
						})
					}
				}));
			t.b = ie(ae(Object(c.a)(e => {
				const {
					autoplayPref: t,
					availableWidth: s,
					className: n,
					crosspostRoot: r,
					crosspostSubredditOrProfile: i,
					currentUser: c,
					eventFactory: l,
					flairStyleTemplate: m,
					forceLoadMedia: p,
					hideNSFWPref: f,
					language: E,
					moderatorPermissions: j,
					modModeEnabled: I,
					onClickPost: S,
					post: _,
					scrollerItemRef: P,
					shouldPause: N,
					showMetaLine: L = !0,
					showEditFlair: T,
					subredditOrProfile: k,
					userIsOp: M
				} = e, {
					media: R
				} = r || _, B = R && R.type, D = Object(x.b)(_.id), A = B === w.n.RTJSON, F = M && A, H = Object(C.a)(j), W = Object(O.a)(j), U = R && B !== w.n.RTJSON && B !== w.n.TEXT, V = !R && !!_.source && Object(d.a)(_.source.url), G = R && o.a.createElement(h.a, {
					autoplayPref: t,
					availableWidth: s,
					className: re.a.media,
					imageBoxClassName: re.a.mediaImageBox,
					imageBoxContentImageClassName: re.a.mediaImageBoxContentImage,
					forceAspectRatio: w.c,
					isListing: !0,
					isMiniCard: !0,
					isNotCardView: !0,
					post: r || _,
					scrollerItemRef: P,
					shouldPause: N,
					shouldLoad: p,
					showCentered: !0,
					showFull: !1
				});
				return o.a.createElement(g.a, {
					className: Object(a.a)(re.a.postContainer, ne.a.largeAndMediumActiveStyles, ne.a.largeAndMediumPostStyles, Object(y.a)(e), n),
					style: Object.assign({}, Object(y.b)(e.flairStyleTemplate), Object(y.d)(e)),
					post: _,
					onClick: S,
					eventFactory: l
				}, o.a.createElement(b.a, {
					className: re.a.backgroundWrapper,
					flairStyleTemplate: m
				}, U && G, o.a.createElement("div", {
					className: re.a.innerContainer
				}, V && o.a.createElement(te.a, {
					post: _,
					templatePlaceholderImage: m ? m.postPlaceholderImage : void 0
				}), o.a.createElement(v.c, {
					className: re.a.postTitleCompact,
					disableFlair: !0,
					hideSourceLink: !0,
					post: _,
					size: v.b.Large,
					titleColor: m && m.postTitleColor
				}), L && k && o.a.createElement(ee.a, {
					className: re.a.metaLine,
					crosspostSubredditOrProfile: i,
					hideNSFWPref: f,
					language: E,
					post: _,
					subredditOrProfile: k
				}), !U && o.a.createElement("div", {
					className: re.a.mediaWrapper
				}, G), o.a.createElement("div", {
					className: re.a.flexSpacer
				}), o.a.createElement($, {
					currentUser: c,
					handleVote: e.handleVote,
					hasModFlairPerms: W,
					hasModPostPerms: H,
					language: E,
					modModeEnabled: I,
					post: _,
					showEditFlair: T,
					showEditPost: F
				}))), e.activeModalId === D && o.a.createElement(x.a, {
					flairs: _.flair,
					subredditId: _.belongsTo.id,
					modalId: D,
					onFlairChanged: e.onFlairChanged
				}), o.a.createElement(u.d, {
					postId: _.id
				}))
			})))
		},
		"./src/reddit/components/OverviewChronoComment/index.m.less": function(e, t, s) {
			e.exports = {
				commentOuterWrapper: "_1g70Ndz7edo5LA6hie1Gkt",
				commentWrapper: "_324SLny5spJ682AiI73uBO",
				isLast: "_2nq8DZns5TUNKoe0aDsW4K",
				isAwarded: "_3L-s9jSlG2xSayzJ_b7J1t",
				isNightmodeOn: "Cd5iGkxl9fzuGE1cWMHC4",
				isFirst: "q4WgOJAmvFRFKX_yrlG-1",
				commentSeparator: "_3H85Xyyv141qju7KQFQ_d5",
				commentContentWrapper: "_27uDfyCMhkucg8xWyoTLYp"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.m.less": function(e, t, s) {
			e.exports = {
				OverviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				overviewCommentPost: "_2mg6JuVCrcHWJkUQvZXFcZ",
				ClassicPost: "OZOlqlxhdnIVuS5MQ5yMi",
				classicPost: "OZOlqlxhdnIVuS5MQ5yMi"
			}
		},
		"./src/reddit/components/OverviewChronoList/ListItem.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ClassicPost/index.tsx"),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/reddit/actions/post.ts"),
				m = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				u = s("./src/reddit/helpers/getClickInfo.ts"),
				h = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				b = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewChronoComment/index.m.less"),
				f = s.n(v);
			const O = Object(i.b)(() => Object(a.c)({
				comment: b.n,
				isInGoldAwardedCommentHighlight: g.a,
				isNightmodeOn: x.U
			}), e => ({
				openPost: t => e(Object(l.x)(t))
			}));
			var C = Object(d.a)(O(e => {
					const {
						comment: t,
						commentId: s,
						first: n,
						isInGoldAwardedCommentHighlight: r,
						isNightmodeOn: i,
						last: a,
						openPost: d,
						showModTools: l
					} = e;
					if (!t) return null;
					const b = t.awardCountsById && r;
					return o.a.createElement(m.a, {
						comment: t,
						onClick: (e, t) => {
							d({
								postOrComment: t,
								clickInfo: Object(u.a)(e),
								queryParams: {
									context: 3
								}
							})
						},
						style: {
							background: Object(h.e)(e)
						}
					}, o.a.createElement("div", {
						className: Object(c.a)(f.a.commentOuterWrapper, {
							[f.a.isLast]: a,
							[f.a.isAwarded]: b,
							[f.a.isNightmodeOn]: i
						})
					}, o.a.createElement("div", {
						className: Object(c.a)(f.a.commentWrapper, {
							[f.a.isFirst]: n
						})
					}, o.a.createElement("div", {
						className: f.a.commentSeparator
					}), t.parentId && o.a.createElement("div", {
						className: f.a.commentSeparator
					}), o.a.createElement("div", {
						className: f.a.commentContentWrapper
					}, o.a.createElement(p.a, {
						commentId: s,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: !0,
						showModTools: l,
						isExpanded: !0
					})))))
				})),
				y = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				w = s("./src/reddit/contexts/PageLayer/index.tsx"),
				E = s("./src/reddit/helpers/isComment.ts"),
				j = s("./src/reddit/components/OverviewChronoList/ListItem.m.less"),
				I = s.n(j),
				S = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var P = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const N = Object(w.t)({
					currentProfileName: w.h,
					isCommentsPage: w.w,
					isCommentPermalink: w.v,
					isProfilePostListing: w.I,
					pageLayer: e => e
				}),
				L = S.a.wrapped(y.a, "OverviewCommentPost", I.a),
				T = S.a.wrapped(r.b, "ClassicPost", I.a);
			t.a = N(e => {
				const {
					itemId: t,
					isFirstInCommentList: s,
					isLastInCommentList: n,
					allowModToolsUnderComments: r,
					height: i,
					width: a
				} = e, c = P(e, ["itemId", "isFirstInCommentList", "isLastInCommentList", "allowModToolsUnderComments", "height", "width"]);
				return Object(E.a)(t) ? s ? o.a.createElement(o.a.Fragment, null, o.a.createElement(L, _({}, c, {
					availableWidth: a,
					commentId: t
				})), o.a.createElement(C, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				})) : o.a.createElement(C, {
					commentId: t,
					first: s,
					last: n,
					showModTools: r
				}) : o.a.createElement(T, _({}, c, {
					inSubredditOrProfile: !1
				}))
			})
		},
		"./src/reddit/components/OverviewChronoList/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_31Psg18W6Dm5EvcCqvaQm2",
				component: "_31Psg18W6Dm5EvcCqvaQm2",
				ComponentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb",
				componentHasItems: "_1cKfMnE4GcGLgj5Xiz5PPb"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.m.less": function(e, t, s) {
			e.exports = {
				overviewCommentPost: "_32w108aFIBi3H0DKCU4OI7",
				banned: "_3P8_MTWuehQOXRUhWBpwB0",
				reported: "_1Z7-lWgZwHw4sBG3rO44v7",
				InternalLink: "_31VWB3vSkv19o3I7RVE710",
				internalLink: "_31VWB3vSkv19o3I7RVE710",
				Wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				wrapper: "_2otRz3OtuWajw1RleFDJ5P",
				Row: "_1InmLYfaOm6m9MZ8wKxM-0",
				row: "_1InmLYfaOm6m9MZ8wKxM-0",
				CommentIcon: "y05plmPkDK7RiRh8b3b8-",
				commentIcon: "y05plmPkDK7RiRh8b3b8-",
				TitleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				titleContainer: "_2ng_YqEhC3QLYqZyRIQ9qB",
				PostTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				postTitleContainer: "_13Ww4V9LL9wHYik5hp8VM4",
				PostTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitle: "_2b_IHdM91weRNGmXfrTYvn",
				postTitleOutboundLink: "_3heiUGSIAJO43_Ertq1e2F",
				postTitleTitle: "_3gWN_jC4sfo4uQ61ZRgOO",
				PostTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMeta: "_3yzuVD_JNtr4EBJ_OesIvh",
				postTopMetaMetaSeparator: "_2IhK-xvBLjMsX4HZ-T6j-W",
				MetaSeparator: "_3RjYJMG6TaMnSwb88daQ7W",
				metaSeparator: "_3RjYJMG6TaMnSwb88daQ7W"
			}
		},
		"./src/reddit/components/OverviewCommentPost/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/controls/InternalLink/index.tsx"),
				u = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				h = s("./src/reddit/selectors/comments.ts"),
				b = s("./src/reddit/selectors/posts.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/PostContainer/index.tsx"),
				v = s("./src/reddit/components/PostTitle/index.tsx"),
				f = s("./src/reddit/components/PostTopMeta/index.tsx"),
				O = s("./src/reddit/icons/fonts/Comment/index.tsx"),
				C = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				y = s.n(C),
				w = s("./src/reddit/components/OverviewCommentPost/index.m.less"),
				E = s.n(w);
			const j = l.a.wrapped(p.a, "InternalLink", E.a),
				I = l.a.div("Wrapper", E.a),
				S = l.a.div("Row", E.a),
				_ = l.a.wrapped(O.a, "CommentIcon", E.a),
				P = l.a.div("TitleContainer", E.a),
				N = l.a.div("PostTitleContainer", E.a),
				L = l.a.wrapped(v.c, "PostTitle", E.a),
				T = l.a.wrapped(f.d, "PostTopMeta", E.a),
				k = l.a.wrapped(f.a, "MetaSeparator", E.a),
				M = Object(r.b)(() => Object(a.c)({
					comment: h.n,
					language: g.S,
					post: b.I,
					subredditOrProfile: b.T
				})),
				R = e => {
					const {
						language: t,
						post: s,
						subredditOrProfile: r
					} = e;
					if (r) return o.a.createElement(n.Fragment, null, o.a.createElement(k, null), o.a.createElement(T, {
						language: t,
						metaSeparatorClassName: E.a.postTopMetaMetaSeparator,
						post: s,
						showSub: !0,
						showTimestamp: !1,
						subredditOrProfile: r
					}))
				},
				B = e => {
					const {
						comment: t,
						profileName: s
					} = e;
					if (!t) return null;
					const n = s || t.author;
					return o.a.createElement(j, {
						"data-click-id": "user",
						to: "/user/".concat(n, "/")
					}, n)
				};
			t.a = Object(d.a)(M(Object(m.b)(e => {
				const {
					className: t,
					eventFactory: s,
					onClickPost: n,
					post: r
				} = e;
				return o.a.createElement(x.a, {
					className: Object(c.a)(y.a.compactPostStyles, E.a.overviewCommentPost, {
						[E.a.banned]: !!e.post.bannedBy,
						[E.a.reported]: !e.post.bannedBy && !!e.post.numReports && e.post.numReports > 0
					}, t),
					post: r,
					onClick: n,
					eventFactory: s
				}, o.a.createElement(I, {
					style: {
						background: Object(u.e)(e)
					}
				}, o.a.createElement(S, null, o.a.createElement(_, null), o.a.createElement(P, null, B(e), o.a.createElement(i.c, null, " commented on "), o.a.createElement(N, null, o.a.createElement(L, {
					outboundLinkClassName: E.a.postTitleOutboundLink,
					post: r,
					size: v.b.Small,
					titleClassName: E.a.postTitleTitle
				})), R(e)))))
			})))
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.m.less": function(e, t, s) {
			e.exports = {
				border: "_1lhlKOukuHHzZKIlnXcHmQ",
				isFirst: "_2o6nV_ET0Jis6_EzEHx9K3",
				isLast: "_1C2mkyHj-MAuIndy8vJIU5"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/Border/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/OverviewConversationsPost/Border/index.m.less"),
				a = s.n(i);

			function c() {
				return (c = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var d = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			t.a = e => {
				var {
					isFirst: t,
					isLast: s
				} = e, n = d(e, ["isFirst", "isLast"]);
				return o.a.createElement("div", c({
					className: Object(r.a)(a.a.border, {
						[a.a.isFirst]: t,
						[a.a.isLast]: s
					})
				}, n))
			}
		},
		"./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less": function(e, t, s) {
			e.exports = {
				ExtraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				extraCommentsItemWrapper: "_3S95u6JHFnb4s3dszwei2-",
				ExtraComments: "_35d97uauE52jtrUNWw8B4i",
				extraComments: "_35d97uauE52jtrUNWw8B4i",
				ExtraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS",
				extraCommentsInteractive: "lQv8U3Ne_-BQ6fbAfxKIS"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less": function(e, t, s) {
			e.exports = {
				ProfileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				profileOwnerCommentWrapper: "_3CecFEZvC8MFSvLsfuVYUs",
				CommentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				commentContentWrapper: "hpOP1hjcTLrw1L2rfRtMP",
				Wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				wrapper: "_2OpuabFjFVU3UZ4jcP58gJ",
				isFirst: "_3bYCCkSa6xxUYDEPgIa7w5",
				isLast: "_3TNQpNlZH2M4X50sedpaIG",
				isAwarded: "_2UgLKr67bDuCg6zs7UOCoN",
				isNightmodeOn: "_3ZqQTMfjWU3NV-dAfa8O9E",
				CommentSeparator: "_1mvcEtI04YyIVKsT-vUkiN",
				commentSeparator: "_1mvcEtI04YyIVKsT-vUkiN"
			}
		},
		"./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/times.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/lessComponent.tsx"),
				m = s("./src/reddit/components/CommentContainer/index.tsx"),
				p = s("./src/reddit/components/Comments/ProfileComment/index.tsx"),
				u = s("./src/reddit/actions/post.ts"),
				h = s("./src/reddit/helpers/getClickInfo.ts"),
				b = s("./src/reddit/selectors/comments.ts"),
				g = s("./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts"),
				x = s("./src/reddit/selectors/user.ts"),
				v = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.m.less"),
				f = s.n(v);
			const O = l.a.div("ProfileOwnerCommentWrapper", f.a),
				C = l.a.div("CommentContentWrapper", f.a),
				y = l.a.div("Wrapper", f.a),
				w = l.a.div("CommentSeparator", f.a),
				E = Object(a.b)(() => Object(c.c)({
					comment: (e, t) => Object(b.n)(e, t),
					isInGoldAwardedCommentHighlight: g.a,
					isNightmodeOn: x.U
				}), e => ({
					openPost: t => e(Object(u.x)(t))
				}));
			class j extends i.a.Component {
				render() {
					const {
						comment: e,
						commentId: t,
						depth: s,
						openPost: n,
						isFirst: r,
						isInGoldAwardedCommentHighlight: a,
						isLast: c,
						isNightmodeOn: l,
						profileName: p,
						showModTools: u
					} = this.props, b = p === e.author ? I : S, g = e.awardCountsById && a;
					return i.a.createElement(m.a, {
						comment: e,
						onClick: (e, t) => {
							n({
								postOrComment: t,
								clickInfo: Object(h.a)(e),
								queryParams: {
									context: 3
								}
							}), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(y, {
						className: Object(d.a)({
							[f.a.isFirst]: r,
							[f.a.isLast]: c,
							[f.a.isAwarded]: g,
							[f.a.isNightmodeOn]: l
						})
					}, o()(s + 1, e => i.a.createElement(w, {
						key: e
					})), i.a.createElement(C, null, b(t, p, u))))
				}
			}
			const I = (e, t, s) => i.a.createElement(O, null, S(e, t, s, !0, !0)),
				S = function(e, t, s) {
					let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
						o = arguments.length > 4 ? arguments[4] : void 0;
					return i.a.createElement(p.a, {
						commentId: e,
						commentsPageKey: "profileOverviewPageKey",
						showFlatlist: n,
						showModTools: s,
						isExpanded: !!o
					})
				};
			t.a = E(j)
		},
		"./src/reddit/components/OverviewConversationsPost/index.m.less": function(e, t, s) {
			e.exports = {
				BackgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				backgroundWrapper: "_3aoyec8unb9DkDxSv2XOMX",
				ClassicPost: "tAHXx8uORoJlmgLFgqJEP",
				classicPost: "tAHXx8uORoJlmgLFgqJEP",
				OverviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				overviewCommentPost: "_1jbHcnuv4MQLOov7BuufdI",
				OverviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				overviewLargePost: "_3DVTWNXPKtpQAozvDhjI89",
				OverviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB",
				overviewConversationsPost: "_3KGXodqw9Ht3MoBpe8_gzB"
			}
		},
		"./src/reddit/components/PostList/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return K
			})), s.d(t, "a", (function() {
				return q
			}));
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/history/esm/history.js"),
				o = s("./node_modules/lodash/debounce.js"),
				r = s.n(o),
				i = s("./node_modules/lodash/last.js"),
				a = s.n(i),
				c = s("./node_modules/react/index.js"),
				d = s.n(c),
				l = s("./node_modules/react-dom/index.js"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/lib/fastdom/index.ts"),
				b = s("./src/lib/lessComponent.tsx"),
				g = s("./src/lib/opener/index.ts"),
				x = s("./src/lib/sentry/index.ts"),
				v = s("./src/reddit/components/PostList/LoadMore.tsx"),
				f = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				O = s("./src/reddit/components/Scroller/Simple.tsx"),
				C = s("./src/reddit/components/Translated/index.tsx"),
				y = s("./src/reddit/constants/adEvents.ts"),
				w = s("./src/reddit/constants/componentSizes.ts"),
				E = s("./src/reddit/constants/postLayout.ts"),
				j = s("./src/reddit/controls/InternalLink/index.tsx"),
				I = s("./src/reddit/helpers/getClickInfo.ts"),
				S = s("./src/reddit/helpers/pixels.ts"),
				_ = s("./src/reddit/icons/svgs/ArrowRight/index.tsx"),
				P = s("./src/reddit/models/Media/index.ts"),
				N = s("./src/reddit/helpers/brandSafety/index.ts"),
				L = s("./src/lib/LRUCache/index.ts"),
				T = s("./src/telemetry/index.ts"),
				k = s("./src/telemetry/models/Timer.ts"),
				M = s("./src/reddit/components/PostList/index.m.less"),
				R = s.n(M),
				B = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const D = 500,
				A = new L.a(D),
				F = new L.a(D),
				H = new L.a(D),
				W = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				U = b.a.div("SeeMore", R.a),
				V = b.a.wrapped(_.a, "ArrowRight", R.a),
				G = (e, t, s, n, o, r, i, a) => {
					const c = s ? "last-".concat(n, "-").concat(o) : "",
						d = "entered-".concat(e, "-").concat(t, "-").concat(c, "-").concat(r);
					let l = A.get(d);
					return void 0 === l && (l = () => {
						s && i.onBottomViewed(n, o), i.trackOnPostEnteredViewport(e, t, a)
					}, A.set(d, l)), l
				},
				z = (e, t, s, n) => {
					const o = "left-".concat(e, "-").concat(t);
					let r = F.get(o);
					return void 0 === r && (r = o => {
						s.trackOnPostExitedViewport(e, t, o, n)
					}, F.set(o, r)), r
				},
				K = (e, t) => {
					const s = "click-".concat(e);
					let n = H.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(S.a)(s.events, y.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(g.d)(s.source.outboundUrl, g.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(I.a)(e)
						})
					}, H.set(s, n)), n
				},
				Z = (e, t) => {
					if (e.isBlank) return 0;
					switch (t) {
						case E.g.Medium:
							return 188;
						case E.g.Classic:
							return 96;
						case E.g.Compact:
							return 32;
						default:
							return 200
					}
				},
				J = (e, t) => {
					const s = [...e];
					return Object.keys(t).map(e => parseInt(e, 10)).sort((e, t) => t - e).forEach(e => {
						s.splice(e, 0, t[e])
					}), s
				};
			class q extends d.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new L.a(D), this.updateScrollerRef = e => {
						const t = e && Object(l.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}, this.onScrollPause = e => {
						this.dispatchBrandSafety(e)
					}, this.dispatchBrandSafety = r()(e => {
						let {
							getVisibleItemsInViewport: t
						} = e;
						const {
							postsById: s,
							subredditsById: n
						} = this.props, o = t(), r = [];
						o.forEach(e => r.push(e.id));
						const i = r.map(e => s[e]).filter(Boolean),
							a = i.map(e => n[e.belongsTo.id]).filter(e => void 0 !== e);
						this.props.adBrandSafetyStatusReceived(Object(N.a)(i, a))
					}, u.d, {
						leading: !0
					})
				}
				componentWillMount() {
					this.timerId && T.c.cancel(this.timerId), this.props.postIds.length && (this.timerId = T.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = T.c.end(this.timerId);
						setTimeout(() => Object(T.b)(u.l.Redesign, {
							type: "mount",
							component: "postList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && T.c.cancel(this.timerId), e.postIds.length && (this.timerId = T.c.start()), (e.listingKey !== this.props.listingKey || e.postIds.length !== this.props.postIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (h.a.read(() => this.checkAndSendScreenview()), this.timerId && T.c.has(this.timerId)) {
						const e = T.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(T.b)(u.l.Redesign, {
							duration: e,
							type: "mount",
							component: "postList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && T.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && a()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return T.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = T.c.end(e);
					setTimeout(() => {
						s(t(n, k.TimerType.InApp))
					}, 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s
					} = this.props;
					return !s && (Boolean(e) || !1 !== t)
				}
				hasPosts() {
					return this.props.postIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						postIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							postsById: s
						} = t,
						n = B(t, ["postsById"]),
						{
							postsById: o
						} = e,
						r = B(e, ["postsById"]),
						i = Object.keys(n),
						a = Object.keys(r);
					if (a.length !== i.length) return !0;
					if (a.some(e => n[e] !== r[e])) return !0;
					if (s === o) return !1;
					if (this.props.postIds && this.props.postIds.length) {
						const {
							layout: e,
							postComponentForLayout: t
						} = this.props;
						return this.props.postIds.some((n, r) => {
							const i = 0 === r;
							return t({
								isFirstPost: i,
								layout: e,
								post: s[n]
							}) !== t({
								isFirstPost: i,
								layout: e,
								post: o[n]
							})
						})
					}
					return !1
				}
				scrollChildForPost(e, t, s, n) {
					const {
						currentProfileName: o,
						isCommentPermalink: r,
						isCommentsPage: i,
						isFrontpage: a,
						isProfilePostListing: c,
						listingKey: l,
						listingName: m,
						pageLayer: p,
						pageReferrer: h,
						postClickEvent: b,
						redditStyle: g
					} = this.props, v = 0 === t, f = s ? "last-index" : "", O = "post-".concat(n, "-").concat(e, "-").concat(t, "-").concat(f, "-").concat(m, "-").concat(l, "-").concat(h);
					let C;
					if (void 0 === (C = this.scrollChildCache.get(O))) {
						const {
							inSubredditOrProfile: f,
							postsById: y
						} = this.props, w = y[e], j = w.crosspostRootId && y[w.crosspostRootId] ? y[w.crosspostRootId] : w;
						w.crosspostRootId && !y[w.crosspostRootId] && x.c.withScope(e => {
							e.setExtra("errorType", u.p.API), e.setExtra("description", "Post ".concat(w.id, " is crosspost of ").concat(w.crosspostRootId, ", but ") + "".concat(w.crosspostRootId, " details are missing in the state")), x.c.captureMessage("Crosspost parent details are missing")
						});
						const I = this.props.postComponentForLayout({
								isCrosspost: !!w.crosspostRootId,
								isFirstPost: v,
								layout: n,
								post: j
							}),
							S = "post-list-item-[layout: ".concat(n, "]-[postId: ").concat(e, "]"),
							_ = G(e, n, s, l, m, h, this.props, t),
							N = z(e, n, this.props, t),
							L = K(e, this.props),
							T = j.media && j.media.type === P.n.EMBED ? j.media.provider : null;
						C = {
							estHeight: Z(w, n),
							id: e,
							isFocusable: !(!j.media || n !== E.g.Large) && (P.d.has(j.media.type) && (!T || !P.q.has(T)) && !j.isSpoiler && !j.isNSFW),
							trackOnEnteredViewport: _,
							trackOnExitedViewport: N,
							render: t => {
								let {
									className: n,
									height: u,
									width: h,
									remeasure: x,
									setScrollerChildRef: O,
									shouldLoadInitially: C
								} = t;
								return d.a.createElement(I, {
									className: n,
									currentProfileName: o,
									key: S,
									availableWidth: h,
									eventFactory: b,
									first: v,
									forceLoadMedia: C,
									inSubredditOrProfile: f,
									isCommentPermalink: r,
									isCommentsPage: i,
									isFrontpage: a,
									isProfilePostListing: c,
									listingKey: l,
									listingName: m,
									pageLayer: p,
									last: s,
									onClickPost: L,
									onSizeChanged: x,
									postId: e,
									redditStyle: g,
									sendEvent: this.props.sendEvent,
									scrollerItemRef: O
								})
							}
						}, this.scrollChildCache.set(O, C)
					}
					return C
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return d.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						disablePlaceholder: s,
						layout: n,
						onTryAgain: o,
						postListPlaceholderComponent: r
					} = this.props;
					if (s) return;
					const i = r;
					return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(i, {
						className: t,
						isLoading: !e,
						layout: n
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: o
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						disablePlaceholder: s,
						layout: n,
						loadMoreClassName: o,
						onLoadMore: r
					} = this.props;
					if (!s) return d.a.createElement("div", {
						className: R.a.placeholder
					}, d.a.createElement(v.a, {
						className: o,
						isLoading: !!t,
						layout: n,
						countOverride: W[n]
					}), !!e && d.a.createElement(f.a, {
						apiError: e,
						onTryAgain: r
					}))
				}
				renderList() {
					const {
						scrollContentContainerRef: e,
						enableElementHiding: t,
						getScrollContainer: s,
						injectChildren: o,
						isTruncated: r,
						layout: i,
						location: a,
						loadMore: l,
						postIds: h,
						onLoadMore: b
					} = this.props;
					let g = h.map((e, t, s) => {
						const n = t === h.length - 1;
						return this.scrollChildForPost(e, t, n, i)
					});
					o && (g = J(g, o));
					const x = this.props.measureScrollFPS ? "post-listings-".concat(i) : void 0,
						v = a ? Object(n.e)(a) : null,
						f = v || r;
					return d.a.createElement(c.Fragment, null, d.a.createElement(O.b, {
						innerRef: this.updateScrollerRef,
						className: f ? R.a.truncatedPostList : Object(p.a)(R.a.postList, this.props.className),
						contentContainerRef: e,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						getContainer: s,
						enableElementHiding: t,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: l && l.token ? l.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: b,
						onScroll: this.onScrollPause,
						preventScrollOnMount: this.props.preventScrollOnMount,
						trackingName: x,
						viewportTopPadding: w.g
					}, g), v && d.a.createElement(U, {
						className: R.a.seeMoreButton
					}, d.a.createElement(j.a, {
						className: R.a.seeMorePostsText,
						to: Object(m.a)(v, {
							type: u.Jb.Posts
						})
					}, d.a.createElement(C.a, {
						msgId: "search.seeMorePosts"
					}), d.a.createElement(V, null))), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			q.defaultProps = {
				enableElementHiding: !0,
				listingKey: "",
				listingName: "",
				listingViewed: () => () => ({}),
				noPostsComponent: d.a.Fragment
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less": function(e, t, s) {
			e.exports = {
				ListContainer: "VHCAEHBEuD8bln8MDFl35",
				listContainer: "VHCAEHBEuD8bln8MDFl35",
				Icon: "_3WbGqnEpw_ds1P508Qawma",
				icon: "_3WbGqnEpw_ds1P508Qawma",
				DropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				dropdownRow: "x_9o8pHUgKrlsT51QhLnG",
				CheckboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY",
				checkboxMenuItem: "_9csa2XobkeFZUX8Fc_FNY"
			}
		},
		"./src/reddit/components/PostModModeDropdown/DropdownHelpers.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return u
			})), s.d(t, "e", (function() {
				return h
			})), s.d(t, "f", (function() {
				return b
			})), s.d(t, "g", (function() {
				return g
			})), s.d(t, "h", (function() {
				return x
			})), s.d(t, "b", (function() {
				return v
			})), s.d(t, "c", (function() {
				return f
			})), s.d(t, "d", (function() {
				return O
			}));
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/controls/CheckboxMenuItem/index.tsx"),
				r = s("./src/reddit/controls/Dropdown/Row.tsx"),
				i = s("./src/reddit/icons/fonts/Approve/index.tsx"),
				a = s("./src/reddit/icons/fonts/Lock/index.tsx"),
				c = s("./src/reddit/icons/fonts/Remove/index.tsx"),
				d = s("./src/reddit/icons/fonts/Spam/index.tsx"),
				l = s("./src/reddit/icons/fonts/Tag/index.tsx"),
				m = s("./src/reddit/components/PostModModeDropdown/DropdownHelpers.m.less"),
				p = s.n(m);
			const u = n.a.wrapped(i.a, "Icon", p.a),
				h = n.a.wrapped(a.a, "Icon", p.a),
				b = n.a.wrapped(c.a, "Icon", p.a),
				g = n.a.wrapped(d.a, "Icon", p.a),
				x = n.a.wrapped(l.a, "Icon", p.a),
				v = n.a.wrapped(o.b, "CheckboxMenuItem", p.a),
				f = n.a.wrapped(r.b, "DropdownRow", p.a),
				O = n.a.div("ListContainer", p.a)
		},
		"./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/config.ts"),
				c = s("./src/lib/prettyPrintNumber/index.ts"),
				d = s("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				p = s.n(m);
			const u = Object(i.c)({
				isInGoldProfileGildedExperiment: d.a
			});
			class h extends o.a.PureComponent {
				render() {
					const {
						isInGoldProfileGildedExperiment: e,
						recentAwardings: t,
						username: s
					} = this.props;
					if (!t.topAward) return null;
					const {
						topAward: n,
						totalCount: r
					} = t, i = n.icon32 ? n.icon32.url : n.icon.url, d = n.description ? n.description : n.name;
					return o.a.createElement("a", {
						className: p.a.AwardedLastMonth,
						href: e ? "/user/".concat(s, "/gilded") : "".concat(a.a.oldRedditUrl, "/user/").concat(s, "/gilded")
					}, o.a.createElement("div", {
						className: p.a.iconColumn
					}, o.a.createElement("img", {
						alt: d,
						className: p.a.icon,
						src: i
					}), r > 1 && o.a.createElement("span", {
						className: p.a.count
					}, "+".concat(Object(c.b)(r - 1)))), o.a.createElement("div", {
						className: p.a.textColumn
					}, r > 1 ? o.a.createElement(l.c, null, "Received the ", o.a.createElement(l.b, {
						name: "award-name"
					}, n.name), " Award and more in the past 30 days") : o.a.createElement(l.c, null, "Received the ", o.a.createElement(l.b, {
						name: "award-name"
					}, n.name), " Award in the past 30 days")))
				}
			}
			t.a = Object(r.b)(u)(h)
		},
		"./src/reddit/components/ProfileIdCard/Highlight.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2fN55zgax6VM7DyEl9pOmM",
				container: "_2fN55zgax6VM7DyEl9pOmM",
				Body: "_3KNaG9-PoXf4gcuy5_RCVy",
				body: "_3KNaG9-PoXf4gcuy5_RCVy",
				Title: "_26kBTuLE_sSZzRBwU7HLij",
				title: "_26kBTuLE_sSZzRBwU7HLij",
				Label: "_1hNyZSklmcC7R_IfCUcXmZ",
				label: "_1hNyZSklmcC7R_IfCUcXmZ"
			}
		},
		"./src/reddit/components/ProfileIdCard/Highlights.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2fopwfsUIdZKFtFUEsud9r",
				Container: "_3odBTM7RqvRgN1nvkf5k8B",
				container: "_3odBTM7RqvRgN1nvkf5k8B"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.m.less": function(e, t, s) {
			e.exports = {
				BannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				bannerWrapper: "_2xyDZKy2cesRk-qhNei4mr",
				BannerImage: "_39u8lkB0jifV2dCyGxhTst",
				bannerImage: "_39u8lkB0jifV2dCyGxhTst",
				SnooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				snooIcon: "_39rt5SOMKEB5MI0D3j7M5S",
				Widget: "_27SH1SRzjtOk_2NB2YC-FR",
				widget: "_27SH1SRzjtOk_2NB2YC-FR",
				UserTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				userTitle: "_3W1eUu5jHdcamkzFiJDITJ",
				PremiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				premiumIcon: "_2LDCmPsDet63TXFgOSOkkT",
				Description: "bVfceI5F_twrnRcVO1328",
				description: "bVfceI5F_twrnRcVO1328",
				userName: "_2hgZVu2K-pvoghsBGGbJ7P",
				Actions: "GQV0F7lQiMOV6EofzopdJ",
				actions: "GQV0F7lQiMOV6EofzopdJ",
				CloseIcon: "t8u6KWjSIjLFBXsDU3u5M",
				closeIcon: "t8u6KWjSIjLFBXsDU3u5M",
				LoadingIconStyled: "mtxpTbJWwD6VP05MIdrPa",
				loadingIconStyled: "mtxpTbJWwD6VP05MIdrPa"
			}
		},
		"./src/reddit/components/ProfileIdCard/Preview.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./src/lib/lessComponent.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.tsx"),
				c = s("./src/reddit/controls/InternalLink/index.tsx"),
				d = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				l = s("./src/reddit/i18n/utils.ts"),
				m = s("./src/reddit/icons/svgs/Admin/index.tsx"),
				p = s("./src/reddit/icons/svgs/Close/index.tsx"),
				u = s("./src/reddit/icons/svgs/Premium/index.tsx"),
				h = s("./src/reddit/layout/twoCol/Dynamic/index.tsx"),
				b = s("./src/reddit/components/ProfileIdCard/AwardedLastMonth.tsx"),
				g = s("./node_modules/react-redux/es/index.js"),
				x = s("./node_modules/reselect/es/index.js"),
				v = s("./src/lib/humanizeDate/index.ts"),
				f = s("./src/lib/prettyPrintNumber/index.ts"),
				O = s("./src/lib/timeAgo/index.ts"),
				C = s("./src/reddit/contexts/InsideOverlay.tsx"),
				y = s("./src/reddit/icons/svgs/Cake/index.tsx"),
				w = s("./src/reddit/icons/svgs/Karma/index.tsx"),
				E = s("./src/reddit/icons/svgs/User/index.tsx"),
				j = s("./src/reddit/selectors/profile.ts"),
				I = s("./src/reddit/selectors/user.ts"),
				S = s("./src/reddit/actions/tooltip.ts"),
				_ = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				P = s("./src/reddit/components/ProfileIdCard/Highlight.m.less"),
				N = s.n(P);

			function L() {
				return (L = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const T = Object(x.c)({
					language: I.S
				}),
				k = i.a.div("Container", N.a),
				M = i.a.div("Body", N.a),
				R = i.a.h5("Title", N.a),
				B = i.a.span("Label", N.a);
			class D extends r.a.Component {
				constructor() {
					super(...arguments), this.toggleTooltip = () => {
						const {
							toggleTooltip: e,
							tooltipId: t
						} = this.props;
						e && t && e(t)
					}
				}
				render() {
					const {
						icon: e,
						label: t,
						title: s,
						tooltip: n,
						tooltipId: o
					} = this.props, i = o && n ? {
						id: o,
						onMouseEnter: this.toggleTooltip,
						onMouseLeave: this.toggleTooltip
					} : {};
					return r.a.createElement(k, null, r.a.createElement(R, null, s), r.a.createElement(M, null, e, r.a.createElement(B, L({
						key: "label"
					}, i), t)), o && n && r.a.createElement(_.c, {
						caretOnTop: !0,
						tooltipId: o,
						text: n
					}))
				}
			}
			var A = Object(g.b)(T, e => ({
					toggleTooltip: t => e(Object(S.g)({
						tooltipId: t
					}))
				}))(Object(C.b)(D)),
				F = s("./src/reddit/components/ProfileIdCard/Highlights.m.less"),
				H = s.n(F);
			const W = Object(x.a)(j.j, (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(I.kb)(e, s)
				}, I.S, (e, t, s) => ({
					commentKarma: t ? t.commentKarma : 0,
					language: s,
					postKarma: t ? t.postKarma : 0,
					profileCreated: t ? t.created : 0,
					subscribers: e && e.subscribers || 0
				})),
				U = i.a.div("Container", H.a);

			function V(e, t) {
				return "profile--id-card--highlight-tooltip-".concat(e ? "-overlay" : "", "-").concat(t)
			}
			var G = Object(g.b)(W)(Object(C.b)(e => {
					const {
						profileCreated: t,
						isOverlay: s,
						language: n,
						commentKarma: o,
						postKarma: i,
						subscribers: a
					} = e, c = V(s, "karma"), d = V(s, "cakeday"), m = Object(l.c)("".concat(Object(l.b)("postKarmaNumber", Object(f.b)(i, !0)), " Post Karma")), p = Object(l.c)("".concat(Object(l.b)("commentKarmaNumber", Object(f.b)(o, !0)), " Comment Karma"));
					return r.a.createElement(U, null, r.a.createElement(A, {
						icon: r.a.createElement(w.a, {
							className: H.a.icon,
							key: "karma"
						}),
						label: Object(f.b)(o + i, !0),
						title: Object(l.c)("Karma"),
						tooltipId: c,
						tooltip: "".concat(m, "\n").concat(p)
					}), r.a.createElement(A, {
						icon: r.a.createElement(y.a, {
							className: H.a.icon,
							key: "cakeDay"
						}),
						label: Object(v.a)(t, !0),
						title: Object(l.c)("Cake day"),
						tooltipId: d,
						tooltip: Object(O.d)(n, t)
					}), a > 0 && r.a.createElement(A, {
						icon: r.a.createElement(E.a, {
							className: H.a.icon,
							key: "followers"
						}),
						title: Object(l.c)("Followers"),
						label: Object(f.b)(a, !0)
					}))
				})),
				z = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				K = s.n(z),
				Z = s("./src/reddit/components/ProfileIdCard/Preview.m.less"),
				J = s.n(Z);

			function q() {
				return (q = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "a", (function() {
				return de
			}));
			var Q = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const Y = i.a.div("BannerWrapper", J.a),
				X = i.a.div("BannerImage", J.a),
				$ = i.a.div("SnooIcon", J.a),
				ee = i.a.wrapped(a.b, "Widget", J.a),
				te = i.a.h4("UserTitle", J.a),
				se = i.a.wrapped(u.a, "PremiumIcon", J.a),
				ne = i.a.div("Description", J.a),
				oe = e => {
					var {
						url: t
					} = e, s = Q(e, ["url"]);
					return t ? r.a.createElement(c.a, q({}, s, {
						className: J.a.userName,
						to: t
					})) : r.a.createElement("span", q({}, s, {
						className: J.a.userName
					}))
				},
				re = i.a.wrapped(h.a, "Actions", J.a),
				ie = i.a.wrapped(p.a, "CloseIcon", J.a),
				ae = i.a.wrapped(d.a, "LoadingIconStyled", J.a),
				ce = () => r.a.createElement(ae, {
					sizePx: 20
				});
			class de extends r.a.PureComponent {
				renderAwardedLastMonth() {
					const {
						recentAwardings: e,
						username: t
					} = this.props;
					return e ? r.a.createElement(b.a, {
						recentAwardings: e,
						username: t
					}) : null
				}
				render() {
					const {
						actions: e,
						bannerBackgroundImage: t,
						className: s,
						footer: o,
						isEmployee: i,
						isGold: a,
						isOverlay: c,
						profileIcon: d,
						publicDescription: p,
						title: u,
						url: h,
						username: b,
						isDefaultIcon: g,
						isDeletingIcon: x,
						isDeletingBanner: v,
						onDeleteIcon: f,
						onDeleteBanner: O,
						editMode: C
					} = this.props;
					return r.a.createElement(ee, {
						className: s
					}, r.a.createElement(Y, null, t && r.a.createElement(X, {
						style: {
							backgroundImage: "url(".concat(t, ")")
						}
					}), C && t && (v ? r.a.createElement(ce, null) : r.a.createElement(ie, {
						onClick: O
					}))), r.a.createElement("div", {
						className: K.a.SnooIconWrapper
					}, r.a.createElement($, {
						style: {
							backgroundImage: "url(".concat(d, ")")
						}
					}), C && !g && (x ? r.a.createElement(ce, null) : r.a.createElement(ie, {
						onClick: f
					}))), u && r.a.createElement(te, null, u), r.a.createElement(oe, {
						url: h
					}, "u/".concat(b)), i && r.a.createElement(m.a, {
						className: K.a.adminIcon,
						title: Object(l.c)("Reddit admin")
					}), a && r.a.createElement("a", {
						title: Object(l.c)("".concat(Object(l.b)("username", b), " has Reddit Premium")),
						href: "".concat(n.a.redditUrl, "/premium")
					}, r.a.createElement(se, null)), r.a.createElement(ne, null, p), r.a.createElement(G, {
						profileName: b,
						isOverlay: c
					}), this.renderAwardedLastMonth(), r.a.createElement(re, null, e), o)
				}
			}
		},
		"./src/reddit/components/ProfileIdCard/footer.m.less": function(e, t, s) {
			e.exports = {
				container: "_2jvbIljd1r6tRUsfoDij_y",
				expandContainer: "_1HKW6ri9nK1INtj09BfFfM",
				expandButton: "_34I-V8v9TxMwIW1R6Rbi3A",
				menuItem: "_2j70PtPj9zrWOU8NshwTg-",
				redditStyle: "_38vTQxawhhbbhD8rZc36N5",
				Shimmer: "_1-2CAwx45SgG4EsI1-GWZh",
				shimmer: "_1-2CAwx45SgG4EsI1-GWZh"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.m.less": function(e, t, s) {
			e.exports = {
				SnooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				snooIconWrapper: "_308WM6C-yV5iwS0Iy8nOfI",
				actionItem: "_1l7CTV4NjDjmzX8DiiSgTL",
				AwardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				awardedLastMonth: "oZjk-MiWCU7KVYej9wPSw",
				textColumn: "_wi1DtT7oN7k_x5oIV8zm",
				iconColumn: "_32tzMaZn7x3dfQC5MXndJn",
				icon: "_12jN4wdttUosp76WHzuieI",
				count: "_6xPPP5HdELF-SZJL8layH",
				awardIcon: "_2Eq8z6UD7I0ul3wnZ-YT80",
				adminIcon: "_1sNQxemH_0rq1jtZAMyAZd",
				button: "_2q1wcTx60QKM_bQ1Maev7b"
			}
		},
		"./src/reddit/components/ProfileIdCard/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/config.ts"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/reddit/actions/subscription/index.ts"),
				d = s("./src/reddit/components/ChatButton/index.tsx"),
				l = s("./src/reddit/components/ProfileIdCard/Preview.tsx"),
				m = s("./src/reddit/components/TrackingHelper/index.tsx"),
				p = s("./src/reddit/constants/posts.ts"),
				u = s("./src/reddit/controls/Button/index.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/selectors/platform.ts"),
				x = s("./src/reddit/selectors/profile.ts"),
				v = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/tooltip.ts"),
				O = s("./src/reddit/selectors/user.ts"),
				C = (s("./node_modules/core-js/modules/es6.symbol.js"), s("./node_modules/fbt/lib/FbtPublic.js")),
				y = s("./node_modules/lodash/compact.js"),
				w = s.n(y),
				E = s("./src/lib/classNames/index.ts"),
				j = s("./src/reddit/actions/gold/modals.ts"),
				I = s("./src/reddit/actions/profile/index.ts"),
				S = s("./src/higherOrderComponents/makeAsync.tsx"),
				_ = s("./src/lib/loadWithRetries/index.ts");
			var P = Object(S.a)({
					getComponent: () => Object(_.a)(() => s.e("GivePremiumModal").then(s.bind(null, "./src/reddit/components/GivePremiumModal/index.tsx"))).then(e => e.default),
					ErrorComponent: () => null,
					LoadingComponent: () => null
				}),
				N = s("./src/reddit/controls/InternalLink/index.tsx"),
				L = s("./src/reddit/controls/OutboundLink/index.tsx"),
				T = s("./src/reddit/helpers/correlationIdTracker.ts"),
				k = s("./src/reddit/helpers/styles/mixins/loading.ts"),
				M = s("./src/reddit/actions/modal.ts"),
				R = s("./src/reddit/actions/multireddit/index.ts"),
				B = s("./src/reddit/constants/modals.ts"),
				D = s("./src/reddit/models/Gold/Premium/index.ts"),
				A = s("./src/reddit/selectors/premium.ts"),
				F = s("./src/reddit/components/ProfileIdCard/footer.m.less"),
				H = s.n(F);

			function W() {
				return (W = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var U = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const V = Object(a.c)({
					areModeratedSubredditsPending: x.a,
					coinsToSpend: O.d,
					givePremiumModalIsOpen: A.c,
					hasFetchedModerators: x.k,
					isEmployee: O.G,
					isLoggedIn: O.J,
					language: O.S,
					profile: x.j
				}),
				G = e => {
					var {
						isLoading: t
					} = e, s = U(e, ["isLoading"]);
					return r.a.createElement("div", W({}, s, {
						className: Object(E.a)(H.a.Shimmer, Object(k.b)({
							isLoading: t
						}))
					}))
				};
			class z extends r.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.clickGivePremium = async () => {
						const {
							onClickGivePremium: e,
							sendEvent: t
						} = this.props;
						Object(T.d)(T.a.GiftPremiumFlow), e();
						const {
							clickGivePremiumEvent: n
						} = await s.e("givePremiumTrackers").then(s.bind(null, "./src/reddit/helpers/trackers/givePremium.ts"));
						t(n())
					}, this.makeMenuItems = () => {
						const {
							addToMultiClicked: e,
							allowViewSnoovatar: t,
							coinsToSpend: s,
							hasSubreddit: o,
							isEmployee: r,
							isLoggedIn: i,
							isModerator: a,
							isOwnProfile: c,
							profileName: d,
							profile: l
						} = this.props, m = i && Object(D.b)(s, r).length && !c || r, p = w()([(c || a) && o ? {
							text: C.fbt._("Profile Moderation", null, {
								hk: "4x1una"
							}),
							url: "/user/".concat(d, "/about/edit/moderation"),
							isInternalLink: !0
						} : void 0, c ? void 0 : {
							text: C.fbt._("Send Message", null, {
								hk: "2oAlZ5"
							}),
							url: "".concat(n.a.redditUrl, "/message/compose/?to=").concat(d)
						}, !c && t ? {
							text: C.fbt._("View Snoovatar", null, {
								hk: "31JWSq"
							}),
							url: "".concat(n.a.redditUrl, "/user/").concat(d, "/snoo")
						} : void 0, c ? void 0 : {
							text: C.fbt._("Report User", null, {
								hk: "4hFoE2"
							}),
							url: "https://www.reddithelp.com/en/categories/rules-reporting/account-and-community-restrictions/what-should-i-do-if-i-see-something-i"
						}, i && l && !l.isQuarantined ? {
							onClick: e,
							text: C.fbt._("Add to custom feed", null, {
								hk: "8zqUU"
							})
						} : void 0]);
						return m && p.splice(1, 0, {
							onClick: this.clickGivePremium,
							text: C.fbt._("Give Premium", null, {
								hk: "2wyUqF"
							})
						}), p
					}, this.moreOptionsToggled = () => {
						!this.state.expanded && this.canLoadMods() && this.props.onModeratorsRequested(), this.setState(e => {
							let {
								expanded: t
							} = e;
							return {
								expanded: !t
							}
						})
					}
				}
				canLoadMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && !this.props.hasFetchedModerators && !this.props.areModeratedSubredditsPending
				}
				isLoadingMods() {
					return this.props.isLoggedIn && !this.props.isOwnProfile && (!this.props.hasFetchedModerators || this.props.areModeratedSubredditsPending)
				}
				render() {
					const {
						givePremiumModalIsOpen: e
					} = this.props, {
						expanded: t
					} = this.state, s = this.makeMenuItems();
					if (0 === s.length) return null;
					const n = (t ? s : []).map(e => e.url ? e.isInternalLink ? r.a.createElement(N.a, {
						key: e.url,
						onClick: e.onClick,
						to: e.url,
						className: H.a.menuItem
					}, e.text) : r.a.createElement(L.a, {
						key: e.url,
						href: e.url,
						isSponsored: !1,
						onClick: e.onClick,
						source: void 0,
						className: H.a.menuItem
					}, e.text) : r.a.createElement(u.n, {
						className: H.a.menuItem,
						key: e.text,
						onClick: e.onClick
					}, e.text));
					this.state.expanded && this.isLoadingMods() && (n.unshift(r.a.createElement("div", {
						className: H.a.menuItem,
						key: "loading-1"
					}, r.a.createElement(G, {
						isLoading: this.props.areModeratedSubredditsPending
					}))), n.unshift(r.a.createElement("div", {
						className: H.a.menuItem,
						key: "loading-2"
					}, r.a.createElement(G, {
						isLoading: this.props.areModeratedSubredditsPending
					}))));
					const o = t ? C.fbt._("Fewer Options", null, {
						hk: "4ixXKg"
					}) : C.fbt._("More Options", null, {
						hk: "4ix9v1"
					});
					return r.a.createElement("div", {
						className: H.a.container
					}, n, r.a.createElement("div", {
						className: H.a.expandContainer
					}, r.a.createElement(u.n, {
						className: H.a.expandButton,
						onClick: this.moreOptionsToggled
					}, o)), e && r.a.createElement(P, null))
				}
			}
			var K = Object(i.b)(V, (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						addToMultiClicked: () => {
							e(Object(R.g)(!0, !0)), e(Object(M.h)(B.a.MULTIREDDIT_ADD_SUBREDDIT))
						},
						onClickGivePremium: () => e(Object(j.e)(s)),
						onModeratorsRequested: () => e(Object(I.b)(s))
					}
				})(z),
				Z = s("./src/reddit/components/ProfileIdCard/index.m.less"),
				J = s.n(Z);
			const q = Object(a.c)({
					account: O.i,
					activeTooltipId: f.a,
					currentUserHasSubreddit: O.g,
					hideNSFWPref: O.z,
					isModerator: x.f,
					profile: x.j,
					profileAboutInfo: x.h,
					structuredStyle: (e, t) => Object(v.n)(e, Object(x.m)(e, t.profileName)),
					userHasSubreddit: (e, t) => {
						let {
							profileName: s
						} = t;
						return Object(O.ib)(e, {
							userName: s
						})
					},
					userInChat: h.d.userInChat,
					user: (e, t) => {
						let {
							profileName: s
						} = t;
						return Object(O.hb)(e, {
							userName: s
						})
					},
					page: g.b
				}),
				Q = e => {
					let {
						username: t,
						currentUserHasSubreddit: s
					} = e;
					return r.a.createElement("div", {
						className: J.a.actionItem
					}, r.a.createElement(u.h, {
						className: J.a.button,
						to: s ? "/user/".concat(t, "/submit") : "/submit"
					}, r.a.createElement(b.c, null, "New post")))
				},
				Y = e => {
					let {
						profileName: t,
						onToggleFollow: s,
						userIsSubscriber: n
					} = e;
					return r.a.createElement("div", {
						className: J.a.actionItem
					}, n ? r.a.createElement(u.i, {
						className: J.a.button,
						onClick: () => s(t, n)
					}, r.a.createElement(b.c, null, "Unfollow")) : r.a.createElement(u.f, {
						className: J.a.button,
						onClick: () => s(t, n)
					}, r.a.createElement(b.c, null, "Follow")))
				},
				X = e => {
					let {
						userId: t
					} = e;
					return r.a.createElement("div", {
						className: J.a.actionItem
					}, r.a.createElement(d.a, {
						contextId: t,
						className: J.a.button,
						userId: t
					}, r.a.createElement(b.c, null, "Chat")))
				};
			t.a = Object(i.b)(q, e => ({
				onToggleFollow: (t, s) => e(Object(c.d)([{
					name: t,
					type: p.a.PROFILE
				}], !s))
			}))(Object(m.b)(e => {
				const {
					account: t,
					currentUserHasSubreddit: s,
					hideNSFWPref: o,
					isModerator: i,
					isOverlay: a,
					isSubmissionPage: c,
					onToggleFollow: d,
					profile: m,
					profileAboutInfo: p,
					sendEvent: u,
					structuredStyle: h,
					userHasSubreddit: b,
					userInChat: g,
					user: x,
					page: v
				} = e;
				if (!x) return null;
				const {
					accountIcon: f,
					awardedLastMonth: O,
					id: C,
					isEmployee: y,
					isGold: w,
					prefShowSnoovatar: E,
					username: j
				} = x, I = !!t && t.id === C, S = h && h.bannerBackgroundImage, _ = m && m.isNSFW && o, P = !(!p || !p.userIsSubscriber), N = "/user/".concat(j, "/"), L = v && v.url === N;
				return r.a.createElement(l.a, {
					isEmployee: y,
					isGold: w,
					isOverlay: a,
					publicDescription: p ? p.publicDescription : void 0,
					title: m ? m.title : void 0,
					url: L ? null : N,
					username: j,
					recentAwardings: O,
					actions: r.a.createElement(r.a.Fragment, null, I && !c && Q({
						username: j,
						currentUserHasSubreddit: s
					}), !I && b && Y({
						profileName: j,
						onToggleFollow: d,
						userIsSubscriber: P
					}), !!t && !I && g && X({
						userId: C
					})),
					footer: r.a.createElement(K, {
						hasSubreddit: b,
						isModerator: i,
						isOwnProfile: I,
						allowViewSnoovatar: E,
						profileName: j,
						sendEvent: u
					}),
					profileIcon: _ ? "".concat(n.a.assetPath, "/img/avatar_over18_square.png") : f,
					bannerBackgroundImage: _ ? void 0 : S
				})
			}))
		},
		"./src/reddit/components/ProfileItemList/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/lodash/last.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-dom/index.js"),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/lib/opener/index.ts"),
				l = s("./src/reddit/constants/adEvents.ts"),
				m = s("./src/reddit/components/PostList/LoadMore.tsx"),
				p = s("./src/reddit/components/PostList/Placeholder.tsx"),
				u = s("./src/reddit/components/PostList/SomethingWrong.tsx"),
				h = s("./src/reddit/components/Scroller/Simple.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/helpers/getClickInfo.ts"),
				x = s("./src/reddit/helpers/pixels.ts"),
				v = s("./src/reddit/helpers/isComment.ts"),
				f = s("./src/lib/LRUCache/index.ts"),
				O = s("./src/telemetry/index.ts"),
				C = s("./src/telemetry/models/Timer.ts"),
				y = s("./src/reddit/components/PostList/index.m.less"),
				w = s.n(y);

			function E() {
				return (E = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var j = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const I = 500,
				S = new f.a(I),
				_ = new f.a(I),
				P = {
					LARGE: 1,
					MEDIUM: 1,
					CLASSIC: 3,
					COMPACT: 5
				},
				N = (e, t, s, n, o, r) => {
					const i = s ? "last-".concat(n, "-").concat(o) : "",
						a = "entered-".concat(e, "-").concat(t, "-").concat(i);
					let c = S.get(a);
					return void 0 === c && (c = () => {
						s && r.onBottomViewed(n, o), r.trackOnPostEnteredViewport(e, t)
					}, S.set(a, c)), c
				},
				L = (e, t) => {
					const s = "click-".concat(e);
					let n = _.get(s);
					return void 0 === n && (n = (e, s) => {
						s.isSponsored && Object(x.a)(s.events, l.a.Click), s.isSponsored && s.source && s.source.outboundUrl ? Object(d.d)(s.source.outboundUrl, d.c.BLANK) : t.openPost({
							postOrComment: s,
							clickInfo: Object(g.a)(e)
						})
					}, _.set(s, n)), n
				};
			class T extends i.a.Component {
				constructor() {
					super(...arguments), this.didRenderLastVisibleChild = !1, this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.scrollChildCache = new f.a(I), this.updateScrollerRef = e => {
						const t = e && Object(a.findDOMNode)(e);
						this.scrollerRef = t instanceof Element ? t : void 0
					}, this.setLastVisibleChildRendered = () => {
						this.didRenderLastVisibleChild = !0, this.checkAndSendScreenview()
					}
				}
				componentWillMount() {
					this.timerId && O.c.cancel(this.timerId), this.props.itemIds.length && (this.timerId = O.c.start())
				}
				componentDidMount() {
					if (this.checkAndSendScreenview(), this.timerId) {
						const e = O.c.end(this.timerId);
						setTimeout(() => Object(O.b)(c.l.Redesign, {
							type: "mount",
							component: "overviewChronoList",
							duration: e
						}), 0)
					}
				}
				componentWillUpdate(e) {
					this.timerId && O.c.cancel(this.timerId), e.itemIds.length && (this.timerId = O.c.start()), (e.listingKey !== this.props.listingKey || e.itemIds.length !== this.props.itemIds.length && !this.isListLongEnough()) && (this.didRenderLastVisibleChild = !1)
				}
				componentDidUpdate(e) {
					if (this.checkAndSendScreenview(), this.timerId && O.c.has(this.timerId)) {
						const e = O.c.end(this.timerId);
						if (e < 10) return;
						setTimeout(() => Object(O.b)(c.l.Redesign, {
							duration: e,
							type: "mount",
							component: "overviewChronoList"
						}), 0)
					}
				}
				componentWillUnmount() {
					this.timerId && O.c.cancel(this.timerId), this.scrollerRef = null, this.didRenderLastVisibleChild = !1
				}
				isListLongEnough() {
					const e = this.scrollerRef && Array.from(this.scrollerRef.children),
						t = e && o()(e);
					return t && t.getBoundingClientRect().bottom > window.innerHeight
				}
				shouldSendScreenview() {
					const {
						apiError: e,
						listingKey: t,
						viewportDataLoaded: s
					} = this.props;
					return O.c.has(t) && (e || !this.renderingPlaceholder && (this.renderingEmpty || this.didRenderLastVisibleChild && (s || this.isListLongEnough())))
				}
				checkAndSendScreenview() {
					const {
						listingKey: e,
						listingViewed: t,
						sendEvent: s
					} = this.props;
					if (!this.shouldSendScreenview()) return;
					const n = O.c.end(e);
					setTimeout(() => s(t(n, C.TimerType.InApp)), 0)
				}
				showPlaceholder() {
					const {
						apiError: e,
						apiPending: t
					} = this.props;
					return Boolean(e) || !1 !== t
				}
				hasPosts() {
					return this.props.itemIds.length > 0
				}
				isLoadingMore() {
					const {
						loadMore: e,
						itemIds: t
					} = this.props;
					return Boolean(e && e.token) && t.length > 0
				}
				shouldComponentUpdate(e) {
					const t = this.props,
						{
							itemIds: s
						} = t,
						n = j(t, ["itemIds"]),
						{
							itemIds: o
						} = e,
						r = j(e, ["itemIds"]),
						i = Object.keys(n),
						a = Object.keys(r);
					return a.length !== i.length || !!a.some(e => n[e] !== r[e])
				}
				scrollChildForItem(e, t, s, n, o, r) {
					const {
						listingKey: a,
						listingName: c,
						postClickEvent: d
					} = this.props, l = s ? "last-index" : "", m = "post-".concat(r, "-").concat(e, "-").concat(t, "-").concat(l, "-").concat(c, "-").concat(a);
					let p;
					if (void 0 === (p = this.scrollChildCache.get(m))) {
						const {
							inSubredditOrProfile: t,
							itemIdToPostId: l
						} = this.props, u = l[e], h = "overview-chrono-list-item-[layout: ".concat(r, "]-[itemId: ").concat(e, "]"), b = N(u, r, s, a, c, this.props), g = {
							key: h,
							eventFactory: d,
							inSubredditOrProfile: t,
							isFirstInCommentList: n,
							isLastInCommentList: o,
							isOverlay: !1,
							itemId: e,
							last: s,
							layout: r,
							onClickPost: L(e, this.props),
							postId: u
						}, x = this.props.itemComponent;
						p = {
							estHeight: this.props.estimateItemHeight(e, r, n),
							id: e,
							isFocusable: !1,
							trackOnEnteredViewport: b,
							render: e => i.a.createElement(x, E({}, g, e))
						}, this.scrollChildCache.set(m, p)
					}
					return p
				}
				render() {
					return this.hasPosts() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !1, this.renderList()) : this.showPlaceholder() ? (this.renderingEmpty = !1, this.renderingPlaceholder = !0, this.renderPlaceholder()) : (this.renderingEmpty = !0, this.renderingPlaceholder = !1, this.renderEmpty())
				}
				renderEmpty() {
					const e = this.props.noPostsComponent;
					return i.a.createElement(e, null)
				}
				renderPlaceholder() {
					const {
						apiError: e,
						className: t,
						layout: s,
						onTryAgain: n
					} = this.props;
					return i.a.createElement("div", {
						className: w.a.placeholder
					}, i.a.createElement(p.a, {
						className: t,
						isLoading: !e,
						layout: s
					}), !!e && i.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderLoadMore() {
					const {
						apiError: e,
						apiPending: t,
						layout: s,
						onLoadMore: n
					} = this.props;
					return i.a.createElement("div", {
						className: w.a.placeholder
					}, i.a.createElement(m.a, {
						isLoading: !!t,
						layout: s,
						countOverride: P[s]
					}), !!e && i.a.createElement(u.a, {
						apiError: e,
						onTryAgain: n
					}))
				}
				renderList() {
					const {
						commentsById: e,
						layout: t,
						loadMore: s,
						itemIds: n,
						onLoadMore: o
					} = this.props, r = n.map((s, o, r) => {
						const i = o === n.length - 1,
							a = o && n[o - 1],
							c = !i && n[o + 1],
							d = !!Object(v.a)(s) && (!a || !Object(v.a)(a) || e[a].postId !== e[s].postId),
							l = !!Object(v.a)(s) && (!c || !Object(v.a)(c) || e[c].postId !== e[s].postId);
						return this.scrollChildForItem(s, o, i, d, l, t)
					});
					return i.a.createElement("div", null, i.a.createElement(h.b, {
						innerRef: this.updateScrollerRef,
						className: this.props.className,
						dataKey: this.props.listingKey,
						disableScrollCache: !0,
						enableElementHiding: !0,
						key: this.props.listingKey,
						layoutKey: this.props.layout,
						loadMoreToken: s && s.token ? s.token : void 0,
						onLastVisibleChildRendered: this.setLastVisibleChildRendered,
						onLoadMore: o,
						viewportTopPadding: b.g + b.t
					}, r), this.isLoadingMore() && this.renderLoadMore())
				}
			}
			t.a = T
		},
		"./src/reddit/components/ProfileNavMenu/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_2vH__bwuub4wzWRqcvhh3m",
				dropdown: "_3ulncTe6l8jRF_TM6HZZFk",
				mainLink: "_1JNzvBgvzSnX27gUBKqqmJ",
				isActive: "Zvl1svdkcyUlRhf5RHGKc",
				hideOnNarrow: "kp9WWKDE0A0U0u7XOOEQP",
				dropdownLink: "_3FXf9zUWKXtpapv4rBHh1L",
				showOnNarrow: "_2cJiWyA-Vif_pfBPZVATnV",
				isGildedExperiment: "_2NuuIeE2x84nNR2055YSCj",
				overflowMenuButton: "_2glPIthm-tV6ZxKaznhb72"
			}
		},
		"./src/reddit/components/ProfileNavMenu/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/fbt/lib/FbtPublic.js"),
				o = s("./node_modules/react/index.js"),
				r = s.n(o),
				i = s("./node_modules/react-redux/es/index.js"),
				a = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/config.ts"),
				m = s("./src/higherOrderComponents/asTooltip.tsx"),
				p = s("./src/lib/classNames/index.ts"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/tooltip.ts"),
				b = s("./src/reddit/components/LayoutNavigation/ConsiderateNav.tsx"),
				g = s("./src/reddit/constants/componentSizes.ts"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/controls/Dropdown/index.tsx"),
				f = s("./src/reddit/controls/InternalLink/index.tsx"),
				O = s("./src/reddit/icons/fonts/Menu/index.tsx"),
				C = s("./src/reddit/models/Profile/index.ts"),
				y = s("./src/reddit/featureFlags/index.ts"),
				w = s("./src/reddit/selectors/experiments/goldProfileGildedAwards.ts"),
				E = s("./src/reddit/selectors/tooltip.ts"),
				j = s("./src/reddit/selectors/user.ts"),
				I = s("./src/reddit/selectors/userPrefs.ts"),
				S = s("./src/reddit/i18n/utils.ts"),
				_ = s("./src/reddit/components/ProfileNavMenu/index.m.less"),
				P = s.n(_);
			const N = Object(x.t)({
					routeName: x.T,
					privateListingType: x.i
				}),
				L = Object(c.c)({
					isDropdownMenuOpen: e => Object(E.a)(e) === k,
					isOwnProfile: (e, t) => Object(j.M)(e, t.profileName),
					language: j.S,
					isInGoldProfileGildedExperiment: w.a,
					isSnoovatar30Enabled: y.d.snoovatar30,
					isSubscriptionsPinned: I.b
				}),
				T = Object(m.a)(v.a),
				k = "profile-nav-menu-tooltip";
			t.a = N(Object(i.b)(L, e => ({
				toggleTooltip: t => e(Object(h.g)({
					tooltipId: t
				}))
			}))(e => {
				let {
					isDropdownMenuOpen: t,
					isOwnProfile: s,
					language: n,
					privateListingType: o,
					profileName: i,
					routeName: a,
					toggleTooltip: c,
					isInGoldProfileGildedExperiment: d,
					isSnoovatar30Enabled: l,
					isSubscriptionsPinned: m
				} = e;
				return r.a.createElement("div", {
					className: Object(p.a)(P.a.container, {
						[P.a.isGildedExperiment]: d
					})
				}, r.a.createElement(b.a, {
					bladeOpen: !1,
					offsetLeft: m ? g.v : 0,
					render: () => r.a.createElement(r.a.Fragment, null, B({
						language: n,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: o,
						isSnoovatar30Enabled: l,
						isInGoldProfileGildedExperiment: d
					}).map(e => r.a.createElement(M, e)), r.a.createElement("button", {
						className: Object(p.a)(P.a.mainLink, P.a.overflowMenuButton),
						id: k,
						onClick: () => c(k)
					}, r.a.createElement(O.a, null)), r.a.createElement(T, {
						className: Object(p.a)(P.a.dropdown, {
							[P.a.isGildedExperiment]: d
						}),
						isOpen: t,
						tooltipId: k
					}, D({
						language: n,
						profileName: i,
						isOwnProfile: s,
						routeName: a,
						privateListingType: o,
						isInGoldProfileGildedExperiment: d
					}).map(e => r.a.createElement(R, e))))
				}))
			}));
			const M = e => {
					let {
						hideOnNarrow: t,
						isActive: s,
						text: n,
						url: o,
						internal: i
					} = e;
					return i ? r.a.createElement(f.a, {
						className: Object(p.a)(P.a.mainLink, {
							[P.a.hideOnNarrow]: !!t,
							[P.a.isActive]: s
						}),
						to: o
					}, n) : r.a.createElement("a", {
						className: Object(p.a)(P.a.mainLink, {
							[P.a.hideOnNarrow]: !!t,
							[P.a.isActive]: s
						}),
						href: o
					}, n)
				},
				R = e => {
					let {
						isActive: t,
						internal: s,
						key: n,
						url: o,
						showOnNarrow: i,
						text: c
					} = e;
					return s ? r.a.createElement(a.a, {
						className: Object(p.a)(P.a.dropdownLink, {
							[P.a.isActive]: t,
							[P.a.showOnNarrow]: !!i
						}),
						to: o,
						key: n,
						rel: "nofollow",
						role: "listitem"
					}, c) : r.a.createElement("a", {
						className: Object(p.a)(P.a.dropdownLink, {
							[P.a.showOnNarrow]: !!i
						}),
						href: o,
						key: n,
						rel: "nofollow",
						role: "listitem",
						target: "_blank"
					}, c)
				},
				B = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: o,
						routeName: r,
						privateListingType: i,
						isSnoovatar30Enabled: a,
						isInGoldProfileGildedExperiment: c
					} = e;
					const l = o ? [{
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Saved,
						key: "profile.saved",
						text: Object(d.a)(t, "profile.sections.saved"),
						url: "/user/".concat(s, "/saved/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					o && c && (l.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), l.push({
						hideOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}));
					const m = a ? [{
						internal: !0,
						isActive: r === u.xb.PROFILE_SNOOBUILDER,
						key: "profile.snoobuilder",
						text: Object(S.c)("Snoobuilder"),
						url: "/user/".concat(s, "/snoo/")
					}] : [];
					return [{
						internal: !0,
						isActive: r === u.xb.PROFILE_OVERVIEW,
						key: "profile.overview",
						text: Object(d.a)(t, "profile.overview"),
						url: "/user/".concat(s, "/")
					}, {
						internal: !0,
						isActive: r === u.xb.PROFILE_POSTS,
						key: "profile.posts",
						text: Object(d.a)(t, "profile.posts"),
						url: "/user/".concat(s, "/posts/")
					}, {
						internal: !0,
						isActive: r === u.xb.PROFILE_COMMENTS,
						key: "profile.comments",
						text: Object(d.a)(t, "profile.comments"),
						url: "/user/".concat(s, "/comments/")
					}, ...m, ...l]
				},
				D = e => {
					let {
						language: t,
						profileName: s,
						isOwnProfile: o,
						routeName: r,
						privateListingType: i,
						isInGoldProfileGildedExperiment: a
					} = e;
					const c = o ? [{
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Hidden,
						key: "profile.hidden",
						text: Object(d.a)(t, "profile.sections.hidden"),
						url: "/user/".concat(s, "/hidden/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Upvoted,
						key: "profile.upvoted",
						text: Object(d.a)(t, "profile.sections.upvoted"),
						url: "/user/".concat(s, "/upvoted/")
					}, {
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.Downvoted,
						key: "profile.downvoted",
						text: Object(d.a)(t, "profile.sections.downvoted"),
						url: "/user/".concat(s, "/downvoted/")
					}] : [];
					return o && a ? (c.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.ReceivedGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards received", null, {
							hk: "10CLzb"
						}),
						url: "/user/".concat(s, "/gilded/")
					}), c.push({
						showOnNarrow: !0,
						internal: !0,
						isActive: r === u.xb.PROFILE_PRIVATE && i === C.a.GivenGildings,
						key: "profile.receiverGildings",
						text: n.fbt._("Awards given", null, {
							hk: "JzMR1"
						}),
						url: "/user/".concat(s, "/gilded/given/")
					}), c) : [...c, {
						internal: !1,
						isActive: !1,
						key: "profile.gilded_legacy",
						text: Object(d.a)(t, "profile.sections.gilded"),
						url: "".concat(l.a.redditUrl, "/user/").concat(s, "/gilded/")
					}]
				}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less": function(e, t, s) {
			e.exports = {
				container: "_1j2O3iNM1HoiXK7B2dmp7b",
				description: "_1izt0pKGHoMq6qSvK4cAIn",
				gotIt: "_3uIlo4RbXf8gjMYw0yP_Jj"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3aof1UDvKACEvKW4EMZ299",
				pin: "_2KRDWSbw-bvKgY9GSzhGAx",
				title: "_3mWek_rCoNZ3KHXxqDuM88"
			}
		},
		"./src/reddit/components/ProfilePinnedPosts/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_274hVfCVJjK6-eGJKLQjgQ",
				miniCardPost: "ieyMhI0VqyYOPt1Za-FW5",
				item: "fuCmx3adjKY3tXA4Zfx2p",
				education: "_1h3IXJoJFpHbyec1FkB4MV",
				title: "jY9rAXGpPzcDUv1AnLGAD"
			}
		},
		"./src/reddit/components/ProfileSidebar/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/components/ProfileIdCard/index.tsx"),
				i = s("./src/reddit/components/SidebarContainer/index.tsx"),
				a = (s("./node_modules/core-js/modules/web.dom.iterable.js"), s("./node_modules/react-redux/es/index.js")),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/reddit/actions/profile/index.ts"),
				m = s("./src/reddit/components/SidebarExpandableList/index.tsx"),
				p = s("./src/reddit/components/Widgets/CommunityList/SubredditList.tsx"),
				u = s("./src/reddit/models/User/index.ts"),
				h = s("./src/reddit/selectors/profile.ts"),
				b = s("./src/reddit/selectors/subscriptions.ts"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less"),
				v = s.n(x);
			const f = Object(c.c)({
					currentUser: g.i,
					language: g.S,
					moderated: h.n,
					subscriptions: b.h,
					hasMoreModerated: h.d,
					loadMorePending: h.a
				}),
				O = Object(a.b)(f, (e, t) => ({
					onLoadMoreGqlModeratedSubreddits: () => e(Object(l.c)(t.profileName))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreModerated && t.onLoadMoreGqlModeratedSubreddits()
					}
				})),
				C = e => {
					let {
						item: t
					} = e;
					return o.a.createElement(p.a, {
						id: t.id,
						iconUrl: t.iconUrl,
						isNSFW: t.isNSFW,
						key: "".concat(t.type, "-").concat(t.name),
						name: t.name,
						subscribers: t.subscribers,
						isSubscribed: t.isSubscribed,
						widget: void 0,
						sendEvent: () => void 0,
						type: t.type
					})
				};
			var y = O(e => {
				const {
					currentUser: t,
					language: s,
					moderated: n,
					profileName: r,
					subscriptions: i,
					hasMoreModerated: a,
					onLoadMore: c,
					loadMorePending: l
				} = e;
				if (0 === n.length) return null;
				const p = t && Object(u.f)(t).toLowerCase() === r.toLowerCase() ? Object(d.a)(s, "profile.moderatedSubredditsYours") : Object(d.a)(s, "profile.moderatedSubreddits"),
					h = function(e, t, s) {
						return e.map(e => ({
							name: e.name,
							subscribers: e.subscribers,
							iconUrl: e.icon.url,
							isNSFW: e.isNSFW,
							isSubscribed: t.has(e.id),
							type: "user" === e.type ? "profile" : "subreddit",
							language: s,
							sendEvent: () => void 0
						}))
					}(n, new Set(i), s);
				return o.a.createElement(m.a, {
					className: v.a.container,
					title: p,
					items: h,
					renderItem: C,
					hasMoreItems: a,
					onLoadMore: c,
					pending: l
				})
			});
			var w = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				E = s("./src/reddit/components/SidebarSpacer/index.tsx"),
				j = s("./src/reddit/i18n/components.tsx"),
				I = s("./src/reddit/i18n/utils.ts"),
				S = s("./src/reddit/components/SidebarProfileMultireddits/index.m.less"),
				_ = s.n(S);
			const P = Object(c.c)({
					hasMoreMultireddits: h.e,
					loadMorePending: h.b,
					multireddits: h.o
				}),
				N = Object(a.b)(P, (e, t) => ({
					onLoadMoreMultireddits: () => e(Object(l.e)(t.profileName, !0))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onLoadMore: () => {
						e.hasMoreMultireddits && t.onLoadMoreMultireddits()
					}
				})),
				L = e => {
					let {
						item: t
					} = e;
					return o.a.createElement("div", {
						className: _.a.listItem,
						key: t.url
					}, o.a.createElement("img", {
						className: _.a.icon,
						src: t.icon
					}), o.a.createElement("div", {
						className: _.a.description
					}, o.a.createElement(w.a, {
						className: _.a.name,
						to: t.url
					}, t.displayText), o.a.createElement("div", {
						className: _.a.meta
					}, o.a.createElement(j.c, null, o.a.createElement(j.b, {
						name: "subredditCount"
					}, t.subredditCount), " ", o.a.createElement(j.a, {
						name: "communities",
						singular: "community",
						plural: "communities",
						count: t.subredditCount
					})))))
				};
			var T = N(e => {
					const {
						hasMoreMultireddits: t,
						loadMorePending: s,
						multireddits: n,
						onLoadMore: r,
						profileName: i
					} = e;
					return n && n.length ? o.a.createElement(E.a, null, o.a.createElement(m.a, {
						hasMoreItems: t,
						items: n,
						onLoadMore: r,
						pending: s,
						renderItem: L,
						title: Object(I.c)("Public custom feeds by u/".concat(Object(I.b)("username", i)))
					})) : null
				}),
				k = s("./src/reddit/components/SidebarStickyBottom/index.tsx"),
				M = s("./src/reddit/controls/OutboundLink/index.tsx"),
				R = s("./src/reddit/controls/Typography/index.tsx"),
				B = s("./src/reddit/layout/twoCol/ExpandRight/index.tsx"),
				D = s("./src/reddit/selectors/index.ts"),
				A = s("./src/reddit/components/SidebarTrophyCase/index.m.less"),
				F = s.n(A),
				H = s("./src/lib/lessComponent.tsx");
			const W = Object(c.c)({
				trophyCase: (e, t) => {
					let {
						profileName: s
					} = t;
					return Object(h.r)(e, Object(h.m)(e, s))
				}
			}, D.a);
			var U = Object(a.b)(W)(e => {
				let {
					trophyCase: t
				} = e;
				return 0 === t.length ? null : o.a.createElement(m.a, {
					title: Object(I.c)("Trophy Case (".concat(Object(I.b)("trophyCount", t.length), ")")),
					items: t,
					renderItem: J
				})
			});
			const V = H.a.wrapped(B.a, "TrophyItem", F.a),
				G = H.a.div("TrophyIcon", F.a),
				z = H.a.h5("TrophyName", F.a),
				K = H.a.div("TrophyContent", F.a),
				Z = H.a.wrapped(R.f, "Description", F.a);

			function J(e) {
				let {
					item: t
				} = e;
				const s = o.a.createElement("img", {
					src: t.icon,
					title: t.name
				});
				return o.a.createElement(V, {
					key: t.id
				}, o.a.createElement(G, null, t.url ? o.a.createElement(M.a, {
					href: t.url,
					source: void 0,
					isSponsored: !1
				}, s) : s), o.a.createElement(K, null, o.a.createElement(z, null, t.name), o.a.createElement(Z, null, t.description)))
			}
			var q = s("./src/reddit/components/TrackingHelper/index.tsx"),
				Q = s("./src/reddit/components/Widgets/Base/index.tsx"),
				Y = s("./src/reddit/constants/posts.ts"),
				X = s("./src/reddit/helpers/trackers/profileSettings.ts"),
				$ = s("./src/reddit/models/ExternalAccount/index.ts"),
				ee = s("./src/reddit/selectors/externalAccount.ts"),
				te = s("./src/reddit/icons/svgs/OutboundLink/index.tsx"),
				se = s("./src/reddit/icons/svgs/Twitter/index.tsx"),
				ne = s("./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less"),
				oe = s.n(ne);
			var re = e => {
					const {
						account: t,
						clickEvent: s,
						provider: n
					} = e;
					let r, i = t.username,
						a = "";
					return n !== $.a.Twitter ? null : (r = o.a.createElement(se.a, {
						className: oe.a.twitterLogo
					}), a = Object(I.c)("View on Twitter"), i = "@".concat(t.username), o.a.createElement(B.a, null, o.a.createElement("span", {
						className: oe.a.icon
					}, r), o.a.createElement(M.a, {
						className: oe.a.link,
						href: t.link,
						isSponsored: !1,
						source: void 0,
						onClick: s
					}, o.a.createElement("div", {
						className: oe.a.linkTitle
					}, o.a.createElement("span", {
						className: oe.a.name
					}, i), o.a.createElement(te.a, {
						className: oe.a.linkIcon
					})), o.a.createElement("div", {
						className: oe.a.linkDescription
					}, a))))
				},
				ie = s("./src/reddit/components/Widgets/ConnectedAccounts/index.m.less"),
				ae = s.n(ie);
			const ce = Object(c.c)({
					twitterAccount: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === Y.a.PROFILE ? Object(ee.c)(e, {
							profileName: s.name
						}) : null
					},
					user: (e, t) => {
						let {
							subredditOrProfile: s
						} = t;
						return s.type === Y.a.PROFILE ? Object(g.hb)(e, {
							userName: s.name
						}) : null
					}
				}),
				de = Object(a.b)(ce, e => ({
					trackTwitterAccountClicked: t => e((e, s) => X.k(s(), t))
				}), (e, t, s) => Object.assign({}, s, e, t, {
					onTwitterAccountClicked: () => t.trackTwitterAccountClicked(e.user)
				}));
			var le = Object(q.b)(de(e => {
				const {
					onTwitterAccountClicked: t,
					twitterAccount: s
				} = e;
				return s ? o.a.createElement(E.a, null, o.a.createElement(Q.b, null, o.a.createElement(Q.a, null, o.a.createElement(j.c, null, "Connected accounts")), s && o.a.createElement("div", {
					className: ae.a.account
				}, o.a.createElement(re, {
					provider: $.a.Twitter,
					account: s,
					clickEvent: t
				})))) : null
			}));
			const me = e => o.a.createElement(i.a, {
				className: e.className
			}, o.a.createElement(r.a, {
				profileName: e.profileName,
				isOverlay: e.isOverlay
			}), o.a.createElement(le, {
				subredditOrProfile: {
					name: e.profileName,
					type: Y.a.PROFILE
				}
			}), o.a.createElement(y, {
				profileName: e.profileName
			}), o.a.createElement(T, {
				profileName: e.profileName
			}), o.a.createElement(E.a, null, o.a.createElement(U, {
				profileName: e.profileName
			})), o.a.createElement(k.a, {
				hideBackToTop: e.hideBackToTop
			}));
			me.defaultProps = {
				isOverlay: !1
			};
			t.a = me
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "Pr5bGphZnd_UYC5p4gJCD",
				container: "Pr5bGphZnd_UYC5p4gJCD",
				PopularIcon: "_2uzMzf2xHgtXHeHKoewIn9",
				popularIcon: "_2uzMzf2xHgtXHeHKoewIn9"
			}
		},
		"./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/icons/svgs/Popular/index.tsx"),
				c = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.m.less"),
				d = s.n(c);
			t.a = e => {
				const {
					children: t,
					className: s,
					showIcon: n
				} = e;
				return o.a.createElement("div", {
					className: Object(r.a)(d.a.Container, s)
				}, n && o.a.createElement(a.a, {
					className: d.a.PopularIcon
				}), o.a.createElement(i.b, {
					type: i.a.Widget
				}, t))
			}
		},
		"./src/reddit/components/SidebarContainer/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_1FUNcfOeszr8eruqLxCMcR"
			}
		},
		"./src/reddit/components/SidebarContainer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/components/SidebarContainer/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("container", r.a)
		},
		"./src/reddit/components/SidebarExpandableList/index.m.less": function(e, t, s) {
			e.exports = {
				TertiaryButton: "_1rpFWd0ROODHctwG096Da",
				tertiaryButton: "_1rpFWd0ROODHctwG096Da"
			}
		},
		"./src/reddit/components/SidebarExpandableList/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/lodash/take.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/app/strings/index.ts"),
				l = s("./src/lib/constants/index.ts"),
				m = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				h = s("./src/reddit/layout/row/Inline/index.tsx"),
				b = s("./src/reddit/layout/row/RightAlign/index.tsx"),
				g = s("./src/reddit/selectors/user.ts"),
				x = s("./src/reddit/components/SidebarExpandableList/index.m.less"),
				v = s.n(x),
				f = s("./src/lib/lessComponent.tsx");
			const O = 10,
				C = f.a.wrapped(p.n, "TertiaryButton", v.a);
			class y extends i.a.Component {
				constructor() {
					super(...arguments), this.state = {
						expanded: !1
					}, this.onButtonClick = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							onLoadMore: s
						} = this.props;
						e || this.setState({
							expanded: !0
						}), e && !t && this.setState({
							expanded: !1
						}), t && s && s()
					}, this.renderToggleButton = () => {
						const {
							expanded: e
						} = this.state, {
							hasMoreItems: t,
							language: s,
							onLoadMore: n,
							pending: o
						} = this.props, r = !e || t && n ? Object(d.a)(s, "sidebar.widgets.expandableList.viewMore") : Object(d.a)(s, "sidebar.widgets.expandableList.viewLess");
						return i.a.createElement(C, {
							onClick: this.onButtonClick
						}, o ? i.a.createElement(u.a, {
							sizePx: O
						}) : r)
					}
				}
				render() {
					const {
						className: e,
						hasMoreItems: t,
						headerButton: s,
						items: n,
						minimizedLength: r,
						renderItem: a,
						title: c
					} = this.props, {
						expanded: d
					} = this.state, l = n.length > r || t, p = (!l || d ? n : o()(n, r)).map(e => a({
						item: e
					}));
					return i.a.createElement(m.a, {
						className: e,
						headerButton: s,
						title: c
					}, p, i.a.createElement(h.a, null, i.a.createElement(b.a, null, l && this.renderToggleButton())))
				}
			}
			y.defaultProps = {
				minimizedLength: l.Cb
			};
			const w = Object(c.c)({
				language: g.S
			});
			t.a = Object(a.b)(w)(y)
		},
		"./src/reddit/components/SidebarFooter/index.m.less": function(e, t, s) {
			e.exports = {
				Widget: "_2wqyhtudP4weVGsZdVXJgt",
				widget: "_2wqyhtudP4weVGsZdVXJgt",
				LinkContainer: "_1KrMye71CT332tKKKUWAj6",
				linkContainer: "_1KrMye71CT332tKKKUWAj6",
				Column: "_3f2nSSsPBqVDV6Sz82qgrR",
				column: "_3f2nSSsPBqVDV6Sz82qgrR",
				Link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				link: "_3Eyh3vRo5o4IfzVZXhaWAG",
				Copyright: "_34dh2eyzMvJfjCBLeoWiDD",
				copyright: "_34dh2eyzMvJfjCBLeoWiDD"
			}
		},
		"./src/reddit/components/SidebarFooter/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				a = s("./src/reddit/components/SidebarFooter/index.m.less"),
				c = s.n(a);
			const {
				fbt: d
			} = s("./node_modules/fbt/lib/FbtPublic.js"), l = r.a.a("Link", c.a);
			t.a = e => o.a.createElement(i.a, {
				className: c.a.Widget,
				redditStyle: e.redditStyle,
				contentOnly: !0
			}, o.a.createElement("div", {
				className: c.a.LinkContainer
			}, o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://www.reddithelp.com"
			}, d._("help", null, {
				hk: "4lyYaD"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/mobile/download"
			}, d._("Reddit App", null, {
				hk: "1ehrjP"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/coins"
			}, d._("Reddit coins", null, {
				hk: "32iMaN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/premium"
			}, d._("Reddit premium", null, {
				hk: "RuO3A"
			})), o.a.createElement(l, {
				href: "http://redditgifts.com/"
			}, d._("Reddit gifts", null, {
				hk: "2XziRN"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/subreddits/a-1/"
			}, d._("Communities", null, {
				hk: "3CJu37"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/posts/a-1/"
			}, d._("Top Posts", null, {
				hk: "2NOEW2"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/topics/a-1/"
			}, d._("Topics", null, {
				hk: "349RFt"
			}))), o.a.createElement("div", {
				className: c.a.Column
			}, o.a.createElement(l, {
				href: "https://about.reddit.com"
			}, d._("about", null, {
				hk: "1sqJKs"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/careers/"
			}, d._("careers", null, {
				hk: "26ABvc"
			})), o.a.createElement(l, {
				href: "https://about.reddit.com/press/"
			}, d._("press", null, {
				hk: "2Qmgdz"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/advertising"
			}, d._("advertise", null, {
				hk: "Mt40U"
			})), o.a.createElement(l, {
				href: "http://www.redditblog.com/"
			}, d._("blog", null, {
				hk: "46IQJw"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/user-agreement"
			}, d._("Terms", null, {
				hk: "4qRzfE"
			})), o.a.createElement(l, {
				href: "https://www.redditinc.com/policies/content-policy"
			}, d._("Content policy", null, {
				hk: "1DyxZS"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/privacypolicy"
			}, d._("Privacy policy", null, {
				hk: "10K04G"
			})), o.a.createElement(l, {
				href: "https://www.reddit.com/help/healthycommunities/"
			}, d._("Mod policy", null, {
				hk: "2gYc2T"
			})))), o.a.createElement("div", {
				className: c.a.Copyright
			}, d._("Reddit Inc © {year}. All rights reserved", [d._param("year", (new Date).getFullYear().toString())], {
				hk: "4BrCkA"
			})))
		},
		"./src/reddit/components/SidebarProfileModeratedSubreddits/index.m.less": function(e, t, s) {
			e.exports = {
				container: "_3thndRe559UZy14xE1gZ_"
			}
		},
		"./src/reddit/components/SidebarProfileMultireddits/index.m.less": function(e, t, s) {
			e.exports = {
				listItem: "_3lbnTBPV5H4wHdRz5ATVc9",
				icon: "Vm0_pCIi1Z6JWa0EVf6jK",
				description: "_2xcc4c-4TOL7KOsJidXtl",
				name: "_3nt8_GidTIn88UciXx27E7",
				meta: "_3iC0Hyv57ON8dAtU94HFE_"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.m.less": function(e, t, s) {
			e.exports = {
				Component: "_2vEf-C2keJaBMY9qk_BxVn",
				component: "_2vEf-C2keJaBMY9qk_BxVn"
			}
		},
		"./src/reddit/components/SidebarSpacer/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/SidebarSpacer/index.m.less"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx");
			t.a = r.a.div("Component", o.a)
		},
		"./src/reddit/components/SidebarStickyBottom/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_1oRQu-aolgpPPJDblUGTw5",
				container: "_1oRQu-aolgpPPJDblUGTw5",
				BackToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				backToTop: "_3Tc8YYRhVDX9vlR0XePZfH",
				StickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				stickyStyles: "_1vYrJH5uc57mZQJPN4l34E",
				LargeOffset: "_2Fh9XKrAUp6CQHSgW98LEb",
				largeOffset: "_2Fh9XKrAUp6CQHSgW98LEb"
			}
		},
		"./src/reddit/components/SidebarStickyBottom/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./src/lib/classNames/index.ts"),
				o = s("./node_modules/lodash/throttle.js"),
				r = s.n(o),
				i = s("./node_modules/react/index.js"),
				a = s.n(i),
				c = s("./src/lib/constants/index.ts"),
				d = s("./src/reddit/controls/Button/index.tsx"),
				l = s("./src/reddit/i18n/components.tsx"),
				m = s("./src/reddit/components/BackToTop/index.m.less"),
				p = s.n(m),
				u = e => a.a.createElement("div", {
					className: Object(n.a)(e.className, p.a.container),
					style: e.style
				}, a.a.createElement(d.f, {
					className: p.a.button,
					onClick: () => window.scroll(0, 0)
				}, a.a.createElement(l.c, null, "Back to top"))),
				h = s("./src/reddit/components/SidebarFooter/index.tsx"),
				b = s("./src/reddit/constants/componentSizes.ts"),
				g = s("./src/reddit/contexts/PageLayer/index.tsx"),
				x = s("./src/reddit/selectors/experiments/categoriesPlacement.ts"),
				v = s("./src/reddit/components/SidebarStickyBottom/index.m.less"),
				f = s.n(v),
				O = s("./src/lib/lessComponent.tsx");

			function C() {
				return (C = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var y = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const w = c.e[1] + 24,
				E = b.g + 8 + 152 + 32 + 16,
				j = E + w + 8,
				I = O.a.div("Container", f.a),
				S = O.a.wrapped(e => {
					var {
						className: t
					} = e, s = y(e, ["className"]);
					return a.a.createElement(u, C({
						className: t,
						style: {
							top: "calc(100vh - ".concat(40, "px)")
						}
					}, s))
				}, "BackToTop", f.a),
				_ = e => {
					let {
						categoriesPlacementVariant: t,
						children: s,
						className: o,
						isSticky: r
					} = e;
					return a.a.createElement("div", {
						className: Object(n.a)(o, {
							[f.a.StickyStyles]: r,
							[f.a.LargeOffset]: Object(x.f)(t)
						})
					}, s)
				};
			class P extends i.Component {
				constructor(e) {
					super(e), this.containerEl = null, this.windowHeight = 1 / 0, this.getStickyContents = () => ({
						shouldAdSticky: this.windowHeight > j,
						shouldFooterSticky: this.windowHeight > E
					}), this.updateState = () => {
						if (this.isHidden()) return;
						const {
							shouldAdSticky: e,
							shouldFooterSticky: t
						} = this.getStickyContents();
						e === this.state.isAdSticky && t === this.state.isFooterSticky || this.setState({
							isAdSticky: e,
							isFooterSticky: t
						})
					}, this.updateMeasurements = () => {
						this.windowHeight = window.innerHeight
					}, this.handleResize = r()(() => {
						this.updateMeasurements(), this.updateState()
					}, c.F), this.setWrapperRef = e => this.containerEl = e || null, this.state = {
						isAdSticky: !0,
						isFooterSticky: !0
					}
				}
				isHidden() {
					return !this.containerEl || null === this.containerEl.offsetParent
				}
				componentDidMount() {
					this.isHidden() || this.handleResize(), window.addEventListener("resize", this.handleResize)
				}
				componentWillUnmount() {
					window.removeEventListener("resize", this.handleResize)
				}
				render() {
					const {
						props: {
							adComponent: e,
							categoriesPlacementVariant: t,
							children: s,
							className: n,
							hideFooter: o,
							railsWidgetsVariant: r
						}
					} = this, i = this.state.isAdSticky && !(!e && !s);
					return a.a.createElement(I, {
						className: n,
						innerRef: this.setWrapperRef
					}, a.a.createElement(_, {
						categoriesPlacementVariant: t,
						isSticky: i || !!r
					}, e, s, !o && a.a.createElement(h.a, null)), !this.props.hideBackToTop && a.a.createElement(S, null))
				}
			}
			const N = Object(g.t)();
			t.a = N(P)
		},
		"./src/reddit/components/SidebarTrophyCase/index.m.less": function(e, t, s) {
			e.exports = {
				TrophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				trophyIcon: "_2QZW3qVaM5fa8vo4uwbT42",
				TrophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				trophyContent: "_3xkLQuKJQtF5YjN4IsD-iU",
				TrophyItem: "QY_PhyoOHbRd-_92ivr-m",
				trophyItem: "QY_PhyoOHbRd-_92ivr-m",
				TrophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				trophyName: "_3lNmiqeZrNM0E_H2ZCIpN_",
				Description: "_3n5-aYyk15dtyt-boqlDrq",
				description: "_3n5-aYyk15dtyt-boqlDrq"
			}
		},
		"./src/reddit/components/StateSort/index.m.less": function(e, t, s) {
			e.exports = {
				_Dropdown: "KZGTzwiGn_74p_B8yZaKw",
				dropdown: "KZGTzwiGn_74p_B8yZaKw",
				Component: "_3-D0oENu00AlV9AmpZqxfm",
				component: "_3-D0oENu00AlV9AmpZqxfm"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.m.less": function(e, t, s) {
			e.exports = {
				IconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				iconButton: "_1zyZUfB30L-DDI98CCLJlQ",
				active: "_2FebEA49ReODemDlwzYHSR",
				SubscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				subscribeIcon: "_1O2i-ToERP3a0i4GSL0QwU",
				UnsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				unsubscribeIcon: "_1uBzAtenMgErKev3G7oXru",
				isSmall: "_2ilDLNSvkCHD3Cs9duy9Q_",
				SubscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				subscribeIconButton: "_2kBlhw4LJXNnk73IJcwWsT",
				UnsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				unsubscribeIconButton: "_1kRJoT0CagEmHsFjl2VT4R",
				SubscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				subscribeInternalButton: "_3VgTjAJVNNV7jzlnwY-OFY",
				UnsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				unsubscribeButton: "_2QmHYFeMADTpuXJtd36LQs",
				UnsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				unsubscribeButtonDefault: "_31L3r0EWsU0weoMZvEJcUA",
				UnsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW",
				unsubscribeButtonHover: "_11Zy7Yp4S1ZArNqhUQ0jZW"
			}
		},
		"./src/reddit/components/SubscribeButton/Base.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return S
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/app/strings/index.ts"),
				i = s("./src/reddit/constants/elementClassNames.ts"),
				a = s("./src/reddit/controls/Button/index.tsx"),
				c = s("./src/reddit/i18n/utils.ts"),
				d = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = s("./src/reddit/icons/svgs/Plus/index.tsx"),
				m = s("./src/reddit/components/SubscribeButton/helpers/actionTemplateSource.ts"),
				p = s("./src/reddit/components/SubscribeButton/Base.m.less"),
				u = s.n(p),
				h = s("./src/lib/classNames/index.ts"),
				b = s("./src/lib/lessComponent.tsx");

			function g() {
				return (g = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var x = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const v = b.a.button("IconButton", u.a),
				f = b.a.wrapped(l.a, "SubscribeIcon", u.a),
				O = b.a.wrapped(d.a, "UnsubscribeIcon", u.a),
				C = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return o.a.createElement(v, n, o.a.createElement(f, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeIconButton", u.a),
				y = b.a.wrapped(e => {
					var {
						border: t,
						small: s
					} = e, n = x(e, ["border", "small"]);
					return t ? o.a.createElement(a.f, g({}, n, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					})) : o.a.createElement(a.n, g({}, n, {
						className: Object(h.a)(n.className, {
							[u.a.isSmall]: s
						})
					}))
				}, "SubscribeInternalButton", u.a),
				w = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(C, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : o.a.createElement(y, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				},
				E = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, a = x(e, ["border", "language", "small", "type"]);
					return o.a.createElement(v, a, o.a.createElement(O, {
						className: Object(h.a)(i.o, a.className, {
							[u.a.isSmall]: n
						})
					}))
				}, "UnsubscribeIconButton", u.a),
				j = b.a.wrapped(e => {
					var {
						border: t,
						language: s,
						small: n,
						type: r
					} = e, i = x(e, ["border", "language", "small", "type"]);
					const d = o.a.createElement(o.a.Fragment, null, o.a.createElement("span", {
							className: u.a.UnsubscribeButtonDefault
						}, "subreddit" === r ? Object(c.c)("Joined") : Object(c.c)("Following")), o.a.createElement("span", {
							className: u.a.UnsubscribeButtonHover
						}, "subreddit" === r ? Object(c.c)("Leave") : Object(c.c)("Unfollow"))),
						l = Object(h.a)(i.className, {
							[u.a.isSmall]: n
						});
					return t ? o.a.createElement(a.i, g({}, i, {
						className: l,
						children: d
					})) : o.a.createElement(a.n, g({}, i, {
						className: l,
						children: d
					}))
				}, "UnsubscribeButton", u.a),
				I = e => {
					var {
						icon: t
					} = e, s = x(e, ["icon"]);
					return t ? o.a.createElement(E, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					})) : o.a.createElement(j, g({}, s, {
						className: Object(h.a)(s.className, {
							[u.a.isSmall]: s.small
						})
					}))
				};
			class S extends o.a.Component {
				constructor() {
					super(...arguments), this.onClick = e => {
						if (this.props.userIsSubscriber ? this.props.onUnsubscribe() : this.props.onSubscribe(), this.props.onClick && this.props.onClick(e), this.props.getEventFactory) {
							const e = this.props.getEventFactory(this.props.userIsSubscriber);
							e && this.props.sendEvent(e)
						}
					}
				}
				componentDidMount() {
					this.props.onSubscriptionsRequested()
				}
				render() {
					const {
						border: e = !0,
						className: t,
						icon: s = !1,
						id: n,
						language: i,
						small: a = !1
					} = this.props, c = {
						border: e,
						className: t,
						icon: s,
						onClick: this.onClick,
						small: a
					};
					return this.props.userIsSubscriber ? o.a.createElement(I, g({}, c, {
						language: i,
						type: this.props.identifier.type
					})) : o.a.createElement(w, g({}, c, {
						id: n
					}), this.props.children, Object(r.a)(i, "subscriptions.".concat(Object(m.a)({
						type: this.props.identifier.type
					}), ".subscribe")))
				}
			}
		},
		"./src/reddit/components/SubscribeButton/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/reddit/components/TrackingHelper/index.tsx"),
				o = s("./src/reddit/connectors/SubscribeButton/index.ts"),
				r = s("./src/reddit/components/SubscribeButton/Base.tsx");
			t.a = Object(o.a)(Object(n.b)(r.a))
		},
		"./src/reddit/components/TimeSort/index.m.less": function(e, t, s) {
			e.exports = {
				ListingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey",
				listingSortContainer: "_29FQ-HlVE3aNu0iB8mO-ey"
			}
		},
		"./src/reddit/components/TimeSort/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.array.sort.js");
			var n = s("./node_modules/path-browserify/index.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/higherOrderComponents/asTooltip.tsx"),
				m = s("./src/lib/addQueryParams/index.ts"),
				p = s("./src/lib/constants/index.ts"),
				u = s("./src/reddit/actions/tooltip.ts"),
				h = s("./src/reddit/components/ListingSort/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				g = s("./src/reddit/constants/listingSorts.ts"),
				x = s("./src/reddit/constants/parameters.ts"),
				v = s("./src/reddit/contexts/PageLayer/index.tsx"),
				f = s("./src/reddit/contexts/Tooltip.ts"),
				O = s("./src/reddit/controls/Dropdown/index.tsx"),
				C = s("./src/reddit/controls/Dropdown/Row.tsx"),
				y = s("./src/reddit/helpers/trackers/navigation.ts"),
				w = s("./src/reddit/selectors/tooltip.ts"),
				E = s("./src/reddit/selectors/user.ts"),
				j = s("./src/reddit/components/TimeSort/index.m.less"),
				I = s.n(j),
				S = s("./src/lib/lessComponent.tsx");

			function _() {
				return (_ = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const P = "TimeSort--SortPicker",
				N = Object(l.a)(O.a),
				L = (e, t, s) => {
					let n = e.url;
					return e.urlParams.sort || Object(v.H)(e) || (n = o.a.join(n, t)), Object(m.a)(n, {
						[x.t]: s
					})
				},
				T = S.a.div("ListingSortContainer", I.a),
				k = Object(v.t)(),
				M = Object(c.c)({
					dropdownIsOpen: Object(w.b)(P),
					language: E.S
				}),
				R = Object(a.b)(M, e => ({
					onOpenDropdown: () => e(Object(u.g)({
						tooltipId: P
					}))
				}));
			t.a = k(R(Object(b.b)(e => i.a.createElement(T, {
				className: e.className,
				onClick: e.onOpenDropdown
			}, i.a.createElement(h.c, {
				className: e.wrapperClassName,
				disabled: !1
			}, i.a.createElement(h.b, {
				className: e.buttonClassName,
				displayText: g.b[e.timeSort],
				id: P,
				showDropdownTriangle: !0
			})), i.a.createElement(f.a.Consumer, null, t => i.a.createElement(N, _({
				isOpen: e.dropdownIsOpen,
				tooltipId: P
			}, t), [p.Ob.HOUR, p.Ob.DAY, p.Ob.WEEK, p.Ob.MONTH, p.Ob.YEAR, p.Ob.ALL].map(t => i.a.createElement(C.b, {
				className: Object(d.a)(e.rowClassName, e.timeSort === t ? e.rowSelectedClassName : void 0),
				displayText: g.b[t],
				href: L(e.pageLayer, e.listingSort, t),
				isSelected: e.timeSort === t,
				onClick: () => {
					e.onChange(t), e.sendEvent(Object(y.f)(t))
				}
			}))))))))
		},
		"./src/reddit/components/Widgets/Base/index.m.less": function(e, t, s) {
			e.exports = {
				WidgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				widgetBackground: "_3Im6OD67aKo33nql4FpSp_",
				WidgetHeader: "lnK0-OzG7nLFydTWuXGcY",
				widgetHeader: "lnK0-OzG7nLFydTWuXGcY"
			}
		},
		"./src/reddit/components/Widgets/Base/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return m
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/components/SEOTitle/index.tsx"),
				a = s("./src/reddit/components/Widgets/Base/index.m.less"),
				c = s.n(a),
				d = function(e, t) {
					var s = {};
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
					if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
						var o = 0;
						for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
					}
					return s
				};
			const l = r.a.div("WidgetBackground", c.a),
				m = r.a.wrapped(e => {
					var {
						children: t
					} = e, s = d(e, ["children"]);
					return o.a.createElement("div", s, o.a.createElement(i.b, {
						type: i.a.Widget
					}, t))
				}, "WidgetHeader", c.a);
			t.b = e => o.a.createElement("div", {
				className: e.className
			}, o.a.createElement(l, null, e.children))
		},
		"./src/reddit/components/Widgets/CommunityList/SubredditList.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/react-router-dom/esm/react-router-dom.js"),
				a = s("./node_modules/reselect/es/index.js"),
				c = s("./src/app/strings/index.ts"),
				d = s("./src/lib/classNames/index.ts"),
				l = s("./src/lib/prettyPrintNumber/index.ts"),
				m = s("./src/reddit/components/Flair/index.tsx"),
				p = s("./src/reddit/components/RailsWidgets/WidgetTitle/index.tsx"),
				u = s("./src/reddit/components/SubscribeButton/index.tsx"),
				h = s("./src/reddit/actions/subscription/index.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const g = Object(a.c)({
				language: b.S
			});
			var x = Object(r.b)(g, (e, t) => {
					const s = t.widget.id || void 0;
					return {
						onSubscribe: () => e(h.d([t.identifier], !0, s)),
						onSubscriptionsRequested: () => e(h.e()),
						onUnsubscribe: () => e(h.d([t.identifier], !1, s))
					}
				})(s("./src/reddit/components/SubscribeButton/Base.tsx").a),
				v = s("./src/reddit/components/Widgets/ThemedWidget/index.tsx"),
				f = s("./src/reddit/constants/componentSizes.ts"),
				O = s("./src/reddit/controls/Button/index.tsx"),
				C = s("./src/reddit/controls/LoadingIcon/index.tsx"),
				y = s("./src/reddit/i18n/utils.ts"),
				w = s("./src/reddit/icons/svgs/CircledPlanet/index.tsx"),
				E = s("./src/reddit/layout/threeCol/ExpandCenter/index.tsx"),
				j = s("./src/reddit/models/Flair/index.ts"),
				I = s("./src/reddit/components/Widgets/CommunityList/helpers.ts"),
				S = s("./src/reddit/components/Widgets/CommunityList/index.m.less"),
				_ = s.n(S);

			function P() {
				return (P = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			s.d(t, "b", (function() {
				return N
			})), s.d(t, "a", (function() {
				return T
			}));
			const N = e => o.a.createElement(v.a, {
					className: Object(d.a)(_.a.Container, {
						[_.a.rails]: !!e.railsWidgetsVariant
					}, e.className),
					noGradient: !0,
					styles: e.widget && e.widget.styles,
					title: e.railsWidgetsVariant ? "" : e.title,
					truncateThreshold: e.truncateThreshold,
					widgetKind: e.widget && e.widget.kind
				}, !!e.railsWidgetsVariant && o.a.createElement(p.a, {
					className: _.a.WidgetTitle
				}, e.title), o.a.createElement("div", {
					className: _.a.container
				}, e.isLoading ? o.a.createElement(C.a, {
					className: _.a.loadingIcon,
					sizePx: 32
				}) : o.a.createElement(o.a.Fragment, null, e.isError ? o.a.createElement("p", {
					className: _.a.errorMsg
				}, e.errorMsg || Object(y.c)("Something went wrong.")) : o.a.createElement(o.a.Fragment, null, e.communities.map(t => o.a.createElement(T, P({
					key: t.name
				}, t, {
					getSubscribeEventFactory: e.getSubscribeEventFactoryHandler ? e.getSubscribeEventFactoryHandler(t) : void 0,
					widget: e.widget,
					sendEvent: e.sendEvent,
					type: t.type || "subreddit",
					buttonDisabled: e.itemButtonDisabled,
					isLoading: e.loadingItemName && e.loadingItemName.toLowerCase() === t.name.toLowerCase() || !1,
					isNSFW: t.isNSFW,
					onCommunityNameClick: e.getClickEventFactory ? () => e.sendEvent(e.getClickEventFactory(t)) : void 0,
					railsWidgetsVariant: e.railsWidgetsVariant,
					tertiaryButtonText: e.tertiaryButtonText,
					useTertiaryButton: e.useTertiaryButton,
					showTertiaryButtonOnHover: e.showTertiaryButtonOnHover,
					onTertiaryButtonClick: e.onTertiaryButtonClick
				})))), e.bottomButtonText && e.onBottomButtonClick && o.a.createElement(O.n, {
					className: _.a.bottomButton,
					onClick: e.onBottomButtonClick
				}, e.bottomButtonText)))),
				L = Object(a.c)({
					hideNSFWPref: b.z,
					language: b.S
				}),
				T = Object(r.b)(L)(e => o.a.createElement("div", {
					className: _.a.communityItemContainer
				}, o.a.createElement(E.a, {
					widthRight: f.u
				}, o.a.createElement("div", {
					className: _.a.iconContainer
				}, e.communityIcon || e.iconUrl ? o.a.createElement("img", {
					className: _.a.subredditIcon,
					src: e.iconUrl || e.communityIcon
				}) : o.a.createElement(w.a, {
					className: _.a.planetIcon,
					"data-redditstyle": !0
				})), o.a.createElement("div", {
					className: _.a.communityDescriptionContainer
				}, o.a.createElement(i.a, {
					className: _.a.communityName,
					to: Object(I.a)(e.name, e.type),
					onClick: e.onCommunityNameClick
				}, Object(I.b)(e.name, e.type)), o.a.createElement("div", {
					className: _.a.communityInfoContainer
				}, !!e.subscribers && o.a.createElement("p", {
					className: _.a.subscriberCount
				}, Object(c.c)(e.language, "listings.subscribers", e.subscribers, {
					count: Object(l.b)(e.subscribers)
				})), e.isNSFW && o.a.createElement(m.b, {
					flair: {
						type: j.f.Nsfw,
						text: "nsfw"
					}
				}))), !e.railsWidgetsVariant && (e.useTertiaryButton && e.tertiaryButtonText && e.onTertiaryButtonClick ? e.isLoading ? o.a.createElement(C.a, {
					className: Object(d.a)(_.a.communityCta, _.a.smallLoadingIcon),
					sizePx: 12
				}) : o.a.createElement(O.n, {
					className: Object(d.a)(_.a.communityCta, {
						[_.a.showOnHover]: e.showTertiaryButtonOnHover
					}),
					disabled: e.buttonDisabled,
					onClick: () => e.onTertiaryButtonClick(e)
				}, e.tertiaryButtonText) : e.widget ? o.a.createElement(x, {
					disabled: e.buttonDisabled,
					getEventFactory: e.getSubscribeEventFactory,
					identifier: {
						name: e.name,
						type: e.type
					},
					sendEvent: e.sendEvent,
					small: !0,
					userIsSubscriber: !!e.isSubscribed,
					widget: e.widget
				}) : o.a.createElement(u.a, {
					disabled: e.buttonDisabled,
					identifier: {
						name: e.name,
						type: e.type
					},
					getEventFactory: e.getSubscribeEventFactory,
					small: !0
				}))), !!e.description && o.a.createElement("p", {
					title: e.description,
					className: _.a.communityDescription
				}, e.description)))
		},
		"./src/reddit/components/Widgets/CommunityList/helpers.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/posts.ts"),
				o = s("./src/reddit/helpers/name/index.ts");

			function r(e, t) {
				return (t === n.a.PROFILE ? "/user/" : "/r/") + e + "/"
			}

			function i(e, t) {
				return t === n.a.PROFILE ? Object(o.c)(e) : Object(o.b)(e)
			}
		},
		"./src/reddit/components/Widgets/CommunityList/index.m.less": function(e, t, s) {
			e.exports = {
				Container: "_2j6XpwwZyn7dNcfH7Blz0B",
				container: "_3-1jy8hD77zNJUdEMxDrXC",
				rails: "_2ucwLgmYT_bEawlfA81Q3L",
				communityItemContainer: "_3NFddqqrzfM8noBES52Qcy",
				subscriberCount: "e0X82913OdCTkFf2HU-WL",
				bottomButton: "_1aWHRawTuRl2HMpanJbrrb",
				communityCta: "_1edkK552-3m7bXOdDxtLx_",
				smallLoadingIcon: "_32ZA09sNmrGEXkOPMOCLst",
				showOnHover: "_1kul3JsqY5kjVe9kzGy4bV",
				communityDescription: "_2IANzA2n-6eA5T8Tz0TEVE",
				communityName: "_3BFvyrImF3et_ZF21Xd8SC",
				isTruncated: "_3idiZ5DFVkbhhKjDBTQeq-",
				iconContainer: "_19EKcu4yel161081OGs8w9",
				iconStyles: "_9p_iPxnOh7HnkcLhtSCDs",
				planetIcon: "_3GFjQrq7t7DpW__ZFpU7xf",
				secondaryLinkButton: "_1Yi_hbFvk7YS9Op3tGVQq9",
				subredditIcon: "_2BR7Oy0CAj5EiSDYQ--CAE",
				textArea: "_3X2QmclgxJpDGOG7vui_8z",
				textButton: "_3k6fSIkIt6-LCDmLz7Didp",
				trashIcon: "_3T0iddL64wHJU4Ri4QU80I",
				loadingIcon: "_1S__kHcDfbOdA2sCV8sn9U",
				errorMsg: "_2AlaL9JsHLdMUnGFOPta5H",
				leftAligned: "T4XQNeAXcz6U72tv0Z5Z6",
				WidgetTitle: "g-Bp8lR31etQDRRiyWCDU",
				widgetTitle: "g-Bp8lR31etQDRRiyWCDU"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/Account/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_1zLylbOLqdzG2C4JhdkEVQ",
				twitterLogo: "_1N1dJvzR-m3nNoVl8cxHul",
				link: "JqNsQRTEcAPCq8_G0O5mO",
				name: "_28fbIV1TS_oSVjfzjWnM0f",
				linkDescription: "_2Y1Xv08xrWbsDZuEvIuRKo",
				linkTitle: "elMVR2YfkbHdFTihhlUK4",
				linkIcon: "oi2L0mBSRAULcOPEtjXSh",
				description: "KKNu_jB7N6A-PuBrW0WoR",
				visitButton: "NBL39n3gjYvG4c9qlXJIk"
			}
		},
		"./src/reddit/components/Widgets/ConnectedAccounts/index.m.less": function(e, t, s) {
			e.exports = {
				account: "_25M-5tlJjQOChCI8sg84QU"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.m.less": function(e, t, s) {
			e.exports = {
				widgetBackground: "_1G4yU68P50vRZ4USXfaceV",
				clickable: "_2mtWlchu4uQf339v56bSha",
				redditStyle: "_2QeqBqfT5UbHBoViZUt-wX",
				truncatedGradient: "_1lvCNVth3dt5y8lu3vT95L",
				widgetHeader: "_ZhON3a3vplThB8NFwuJn",
				widgetTitle: "_2sggAEfRQLyoAl4J__5twU",
				widgetContent: "TmgZY6tDcdErbE5d7E0HJ",
				widgetContentOnly: "_3RPJ8hHnfFohktLZca18J6",
				truncated: "r5dzQq7dgZyAmve8abbbt",
				seeMore: "_3dbp6Cm9uKkkIBr9EsU-qS"
			}
		},
		"./src/reddit/components/Widgets/ThemedWidget/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/lib/classNames/index.ts"),
				c = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				d = s("./src/reddit/components/SEOTitle/index.tsx"),
				l = s("./src/reddit/components/TrackingHelper/index.tsx"),
				m = s("./src/reddit/contexts/PageLayer/index.tsx"),
				p = s("./src/reddit/controls/Button/index.tsx"),
				u = s("./src/reddit/selectors/telemetry.ts");
			const h = (e, t) => s => Object.assign({
				source: "community_widgets",
				action: "click",
				noun: "see_more",
				widget: Object(u.widget)(s, {
					subredditId: e,
					widgetKind: t
				})
			}, u.defaults);
			var b = s("./src/reddit/i18n/components.tsx"),
				g = s("./src/reddit/models/NewStructuredStyles/index.ts"),
				x = s("./src/reddit/selectors/experiments/topPosts.ts"),
				v = s("./src/reddit/selectors/structuredStyles.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/models/Theme/index.ts"),
				C = s("./src/reddit/models/Theme/NewColorSystem/index.ts");
			const y = e => e.styles && e.styles.backgroundColor ? e.styles.backgroundColor : Object(C.a)(e).widgetColors.sidebarWidgetBackgroundColor,
				w = e => e.styles && e.styles.headerColor ? e.styles.headerColor : Object(C.a)(e).widgetColors.sidebarWidgetHeaderColor,
				E = e => {
					const t = y(e);
					return Object(O.f)(t)
				},
				j = e => {
					const t = w(e);
					return Object(O.f)(t)
				};
			var I = s("./src/reddit/components/Widgets/ThemedWidget/index.m.less"),
				S = s.n(I);
			const _ = Object(m.t)(),
				P = Object(r.b)(() => Object(i.c)({
					forceRedditStyle: (e, t) => {
						const s = Object(m.m)(e, t) || void 0,
							n = t.redditStyle || Object(v.m)(e, {
								subredditId: s
							}),
							o = Object(f.U)(e);
						return n || o
					},
					nigtmode: f.U,
					subredditId: m.m,
					topPostVariant: x.d
				}));
			class N extends o.a.Component {
				constructor() {
					super(...arguments), this.contentRef = o.a.createRef(), this.state = {
						isTruncated: !1
					}, this.handleSeeMoreClick = () => {
						const {
							subredditId: e,
							widgetKind: t
						} = this.props;
						e && t && this.props.sendEvent(h(e, t)), this.setState({
							isTruncated: !1
						})
					}
				}
				componentDidMount() {
					const e = this.contentRef.current,
						t = e && e.offsetHeight;
					this.props.truncateThreshold && t && t > this.props.truncateThreshold && this.setState({
						isTruncated: !0
					})
				}
				getWidgetBackgroundStyles() {
					const e = {};
					return e.backgroundColor = y(this.props), e.borderColor = Object(g.d)(e.backgroundColor, this.props.nigtmode), e.color = e.fill = E(this.props), e
				}
				getWidgetHeaderStyles() {
					const e = {};
					return e.backgroundColor = w(this.props), e.color = e.fill = j(this.props), e
				}
				render() {
					const {
						children: e,
						className: t,
						contentOnly: s,
						forceRedditStyle: n,
						headerButton: r,
						onClick: i,
						title: c,
						titleClassName: l,
						truncateThreshold: m
					} = this.props, u = s ? S.a.widgetContentOnly : S.a.widgetContent, h = !n && this.props.styles, g = h ? this.getWidgetBackgroundStyles() : {}, x = h ? this.getWidgetHeaderStyles() : {};
					return o.a.createElement("div", {
						className: Object(a.a)(t, S.a.widgetBackground, {
							[S.a.redditStyle]: n,
							[S.a.clickable]: !!i,
							[S.a.truncatedGradient]: this.state.isTruncated && !this.props.noGradient
						}),
						"data-redditstyle": n,
						onClick: i,
						style: g
					}, c && o.a.createElement("div", {
						className: S.a.widgetHeader,
						style: x
					}, o.a.createElement("div", {
						className: Object(a.a)(S.a.widgetTitle, l)
					}, o.a.createElement(d.b, {
						type: d.a.Widget
					}, c)), r), o.a.createElement("div", {
						className: Object(a.a)(u, {
							[S.a.truncated]: this.state.isTruncated
						}),
						ref: this.contentRef,
						style: {
							maxHeight: this.state.isTruncated ? m : "none"
						}
					}, e), this.state.isTruncated && o.a.createElement(p.n, {
						className: S.a.seeMore,
						onClick: this.handleSeeMoreClick
					}, o.a.createElement(b.c, null, "See More")))
				}
			}
			t.a = _(P(Object(c.a)(Object(l.b)(N))))
		},
		"./src/reddit/connectors/OverviewChronoList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return g
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/reddit/actions/post.ts"),
				i = s("./src/reddit/actions/postList.ts"),
				a = s("./src/reddit/components/TrackingHelper/index.tsx"),
				c = s("./src/reddit/contexts/PageLayer/index.tsx"),
				d = s("./src/reddit/helpers/isComment.ts"),
				l = s("./src/reddit/helpers/isPost.ts"),
				m = s("./src/reddit/helpers/trackers/post.ts"),
				p = s("./src/reddit/selectors/profileOverviewChronoItems.ts"),
				u = s("./src/reddit/selectors/subreddit.ts"),
				h = s("./src/reddit/selectors/tracking.ts"),
				b = s("./src/reddit/selectors/user.ts");
			const g = (e, t) => (e, t, s) => Object(d.a)(e) ? 120 : 47,
				x = Object(c.t)(),
				v = {
					apiError: p.a,
					apiPending: p.b,
					currentUser: b.i,
					layout: c.M,
					loadMore: p.d,
					subredditsById: u.Y,
					viewportDataLoaded: h.a,
					commentsById: p.g,
					itemIds: p.f,
					itemIdToPostId: p.e,
					postsById: p.h,
					estimateItemHeight: g
				},
				f = Object(o.c)(v),
				O = Object(n.b)(f, (e, t) => ({
					onBottomViewed: (t, s) => e(i.c(t, s)),
					openPost: t => {
						e(r.x(t))
					},
					trackOnPostEnteredViewport: (t, s) => {
						Object(l.a)(t) && e(r.A(t))
					},
					trackOnPostExitedViewport: (t, s, n) => {
						Object(l.a)(t) && e(r.B(t, n))
					}
				}), (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: m.f
				}));
			t.a = e => Object(a.b)(x(O(e)))
		},
		"./src/reddit/connectors/PostList/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return O
			})), s.d(t, "d", (function() {
				return y
			})), s.d(t, "b", (function() {
				return E
			}));
			var n = s("./node_modules/react-redux/es/index.js"),
				o = s("./node_modules/reselect/es/index.js"),
				r = s("./src/lib/objectSelector/index.ts"),
				i = s("./src/reddit/actions/ads/index.ts"),
				a = s("./src/reddit/actions/post.ts"),
				c = s("./src/reddit/actions/postList.ts"),
				d = s("./src/reddit/components/TrackingHelper/index.tsx"),
				l = s("./src/reddit/contexts/PageLayer/index.tsx"),
				m = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				p = s("./src/reddit/helpers/trackers/post.ts"),
				u = s("./src/reddit/components/PostList/Placeholder.tsx"),
				h = s("./src/reddit/featureFlags/index.ts"),
				b = s("./src/reddit/selectors/listings.ts"),
				g = s("./src/reddit/selectors/monthsToMinutes.ts"),
				x = s("./src/reddit/selectors/posts.ts"),
				v = s("./src/reddit/selectors/subreddit.ts"),
				f = s("./src/reddit/selectors/tracking.ts");

			function O() {
				return Object(l.t)({
					currentProfileName: l.h,
					isCommentPermalink: l.v,
					isCommentsPage: l.w,
					isFrontpage: l.z,
					isProfilePostListing: l.I,
					pageLayer: e => e
				})
			}
			const C = O(),
				y = {
					apiError: b.c,
					apiPending: b.d,
					m2mIsEnabled: g.w,
					measureScrollFPS: h.d.measureScrollFPS,
					layout: (e, t) => t.forcedLayout || Object(l.M)(e, t),
					loadMore: b.g,
					postsById: x.S,
					postIds: Object(r.a)((e, t) => {
						let {
							listingKey: s,
							listingName: n,
							inSubredditOrProfile: o
						} = t;
						return Object(x.F)(e, s, n, o)
					}),
					subredditsById: v.Y,
					viewportDataLoaded: f.a,
					pageReferrer: l.P,
					postListPlaceholderComponent: () => u.a
				},
				w = Object(o.c)(y),
				E = (e, t) => ({
					onBottomViewed: (t, s) => e(c.c(t, s)),
					adBrandSafetyStatusReceived: t => {
						e(i.d({
							isViewSafe: t
						}))
					},
					openPost: t => {
						e(a.x(t))
					},
					trackOnPostEnteredViewport: (t, s, n) => {
						e(a.A(t, n))
					},
					trackOnPostExitedViewport: (t, s, n, o) => {
						e(a.B(t, n, o))
					}
				}),
				j = Object(n.b)(w, E, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: p.f,
					postComponentForLayout: e => Object(m.b)(Object.assign({}, e))
				}));
			t.a = e => Object(d.b)(C(j(e)))
		},
		"./src/reddit/constants/countrySorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/i18n/utils.ts");
			const r = {
				[n.v.Everywhere]: Object(o.c)("everywhere"),
				[n.v.UnitedStates]: Object(o.c)("united states"),
				[n.v.Argentina]: Object(o.c)("argentina"),
				[n.v.Australia]: Object(o.c)("australia"),
				[n.v.Bulgaria]: Object(o.c)("bulgaria"),
				[n.v.Canada]: Object(o.c)("canada"),
				[n.v.Chile]: Object(o.c)("chile"),
				[n.v.Colombia]: Object(o.c)("colombia"),
				[n.v.Croatia]: Object(o.c)("croatia"),
				[n.v.CzechRepublic]: Object(o.c)("czech republic"),
				[n.v.Finland]: Object(o.c)("finland"),
				[n.v.Greece]: Object(o.c)("greece"),
				[n.v.Hungary]: Object(o.c)("hungary"),
				[n.v.Iceland]: Object(o.c)("iceland"),
				[n.v.India]: Object(o.c)("india"),
				[n.v.Ireland]: Object(o.c)("ireland"),
				[n.v.Japan]: Object(o.c)("japan"),
				[n.v.Malaysia]: Object(o.c)("malaysia"),
				[n.v.Mexico]: Object(o.c)("mexico"),
				[n.v.NewZealand]: Object(o.c)("new zealand"),
				[n.v.Philippines]: Object(o.c)("philippines"),
				[n.v.Poland]: Object(o.c)("poland"),
				[n.v.Portugal]: Object(o.c)("portugal"),
				[n.v.PuertoRico]: Object(o.c)("puerto rico"),
				[n.v.Romania]: Object(o.c)("romania"),
				[n.v.Serbia]: Object(o.c)("serbia"),
				[n.v.Singapore]: Object(o.c)("singapore"),
				[n.v.Sweden]: Object(o.c)("sweden"),
				[n.v.Taiwan]: Object(o.c)("taiwan"),
				[n.v.Thailand]: Object(o.c)("thailand"),
				[n.v.Turkey]: Object(o.c)("turkey"),
				[n.v.UnitedKingdom]: Object(o.c)("united kingdom")
			}
		},
		"./src/reddit/constants/listingSorts.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			var n = s("./src/lib/constants/index.ts"),
				o = s("./src/reddit/i18n/utils.ts");
			const r = {
					[n.N.BEST]: Object(o.c)("best"),
					[n.N.HOT]: Object(o.c)("hot"),
					[n.N.NEW]: Object(o.c)("new"),
					[n.N.CONTROVERSIAL]: Object(o.c)("controversial"),
					[n.N.RISING]: Object(o.c)("rising"),
					[n.N.TOP]: Object(o.c)("top")
				},
				i = {
					[n.Ob.HOUR]: Object(o.c)("Now"),
					[n.Ob.DAY]: Object(o.c)("Today"),
					[n.Ob.WEEK]: Object(o.c)("This week"),
					[n.Ob.MONTH]: Object(o.c)("This month"),
					[n.Ob.YEAR]: Object(o.c)("This year"),
					[n.Ob.ALL]: Object(o.c)("All time")
				}
		},
		"./src/reddit/contexts/Tooltip.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext({})
		},
		"./src/reddit/contexts/TrackCommentsPageClick.ts": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = o.a.createContext(() => () => {})
		},
		"./src/reddit/controls/LayoutSwitch/index.m.less": function(e, t, s) {
			e.exports = {
				title: "_3gualOXr9lNla8__xISVq_",
				iconStyles: "_35qsI3TFFX54FD3PjwpLCv",
				mDisabled: "_2D3JNnADc6N28qHblqs-qW",
				mRedditStyle: "_1Y3PuNdUp_ye6oQQPIkE2Y",
				iconContainer: "_2Q-tHVfuqqIQLbMlSTJrlV",
				tooltip: "vCHkhDAaK6nnJdqEpMGq-",
				layoutButton: "_2KZsg_1r4DJcaP-Ug1LhsQ",
				mIsActive: "_70bDvpoC4B21zobSGUMe6",
				layoutSwitch: "_1o9Wtqx2f_wpqeyceGTV5w"
			}
		},
		"./src/reddit/controls/LayoutSwitch/index.tsx": function(e, t, s) {
			"use strict";
			s("./node_modules/core-js/modules/es6.symbol.js");
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./node_modules/react-redux/es/index.js"),
				i = s("./node_modules/reselect/es/index.js"),
				a = s("./src/app/strings/index.ts"),
				c = s("./src/lib/classNames/index.ts"),
				d = s("./src/reddit/components/InfoTextTooltip/index.tsx"),
				l = s("./src/reddit/actions/preferences.ts"),
				m = s("./src/reddit/actions/tooltip.ts"),
				p = s("./src/reddit/constants/postLayout.ts"),
				u = s("./src/reddit/icons/svgs/ClassicPosts/index.tsx"),
				h = s("./src/reddit/icons/svgs/CompactPosts/index.tsx"),
				b = s("./src/reddit/icons/svgs/LargePosts/index.tsx"),
				g = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/contexts/PageLayer/index.tsx"),
				v = s("./src/reddit/selectors/telemetry.ts"),
				f = s("./src/reddit/selectors/user.ts"),
				O = s("./src/reddit/controls/LayoutSwitch/index.m.less"),
				C = s.n(O);

			function y() {
				return (y = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			var w = function(e, t) {
				var s = {};
				for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (s[n] = e[n]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (s[n[o]] = e[n[o]])
				}
				return s
			};
			const E = e => Object(c.a)(C.a.iconStyles, e.className, {
					[C.a.mDisabled]: e.disabled,
					[C.a.mRedditStyle]: e.redditStyle
				}),
				j = e => {
					var {
						isActive: t
					} = e, s = w(e, ["isActive"]);
					return o.a.createElement("button", y({
						className: Object(c.a)(C.a.layoutButton, {
							[C.a.mIsActive]: t
						})
					}, s))
				},
				I = Object(a.e)("listings.layoutSwitcher.label"),
				S = Object(a.e)("listings.layoutSwitcher.card"),
				_ = Object(a.e)("listings.layoutSwitcher.classic"),
				P = Object(a.e)("listings.layoutSwitcher.compact"),
				N = [{
					layout: p.d.Card,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, r = w(e, ["className", "disabled", "redditStyle"]);
						return o.a.createElement(b.a, y({
							className: E({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, r))
					},
					tooltipTranslation: S
				}, {
					layout: p.d.Classic,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, r = w(e, ["className", "disabled", "redditStyle"]);
						return o.a.createElement(u.a, y({
							className: E({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, r))
					},
					tooltipTranslation: _
				}, {
					layout: p.d.Compact,
					Icon: e => {
						var {
							className: t,
							disabled: s,
							redditStyle: n
						} = e, r = w(e, ["className", "disabled", "redditStyle"]);
						return o.a.createElement(h.a, y({
							className: E({
								className: t,
								disabled: s,
								redditStyle: n
							})
						}, r))
					},
					tooltipTranslation: P
				}],
				L = Object(x.t)(),
				T = Object(i.c)({
					language: f.S,
					postLayout: x.M,
					redditStyle: x.B
				}),
				k = Object(r.b)(T, e => ({
					onListingLayoutChange: (t, s) => e(Object(l.v)(t, s)),
					toggleTooltip: t => e(Object(m.g)({
						tooltipId: t
					}))
				}), (e, t, s) => Object.assign({}, e, t, s, {
					toggleTooltip: e => t.toggleTooltip(e)
				}));
			t.a = L(k(Object(g.b)(e => {
				const {
					sendEvent: t,
					subredditId: s
				} = e, n = e.layout || p.e[e.postLayout];
				return o.a.createElement("div", {
					className: Object(c.a)(C.a.layoutSwitch, e.className),
					id: "view--layout--FUE"
				}, o.a.createElement("div", {
					className: C.a.title
				}, I(e.language)), o.a.createElement("div", {
					className: C.a.iconContainer
				}, N.map(r => {
					const i = () => (n => {
							e.onChange ? e.onChange(n) : (e.onListingLayoutChange(n, s), t(e => ({
								source: "layout_switch",
								action: "click",
								noun: n,
								screen: Object(v.screen)(e),
								subreddit: Object(v.subreddit)(e)
							})))
						})(r.layout),
						a = () => e.toggleTooltip(c),
						c = "layoutSwitch--" + r.layout,
						l = r.layout === n;
					return o.a.createElement(j, {
						"aria-label": r.tooltipTranslation(e.language),
						"aria-pressed": l,
						id: c,
						isActive: l,
						key: r.layout,
						onClick: i,
						onMouseEnter: a,
						onMouseLeave: a,
						onTouchStart: i
					}, o.a.createElement(r.Icon, {
						disabled: !l,
						onClick: l ? void 0 : e.onLayoutClick,
						redditStyle: e.redditStyle
					}), o.a.createElement(d.c, {
						className: C.a.tooltip,
						tooltipId: c,
						text: r.tooltipTranslation(e.language)
					}))
				})))
			})))
		},
		"./src/reddit/helpers/brandSafety/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			}));
			var n = s("./src/reddit/models/WhitelistStatus/index.ts");
			const o = (e, t) => {
				const s = e.some(e => e.isNSFW),
					o = t.some(e => e.wls === n.a.NO_ADS);
				return !s && !o
			}
		},
		"./src/reddit/icons/fonts/Op/index.m.less": function(e, t, s) {
			e.exports = {
				OpIcon: "_3mrrZsVUDI2b3p1rpkjbph",
				opIcon: "_3mrrZsVUDI2b3p1rpkjbph"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.m.less": function(e, t, s) {
			e.exports = {
				admin: "_1PeZajQI0Wm8P3B45yshR",
				mEnabled: "_3axV0unm-cpsxoKWYwKh2x"
			}
		},
		"./src/reddit/icons/svgs/Admin/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Admin/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(e.className, a.a.admin, {
					[a.a.mEnabled]: e.enabled
				}),
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				viewBox: "0 -0.75 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e.title && o.a.createElement("title", null, e.title), e.desc && o.a.createElement("desc", null, e.desc), o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M19.99,9.3125 C19.99,8.104375 19.010625,7.125 17.8025,7.125 C17.213125,7.125 16.67875,7.359375 16.285625,7.73875 C14.8075,6.6725 12.776875,5.98 10.514375,5.886875 L11.491875,1.2875 L14.695625,1.96875 C14.775,2.756875 15.433125,3.375 16.2425,3.375 C17.105625,3.375 17.805,2.675625 17.805,1.8125 C17.805,0.949375 17.105625,0.25 16.2425,0.25 C15.6575,0.25 15.154375,0.575 14.88625,1.050625 L11.228125,0.273125 C11.10625,0.24625 10.98,0.270625 10.875625,0.338125 C10.77125,0.40625 10.698125,0.5125 10.6725,0.63375 L9.556875,5.8825 C7.26,5.960625 5.1975,6.65625 3.7,7.735 C3.306875,7.358125 2.775,7.125 2.1875,7.125 C0.979375,7.125 0,8.104375 0,9.3125 C0,10.20125 0.530625,10.965 1.2925,11.306875 C1.25875,11.524375 1.24,11.745 1.24,11.96875 C1.24,15.334375 5.1575,18.0625 9.99,18.0625 C14.8225,18.0625 18.74,15.334375 18.74,11.96875 C18.74,11.746875 18.721875,11.5275 18.68875,11.31125 C19.455,10.97125 19.99,10.205 19.99,9.3125"
			})), o.a.createElement("g", {
				fill: "none",
				fillRule: "evenodd"
			}, o.a.createElement("polygon", {
				points: "0 20 20 20 20 0 0 0"
			}), o.a.createElement("g", {
				transform: "translate(0 1)"
			})))
		},
		"./src/reddit/icons/svgs/ArrowRight/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 11.4 11.4",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "m11.17929,5.99479c0.08081,-0.19519 0.08081,-0.41599 0,-0.61118c-0.0408,-0.0984 -0.0992,-0.1864 -0.17361,-0.2608l-4.79963,-4.79911c-0.31283,-0.3128 -0.81847,-0.3128 -1.1313,0c-0.31283,0.31279 -0.31283,0.81918 0,1.13118l3.43471,3.43433l-7.66949,0c-0.44244,0 -0.80007,0.3584 -0.80007,0.79999c0,0.44159 0.35763,0.79999 0.80007,0.79999l7.66949,0l-3.43471,3.43433c-0.31283,0.3128 -0.31283,0.81919 0,1.13118c0.15601,0.156 0.36083,0.2344 0.56565,0.2344c0.20482,0 0.40964,-0.0784 0.56565,-0.2344l4.79963,-4.79911c0.07441,-0.0744 0.13281,-0.1624 0.17361,-0.2608"
			})))
		},
		"./src/reddit/icons/svgs/Best/index.m.less": function(e, t, s) {
			e.exports = {
				best: "_3SejsWL-17KHAzDgcp66kT"
			}
		},
		"./src/reddit/icons/svgs/Cake/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				id: e.id,
				onMouseEnter: e.onMouseEnter,
				onMouseLeave: e.onMouseLeave,
				className: e.className,
				viewBox: "0 0 40 40",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"
			}), o.a.createElement("path", {
				d: "M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"
			}), o.a.createElement("path", {
				d: "M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"
			}), o.a.createElement("path", {
				d: "M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"
			}))))
		},
		"./src/reddit/icons/svgs/ClassicPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,6.6V1.75h16.5V6.6Zm0,5.83V7.57h16.5v4.86Zm0,5.82V13.4h16.5v4.85Z"
			}))
		},
		"./src/reddit/icons/svgs/CompactPosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,5V1.75h16.5V5Zm0,4.43V6.18h16.5v3.2Zm0,8.87v-3.2h16.5v3.2Zm0-4.43v-3.2h16.5v3.2Z"
			}))
		},
		"./src/reddit/icons/svgs/Controversial/index.m.less": function(e, t, s) {
			e.exports = {
				controversial: "_2Yq1cYyaAnws8U-1N7H_f0"
			}
		},
		"./src/reddit/icons/svgs/Flag/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("polygon", {
				fill: "inherit",
				points: "0 20 20 20 20 0 0 0",
				opacity: "0"
			}), o.a.createElement("path", {
				fill: "inherit",
				d: "M11.71875,3.14525 C14.60125,1.54375 18.75025,3.48025 18.75025,3.48025 L18.75025,13.55475 C18.75025,13.55475 14.86875,11.81975 11.71875,13.21975 C8.70525,14.55925 4.68725,12.88475 4.68725,12.88475 L4.68725,2.81025 C4.68725,2.81025 8.70525,4.81925 11.71875,3.14525 Z M2.75,18.75 C2.232,18.75 2,18.3305 2,17.8125 L2,2.8125 C2,2.2945 2.232,1.875 2.75,1.875 C3.268,1.875 3.5,2.2945 3.5,2.8125 L3.5,17.8125 C3.5,18.3305 3.268,18.75 2.75,18.75 Z"
			}))
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		},
		"./src/reddit/icons/svgs/Hot/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14JCwSw7Z9KVa3DJCOcJWg"
			}
		},
		"./src/reddit/icons/svgs/Karma/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 20",
				version: "1.1",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"
			})))
		},
		"./src/reddit/icons/svgs/LargePosts/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r() {
				return (r = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			t.a = e => o.a.createElement("svg", r({
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, e), o.a.createElement("path", {
				d: "M1.75,9.38V1.75h16.5V9.38Zm0,8.87V10.62h16.5v7.63Z"
			}))
		},
		"./src/reddit/icons/svgs/New/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_14d58ZMXxV3Byed78nS3DU"
			}
		},
		"./src/reddit/icons/svgs/Rising/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3k-hLnRWy2KVi9lKrKSut"
			}
		},
		"./src/reddit/icons/svgs/Save/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_2qT9eltTv4vv9GxxEZqvc0"
			}
		},
		"./src/reddit/icons/svgs/Top/index.m.less": function(e, t, s) {
			e.exports = {
				icon: "_3rlT9yoNCxQn9Q2EW5FjjE"
			}
		},
		"./src/reddit/icons/svgs/Top/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/lib/classNames/index.ts"),
				i = s("./src/reddit/icons/svgs/Top/index.m.less"),
				a = s.n(i);
			t.a = e => o.a.createElement("svg", {
				className: Object(r.a)(a.a.icon, e.className),
				viewBox: "0 0 20 20",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				fill: "inherit",
				d: "M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
			})))
		},
		"./src/reddit/icons/svgs/Twitter/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);

			function r(e) {
				return o.a.createElement("svg", {
					className: e.className,
					viewBox: "0 0 400 400",
					xmlns: "http://www.w3.org/2000/svg"
				}, o.a.createElement("path", {
					fill: "inherit",
					d: "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"
				}))
			}
		},
		"./src/reddit/icons/svgs/User/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, o.a.createElement("path", {
				d: "M12,11 C15.309,11 18,13.691 18,17 C18,17.553 17.552,18 17,18 L3,18 C2.448,18 2,17.553 2,17 C2,13.691 4.691,11 8,11 L12,11 Z M10,9.7334 C7.868,9.7334 6.133,7.9994 6.133,5.8664 L6.133,4.8664 C6.133,2.7344 7.868,1.0004 10,1.0004 C12.132,1.0004 13.867,2.7344 13.867,4.8664 L13.867,5.8664 C13.867,7.9994 12.132,9.7334 10,9.7334 Z"
			}))
		},
		"./src/reddit/layout/row/RightAlign/index.m.less": function(e, t, s) {
			e.exports = {
				rightAligned: "_1sEFSGIUpFtX1hzGDyWJpr"
			}
		},
		"./src/reddit/layout/row/RightAlign/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/row/RightAlign/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("rightAligned", r.a)
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.m.less": function(e, t, s) {
			e.exports = {
				leftAndRight: "_3P6gMBKOhtWWrytWm-8hc",
				center: "CEs01bewsmQQV7LRLaHib",
				expandedCenterContainer: "_2FZY7HXlkf-PdemHbQoAEt"
			}
		},
		"./src/reddit/layout/threeCol/ExpandCenter/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/higherOrderComponents/warnOnChildrenCount/index.tsx"),
				i = s("./src/lib/classNames/index.ts"),
				a = s("./src/reddit/layout/threeCol/ExpandCenter/index.m.less"),
				c = s.n(a);
			t.a = Object(r.a)(e => o.a.createElement("div", {
				className: Object(i.a)(c.a.expandedCenterContainer, e.className)
			}, o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthLeft
				}
			}, Array.isArray(e.children) && e.children[0]), o.a.createElement("div", {
				className: c.a.center
			}, Array.isArray(e.children) && e.children[1]), o.a.createElement("div", {
				className: c.a.leftAndRight,
				style: {
					flexBasis: e.widthRight
				}
			}, Array.isArray(e.children) && e.children[2])), 3)
		},
		"./src/reddit/layout/twoCol/Dynamic/index.m.less": function(e, t, s) {
			e.exports = {
				dynamicTwoCol: "_3lhzE6Cg3SSeQGIHuLjILb"
			}
		},
		"./src/reddit/layout/twoCol/Dynamic/index.tsx": function(e, t, s) {
			"use strict";
			var n = s("./src/lib/lessComponent.tsx"),
				o = s("./src/reddit/layout/twoCol/Dynamic/index.m.less"),
				r = s.n(o);
			t.a = n.a.div("dynamicTwoCol", r.a)
		},
		"./src/reddit/models/Gold/Premium/index.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return o
			})), s.d(t, "b", (function() {
				return r
			})), s.d(t, "c", (function() {
				return i
			}));
			var n = s("./src/app/strings/index.ts");
			const o = {
					PREMIUM_1_MONTH: {
						priceInCoins: 1800,
						monthsOfPremium: 1
					},
					PREMIUM_3_MONTHS: {
						priceInCoins: 5400,
						monthsOfPremium: 3
					},
					PREMIUM_6_MONTHS: {
						priceInCoins: 10800,
						monthsOfPremium: 6
					},
					PREMIUM_12_MONTHS: {
						priceInCoins: 21600,
						monthsOfPremium: 12
					}
				},
				r = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
					const s = [];
					for (const n in o) {
						const r = o[n];
						(r.priceInCoins <= e || t) && s.push(r)
					}
					return s
				},
				i = (e, t) => 1 === e.monthsOfPremium ? Object(n.a)(t, "gold.givePremiumToUserModal.monthDetail", {
					months: e.monthsOfPremium,
					coins: e.priceInCoins.toLocaleString()
				}) : Object(n.a)(t, "gold.givePremiumToUserModal.monthsDetail", {
					months: e.monthsOfPremium,
					coins: e.priceInCoins.toLocaleString()
				})
		},
		"./src/reddit/pages/ErrorPages/index.m.less": function(e, t, s) {
			e.exports = {
				primaryRouterLink: "WPSTJCepGLEWZl2fETrUM",
				container: "_3pfk0xbr5atzL7KT8pXEZG",
				title: "_3uo9iClHghoc_hoxzdgipi"
			}
		},
		"./src/reddit/pages/ErrorPages/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "b", (function() {
				return l
			})), s.d(t, "a", (function() {
				return m
			}));
			var n = s("./node_modules/react/index.js"),
				o = s.n(n),
				r = s("./src/reddit/controls/Button/index.tsx"),
				i = s("./src/reddit/i18n/components.tsx"),
				a = s("./src/reddit/i18n/utils.ts"),
				c = s("./src/reddit/pages/ErrorPages/index.m.less"),
				d = s.n(c);
			const l = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || Object(a.c)("Sorry, there doesn't seem to be anything here.")), o.a.createElement(r.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, o.a.createElement(i.c, null, "Go Home")))
				},
				m = e => {
					let {
						message: t
					} = e;
					return o.a.createElement("div", {
						className: d.a.container
					}, o.a.createElement("h3", {
						className: d.a.title
					}, t || Object(a.c)("Sorry, You do not have permission to view this page.")), o.a.createElement(r.h, {
						className: d.a.primaryRouterLink,
						to: "/"
					}, o.a.createElement(i.c, null, "Go Home")))
				}
		},
		"./src/reddit/pages/ProfileOverview/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t);
			s("./node_modules/core-js/modules/es6.regexp.match.js"), s("./node_modules/core-js/modules/es6.array.sort.js"), s("./node_modules/core-js/modules/es6.regexp.search.js");
			var n = s("./node_modules/lodash/fromPairs.js"),
				o = s.n(n),
				r = s("./node_modules/react/index.js"),
				i = s.n(r),
				a = s("./node_modules/react-redux/es/index.js"),
				c = s("./node_modules/reselect/es/index.js"),
				d = s("./src/lib/extractQueryParams/index.ts"),
				l = s("./src/lib/isFakeSubreddit/index.ts"),
				m = s("./src/reddit/helpers/makeProfileListingKey/index.ts"),
				p = s("./src/reddit/contexts/PageLayer/index.tsx"),
				u = s("./src/lib/constants/index.ts"),
				h = s("./src/reddit/actions/pages/profileOverview.ts"),
				b = s("./src/reddit/actions/pages/profileShared.ts"),
				g = s("./src/reddit/actions/profileConversations.ts"),
				x = s("./src/reddit/actions/profileOverviewChrono.ts"),
				v = s("./src/reddit/components/ContentGate/index.tsx"),
				f = s("./src/reddit/components/EmptyProfile/index.ts"),
				O = s("./src/reddit/components/GeneralCleanup/SortViewBar/index.tsx"),
				C = s("./src/reddit/components/JumpToContent/index.tsx"),
				y = s("./src/reddit/components/LayoutNavigation/index.tsx"),
				w = s("./src/lib/classNames/index.ts"),
				E = s("./src/reddit/components/OverviewChronoList/ListItem.tsx"),
				j = s("./src/reddit/components/ProfileItemList/index.tsx"),
				I = s("./src/reddit/connectors/OverviewChronoList/index.ts"),
				S = s("./src/reddit/components/OverviewChronoList/index.m.less"),
				_ = s.n(S),
				P = s("./src/lib/lessComponent.tsx");

			function N() {
				return (N = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const L = Object(I.a)(P.a.wrapped(e => {
				const {
					className: t,
					itemIds: s
				} = e, n = s.length > 0;
				return i.a.createElement(j.a, N({
					className: Object(w.a)(t, {
						[_.a.ComponentHasItems]: n
					})
				}, e))
			}, "Component", _.a));
			var T = e => i.a.createElement(L, N({}, e, {
					itemComponent: E.a
				})),
				k = s("./src/reddit/components/PostList/index.tsx"),
				M = s("./src/reddit/components/TrackingHelper/index.tsx"),
				R = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				B = s("./src/lib/isPinnedAdminPost/index.ts"),
				D = s("./src/lib/makeOverviewConversationsItemKey/index.ts"),
				A = s("./node_modules/lodash/last.js"),
				F = s.n(A);
			var H = s("./src/reddit/helpers/styles/mixins/index.tsx"),
				W = s("./src/reddit/selectors/posts.ts"),
				U = s("./src/reddit/components/ClassicPost/index.tsx"),
				V = s("./src/reddit/components/LargePost/index.tsx"),
				G = s("./src/reddit/components/OverviewCommentPost/index.tsx"),
				z = s("./src/reddit/components/OverviewConversationsPost/Border/index.tsx"),
				K = s("./src/reddit/i18n/components.tsx"),
				Z = s("./src/reddit/contexts/TrackCommentsPageClick.ts"),
				J = s("./src/reddit/selectors/profile.ts"),
				q = s("./src/reddit/components/OverviewConversationsPost/ExtraCommentsItem/index.m.less"),
				Q = s.n(q);
			const Y = P.a.div("ExtraCommentsItemWrapper", Q.a),
				X = P.a.p("ExtraComments", Q.a),
				$ = P.a.wrapped(X, "ExtraCommentsInteractive", Q.a);
			var ee = Object(a.b)(() => Object(c.c)({
					extraCommentsItem: J.c,
					extraCommentsPending: (e, t) => {
						const {
							extraCommentsId: s
						} = t, {
							extraComments: n
						} = e.profileOverviewPage.conversations;
						return !!n.api.pending[s]
					}
				}), (e, t) => {
					let {
						profileName: s
					} = t;
					return {
						extraCommentsClicked: t => e(Object(g.g)(s, t.postId, t.id))
					}
				})(e => {
					let {
						extraCommentsClicked: t,
						extraCommentsItem: s,
						extraCommentsPending: n
					} = e;
					return i.a.createElement(Y, null, n ? i.a.createElement(X, null, i.a.createElement(K.c, null, "Loading...")) : i.a.createElement(Z.a.Consumer, null, e => i.a.createElement($, {
						onClick: e => {
							t(s), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation()
						}
					}, i.a.createElement(K.c, null, "Load more comments"))))
				}),
				te = s("./src/reddit/components/OverviewConversationsPost/OverviewConversationsComment/index.tsx"),
				se = s("./src/reddit/constants/postLayout.ts"),
				ne = s("./src/reddit/helpers/styles/mixins/index.m.less"),
				oe = s.n(ne),
				re = s("./src/reddit/components/OverviewConversationsPost/index.m.less"),
				ie = s.n(re);

			function ae() {
				return (ae = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const ce = P.a.div("BackgroundWrapper", ie.a),
				de = P.a.wrapped(U.b, "ClassicPost", ie.a),
				le = P.a.wrapped(G.a, "OverviewCommentPost", ie.a),
				me = Object(p.t)({
					currentProfileName: p.h,
					isFrontpage: p.z,
					pageLayer: e => e
				}),
				pe = Object(a.b)(() => Object(c.c)({
					commentThreadLinkSets: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(D.a)(s, o);
						return e.profileOverviewPage.conversations.keyToCommentThreadLinkSets[r]
					},
					headComment: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						const o = n ? n.toLowerCase() : "",
							r = Object(D.a)(s, o);
						return e.profileOverviewPage.conversations.keyToHeadCommentId[r]
					},
					isInitiallyPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(W.n)(e, s, n)
					},
					isPinned: (e, t) => {
						let {
							postId: s,
							currentProfileName: n
						} = t;
						return !!n && Object(W.s)(e, s, n)
					},
					post: W.I,
					profileName: (e, t) => {
						let {
							currentProfileName: s
						} = t;
						if (s) return ((e, t) => {
							const {
								users: s
							} = e, n = t.toLowerCase(), o = s.models[n];
							return o ? o.username : void 0
						})(e, s)
					},
					layout: p.M
				})),
				ue = P.a.wrapped(V.a, "OverviewLargePost", ie.a);
			var he = Object(R.a)(me(pe(e => {
					const {
						availableWidth: t,
						className: s,
						commentThreadLinkSets: n,
						eventFactory: o,
						forceLoadMedia: r,
						headComment: a,
						isFrontpage: c,
						isInitiallyPinned: d,
						isPinned: l,
						isScrolling: m,
						last: p,
						layout: u,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: g,
						post: x,
						postId: v,
						profileName: f,
						scrollerItemRef: O
					} = e, C = {
						last: p,
						onClickPost: h,
						postId: v
					};
					if (!f) return null;
					const y = f === x.author,
						E = Object(B.a)(l, x.distinguishType);
					if (!y && !a && !E) return null;
					const j = a ? function(e) {
							const t = [],
								s = e.length;
							for (let n = 0; n < s; n++) {
								(0 === n || e[n - 1].depth !== e[n].depth - 1) && t.push([]), F()(t).push(e[n])
							}
							return t
						}(function(e, t) {
							const s = [];
							let n = t,
								o = "comment";
							for (; n;) {
								const t = e[n];
								s.push({
									id: n,
									depth: t.depth,
									type: o
								}), t.next ? (n = t.next.id, o = t.next.type) : n = void 0
							}
							return s
						}(n, a)) : [],
						I = j.length - 1;
					return i.a.createElement("div", {
						className: Object(w.a)(oe.a.largeAndMediumActiveStyles, oe.a.largeAndMediumPostStyles, ie.a.OverviewConversationsPost, s),
						style: Object.assign({}, Object(H.b)(), Object(H.d)(e))
					}, i.a.createElement(z.a, {
						isFirst: !0,
						isLast: I < 0,
						key: x.id
					}, !y && !!a && i.a.createElement(le, ae({}, C, {
						commentId: a,
						key: x.id,
						profileName: f
					})), (y || E) && (u === se.g.Classic ? i.a.createElement(de, {
						availableWidth: t,
						eventFactory: o,
						inSubredditOrProfile: !1,
						isOverlay: !1,
						isScrolling: m,
						forceLoadMedia: r,
						last: p,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: g,
						postId: v,
						scrollerItemRef: O
					}) : i.a.createElement(ue, {
						availableWidth: t,
						eventFactory: o,
						isScrolling: m,
						isFrontpage: c,
						forceLoadMedia: r,
						last: p,
						onClickPost: h,
						onSizeChanged: b,
						pageLayer: g,
						postId: v,
						scrollerItemRef: O
					}))), i.a.createElement(ce, {
						style: {
							background: Object(H.e)(e)
						}
					}, !d && j.map((e, t) => i.a.createElement(z.a, {
						isLast: t === I,
						key: "".concat(t, "-isLast[").concat(t === I, "]")
					}, e.map((t, s) => {
						const n = 0 === s,
							o = s === e.length - 1;
						return "comment" === t.type ? i.a.createElement(te.a, {
							commentId: t.id,
							depth: t.depth,
							isFirst: n,
							isLast: o,
							key: t.id,
							profileName: f,
							showModTools: !0
						}) : i.a.createElement(ee, {
							extraCommentsId: t.id,
							key: t.id,
							profileName: f
						})
					})))))
				}))),
				be = s("./src/reddit/helpers/postComponentForLayout/index.tsx"),
				ge = s("./src/reddit/helpers/trackers/post.ts"),
				xe = s("./src/reddit/selectors/tracking.ts"),
				ve = s("./src/reddit/connectors/PostList/index.ts");
			const fe = Object(c.c)(Object.assign({}, ve.d, {
					postIds: W.O,
					viewportDataLoaded: xe.a
				})),
				Oe = Object(ve.c)(),
				Ce = Object(a.b)(fe, ve.b, (e, t, s) => Object.assign({}, e, t, s, {
					postClickEvent: ge.f,
					postComponentForLayout: e => {
						let {
							post: t
						} = e;
						return t.isBlank ? be.a : he
					}
				}));
			var ye = (e => Object(M.b)(Oe(Ce(e))))(k.a),
				we = s("./src/reddit/components/ProfileNavMenu/index.tsx"),
				Ee = s("./node_modules/lodash/debounce.js"),
				je = s.n(Ee),
				Ie = s("./src/reddit/actions/post.ts"),
				Se = s("./src/reddit/components/MiniCardPost/index.tsx"),
				_e = s("./src/reddit/helpers/getClickInfo.ts"),
				Pe = s("./src/reddit/helpers/localStorage/index.ts"),
				Ne = s("./src/reddit/models/User/index.ts"),
				Le = s("./src/reddit/selectors/user.ts"),
				Te = e => i.a.createElement("svg", {
					className: e.className,
					onClick: e.onClick,
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 20 20"
				}, i.a.createElement("g", {
					fill: "inherit"
				}, i.a.createElement("path", {
					d: "M18.71,7.75,17.24,6.29,13.71,2.76,12.25,1.29a1,1,0,0,0-1.41,0L10,2.15a1,1,0,0,0-.26,1l.46,1.78L6.89,8.17,5.11,7.71a1,1,0,0,0-1,.26l-.86.86a1,1,0,0,0,0,1.41l1.47,1.47.62.62L.6,18.7a.5.5,0,0,0,.7.7l6.37-4.78.62.62,1.47,1.47a1,1,0,0,0,1.41,0l.86-.86a1,1,0,0,0,.26-1l-.46-1.78,3.28-3.28,1.78.46a1,1,0,0,0,.25,0,1,1,0,0,0,.71-.29l.86-.86A1,1,0,0,0,18.71,7.75Z"
				}))),
				ke = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/index.m.less"),
				Me = s.n(ke);
			var Re = e => i.a.createElement("div", {
					className: Object(w.a)(Me.a.container, e.className)
				}, i.a.createElement(Te, {
					className: Me.a.pin
				}), i.a.createElement("div", {
					className: Me.a.title
				}, i.a.createElement(K.c, null, "Show off that karma!")), e.children),
				Be = s("./src/reddit/controls/TextButton/index.tsx"),
				De = s("./src/reddit/components/ProfilePinnedPosts/Placeholder/Education.m.less"),
				Ae = s.n(De);
			var Fe = e => i.a.createElement(Re, {
					className: Object(w.a)(Ae.a.container, e.className)
				}, i.a.createElement("div", {
					className: Ae.a.description
				}, i.a.createElement(K.c, null, 'Pin a post from your feed using the "..." at the bottom of each post')), i.a.createElement(Be.a, {
					className: Ae.a.gotIt,
					onClick: e.onGotItClick
				}, i.a.createElement(K.c, null, "OK, I got it"))),
				He = s("./src/reddit/components/ProfilePinnedPosts/index.m.less"),
				We = s.n(He);
			const Ue = 320,
				Ve = 300,
				Ge = Object(c.c)({
					arePinnedPostsLoaded: W.a,
					currentUser: Le.i,
					pinnedPostIds: W.P
				}),
				ze = Object(a.b)(Ge, e => ({
					openPost: t => e(Object(Ie.x)(t))
				}));
			class Ke extends i.a.Component {
				constructor() {
					super(...arguments), this.containerRef = null, this.state = {
						showEducation: !1,
						pauseMedia: !1
					}, this.setContainerRef = e => this.containerRef = e, this.handleScroll = je()(() => {
						if (!this.containerRef) return;
						const e = this.containerRef.getBoundingClientRect();
						e.bottom < Ve ? this.pauseMedia() : e.top > 0 && this.playMedia()
					}, 250, {
						leading: !0
					}), this.playMedia = () => {
						this.setState(e => e.pauseMedia ? {
							pauseMedia: !1
						} : null)
					}, this.pauseMedia = () => {
						this.setState(e => e.pauseMedia ? null : {
							pauseMedia: !0
						})
					}, this.onGotItClick = () => {
						Object(Pe.X)(), this.setState({
							showEducation: !1
						})
					}, this.onClickPost = (e, t) => {
						this.props.openPost({
							postOrComment: t,
							clickInfo: Object(_e.a)(e)
						})
					}, this.renderPost = e => i.a.createElement(Se.b, {
						availableWidth: Ue,
						className: Object(w.a)(We.a.item, We.a.miniCardPost),
						forceLoadMedia: !this.state.pauseMedia,
						key: e,
						onClickPost: this.onClickPost,
						postId: e,
						shouldPause: this.state.pauseMedia
					})
				}
				componentDidMount() {
					this.setState({
						showEducation: !Object(Pe.v)()
					}), document.addEventListener("scroll", this.handleScroll), this.handleScroll()
				}
				componentWillUnmount() {
					document.removeEventListener("scroll", this.handleScroll)
				}
				render() {
					const {
						arePinnedPostsLoaded: e,
						pinnedPostIds: t,
						children: s
					} = this.props;
					if (!e) return null;
					const n = !!this.props.currentUser && this.props.profileName === Object(Ne.f)(this.props.currentUser),
						o = t.length > 0,
						r = !o && this.state.showEducation && n;
					if (!o && !r) return null;
					const a = n && this.props.pinnedPostIds.length % 2 != 0;
					return i.a.createElement(i.a.Fragment, null, i.a.createElement("div", {
						className: We.a.title
					}, i.a.createElement(K.c, null, "Pinned posts")), r ? i.a.createElement(Fe, {
						className: Object(w.a)(We.a.item, We.a.education),
						onGotItClick: this.onGotItClick
					}) : i.a.createElement("div", {
						ref: this.setContainerRef,
						className: We.a.container
					}, t.map(this.renderPost), a && i.a.createElement(Re, {
						className: We.a.item
					})), s)
				}
			}
			var Ze = Object(p.t)()(ze(Ke)),
				Je = s("./src/reddit/components/ProfileSidebar/index.tsx"),
				qe = s("./src/reddit/helpers/trackers/screenview.ts"),
				Qe = s("./src/reddit/layout/page/Listing/index.tsx"),
				Ye = s("./src/reddit/pages/ErrorPages/index.tsx"),
				Xe = s("./src/reddit/selectors/experiments/generalCleanup.ts");

			function $e() {
				return ($e = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n])
					}
					return e
				}).apply(this, arguments)
			}
			const et = (e, t) => {
					let {
						location: s
					} = t;
					return o()([...Object(d.a)(s.search)])
				},
				tt = Object(p.t)(),
				st = Object(c.a)(p.C, Le.X, et, p.M, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.profileName
				}, (e, t) => {
					let {
						match: s
					} = t;
					return s.params.sort
				}, (e, t) => {
					let {
						match: s
					} = t;
					return Object(J.j)(e, {
						profileName: s.params.profileName
					})
				}, (e, t) => Object(b.a)(e, et(0, t)), (e, t) => {
					let {
						match: s
					} = t;
					return !Object(W.k)(e, {
						profileName: s.params.profileName
					})
				}, Xe.a, (e, t) => {
					let {
						match: s
					} = t;
					return Object(Le.f)(e, u.Qb + s.params.profileName)
				}, (e, t, s, n, o, r, i, a, c, d, l) => {
					let {
						sort: p,
						t: h
					} = a;
					const b = n === se.g.Compact ? u.ib : u.jb,
						g = Object(m.a)(o, b, p, s);
					return {
						contentGateInfo: l,
						generalCleanupVariant: d,
						over18Prefs: t,
						isOwnProfile: e,
						isProfileNSFW: !!i && i.isNSFW,
						layout: n,
						listingKey: g,
						profileName: o,
						shouldShowPinnedPostsSection: c,
						sort: p,
						timeSort: h
					}
				}),
				nt = Object(a.b)(st, (e, t) => ({
					onLoadMoreChronoItems: () => e(x.d({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLoadMoreConversationsItems: () => e(g.h({
						profileName: t.match.params.profileName,
						sort: t.match.params.sort
					})),
					onLayoutChange: () => e(Object(h.g)(Object.assign({}, t.match, {
						queryParams: o()([...Object(d.a)(t.location.search)])
					})))
				}));
			class ot extends i.a.Component {
				constructor() {
					super(...arguments), this.renderNoPosts = () => i.a.createElement(f.c, {
						profileName: this.props.profileName,
						timeSort: this.props.timeSort
					})
				}
				componentWillUpdate(e) {
					this.props.layout !== e.layout && e.onLayoutChange()
				}
				render() {
					const {
						contentGateInfo: e,
						generalCleanupVariant: t,
						layout: s,
						over18Prefs: n,
						isOwnProfile: o,
						isProfileNSFW: r,
						listingKey: a,
						onLayoutChange: c,
						pageLayer: d,
						profileName: m,
						sort: p,
						shouldShowPinnedPostsSection: h,
						timeSort: b
					} = this.props;
					if (!d) return null;
					if (e && (e.profileDeleted || e.profileSuspended)) return i.a.createElement(v.b, {
						contentGateType: e.profileDeleted ? v.a.ProfileDeleted : v.a.ProfileSuspended,
						profileName: m
					});
					if (403 === d.status) return i.a.createElement(Ye.a, null);
					if (404 === d.status) return i.a.createElement(v.b, {
						contentGateType: v.a.ProfileDoesNotExist,
						profileName: m
					});
					if (!m) return null;
					const g = m.toLowerCase(),
						x = "/user/".concat(m, "/"),
						f = {
							listingKey: a,
							listingName: g
						};
					if (!n && r && !o) return i.a.createElement(v.b, {
						subredditName: m,
						contentGateType: v.a.Nsfw
					});
					const w = {
							inSubredditOrProfile: !Object(l.a)(m),
							listingKey: a,
							listingName: g,
							listingViewed: (e, t) => Object(qe.k)(a, p, t, e, b),
							noPostsComponent: this.renderNoPosts,
							onTryAgain: c
						},
						E = Object(Xe.b)(t),
						j = {
							sort: p,
							baseUrl: x,
							sortOptions: u.nb,
							timeSort: b
						};
					let I;
					return I = s === se.g.Compact ? i.a.createElement(T, $e({}, w, {
						onLoadMore: this.props.onLoadMoreChronoItems,
						onTryAgain: c
					})) : i.a.createElement(i.a.Fragment, null, h && i.a.createElement(Ze, {
						profileName: m
					}), E && i.a.createElement(O.a, j), i.a.createElement(ye, $e({}, w, {
						excludePinnedPosts: h,
						onLoadMore: this.props.onLoadMoreConversationsItems
					}))), i.a.createElement(Qe.a, {
						className: this.props.className,
						fitPageToContent: !0,
						contentNavBar: i.a.createElement(i.a.Fragment, null, i.a.createElement(we.a, {
							profileName: m
						}), !E && i.a.createElement(y.a, j)),
						content: i.a.createElement(i.a.Fragment, null, i.a.createElement(C.a, null), I),
						sidebar: i.a.createElement(Je.a, $e({}, f, {
							profileName: m
						}))
					})
				}
			}
			t.default = tt(nt(ot))
		},
		"./src/reddit/selectors/experiments/goldAwardedCommentHighlight.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => !!(e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: n.F
				});
				return Object(n.Sb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/goldProfileGildedAwards.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return i
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts"),
				r = s("./src/reddit/selectors/user.ts");
			const i = e => !!(e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: e => Object(r.J)(e),
					experimentName: n.I
				});
				return Object(n.Sb)(t) ? void 0 : t
			})(e)
		},
		"./src/reddit/selectors/experiments/publicAwarding.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			}));
			var n = s("./src/reddit/constants/experiments.ts"),
				o = s("./src/reddit/helpers/chooseVariant/index.ts");
			const r = e => {
				const t = Object(o.c)(e, {
					experimentEligibilitySelector: o.a,
					experimentName: n.ib
				});
				return Object(n.Sb)(t) ? void 0 : t
			}
		},
		"./src/reddit/selectors/premium.ts": function(e, t, s) {
			"use strict";
			s.d(t, "c", (function() {
				return n
			})), s.d(t, "d", (function() {
				return o
			})), s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return i
			}));
			const n = e => !!e.givePremium.givePremiumModalAccountName,
				o = e => e.givePremium.givePremiumModalAccountName,
				r = e => e.givePremium.api.error || "",
				i = e => e.givePremium.api.pending
		},
		"./src/reddit/selectors/tracking.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return n
			}));
			const n = (e, t) => {
				let {
					listingKey: s
				} = t;
				return e.tracking.viewportDataLoaded[s]
			}
		}
	}
]);
//# sourceMappingURL=ProfileOverview.d78a902785c334393ee1.js.map