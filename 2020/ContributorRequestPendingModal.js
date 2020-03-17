// https://www.redditstatic.com/desktop2x/ContributorRequestPendingModal.fc6c744a0ce7a7e9f7bd.js
// Retrieved at 3/17/2020, 2:00:06 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["ContributorRequestPendingModal", "ContributorRequestRequestModal"], {
		"./src/reddit/components/ContributorRequestFlow/PendingModal/index.m.less": function(e, t, n) {
			e.exports = {
				titleFontH1: "kHmrHO0TlUatR2WQAWOs",
				titleFontH2: "a308N7IxGFIaTC1wqgnqv",
				titleFontH3: "_2Hs4ivMJohIlbUC-A8RUV1",
				titleFontH4: "_30Bgw_GCHem_R3AaaCfafN",
				titleFontH5: "_38pmXPkFZiFiQjkQVTepO0",
				titleFontH6: "_2v_3umwlscspURYtmzsOW4",
				metadataFont: "_3xC5SGiSgSwlzu0iOoFyk1",
				flairFont: "_1pTlKLk59p5VrbKmAUxFfx",
				labelsFont: "_20sSCgnXQdjEl3E7wcQRXc",
				actionFont: "pZIae_e_izjnnWk-ADnkA",
				smallButtonFont: "qWjRNd5fF1ab_LntB3X4j",
				largeButtonFont: "_2nYKHBmUaLzir7AFXPsMtl",
				tabFont: "_3FfewpBR_4VCrgXIZ-_RX7",
				strongTextFont: "_19jPuO1nLWeIcORtgEIErB",
				extraSmallFont: "_1cCTuJdURP7HzeCMy_tK6O",
				bodyFontH1: "_1Ye4ULbwrro6areweHd2Sx",
				bodyFontH2: "_3HrFqmd2yZoeSdnZAEOPtu",
				bodyFontH3: "_3wg_GGIamegiuXVAOx0jXF",
				bodyFontH4: "_2ckyzMtuspkiV5nyNCTLcV",
				bodyFontH5: "_1ubFFVN9SVMiUSN9OAxrcz",
				bodyFontH6: "_2XQiK7u09Z8hMppSi4HquI",
				bodyFont: "_20828B8NYtXTVy7i4u5l8p",
				bodyFontSmall: "_34mk61kYhwo60DGJVxLSPv",
				bodyFontMono: "_1hTcMMnVRQ0sewN_z99GAa",
				Component: "_2sBoAyFDM9hFHkT2UjE5Ep",
				component: "_2sBoAyFDM9hFHkT2UjE5Ep",
				DescriptionPending: "_94bbeDxkn_amKuGqD_ba2",
				descriptionPending: "_94bbeDxkn_amKuGqD_ba2",
				ModalBody: "_2ipSTk6TFcwbY5X_lMQJjr",
				modalBody: "_2ipSTk6TFcwbY5X_lMQJjr"
			}
		},
		"./src/reddit/components/ContributorRequestFlow/PendingModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t);
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./node_modules/react-redux/es/index.js"),
				a = n("./node_modules/reselect/es/index.js"),
				i = n("./src/higherOrderComponents/asModal/index.tsx"),
				d = n("./src/reddit/actions/modal.ts"),
				l = n("./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx"),
				c = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				u = n("./src/reddit/constants/modals.ts"),
				m = n("./src/reddit/controls/TextButton/index.tsx"),
				p = n("./src/reddit/i18n/utils.ts"),
				b = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				x = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				_ = n("./src/reddit/selectors/platform.ts"),
				C = n("./src/reddit/selectors/subreddit.ts"),
				f = n("./src/reddit/components/ContributorRequestFlow/PendingModal/index.m.less"),
				F = n.n(f),
				h = n("./src/lib/lessComponent.tsx");
			const j = h.a.div("DescriptionPending", F.a),
				O = h.a.wrapped(c.c, "ModalBody", F.a),
				y = Object(a.c)({
					restrictions: C.o,
					subreddit: _.f
				}),
				g = Object(r.b)(y, e => ({
					openContributorRequestPendingModal: () => e(Object(d.i)(u.a.CONTRIBUTOR_REQUEST_PENDING))
				}));
			class E extends o.a.Component {
				render() {
					const {
						openContributorRequestPendingModal: e,
						restrictions: t,
						subreddit: n
					} = this.props;
					if (!n) return null;
					const s = t === x.e.Comment ? x.a.Create : x.a.Draft;
					return o.a.createElement(O, null, o.a.createElement(l.ModalHeader, null, o.a.createElement(b.a, null, o.a.createElement(l.ModalTitle, null, Object(p.c)("Request sent and pending...")), o.a.createElement(m.a, {
						onClick: () => e()
					}, o.a.createElement(l.CloseIcon, null)))), o.a.createElement(c.j, null, o.a.createElement(j, null, Object(p.c)("Your request to ".concat(Object(p.b)("restrictions", x.d[t]), " to ").concat(Object(p.b)("displayName", n.displayText), " was sent and is pending. In the meantime, you can ").concat(Object(p.b)("action", x.c[s]), " a post and browse the community.")))), o.a.createElement(c.e, null, o.a.createElement(c.o, {
						onClick: () => e()
					}, Object(p.c)("ok"))))
				}
			}
			t.default = h.a.wrapped(Object(i.a)(g(E)), "Component", F.a)
		},
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/ContributorRequestFlow/RequestModal/index.tsx": function(e, t, n) {
			"use strict";
			n.r(t), n.d(t, "ModalHeader", (function() {
				return M
			})), n.d(t, "ModalTitle", (function() {
				return w
			})), n.d(t, "CloseIcon", (function() {
				return k
			}));
			var s = n("./src/higherOrderComponents/asModal/index.tsx"),
				o = n("./src/lib/CSSVariableProvider/withTheme.tsx"),
				r = n("./node_modules/react/index.js"),
				a = n.n(r),
				i = n("./node_modules/react-redux/es/index.js"),
				d = n("./node_modules/reselect/es/index.js"),
				l = n("./src/reddit/actions/modal.ts"),
				c = n("./src/reddit/actions/subreddit.ts"),
				u = n("./src/reddit/components/ModalStyledComponents/index.tsx"),
				m = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx"),
				p = n("./src/reddit/components/SubredditIcon/index.tsx"),
				b = n("./src/reddit/components/TrackingHelper/index.tsx"),
				x = n("./src/reddit/constants/modals.ts"),
				_ = n("./src/reddit/controls/TextButton/index.tsx"),
				C = n("./src/reddit/helpers/trackers/restrictedCommunity.ts"),
				f = n("./src/reddit/i18n/utils.ts"),
				F = n("./src/reddit/layout/twoCol/ExpandLeft/index.tsx"),
				h = n("./src/reddit/models/SubredditRestrictions/index.ts"),
				j = n("./src/reddit/models/Theme/index.ts"),
				O = n("./src/reddit/selectors/platform.ts"),
				y = n("./src/reddit/selectors/structuredStyles.ts"),
				g = n("./src/reddit/selectors/subreddit.ts"),
				E = n("./src/reddit/components/ContributorRequestFlow/RequestModal/index.m.less"),
				R = n.n(E),
				v = n("./src/lib/lessComponent.tsx");
			const q = v.a.wrapped(u.c, "ModalBody", R.a),
				M = v.a.wrapped(u.g, "ModalHeader", R.a),
				w = v.a.div("ModalTitle", R.a),
				S = v.a.div("Title", R.a),
				I = v.a.div("Description", R.a),
				k = v.a.wrapped(u.b, "CloseIcon", R.a);
			class T extends a.a.Component {
				constructor(e) {
					super(e), this.onTextAreaChange = e => {
						this.setState({
							message: e.target.value
						})
					}, this.onCancelRequest = () => {
						this.props.sendEvent(Object(C.b)("cancel")), this.props.toggleContributorRequestModal()
					}, this.state = {
						message: Object(f.c)("I would like to become an approved user of this community so I can ".concat(Object(f.b)("restrictions", h.d[this.props.restrictions])))
					}
				}
				render() {
					if (!this.props.subreddit || !this.props.subredditAboutInfo) return null;
					const e = this.props.subreddit.displayText,
						t = this.props.subredditAboutInfo.disableContributorRequests,
						n = this.props.theme ? Object(j.f)(this.props.theme.newCommunityTheme.widgetColors.sidebarWidgetHeaderColor) : "";
					return a.a.createElement(q, {
						className: R.a.requestModal
					}, a.a.createElement(M, null, a.a.createElement(F.a, null, a.a.createElement("div", null, a.a.createElement(w, {
						style: {
							color: n
						}
					}, Object(f.c)("Become an approved user of")), a.a.createElement(S, {
						style: {
							color: n
						}
					}, a.a.createElement(p.b, {
						className: R.a.subredditIcon,
						iconUrl: this.props.subredditIcon.url,
						primaryColor: this.props.subredditIcon.color
					}), a.a.createElement("span", null, e))), a.a.createElement(_.a, {
						onClick: this.onCancelRequest
					}, a.a.createElement(k, null)))), a.a.createElement(u.j, null, t ? a.a.createElement(I, null, Object(f.c)("The moderators have disabled requests in this community. Check the community rules for more details.")) : a.a.createElement(a.a.Fragment, null, a.a.createElement(I, null, Object(f.c)("Only approved users can ".concat(Object(f.b)("restrictions", h.d[this.props.restrictions]), " in ").concat(Object(f.b)("displayName", e), ". To become an approved user, send a request to the moderators."))), a.a.createElement(m.c, {
						className: R.a.textarea,
						label: Object(f.c)("Request to moderators"),
						value: this.state.message,
						onChange: this.onTextAreaChange,
						state: void 0,
						required: !0
					}))), a.a.createElement(u.e, null, t ? a.a.createElement(u.o, {
						onClick: () => this.props.toggleContributorRequestModal()
					}, Object(f.c)("ok")) : a.a.createElement(a.a.Fragment, null, a.a.createElement(u.a, {
						"data-redditstyle": !0,
						onClick: this.onCancelRequest
					}, Object(f.c)("Cancel")), a.a.createElement(u.o, {
						onClick: () => {
							this.props.sendEvent(Object(C.b)("request_approval")), this.props.makeContributorRequest(e, this.state.message, this.props.restrictions), this.props.toggleContributorRequestModal()
						}
					}, Object(f.c)("Send Request")))))
				}
			}
			t.default = v.a.wrapped(Object(o.a)(Object(s.a)(Object(i.b)(() => Object(d.c)({
				subredditAboutInfo: g.j,
				restrictions: g.o,
				subreddit: O.f,
				subredditIcon: y.c
			}), e => ({
				makeContributorRequest: (t, n, s) => e(Object(c.n)(t, n, s)),
				toggleContributorRequestModal: () => e(Object(l.i)(x.a.CONTRIBUTOR_REQUEST))
			}))(Object(b.c)(T)))), "Component", R.a)
		},
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less": function(e, t, n) {
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
		"./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.tsx": function(e, t, n) {
			"use strict";
			n.d(t, "d", (function() {
				return _
			})), n.d(t, "a", (function() {
				return C
			})), n.d(t, "b", (function() {
				return F
			})), n.d(t, "c", (function() {
				return h
			}));
			n("./node_modules/core-js/modules/es6.symbol.js");
			var s = n("./node_modules/react/index.js"),
				o = n.n(s),
				r = n("./src/lib/classNames/index.ts"),
				a = n("./src/lib/lessComponent.tsx"),
				i = n("./src/reddit/controls/Input/index.tsx"),
				d = n("./src/reddit/icons/svgs/Checkmark/index.tsx"),
				l = n("./src/reddit/components/StructuredStyles/Forms/LabeledControl/index.m.less"),
				c = n.n(l);

			function u() {
				return (u = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var n = arguments[t];
						for (var s in n) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var n = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (n[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var o = 0;
					for (s = Object.getOwnPropertySymbols(e); o < s.length; o++) t.indexOf(s[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[o]) && (n[s[o]] = e[s[o]])
				}
				return n
			};
			const p = a.a.div("icon", c.a),
				b = a.a.textarea("textarea", c.a),
				x = a.a.span("Invalid", c.a);
			var _, C;
			! function(e) {
				e[e.Valid = 1] = "Valid", e[e.Invalid = 2] = "Invalid"
			}(_ || (_ = {})),
			function(e) {
				e[e.GreyFields = 1] = "GreyFields", e[e.WhiteFields = 2] = "WhiteFields"
			}(C || (C = {}));
			const f = e => o.a.createElement("div", {
					className: Object(r.a)(e.isRequired && c.a.required, e.className, Object.assign({
						[c.a.container]: !e.isTextarea,
						[c.a.textareaContainer]: !!e.isTextarea
					}, !!e.isTextarea && {
						[c.a.mValid]: e.state === _.Valid,
						[c.a.mInvalid]: e.state === _.Invalid,
						[c.a.mWhiteField]: e.backgroundColorState === C.WhiteFields
					}))
				}, o.a.createElement("label", {
					className: Object(r.a)({
						[c.a.field]: !e.isTextarea,
						[c.a.textareaField]: !!e.isTextarea
					})
				}, e.children, e.label && o.a.createElement("span", {
					className: c.a.label
				}, e.label), !!e.state && o.a.createElement(p, {
					className: Object(r.a)({
						[c.a.mValid]: e.state === _.Valid,
						[c.a.mInvalid]: e.state === _.Invalid
					})
				}, e.state === _.Valid && o.a.createElement(d.a, null), e.state === _.Invalid && o.a.createElement(x, null, "!")))),
				F = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: a,
						label: d,
						onKeyDown: l,
						state: p
					} = e, b = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return o.a.createElement(f, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: d,
						state: p
					}, o.a.createElement(i.a, u({}, b, {
						className: Object(r.a)(c.a.input, c.a.control, {
							[c.a.hasState]: !!e.state
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: l
					})))
				},
				h = e => {
					const {
						backgroundColorState: t,
						className: n,
						inputRef: s,
						isRequired: a,
						label: i,
						onKeyDown: d,
						state: l
					} = e, p = m(e, ["backgroundColorState", "className", "inputRef", "isRequired", "label", "onKeyDown", "state"]);
					return o.a.createElement(f, {
						backgroundColorState: t,
						className: n,
						isRequired: a,
						label: i,
						state: l,
						isTextarea: !0
					}, o.a.createElement(b, u({}, p, {
						className: Object(r.a)({
							[c.a.mWhiteField]: e.backgroundColorState === C.WhiteFields
						}),
						"data-empty": !e.value,
						innerRef: s,
						onKeyDown: d
					})))
				}
		},
		"./src/reddit/controls/Input/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./src/lib/lessComponent.tsx"),
				o = n("./src/reddit/controls/Input/index.m.less"),
				r = n.n(o);
			t.a = s.a.input("input", r.a)
		},
		"./src/reddit/helpers/trackers/restrictedCommunity.ts": function(e, t, n) {
			"use strict";
			n.d(t, "a", (function() {
				return o
			})), n.d(t, "b", (function() {
				return r
			}));
			var s = n("./src/reddit/selectors/telemetry.ts");
			const o = e => t => Object.assign({}, s.defaults(t), {
					source: e,
					action: "click",
					noun: "request_restricted_approval_button",
					subreddit: s.subreddit(t)
				}),
				r = e => t => Object.assign({}, s.defaults(t), {
					source: "request_restricted_approval_form",
					action: "click",
					noun: e,
					subreddit: s.subreddit(t)
				})
		},
		"./src/reddit/icons/svgs/Checkmark/index.tsx": function(e, t, n) {
			"use strict";
			var s = n("./node_modules/react/index.js"),
				o = n.n(s);
			t.a = e => o.a.createElement("svg", {
				className: e.className,
				viewBox: "0 0 20 22",
				xmlns: "http://www.w3.org/2000/svg"
			}, o.a.createElement("g", null, o.a.createElement("path", {
				d: "M8.9310375,15.1995 C8.70135,15.41825 8.38963125,15.541375 8.0647875,15.541375 C8.052975,15.541375 8.04181875,15.54075 8.03000625,15.54075 C7.69335,15.531375 7.37506875,15.39075 7.15063125,15.151375 L4.0879125,11.88075 C3.637725,11.400125 3.68169375,10.662625 4.18700625,10.23325 C4.6916625,9.805125 5.4660375,9.846375 5.91688125,10.327625 L8.115975,12.676375 L14.8550063,6.25825 C15.3327563,5.802625 16.1091,5.802625 16.5875063,6.25825 C17.0659125,6.71325 17.0659125,7.452625 16.5875063,7.907625 L8.9310375,15.1995 Z",
				fill: "inherit"
			})))
		}
	}
]);
//# sourceMappingURL=ContributorRequestPendingModal.fc6c744a0ce7a7e9f7bd.js.map