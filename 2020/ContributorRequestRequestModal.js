// https://www.redditstatic.com/desktop2x/ContributorRequestRequestModal.86ce5874e406575ab59d.js
// Retrieved at 8/6/2020, 5:00:07 PM by Reddit Dataminer v1.0.0
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
				return I
			})), s.d(t, "ModalTitle", (function() {
				return S
			})), s.d(t, "CloseIcon", (function() {
				return M
			}));
			var a = s("./node_modules/fbt/lib/FbtPublic.js"),
				r = s("./src/lib/CSSVariableProvider/withTheme.tsx"),
				n = s("./node_modules/react/index.js"),
				o = s.n(n),
				i = s("./node_modules/react-redux/es/index.js"),
				l = s("./node_modules/reselect/es/index.js"),
				d = s("./src/higherOrderComponents/asModal/index.tsx"),
				c = s("./src/reddit/actions/modal.ts"),
				u = s("./src/reddit/actions/subreddit.ts"),
				m = s("./src/reddit/components/ModalStyledComponents/index.tsx"),
				p = s("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				b = s("./src/reddit/components/SubredditIcon/index.tsx"),
				f = s("./src/reddit/components/TrackingHelper/index.tsx"),
				h = s("./src/reddit/constants/modals.ts"),
				x = s("./src/reddit/controls/TextButton/index.tsx"),
				_ = s("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				C = s("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				v = s("./src/reddit/models/SubredditRestrictions/index.ts"),
				g = s("./src/reddit/models/Theme/index.ts"),
				y = s("./src/reddit/selectors/platform.ts"),
				E = s("./src/reddit/selectors/structuredStyles.ts"),
				q = s("./src/reddit/selectors/subreddit.ts"),
				j = s("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				R = s.n(j),
				O = s("./src/lib/lessComponent.tsx");
			const k = O.a.wrapped(m.d, "ModalBody", R.a),
				I = O.a.wrapped(m.h, "ModalHeader", R.a),
				S = O.a.div("ModalTitle", R.a),
				F = O.a.div("Title", R.a),
				w = O.a.div("Description", R.a),
				M = O.a.wrapped(m.b, "CloseIcon", R.a);
			class N extends o.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(_.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: a.fbt._("I would like to become an approved user of this community so I can {restrictions}", [a.fbt._param("restrictions", v.d[this.props.restrictions]())], {
							hk: "3tcbxn"
						})
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						s = this.props.theme ? Object(g.f)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return o.a.createElement(k, {
						className: R.a.requestModal
					}, o.a.createElement(I, null, o.a.createElement(C.a, null, o.a.createElement("div", null, o.a.createElement(S, {
						style: {
							color: s
						}
					}, a.fbt._("Become an approved user of", null, {
						hk: "u33RG"
					})), o.a.createElement(F, {
						style: {
							color: s
						}
					}, o.a.createElement(b.b, {
						className: R.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), o.a.createElement("span", null, e))), o.a.createElement(x.a, {
						onClick: this.onCancelRequest
					}, o.a.createElement(M, null)))), o.a.createElement(m.k, null, t ? o.a.createElement(w, null, a.fbt._("The moderators have disabled requests in this community. Check the community rules for more details.", null, {
						hk: "2J5GoK"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(w, null, a.fbt._("Only approved users can {restrictions} in {displayName}. To become an approved user, send a request to the moderators.", [a.fbt._param("restrictions", v.d[this.props.restrictions]()), a.fbt._param("displayName", e)], {
						hk: "1q9PJW"
					})), o.a.createElement(p.c, {
						className: R.a.textarea,
						label: a.fbt._("Request to moderators", null, {
							hk: "4hiUqP"
						}),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), o.a.createElement(m.f, null, t ? o.a.createElement(m.q, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, a.fbt._("ok", null, {
						hk: "22zWTN"
					})) : o.a.createElement(o.a.Fragment, null, o.a.createElement(m.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, a.fbt._("Cancel", null, {
						hk: "2TSLl5"
					})), o.a.createElement(m.q, {
						onClick: () => {
							this.props.sendEvent(Object(_.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, a.fbt._("Send Request", null, {
						hk: "1UMaEr"
					})))))
				}
			}
			t.default = O.a.wrapped(Object(r.a)(Object(d.a)(Object(i.b)(() => Object(l.c)({
				subredditAboutInfo: q.j,
				restrictions: q.o,
				subreddit: y.f,
				subredditIcon: E.c
			}), e => ({
				makeContributorRequest: (t, s, a) => e(Object(u.n)(t, s, a)),
				toggleContributorRequestModal: () => e(Object(c.i)(h.a.CONTRIBUTOR_REQUEST))
			}))(Object(f.c)(N)))), "Component", R.a)
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
				return h
			})), s.d(t, "a", (function() {
				return x
			})), s.d(t, "b", (function() {
				return C
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
				f = o.a.span("Invalid", c.a);
			var h, x;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(h || (h = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(x || (x = {}));
			const _ = e => r.a.createElement("div", {
					className: Object(n.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === h.Valid,
						[c.a.mInvalid]: e.state === h.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
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
						[c.a.mValid]: e.state === h.Valid,
						[c.a.mInvalid]: e.state === h.Invalid
					})
				}, e.state === h.Valid && r.a.createElement(l.a, null), e.state === h.Invalid && r.a.createElement(f, null, "!")))),
				C = e => {
					const {
						backgroundColorState: t,
						className: s,
						inputRef: a,
						isRequired: o,
						label: l,
						onKeyDown: d,
						state: p
					} = e, b = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return r.a.createElement(_, {
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
					return r.a.createElement(_, {
						backgroundColorState: t,
						className: s,
						isRequired: o,
						label: i,
						state: d,
						isTextarea: !0
					}, r.a.createElement(b, u({}, p, {
						className: Object(n.a)({
							[c.a.mWhiteField]: e.backgroundColorState === x.WhiteFields
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
			const r = e => t => Object.assign(Object.assign({}, a.defaults(t)), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: a.subreddit(t)
				}),
				n = e => t => Object.assign(Object.assign({}, a.defaults(t)), {
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
//# sourceMappingURL=ContributorRequestRequestModal.86ce5874e406575ab59d.js.map