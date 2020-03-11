// https://www.redditstatic.com/desktop2x/ContributorRequestRequestModal.9f10025baf36928d9e67.js
// Retrieved at 3/11/2020, 3:10:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestRequestModal"], {
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less": function(e, t, s) {
			e.exports = {
				requestModal: "_27TCiQwLZWWlFgG7t0oukF",
				icon: "_3FpdtrZ4Qhlog7NlIb2vAc",
				subredditIcon: "_1azgCQXYDaIZr6oKZqw_vj",
				ModalBody: "_1Qof37a979-QG1OLOBJc2V",
				modalBody: "_1Qof37a979-QG1OLOBJc2V",
				ModalHeader: "_1EjKGJfFqj40_coL0u2kFX",
				modalHeader: "_1EjKGJfFqj40_coL0u2kFX",
				ModalTitle: "_2uFmM79ezVYxcsYH55jyqR",
				modalTitle: "_2uFmM79ezVYxcsYH55jyqR",
				Title: "_3fGlFo7GNRVESb99pO5aH-",
				title: "_3fGlFo7GNRVESb99pO5aH-",
				Description: "_3fdg_9Zvp6zpXL5FMiY4ME",
				description: "_3fdg_9Zvp6zpXL5FMiY4ME",
				Component: "_1o3pDfAXeDo-a8XUIf7xfa",
				component: "_1o3pDfAXeDo-a8XUIf7xfa"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx": function(e, t, s) {
			"use strict";
			s.r(t), s.d(t, "ModalHeader", (function() {
				return S
			})), s.d(t, "ModalTitle", (function() {
				return F
			})), s.d(t, "CloseIcon", (function() {
				return k
			}));
			var a = s("./src/higherOrderComponents/asModal/index.tsx"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/reddit/actions/modal.ts"),
				c = s("./src/reddit/actions/subreddit.ts"),
				u = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = s("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				p = s("./src/reddit/components/SubredditIcon/index.tsx"),
				b = s("./src/reddit/components/TrackingHelper/index.tsx"),
				x = s("./src/reddit/constants/modals.ts"),
				C = s("./src/reddit/controls/TextButton/index.tsx"),
				f = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				h = s("./src/reddit/i18n/utils.ts"),
				_ = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				v = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				j = s("./src/reddit/models/Theme/index.ts"),
				O = s("./src/reddit/selectors/platform.ts"),
				g = s("./src/reddit/selectors/structuredStyles.ts"),
				y = s("./src/reddit/selectors/subreddit.ts"),
				E = s("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				R = s.n(E),
				q = s("./src/lib/lessComponent.tsx");
			const I = q.a.wrapped(u.c, "ModalBody", R.a),
				S = q.a.wrapped(u.g, "ModalHeader", R.a),
				F = q.a.div("ModalTitle", R.a),
				w = q.a.div("Title", R.a),
				M = q.a.div("Description", R.a),
				k = q.a.wrapped(u.b, "CloseIcon", R.a);
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(f.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: Object(h.c)("I would like to become an approved user of this community so I can ".concat(Object(h.b)("restrictions", v.d[this.props.restrictions])))
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						s = this.props.theme ? Object(j.f)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return o.a.createElement(I, {
						className: R.a.requestModal
					}, o.a.createElement(S, null, o.a.createElement(_.a, null, o.a.createElement("div", null, o.a.createElement(F, {
						style: {
							color: s
						}
					}, Object(h.c)("Become an approved user of")), o.a.createElement(w, {
						style: {
							color: s
						}
					}, o.a.createElement(p.b, {
						className: R.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), o.a.createElement("span", null, e))), o.a.createElement(C.a, {
						onClick: this.onCancelRequest
					}, o.a.createElement(k, null)))), o.a.createElement(u.j, null, t ? o.a.createElement(M, null, Object(h.c)("The moderators have disabled requests in this community. Check the community rules for more details.")) : o.a.createElement(o.a.Fragment, null, o.a.createElement(M, null, Object(h.c)("Only approved users can ".concat(Object(h.b)("restrictions", v.d[this.props.restrictions]), " in ").concat(Object(h.b)("displayName", e), ". To become an approved user, send a request to the moderators."))), o.a.createElement(m.c, {
						className: R.a.textarea,
						label: Object(h.c)("Request to moderators"),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), o.a.createElement(u.e, null, t ? o.a.createElement(u.o, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, Object(h.c)("ok")) : o.a.createElement(o.a.Fragment, null, o.a.createElement(u.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, Object(h.c)("Cancel")), o.a.createElement(u.o, {
						onClick: () => {
							this.props.sendEvent(Object(f.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, Object(h.c)("Send Request")))))
				}
			}
			t.default = q.a.wrapped(Object(r.a)(Object(a.a)(Object(i.b)(() => Object(l.c)({
				subredditAboutInfo: y.j,
				restrictions: y.o,
				subreddit: O.f,
				subredditIcon: g.c
			}), e => ({
				makeContributorRequest: (t, s, a) => e(Object(c.n)(t, s, a)),
				toggleContributorRequestModal: () => e(Object(d.i)(x.a.CONTRIBUTOR_REQUEST))
			}))(Object(b.b)(N)))), "Component", R.a)
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, s) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, s) {
			"use strict";
			s.d(t, "d", (function() {
				return C
			})), s.d(t, "a", (function() {
				return f
			})), s.d(t, "b", (function() {
				return _
			})), s.d(t, "c", (function() {
				return v
			}));
			s("./node_modules/core-js/modules/es6.symbol.js");
			var a = s("./node_modules/react/index.js"),
				r = s.n(a),
				n = s("./src/lib/classNames/index.ts"),
				o = s("./src/lib/lessComponent.tsx"),
				i = s("./src/reddit/controls/Input/index.tsx"),
				l = s("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				d = s("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = s.n(d);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var s = arguments[t];
						for (var a in s) Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var s = {};
				for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (s[a] = e[a]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var r = 0;
					for (a = Object.getOwnPropertySymbols(e); r < a.length; r++) t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (s[a[r]] = e[a[r]])
				}
				return s
			};
			const p = o.a.div("icon", c.a),
				b = o.a.textarea("textarea", c.a),
				x = o.a.span("Invalid", c.a);
			var C, f;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(C || (C = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(f || (f = {}));
			const h = e => r.a.createElement("div", {
					className: Object(n.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === C.Valid,
						[c.a.mInvalid]: e.state === C.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
					}))
				}, r.a.createElement("label", {
					className: Object(n.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && r.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && r.a.createElement(p, {
					className: Object(n.a)({
						[c.a.mValid]: e.state === C.Valid,
						[c.a.mInvalid]: e.state === C.Invalid
					})
				}, e.state === C.Valid && r.a.createElement(l.a, null), e.state === C.Invalid && r.a.createElement(x, null, "!")))),
				_ = e => {
					const {
						backgroundColorState: t,
						className: s,
						inputRef: a,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: p
					} = e, b = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(h, {
						backgroundColorState: t,
						className: s,
						isRequired: o,
						label: l,
						state: p
					}, r.a.createElement(i.a, u({}, b, {
						className: Object(n.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: a,
						onKeyDown: d
					})))
				},
				v = e => {
					const {
						backgroundColorState: t,
						className: s,
						inputRef: a,
						isRequired: o,
						label: i,
						onKeyDown: l,
						state: d
					} = e, p = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(h, {
						backgroundColorState: t,
						className: s,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, r.a.createElement(b, u({}, p, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === f.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: a,
						onKeyDown: l
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./src/lib/lessComponent.tsx"),
				r = s("./src/reddit/controls/Input/index.m.less"),
				n = s.n(r);
			t.a = a.a.input("input", n.a)
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, s) {
			"use strict";
			s.d(t, "a", (function() {
				return r
			})), s.d(t, "b", (function() {
				return n
			}));
			var a = s("./src/reddit/selectors/telemetry.ts");
			const r = e => t => Object.assign({}, a.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: a.subreddit(t)
				}),
				n = e => t => Object.assign({}, a.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: a.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, s) {
			"use strict";
			var a = s("./node_modules/react/index.js"),
				r = s.n(a);
			t.a = e => r.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, r.a.createElement("g", null, r.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=ContributorRequestRequestModal.9f10025baf36928d9e67.js.map