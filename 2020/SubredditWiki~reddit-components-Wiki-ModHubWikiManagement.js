// https://www.redditstatic.com/desktop2x/SubredditWiki~reddit-components-Wiki-ModHubWikiManagement.9cd09366615d54ff2fd3.js
// Retrieved at 3/16/2020, 6:00:05 PM by Reddit Dataminer v1.0.0
(window.__LOADABLE_LOADED_CHUNKS__ = window.__LOADABLE_LOADED_CHUNKS__ || []).push([
	["SubredditWiki~reddit-components-Wiki-ModHubWikiManagement"], {
		"./src/reddit/components/BlockNavigation/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/react-router/esm/react-router.js"),
				r = i("./src/reddit/actions/modal.ts");
			const c = "non-empty-string-to-block-navigation";
			class d extends n.a.Component {
				constructor() {
					super(...arguments), this.onBeforeUnload = e => {
						if (this.props.enabled) return e.preventDefault(), e.returnValue = "", ""
					}, this.message = (e, t) => {
						return !0 === (this.props.confirmNavigate || this.defaultConfirmNavigate)(e, t) || c
					}, this.defaultConfirmNavigate = (e, t) => {
						const {
							ignoreCurrentLocation: i = !0,
							location: s,
							showModal: n,
							dialogId: o
						} = this.props;
						return !(!i || e.pathname !== s.pathname) || (o && n(), !1)
					}
				}
				componentDidMount() {
					this.props.blockOnBeforeUnload && window.addEventListener("beforeunload", this.onBeforeUnload)
				}
				componentWillUnmount() {
					this.props.blockOnBeforeUnload && window.removeEventListener("beforeunload", this.onBeforeUnload)
				}
				render() {
					const {
						enabled: e = !0
					} = this.props;
					return n.a.createElement(a.b, {
						message: this.message,
						when: e
					})
				}
			}
			t.a = Object(o.b)(null, (e, t) => ({
				showModal: () => e(Object(r.h)(t.dialogId))
			}))(Object(a.i)(d))
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.m.less": function(e, t, i) {
			e.exports = {
				editorWrapper: "VBa-xDMEbFi3vsO4id4OC",
				textareaAutosize: "_6Ej82J4aTDK36LLOcpFbC",
				mIsFullHeight: "aZb6a46diyLdUQJynW3aD"
			}
		},
		"./src/reddit/components/ResizableAutosizeTextarea/index.tsx": function(e, t, i) {
			"use strict";
			i("./node_modules/core-js/modules/es6.symbol.js");
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./node_modules/react-autosize-textarea/lib/index.js"),
				a = i.n(o),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/components/ResizableAutosizeTextarea/index.m.less"),
				d = i.n(c);

			function l() {
				return (l = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			var m = function(e, t) {
				var i = {};
				for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && t.indexOf(s) < 0 && (i[s] = e[s]);
				if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
					var n = 0;
					for (s = Object.getOwnPropertySymbols(e); n < s.length; n++) t.indexOf(s[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[n]) && (i[s[n]] = e[s[n]])
				}
				return i
			};
			const u = e => {
					let {
						className: t,
						children: i,
						editorWrapperRef: s,
						initialHeight: o
					} = e;
					return n.a.createElement("div", {
						className: Object(r.a)(d.a.editorWrapper, t),
						style: o ? {
							height: o
						} : void 0,
						ref: s
					}, i)
				},
				p = e => {
					var {
						isFullHeight: t,
						textAreaRef: i
					} = e, s = m(e, ["isFullHeight", "textAreaRef"]);
					return n.a.createElement(a.a, l({
						className: Object(r.a)(d.a.textareaAutosize, {
							[d.a.mIsFullHeight]: t
						}),
						innerRef: i
					}, s))
				};
			class h extends n.a.Component {
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
					const e = this.props,
						{
							className: t,
							initialHeight: i,
							innerRef: s,
							onEditorResize: o
						} = e,
						a = m(e, ["className", "initialHeight", "innerRef", "onEditorResize"]),
						{
							isResized: r
						} = this.state;
					return n.a.createElement(u, {
						className: t,
						editorWrapperRef: this.setEditorWrapperRef,
						initialHeight: i
					}, n.a.createElement(p, l({}, a, {
						children: !0,
						isFullHeight: !!r,
						textAreaRef: s
					})))
				}
			}
			t.a = h
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.m.less": function(e, t, i) {
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
				cellCheckbox: "_2jHe0kuo-s2zjj9AFEoKIR",
				checkbox: "_2z1fkA5gXEWTIixh5mc5Mu",
				loadingRow: "_1twsCmeo_Rv87GnJLkvjOG",
				loadingShimmer: "_2OTytxS0mfmxAGAw4qKI6K",
				mShowActionButtons: "_3ZOwuRsjzzqragH4DDY3Au"
			}
		},
		"./src/reddit/components/Wiki/RevisionsHistory/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				d = i("./src/reddit/actions/wiki/wikiRevisions/index.ts"),
				l = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				m = i("./src/reddit/components/ModHub/InfoTooltip/index.tsx"),
				u = i("./src/reddit/components/TrackingHelper/index.tsx"),
				p = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				b = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				g = i("./src/lib/addQueryParams/index.ts"),
				k = i("./src/reddit/constants/parameters.ts"),
				x = i("./src/reddit/helpers/wiki/wikiRevision.ts");

			function v(e, t) {
				const {
					revision: i,
					revisionToCompare: s
				} = t;
				if (!i && !s) return e;
				const n = {};
				return i && (n[k.w] = Object(x.b)(i)), s && (n[k.x] = Object(x.b)(s)), Object(g.a)(e, n)
			}
			var w = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				f = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				j = i("./src/reddit/i18n/utils.ts"),
				O = i("./src/reddit/selectors/activeModalId.ts"),
				N = i("./src/reddit/selectors/moderatorPermissions.ts"),
				E = i("./src/reddit/selectors/subreddit.ts"),
				P = i("./src/reddit/selectors/subredditWiki.ts"),
				C = i("./node_modules/lodash/times.js"),
				R = i.n(C),
				_ = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				T = i("./src/reddit/components/Wiki/RevisionsHistory/index.m.less"),
				W = i.n(T);
			var y = () => {
					const e = s.createElement("div", {
						className: Object(r.a)(W.a.loadingShimmer, Object(_.b)({
							isLoading: !0
						}))
					});
					return s.createElement("div", null, R()(4, t => s.createElement("div", {
						key: t,
						className: W.a.loadingRow
					}, e)))
				},
				M = i("./node_modules/@researchgate/react-intersection-observer/lib/es/index.js");
			class L extends n.a.Component {
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
					return n.a.createElement(M.a, {
						onChange: this.handleChange
					}, n.a.createElement("div", null))
				}
			}
			i("./node_modules/core-js/modules/es6.regexp.split.js");
			var H = i("./node_modules/lodash/noop.js"),
				I = i.n(H),
				S = i("./src/reddit/components/AuthorLink/index.tsx"),
				A = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				B = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				U = i("./src/reddit/controls/Checkbox/index.tsx"),
				D = i("./src/reddit/controls/InternalLink/index.tsx"),
				z = i("./node_modules/lodash/forEach.js"),
				V = i.n(z),
				F = i("./src/lib/fastdom/index.ts");

			function G(e) {
				F.a.read(() => {
					V()(e, e => {
						if (e instanceof HTMLElement && e.parentElement) {
							const t = e.offsetWidth < e.scrollWidth,
								i = e.parentElement,
								s = "true" === i.dataset.textOverflow;
							t !== s && F.a.write(() => {
								i.dataset.textOverflow = String(t)
							})
						}
					})
				})
			}
			const K = Object(a.c)({
				revision: P.n
			});
			class q extends n.a.Component {
				constructor() {
					super(...arguments), this.reasonElementRef = n.a.createRef(), this.state = {}, this.onToggleHiddenClick = async () => {
						const {
							revision: e,
							revisionId: t,
							subredditName: i
						} = this.props, s = e.isHidden;
						this.props.sendEvent(Object(b.l)(s)), this.setState({
							isHideRequestPending: !0
						}), await this.props.toggleIsHidden({
							revisionId: t,
							subredditName: i,
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
						this.props.sendEvent(b.q)
					}
				}
				componentDidMount() {
					this.reasonElementRef.current && G([this.reasonElementRef.current])
				}
				render() {
					const {
						hasWikiModPerms: e,
						isCheckboxSelected: t,
						isModHub: i,
						isRecentRevisionMode: s,
						revision: o,
						subredditName: a
					} = this.props, c = o.page.name, d = o.isHidden, {
						expanded: l
					} = this.state, m = o.authorInfo && o.authorInfo.name, u = Object(f.a)({
						subredditName: a,
						wikiPageName: c
					}, i), p = v(u, {
						revision: o.id
					}), b = !s && e, g = c.split("/").slice(-1)[0];
					return n.a.createElement("tr", {
						className: Object(r.a)(W.a.row, d ? W.a.mHidden : null)
					}, !s && n.a.createElement("td", {
						className: W.a.cellCheckbox
					}, n.a.createElement(U.a, {
						className: W.a.checkbox,
						isCheckboxSelected: t,
						toggleCheckbox: this.onCheckboxToggle
					})), n.a.createElement("td", {
						className: W.a.cellTime
					}, Object(B.b)(o)), s && n.a.createElement("td", {
						className: W.a.cellPage
					}, n.a.createElement(D.a, {
						className: W.a.wikiPageLink,
						title: "/".concat(c),
						to: u
					}, g)), n.a.createElement("td", {
						className: W.a.cellUser
					}, m && n.a.createElement(A.a, {
						sendHoverCardEvent: I.a,
						tooltipId: "revision-".concat(o.id),
						user: m
					}, n.a.createElement(S.a, {
						author: m,
						className: W.a.usernameLink
					}, m))), n.a.createElement("td", {
						className: W.a.cellReason
					}, n.a.createElement("div", {
						className: Object(r.a)(W.a.reasonTextWrapper, l ? W.a.mExpanded : null)
					}, n.a.createElement("div", {
						ref: this.reasonElementRef,
						className: W.a.reasonText
					}, o.reason), !l && n.a.createElement(h.d, {
						className: W.a.moreButton,
						onClick: this.onShowMoreButtonClick
					}, Object(j.c)("more")))), n.a.createElement("td", null, n.a.createElement("div", {
						className: W.a.buttons
					}, n.a.createElement(h.o, {
						className: W.a.viewButton,
						onClick: this.onViewClick,
						to: p
					}, Object(j.c)("View")), b && n.a.createElement(n.a.Fragment, null, n.a.createElement(h.n, {
						className: W.a.hideShowButton,
						disabled: this.state.isHideRequestPending,
						onClick: this.onToggleHiddenClick
					}, d ? Object(j.c)("Show") : Object(j.c)("Hide")), n.a.createElement(h.n, {
						className: W.a.revertButton,
						onClick: this.onRevertClick
					}, Object(j.c)("Revert"))))))
				}
			}
			var J = Object(o.b)(K, e => ({
				toggleIsHidden: t => e(Object(d.b)(t))
			}))(q);

			function Z() {
				return (Z = Object.assign || function(e) {
					for (var t = 1; t < arguments.length; t++) {
						var i = arguments[t];
						for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
					}
					return e
				}).apply(this, arguments)
			}
			const X = Object(a.c)({
				hasError: P.o,
				hasWikiModPerms: (e, t) => {
					const i = Object(E.y)(e, t);
					return !!i && Object(N.f)(e, {
						subredditId: i.id
					})
				},
				isPending: P.q,
				isRevertConfirmationModalOpen: Object(O.b)("wiki-revert-confirmation"),
				listingInfo: P.p
			});
			class Y extends n.a.Component {
				constructor() {
					super(...arguments), this.containerRef = n.a.createRef(), this.state = {
						selectedRevisions: []
					}, this.onRevertConfirmed = () => {
						const {
							subredditName: e
						} = this.props, {
							revertRevision: t
						} = this.state;
						t && (this.props.sendEvent(b.k), this.props.onRevertToRevision({
							revisionId: t.id,
							subredditName: e,
							wikiPageName: t.page.name
						}))
					}, this.onCompareClick = () => {
						this.props.sendEvent(b.d)
					}, this.onRevertButtonClick = e => {
						this.setState({
							revertRevision: e
						}), this.props.toggleRevetConfirmationModal()
					}, this.handleResize = () => {
						this.containerRef.current && function(e) {
							G(e.getElementsByClassName(W.a.reasonText))
						}(this.containerRef.current)
					}, this.onLoadMore = () => {
						this.props.onLoadMoreRevisions()
					}, this.onCheckboxToggle = e => {
						const {
							listingInfo: t
						} = this.props, i = t && t.ids || [];
						this.setState(t => {
							let s = t.selectedRevisions;
							return 2 === (s = s.includes(e) ? s.filter(t => t !== e) : s.length < 2 ? [...s, e] : [e]).length && i.indexOf(s[0]) < i.indexOf(s[1]) && s.reverse(), {
								selectedRevisions: s
							}
						})
					}, this.renderRowItem = (e, t) => {
						const {
							hasWikiModPerms: i,
							subredditName: s
						} = this.props, {
							selectedRevisions: o
						} = this.state;
						return n.a.createElement(J, {
							key: e,
							hasWikiModPerms: i,
							isCheckboxSelected: o.includes(e),
							isModHub: this.props.isModHub,
							isRecentRevisionMode: this.props.isRecentRevisionsMode,
							onCheckboxToggle: this.onCheckboxToggle,
							onRevertClick: this.onRevertButtonClick,
							revisionId: e,
							sendEvent: this.props.sendEvent,
							subredditName: s
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
						isModHub: i,
						isPending: s,
						isRecentRevisionsMode: o,
						isRevertConfirmationModalOpen: a,
						listingInfo: c,
						subredditName: d,
						wikiPageName: u
					} = this.props, {
						selectedRevisions: b
					} = this.state, g = c && c.ids || [], k = c && c.pageInfo.hasNextPage;
					let x = "",
						w = "#";
					u && (x = Object(f.a)({
						subredditName: d,
						wikiPageName: u
					}, i), 2 === b.length && (w = v(x, {
						revision: b[0],
						revisionToCompare: b[1]
					})));
					const O = !o && t;
					return n.a.createElement("div", {
						ref: this.containerRef,
						className: Object(r.a)(W.a.container, {
							[W.a.mModHub]: i,
							[W.a.mShowActionButtons]: O
						})
					}, n.a.createElement(p.a, {
						buttonText: o ? void 0 : Object(j.c)("Go to wiki page"),
						buttonLink: x,
						className: W.a.pageTitle,
						title: n.a.createElement("span", {
							className: W.a.pageTitleText
						}, o ? Object(j.c)("Recent revisions") : Object(j.c)("Page history for ".concat(Object(j.b)("pageName", "/".concat(u)))))
					}), n.a.createElement("div", {
						className: W.a.content
					}, !o && n.a.createElement("div", {
						className: W.a.compareBar
					}, n.a.createElement(h.o, {
						className: W.a.compareButton,
						disabled: b.length < 2,
						onClick: this.onCompareClick,
						to: w
					}, Object(j.c)("Compare")), Object(j.c)("".concat(Object(j.b)("selectedCnt", b.length), "/2 selected to compare"))), n.a.createElement("table", {
						className: W.a.table
					}, n.a.createElement("thead", null, n.a.createElement("tr", null, !o && n.a.createElement("th", {
						className: W.a.colHeaderCheckbox
					}), n.a.createElement("th", {
						className: W.a.colHeaderTime
					}, Object(j.c)("time")), o && n.a.createElement("th", {
						className: W.a.colHeaderPage
					}, Object(j.c)("Wiki page")), n.a.createElement("th", {
						className: W.a.colHeaderUser
					}, Object(j.c)("Username")), n.a.createElement("th", {
						className: W.a.colHeaderReason
					}, Object(j.c)("Revision Reason")), n.a.createElement("th", {
						className: W.a.colHeaderActions
					}, O && n.a.createElement(n.a.Fragment, null, Object(j.c)("Actions"), n.a.createElement(m.a, {
						text: Object(j.c)("View: View current version\nHide: Hide revision from page history\nRevert: Revert page to an older version")
					}))))), n.a.createElement("tbody", {
						className: W.a.tableBody
					}, g.map(this.renderRowItem))), s && n.a.createElement(y, null), k && n.a.createElement(L, {
						hasError: e,
						isLoading: s,
						onLoadMore: this.onLoadMore
					})), a && n.a.createElement(l.a, {
						actionText: Object(j.c)("Revert"),
						headerText: Object(j.c)("Revert wiki page"),
						modalText: Object(j.c)("Are you sure you wish to change this wiki page to a previously saved version?"),
						onConfirm: this.onRevertConfirmed,
						toggleModal: this.props.toggleRevetConfirmationModal,
						withOverlay: !0
					}))
				}
			}
			const Q = Object(o.b)(X, (e, t) => ({
				toggleRevetConfirmationModal: () => e(Object(c.i)("wiki-revert-confirmation")),
				onRevertToRevision: t => e(Object(d.a)(t)),
				onLoadMoreRevisions: () => e(Object(d.c)(Object.assign({}, t, {
					canLoadMore: !0,
					canShowFailToast: !0,
					isRecent: !!t.isRecentRevisionsMode
				})))
			}))(Object(u.b)(Y));
			t.a = e => {
				const t = !!e.isRecentRevisionsMode,
					i = Object(w.a)(Object.assign({}, e, {
						isRecent: t
					}));
				return n.a.createElement(Q, Z({
					key: i,
					listingKey: i
				}, e))
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "kuIrk7ySqHYuv5Gt8MVk7",
				automodContent: "_1FI4zcF0t1ECf8oc18uKd0",
				automodInfoBanner: "_2cLJCh1PnBUPaTO1HveGgo",
				wikiHtmlContent: "_1r4JJnDJUTKPWFmsi-Is_u",
				revisionInfo: "_3n6jRoJzvGVG7cvZDrvW1G"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2knUS3S97xMYycQVxOi0Yd",
				link: "_2uut3Ijozr0WkSh-oLVTkt"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3kIjxjzGVq5UfR6Bjiovd",
				hideIcon: "_2G1CaoG-VN3IjmyXMjpIfp"
			}
		},
		"./src/reddit/components/Wiki/WikiPageContent/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/components/TrackingHelper/index.tsx"),
				c = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				d = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				l = i("./src/reddit/constants/componentSizes.ts"),
				m = i("./src/reddit/constants/wiki.ts"),
				u = i("./src/reddit/contexts/PageLayer/index.tsx"),
				p = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				h = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				b = i("./src/reddit/i18n/utils.ts"),
				g = i("./src/reddit/icons/svgs/Hide/index.tsx"),
				k = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				x = i("./src/reddit/selectors/subredditWiki.ts"),
				v = i("./src/reddit/components/RawHTMLDisplay/index.tsx"),
				w = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				f = i("./node_modules/react-router-dom/esm/react-router-dom.js"),
				j = i("./src/reddit/helpers/wiki/buildWikiPagesTree.ts"),
				O = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				N = i("./src/reddit/components/Wiki/WikiPageContent/PagesListing/index.m.less"),
				E = i.n(N);
			const P = e => {
				const {
					item: t,
					subredditName: i,
					isModHub: n
				} = e, o = t.isPagePresent && Object(O.a)({
					subredditName: i,
					wikiPageName: t.path
				}, n);
				return s.createElement("li", null, o ? s.createElement(f.a, {
					className: E.a.link,
					to: o
				}, t.name) : s.createElement("span", null, t.name), !!t.children.length && s.createElement("ul", null, t.children.map(e => s.createElement(P, {
					isModHub: n,
					item: e,
					key: e.path,
					subredditName: i
				}))))
			};
			var C = e => {
					const {
						isModHub: t,
						subredditName: i,
						wikiDirectory: n
					} = e, o = Object(j.a)(n.pageTree || []);
					return s.createElement("div", {
						className: E.a.container
					}, s.createElement("h1", null, Object(b.c)("Viewing pages for ".concat(Object(b.b)("subredditName", i)))), s.createElement("h2", null, Object(b.c)("Below is a list of pages in this wiki visible to you in this subreddit.")), s.createElement("ul", null, o.map(e => s.createElement(P, {
						isModHub: t,
						item: e,
						key: e.path,
						subredditName: i
					}))))
				},
				R = i("./src/reddit/components/Wiki/WikiPageContent/PageContent/index.m.less"),
				_ = i.n(R),
				T = e => {
					const {
						className: t,
						isModHub: i,
						showRevisionInfo: n,
						subredditName: o,
						wikiDirectory: r,
						wikiPage: c,
						wikiPageName: d
					} = e;
					let l = null;
					return r && d === m.j ? l = s.createElement(C, {
						isModHub: i,
						subredditName: o,
						wikiDirectory: r
					}) : c && c.content && d === m.h ? l = s.createElement("div", {
						className: _.a.automodContent
					}, c.content.markdown) : c && c.content && (l = s.createElement(v.a, {
						className: _.a.wikiHtmlContent,
						html: c.content.html
					})), s.createElement("div", {
						className: Object(a.a)(t, _.a.container)
					}, d === m.h && s.createElement("div", {
						className: _.a.automodInfoBanner
					}, Object(b.c)("This page is used to configure AutoModerator for the subreddit, please see the "), s.createElement("a", {
						href: "/wiki/automoderator/full-documentation"
					}, Object(b.c)("full documentation")), Object(b.c)(" for information")), l, n && c && c.revision && s.createElement("div", {
						className: _.a.revisionInfo
					}, s.createElement(w.a, {
						showTimeAgo: !0,
						isLastRevision: !0,
						revision: c.revision
					})))
				},
				W = i("./src/reddit/components/Wiki/WikiPageContent/index.m.less"),
				y = i.n(W);
			const M = Object(n.b)(() => Object(o.c)({
					pending: x.a,
					wikiDirectory: x.b,
					wikiPage: x.c
				})),
				L = Object(u.t)();
			class H extends s.Component {
				constructor() {
					super(...arguments), this.onEditButtonClick = () => {
						this.props.sendEvent(Object(p.f)())
					}, this.isListingPage = () => this.props.wikiPageName === m.j, this.reloadPage = () => {
						window.location.reload()
					}
				}
				componentDidMount() {
					this.scrollToHash()
				}
				componentDidUpdate(e) {
					const t = this.props.pageLayer !== e.pageLayer,
						i = this.props.wikiPage !== e.wikiPage;
					(t || i) && this.scrollToHash()
				}
				scrollToHash() {
					const e = window.location.hash.slice(1),
						t = e ? document.getElementById(e) : null;
					if (t) {
						let e = l.f + 10;
						this.props.isModHub && (e += l.j + l.k);
						const i = window.scrollY + t.getBoundingClientRect().top - e;
						window.scrollTo(0, i)
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
						showRevisionInfo: i,
						subredditName: n,
						wikiDirectory: o,
						wikiPage: a,
						wikiPageName: r
					} = this.props, l = this.getWikiPageStatus(), u = r === m.i, p = this.props.isModHub ? "/r/".concat(this.props.subredditName, "/about/wiki") : "/r/".concat(this.props.subredditName, "/wiki"), x = "".concat(p, "/index"), v = u ? void 0 : Object(b.c)("Wiki home");
					if (t || !l) return s.createElement(d.a, {
						showTitle: !0
					});
					if (l === k.b.Unknown || l === k.b.PageNotCreated) {
						if (Object(h.b)(r)) return s.createElement(c.a, {
							buttonLink: x,
							buttonText: v,
							description: Object(b.c)("This page uses a restricted URL and can not be used as a wiki page"),
							title: Object(b.c)('"'.concat(Object(b.b)("pageName", r), '" does not exist'))
						})
					}
					switch (l) {
						case k.b.Valid:
							return !(!a || !a.content || a.content.markdown) ? s.createElement(c.a, {
								buttonLink: "".concat(p, "/edit/").concat(r),
								buttonText: Object(b.c)("Edit page"),
								description: Object(b.c)("Edit it to add some content"),
								title: Object(b.c)("This page is empty")
							}) : s.createElement(T, {
								isModHub: e,
								showRevisionInfo: i,
								subredditName: n,
								wikiDirectory: o,
								wikiPage: a,
								wikiPageName: r
							});
						case k.b.PageNotCreated:
							return s.createElement(c.a, {
								buttonLink: "".concat(p, "/create/").concat(r),
								buttonText: Object(b.c)("Create page"),
								description: Object(b.c)("Create a wiki page from this URL"),
								title: Object(b.c)('"'.concat(Object(b.b)("pageName", r), '" does not exist'))
							});
						case k.b.Unknown:
							return s.createElement(c.a, {
								buttonText: Object(b.c)("Reload page"),
								onButtonClick: this.reloadPage,
								title: Object(b.c)("An unknown error occurred")
							});
						case k.b.RestrictedPage:
							return s.createElement(c.a, {
								buttonLink: x,
								buttonText: v,
								description: Object(b.c)("This page uses a restricted URL and can not be used as a wiki page"),
								title: Object(b.c)('"'.concat(Object(b.b)("pageName", r), '" does not exist'))
							});
						case k.b.MayNotView:
							return s.createElement(c.a, {
								buttonLink: x,
								buttonText: v,
								description: Object(b.c)("The mods of this community have disabled this wiki page"),
								icon: s.createElement(g.a, {
									className: y.a.hideIcon
								}),
								title: Object(b.c)("This page has been disabled")
							});
						case k.b.WikiDisabled:
							return s.createElement(c.a, {
								buttonLink: "/r/".concat(n, "/"),
								buttonText: Object(b.c)("Continue to r/".concat(Object(b.b)("subredditName", n))),
								description: "The mods of this community have disabled their wiki",
								icon: s.createElement(g.a, {
									className: y.a.hideIcon
								}),
								title: Object(b.c)("This wiki has been disabled")
							});
						case k.b.PageNotFound:
							return s.createElement(c.a, {
								buttonLink: x,
								buttonText: v,
								title: Object(b.c)('"'.concat(Object(b.b)("pageName", r), '" does not exist'))
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
						className: Object(a.a)(e, y.a.container)
					}, this.renderPageContents())
				}
			}
			t.a = L(M(Object(r.b)(H)))
		},
		"./src/reddit/components/Wiki/WikiPageDiff/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Wiki/WikiPageDiff/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				c = i("./src/reddit/constants/wiki.ts"),
				d = i("./src/reddit/helpers/wiki/makeComparisonDiffKey.ts"),
				l = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				m = i("./src/reddit/i18n/utils.ts"),
				u = i("./src/reddit/selectors/subredditWiki.ts"),
				p = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				h = i("./src/reddit/components/Wiki/WikiPageDiff/index.m.less"),
				b = i.n(h),
				g = () => s.createElement("div", {
					className: b.a.loadingPlaceholder
				}, s.createElement("div", {
					className: b.a.loadingSection
				}, s.createElement(p.a, {
					paragraphsCount: 1
				})), s.createElement("div", {
					className: b.a.loadingSection
				}, s.createElement(p.a, {
					paragraphsCount: 1
				})));
			const k = Object(o.c)({
					diffInfo: (e, t) => {
						const i = Object(d.a)(t);
						return Object(u.i)(e, {
							key: i
						})
					}
				}),
				x = Object(n.b)(k);
			class v extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						subredditName: i,
						diffInfo: n,
						wikiPageName: o
					} = this.props;
					let d = null;
					d = !n || n.pending ? s.createElement(g, null) : n.error ? Object(m.c)("Could not load comparison diff") : s.createElement("div", {
						className: b.a.diffWrapper,
						dangerouslySetInnerHTML: {
							__html: n.htmlDiff || ""
						}
					});
					const u = Object(l.a)({
						subredditName: i,
						wikiPageName: o,
						wikiSubRoute: c.m.Revisions
					}, t);
					return s.createElement("div", {
						className: Object(a.a)(e, b.a.container, t ? b.a.mModHub : null)
					}, s.createElement(r.a, {
						buttonText: Object(m.c)("Go to page history"),
						buttonLink: u,
						className: b.a.pageTitle,
						title: Object(m.c)("Comparing revisions for /".concat(Object(m.b)("pageName", o)))
					}), s.createElement("div", {
						className: b.a.content
					}, d))
				}
			}
			t.a = x(v)
		},
		"./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less": function(e, t, i) {
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
		"./src/reddit/components/Wiki/WikiPageEditor/index.m.less": function(e, t, i) {
			e.exports = {
				topBar: "an_IeG33-UK9pts_JjqgQ",
				content: "_38SkvHzrhjQ7cSy7R0Lar1",
				resizableTextarea: "jtUB91J6tX7NTsovNabut"
			}
		},
		"./src/reddit/components/Wiki/WikiPageEditor/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./node_modules/react-redux/es/index.js"),
				a = i("./node_modules/reselect/es/index.js"),
				r = i("./src/lib/classNames/index.ts"),
				c = i("./src/reddit/actions/modal.ts"),
				d = i("./node_modules/react-router-redux/es/index.js"),
				l = i("./src/lib/makeActionCreator/index.ts"),
				m = i("./src/reddit/actions/pages/subredditWiki/index.ts"),
				u = i("./src/reddit/actions/toaster.ts"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/lib/constants/index.ts"),
				b = i("./src/lib/makeApiRequest/index.ts"),
				g = i("./src/lib/omitHeaders/index.ts"),
				k = i("./src/reddit/constants/headers.ts");
			var x = e => Object(b.b)(Object(g.a)(e.context, [k.a]), {
					endpoint: "".concat(e.context.apiUrl, "/r/").concat(e.subredditName, "/api/wiki/edit"),
					method: h.cb.POST,
					data: {
						content: e.pageContent,
						page: e.wikiPageName,
						previous: e.previousRevision,
						reason: e.revisionReason
					}
				}),
				v = i("./src/reddit/helpers/wiki/makeRevisionsListingKey.ts"),
				w = i("./src/reddit/helpers/wiki/makeWikiPageKey.ts"),
				f = i("./src/reddit/i18n/utils.ts"),
				j = i("./src/reddit/models/Toast/index.ts"),
				O = i("./src/reddit/routes/subredditWiki/normalizeWikiUrl.ts"),
				N = i("./src/reddit/actions/wiki/wikiEditing/constants.ts");
			const E = Object(l.a)(N.a);
			var P = i("./src/reddit/components/BlockNavigation/index.tsx"),
				C = i("./src/reddit/components/ConfirmUserActionModal/index.tsx"),
				R = i("./src/reddit/components/ResizableAutosizeTextarea/index.tsx"),
				_ = i("./src/reddit/components/TrackingHelper/index.tsx"),
				T = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx"),
				W = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				y = i("./src/reddit/controls/Button/index.tsx"),
				M = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				L = i("./src/reddit/helpers/wiki/validatePageName.ts"),
				H = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				I = i("./src/reddit/selectors/activeModalId.ts"),
				S = i("./src/reddit/selectors/platform.ts"),
				A = i("./src/reddit/selectors/subredditWiki.ts"),
				B = i("./src/higherOrderComponents/asModal/index.tsx"),
				U = i("./src/reddit/components/ModalStyledComponents/index.tsx"),
				D = i("./src/reddit/controls/LoadingIcon/index.tsx"),
				z = i("./src/reddit/controls/TextButton/index.tsx"),
				V = i("./src/reddit/components/Wiki/WikiPageEditor/AddRevisionReasonModal/index.m.less"),
				F = i.n(V);
			class G extends n.a.PureComponent {
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
					} = this.state, i = p.g - t.length;
					return n.a.createElement("div", {
						className: F.a.container
					}, n.a.createElement(U.g, {
						className: F.a.modalHeader
					}, n.a.createElement(U.n, null, Object(f.c)("Add a reason for your revision")), n.a.createElement(z.a, {
						onClick: this.props.onCancel
					}, n.a.createElement(U.b, null))), n.a.createElement("div", {
						className: F.a.contentBlock
					}, n.a.createElement("label", null, n.a.createElement("span", {
						className: F.a.labelText
					}, Object(f.c)("Revision reason")), n.a.createElement("input", {
						autoFocus: !0,
						className: F.a.reasonInput,
						maxLength: p.g,
						onChange: this.onTextChange,
						placeholder: Object(f.c)("Ex: Added source to appendix"),
						value: t
					})), n.a.createElement("div", {
						className: F.a.details
					}, Object(f.c)("".concat(Object(f.b)("count", i), " ").concat(Object(f.a)("chars", ["character", "characters"], i), " left")))), n.a.createElement(U.e, {
						className: F.a.modalFooter
					}, n.a.createElement(U.a, {
						onClick: this.props.onCancel
					}, Object(f.c)("Cancel")), n.a.createElement(y.f, {
						onClick: this.onSaveButtonClick,
						disabled: e
					}, e ? n.a.createElement(D.a, {
						className: F.a.loadingIcon,
						sizePx: 10
					}) : Object(f.c)("Save"))))
				}
			}
			var K = Object(B.a)(G),
				q = i("./src/reddit/components/Wiki/WikiPageEditor/index.m.less"),
				J = i.n(q);
			const Z = "Discard-wiki-page-changes",
				X = "Add-wiki-revision-reason",
				Y = 2,
				Q = {
					[L.a.InvalidPageName]: Object(f.c)("Page name is invalid"),
					[L.a.MaxLengthExceed]: Object(f.c)("Page name must be shorter than ".concat(Object(f.b)("maxPageLen", p.d), " characters")),
					[L.a.PageAlreadyExists]: Object(f.c)("Page with this name already exists"),
					[L.a.RestrictedPageName]: Object(f.c)("This page uses a restricted URL and can not be used as a wiki page")
				},
				$ = (e, t, i) => {
					const s = t.status;
					if (e) {
						if (s === H.b.Valid) return Q[L.a.PageAlreadyExists];
						if (s === H.b.PageNotFound) return Object(f.c)("You do not have permission to create this page");
						if (i) return Q[i]
					} else if (s === H.b.Valid && !t.isRevisable) return Object(f.c)("You do not have permission to edit this page")
				},
				ee = Object(a.c)({
					allowNavigationCallback: S.a,
					isRevisionReasonModalOpen: Object(I.b)(X),
					isSaveBeforeLeaveModalOpen: Object(I.b)(Z),
					wikiPage: A.c
				}),
				te = Object(o.b)(ee, (e, t) => ({
					onSaveWikiPage: (i, s) => e((e => {
						let {
							pageContent: t,
							wikiPageName: i,
							revisionReason: s,
							subredditName: n
						} = e;
						return async (e, o, a) => {
							const r = await x({
								context: a.apiContext(),
								pageContent: t,
								revisionReason: s,
								subredditName: n,
								wikiPageName: i
							});
							if (r.ok) e(E({
								pageKey: Object(w.a)({
									subredditName: n,
									wikiPageName: i
								}),
								pageRevisionsListingKey: Object(v.a)({
									subredditName: n,
									wikiPageName: i,
									isRecent: !1
								}),
								recentRevisionsListingKey: Object(v.a)({
									subredditName: n,
									wikiPageName: i,
									isRecent: !0
								})
							})), await e(Object(m.fetchSubredditWikiData)({
								includeDirectory: !0,
								includePageData: !0,
								subredditName: n,
								wikiPageName: i
							}));
							else {
								let t = Object(f.c)("Something went wrong");
								r.body && "RESTRICTED_PAGE" === r.body.reason && (t = Object(f.c)("Cannot create/edit restricted page")), e(Object(u.e)({
									kind: j.b.Error,
									text: t
								}))
							}
							return r.ok
						}
					})({
						pageContent: i,
						revisionReason: s,
						subredditName: t.subredditName,
						wikiPageName: t.wikiPageName
					})),
					onFinishWikiEdit: t => e(function() {
						let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
						return async (t, i) => {
							const s = i().platform.currentPage,
								n = s.locationState && s.locationState[p.a];
							if (e && n) t(Object(d.a)());
							else {
								const {
									subredditName: e,
									wikiPageName: i
								} = s.urlParams, n = Object(O.a)(s.url, {
									subredditName: e,
									wikiPageName: i
								});
								t(Object(d.c)(n))
							}
						}
					}(t)),
					closeAllModals: () => e(Object(c.f)()),
					toggleModal: t => e(Object(c.i)(t))
				}));
			class ie extends n.a.Component {
				constructor(e) {
					super(e), this.isUnmounted = !1, this.onSaveWithReason = async e => {
						const {
							markdown: t
						} = this.state;
						this.setState({
							isSavePending: !0
						}), this.props.sendEvent(Object(M.m)(this.props.isCreation));
						const i = await this.props.onSaveWikiPage(t, e);
						this.isUnmounted || (this.setState({
							isSavePending: !1
						}), i ? this.setState({
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
						this.props.isRevisionReasonModalOpen || this.props.toggleModal(X)
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
						isSaveBeforeLeaveModalOpen: i,
						wikiPage: s,
						wikiPageName: o
					} = this.props, {
						disableBlocking: a,
						isSavePending: c,
						markdown: d
					} = this.state, l = s && s.content && s.content.markdown || "", m = !d.trim(), u = d !== l, p = e && s ? Object(L.b)(s.name) : void 0, h = !(!s || s.status !== H.b.PageNotCreated || p), b = !(!s || s.status !== H.b.Valid || !s.isRevisable), g = e ? h : b, k = g && u && !m && !c && !p;
					return n.a.createElement("div", {
						className: Object(r.a)(J.a.container, this.props.className)
					}, n.a.createElement("div", {
						className: Object(r.a)(this.props.topBarClassName, J.a.topBar)
					}, n.a.createElement(y.i, {
						onClick: this.onCancel,
						disabled: c
					}, Object(f.c)("Cancel")), n.a.createElement(y.f, {
						disabled: !k,
						onClick: this.showRevisionReasonModal
					}, Object(f.c)("Save"))), n.a.createElement("div", {
						className: Object(r.a)(this.props.contentClassName, J.a.content)
					}, s ? g ? n.a.createElement(R.a, {
						autoFocus: !0,
						className: J.a.resizableTextarea,
						disabled: c,
						onChange: this.onTextChange,
						placeholder: Object(f.c)("Add page content here"),
						value: d
					}) : n.a.createElement(T.a, {
						description: $(e, s, p),
						title: e ? Object(f.c)('"'.concat(Object(f.b)("pageName", o), '" cannot be created')) : Object(f.c)('"'.concat(Object(f.b)("pageName", o), '" cannot be edited'))
					}) : n.a.createElement(W.a, {
						paragraphsCount: Y
					})), t && n.a.createElement(K, {
						withOverlay: !0,
						onCancel: this.onCancelAddingRevisionReason,
						onSave: this.onSaveWithReason,
						isPending: c
					}), n.a.createElement(P.a, {
						blockOnBeforeUnload: !0,
						dialogId: Z,
						enabled: u && !a
					}), i && n.a.createElement(C.a, {
						actionText: Object(f.c)("Discard"),
						headerText: Object(f.c)("Discard changes before leaving?"),
						modalText: Object(f.c)("You have made some changes to your wiki page, do you wish to discard the changes?"),
						onCancel: this.onAbortLeavingPage,
						onClose: this.onAbortLeavingPage,
						onConfirm: this.onLeavePageConfirmed,
						withOverlay: !0
					}))
				}
			}
			t.a = te(Object(_.b)(ie))
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.m.less": function(e, t, i) {
			e.exports = {
				container: "hFkZVSvr5ZCDtsUNvUe0t",
				mModHub: "OTGEcq8eHMW4w8Jk_xUB_",
				content: "jB-E_8PuDLsGMGUcJ38Ed",
				pageTitle: "_7mpqbmAh_bdv9eJPLzJkl",
				headerRow: "_24xr0pCtEq8smcGh9hy-iC",
				pageSource: "_3FGoxkytIqYAnG5hdqa8Uq"
			}
		},
		"./src/reddit/components/Wiki/WikiPageSource/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i("./node_modules/react-redux/es/index.js"),
				o = i("./node_modules/reselect/es/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx"),
				c = i("./src/reddit/components/Wiki/common/PageTitle/index.tsx"),
				d = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				l = i("./src/reddit/constants/wiki.ts"),
				m = i("./src/reddit/helpers/wiki/makeWikiPath.ts"),
				u = i("./src/reddit/i18n/utils.ts"),
				p = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				h = i("./src/reddit/selectors/subredditWiki.ts"),
				b = i("./src/reddit/components/Wiki/WikiPageSource/index.m.less"),
				g = i.n(b);
			const k = Object(o.c)({
					pending: h.a,
					revision: (e, t) => {
						let {
							revisionId: i
						} = t;
						return i ? Object(h.n)(e, {
							revisionId: i
						}) : void 0
					},
					wikiPage: h.c
				}),
				x = Object(n.b)(k);
			class v extends s.Component {
				render() {
					const {
						className: e,
						isModHub: t = !1,
						pending: i,
						revision: n,
						revisionId: o,
						subredditName: h,
						wikiPage: b,
						wikiPageName: k
					} = this.props;
					let x = null;
					x = i ? s.createElement(r.a, null) : b ? b.status === p.b.Valid ? b.content && b.content.markdown : Object(u.c)("Cannot show page content") : Object(u.c)("Page not found");
					const v = n || b && b.revision,
						w = !o,
						f = Object(m.a)({
							subredditName: h,
							wikiPageName: k,
							wikiSubRoute: w ? void 0 : l.m.Revisions
						}, t);
					return s.createElement("div", {
						className: Object(a.a)(e, g.a.container, t ? g.a.mModHub : null)
					}, s.createElement(c.a, {
						buttonText: w ? Object(u.c)("Go to wiki page") : Object(u.c)("Go to page history"),
						buttonLink: f,
						className: g.a.pageTitle,
						title: !w && v ? Object(u.c)("Revision from ".concat(Object(u.b)("timeAgo", Object(d.b)(v)))) : Object(u.c)("Page source")
					}), s.createElement("div", {
						className: g.a.content
					}, s.createElement("div", {
						className: g.a.headerRow
					}, v && s.createElement(d.a, {
						isLastRevision: w,
						revision: v,
						showReason: !0,
						showTimeAgo: !1
					})), s.createElement("div", {
						className: g.a.pageSource
					}, x)))
				}
			}
			t.a = x(v)
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3m-pL3lGJRyo7pWckPUL_d",
				dropdown: "_3IUuipl8jTmMnjXR0NDisP",
				row: "_25Y1JThsMmw5VNvhFFLb0j"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.m.less": function(e, t, i) {
			e.exports = {
				container: "I0T583ZtOWVEpRWsa0kbu",
				button: "_2IOi-lonN6Hy4pTcjFTLBp",
				revisionInfo: "Ln6UHsxFeDZdhv1yRUL0F",
				flexSpacer: "meAs5YnW58CX9i8rWjZQL"
			}
		},
		"./src/reddit/components/Wiki/WikiPageTopBar/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/history/esm/history.js"),
				n = i("./node_modules/react/index.js"),
				o = i.n(n),
				a = i("./node_modules/react-redux/es/index.js"),
				r = i("./node_modules/reselect/es/index.js"),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/copyToClipboard/index.ts"),
				l = i("./src/reddit/actions/toaster.ts"),
				m = i("./src/reddit/components/TrackingHelper/index.tsx"),
				u = i("./src/reddit/components/Wiki/common/RevisionInfo/index.tsx"),
				p = i("./src/reddit/constants/wiki.ts"),
				h = i("./src/reddit/controls/Button/index.tsx"),
				b = i("./src/reddit/i18n/utils.ts"),
				g = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				k = i("./src/reddit/models/Toast/index.ts"),
				x = i("./src/reddit/selectors/moderatorPermissions.ts"),
				v = i("./src/reddit/selectors/subreddit.ts"),
				w = i("./src/reddit/selectors/subredditWiki.ts"),
				f = i("./src/config.ts"),
				j = i("./src/reddit/components/OverflowMenu/index.tsx"),
				O = i("./src/reddit/constants/parameters.ts"),
				N = i("./src/reddit/controls/Dropdown/Row.tsx"),
				E = i("./src/reddit/helpers/trackers/subredditWiki.ts"),
				P = i("./src/reddit/components/Wiki/WikiPageTopBar/OverflowMenu/index.m.less"),
				C = i.n(P);
			const R = ["right", "bottom"],
				_ = ["right", "top"];
			class T extends o.a.Component {
				constructor() {
					super(...arguments), this.onViewPageSourceClick = () => {
						this.props.sendEvent(E.r)
					}, this.onCopyPageUrl = () => {
						const {
							subredditName: e,
							wikiPageName: t
						} = this.props, i = "".concat(f.a.redditUrl, "/r/").concat(e, "/wiki/").concat(t);
						this.props.onCopyPageUrl(i), this.props.sendEvent(E.e)
					}
				}
				render() {
					const {
						className: e,
						dropdownId: t,
						isModHub: i,
						subredditName: s,
						wikiPage: n,
						wikiPageName: a
					} = this.props, r = "/r/".concat(s, i ? "/about/wiki" : "/wiki");
					return o.a.createElement(j.b, {
						className: Object(c.a)(e, C.a.container),
						dropdownClassName: C.a.dropdown,
						dropdownId: t,
						targetPosition: R,
						tooltipPosition: _
					}, n && o.a.createElement(N.b, {
						className: C.a.row,
						displayText: Object(b.c)("View page history"),
						href: "".concat(r, "/revisions/").concat(a)
					}), n && o.a.createElement(N.b, {
						className: C.a.row,
						displayText: Object(b.c)("View page source"),
						href: "".concat(r, "/").concat(a, "?").concat(O.y),
						onClick: this.onViewPageSourceClick
					}), i && o.a.createElement(N.b, {
						className: C.a.row,
						displayText: Object(b.c)("View in community"),
						href: "/r/".concat(s, "/wiki/").concat(a)
					}), o.a.createElement(N.b, {
						className: C.a.row,
						displayText: Object(b.c)("Copy URL"),
						onClick: this.onCopyPageUrl
					}))
				}
			}
			var W = T,
				y = i("./src/reddit/components/Wiki/WikiPageTopBar/index.m.less"),
				M = i.n(y);
			const L = Object(r.c)({
					hasWikiModPerms: (e, t) => {
						const i = Object(v.y)(e, t);
						return !!i && Object(x.f)(e, {
							subredditId: i.id
						})
					},
					wikiPage: w.c
				}),
				H = Object(a.b)(L, e => ({
					onCopyPageUrl: t => e((e => async t => {
						Object(d.a)(e) && t(Object(l.e)(Object(l.d)(Object(b.c)("Copied page URL"), k.b.SuccessCommunity)))
					})(t))
				}));
			class I extends o.a.Component {
				render() {
					const {
						hasWikiModPerms: e,
						isModHub: t,
						wikiPage: i,
						wikiPageName: n,
						subredditName: a,
						className: r
					} = this.props, d = !!i && i.status === g.b.Valid, l = !!i && i.isRevisable, m = e && l && d, k = t ? "/r/".concat(a, "/about/wiki/edit/").concat(n) : "/r/".concat(a, "/wiki/edit/").concat(n);
					return o.a.createElement("div", {
						className: Object(c.a)(r, M.a.container)
					}, t && i && i.revision && o.a.createElement(u.a, {
						showTimeAgo: !0,
						className: M.a.revisionInfo,
						isLastRevision: !0,
						revision: i.revision
					}), o.a.createElement("div", {
						className: M.a.flexSpacer
					}), m && o.a.createElement(h.k, {
						className: M.a.button,
						to: "/r/".concat(a, "/about/wiki/settings/").concat(n)
					}, Object(b.c)("Page settings")), d && l && o.a.createElement(h.h, {
						className: M.a.button,
						to: Object(s.c)(k, {
							[p.a]: !0
						})
					}, Object(b.c)("Edit")), d && o.a.createElement(W, {
						className: M.a.overflowMenu,
						dropdownId: "wikiPage-OverflowMenu-".concat(n, "-").concat(t),
						isModHub: t,
						onCopyPageUrl: this.props.onCopyPageUrl,
						sendEvent: this.props.sendEvent,
						subredditName: a,
						wikiPage: i,
						wikiPageName: n
					}))
				}
			}
			t.a = H(Object(m.b)(I))
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_3Av0UmXioR3Vgw-lpzfBWu",
				button: "_2hFu9bCtEjS60NjZM3F_UE",
				description: "_2c02P9rTnnEw2KuDpY8JxB",
				title: "_3rol4SGAf0n5-e8EENfrur"
			}
		},
		"./src/reddit/components/Wiki/common/ContentPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i("./src/reddit/controls/Button/index.tsx"),
				o = i("./src/reddit/components/Wiki/common/ContentPlaceholder/index.m.less"),
				a = i.n(o);
			t.a = e => {
				const {
					buttonLink: t,
					buttonText: i,
					description: o,
					icon: r,
					onButtonClick: c,
					title: d
				} = e;
				let l = null;
				return i && t ? l = s.createElement(n.h, {
					className: a.a.button,
					onClick: e.onButtonClick,
					to: t
				}, i) : i && c && (l = s.createElement(n.f, {
					className: a.a.button,
					onClick: e.onButtonClick
				}, i)), s.createElement("div", {
					className: a.a.container
				}, r, d && s.createElement("div", {
					className: a.a.title
				}, d), o && s.createElement("div", {
					className: a.a.description
				}, o), l)
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less": function(e, t, i) {
			e.exports = {
				placeholderTitle: "XK5I3_2arHFpfmDn6iUGt",
				placeholderParagraph: "_3Rhsg99h5kjE-u1Pp-Uk8P",
				placeholderTextLine: "_5pG9RcI-AYalqG5z6osMT"
			}
		},
		"./src/reddit/components/Wiki/common/LoadingPlaceholder/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/lodash/range.js"),
				n = i.n(s),
				o = i("./node_modules/react/index.js"),
				a = i("./src/lib/classNames/index.ts"),
				r = i("./src/reddit/helpers/styles/mixins/loading.ts"),
				c = i("./src/reddit/components/Wiki/common/LoadingPlaceholder/index.m.less"),
				d = i.n(c);
			const l = e => o.createElement("div", {
				className: Object(a.a)(e.className, Object(r.b)({
					isLoading: !0
				}))
			});
			t.a = e => o.createElement(o.Fragment, null, e.showTitle && o.createElement(l, {
				className: d.a.placeholderTitle
			}), n()(e.paragraphsCount || 6).map(e => o.createElement("div", {
				className: d.a.placeholderParagraph,
				key: e
			}, n()(10).map(e => o.createElement(l, {
				className: d.a.placeholderTextLine,
				key: e
			})))))
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2NCACehu2vXVQzdHocg7Rq",
				linkButton: "_28uXMdKULX2ygqCKM5Apfz"
			}
		},
		"./src/reddit/components/Wiki/common/PageTitle/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s),
				o = i("./src/lib/classNames/index.ts"),
				a = i("./src/reddit/controls/Button/index.tsx"),
				r = i("./src/reddit/components/Wiki/common/PageTitle/index.m.less"),
				c = i.n(r);
			t.a = e => {
				const {
					buttonLink: t,
					buttonText: i,
					className: s,
					title: r
				} = e;
				return n.a.createElement("div", {
					className: Object(o.a)(s, c.a.container)
				}, r, i && t && n.a.createElement(a.o, {
					className: c.a.linkButton,
					to: t
				}, i))
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.m.less": function(e, t, i) {
			e.exports = {
				container: "_2b8IWktp8nbHqDKTRFWebW",
				authorLink: "IY5BT71vlrhwNnwInSc2f"
			}
		},
		"./src/reddit/components/Wiki/common/RevisionInfo/index.tsx": function(e, t, i) {
			"use strict";
			i.d(t, "b", (function() {
				return O
			})), i.d(t, "a", (function() {
				return N
			}));
			i("./node_modules/core-js/modules/es6.regexp.to-string.js");
			var s = i("./node_modules/lodash/noop.js"),
				n = i.n(s),
				o = i("./node_modules/react/index.js"),
				a = i.n(o),
				r = i("./src/higherOrderComponents/asTooltip.tsx"),
				c = i("./src/lib/classNames/index.ts"),
				d = i("./src/lib/constants/index.ts"),
				l = i("./src/lib/timeAgo/index.ts"),
				m = i("./src/reddit/components/AuthorLink/index.tsx"),
				u = i("./src/reddit/components/Hovercards/AuthorHovercard/UserHovercard.tsx"),
				p = i("./src/reddit/components/InfoTextTooltip/index.tsx"),
				h = i("./src/reddit/contexts/Language.tsx"),
				b = i("./src/reddit/helpers/graphql/helpers.ts"),
				g = i("./src/reddit/i18n/utils.ts"),
				k = i("./src/reddit/models/Post/index.ts"),
				x = i("./src/reddit/components/Wiki/common/RevisionInfo/index.m.less"),
				v = i.n(x);
			const w = ["center", "top"],
				f = ["center", "bottom"],
				j = Object(r.a)(p.b),
				O = function(e) {
					let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "en";
					const i = new Date(Object(b.j)(e.revisedAt));
					return Object(l.d)(t, i.valueOf() / 1e3)
				};
			class N extends a.a.Component {
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
						revision: i,
						showReason: s = !1,
						showTimeAgo: o = !1
					} = this.props, {
						showTooltip: r
					} = this.state, l = i.authorInfo && i.authorInfo.name || d.A, p = new Date(Object(b.j)(i.revisedAt));
					return a.a.createElement("span", {
						className: Object(c.a)(e, v.a.container)
					}, t ? Object(g.c)("Last revised by ") : Object(g.c)("Revised by "), a.a.createElement(u.a, {
						tooltipId: "wikipage-revision-author",
						user: l,
						sendHoverCardEvent: n.a
					}, a.a.createElement(m.a, {
						className: v.a.authorLink,
						author: l,
						isAuthorDeleted: Object(k.h)(l),
						isUnstyled: !0
					}, l)), o && a.a.createElement("span", {
						ref: this.setTooltipTargetRef,
						onMouseEnter: this.onShowTooltip,
						onMouseLeave: this.onHideTooltip
					}, " - ", a.a.createElement(h.a.Consumer, null, e => O(i, e)), a.a.createElement(j, {
						text: p.toString(),
						isOpen: r,
						tooltipTarget: this.tooltipTargetElement,
						targetPosition: w,
						tooltipPosition: f
					})), s && i.reason && a.a.createElement("span", null, " - ", i.reason))
				}
			}
		},
		"./src/reddit/helpers/trackers/subredditWiki.ts": function(e, t, i) {
			"use strict";
			i.d(t, "f", (function() {
				return a
			})), i.d(t, "g", (function() {
				return r
			})), i.d(t, "m", (function() {
				return d
			})), i.d(t, "d", (function() {
				return l
			})), i.d(t, "k", (function() {
				return m
			})), i.d(t, "q", (function() {
				return u
			})), i.d(t, "r", (function() {
				return p
			})), i.d(t, "c", (function() {
				return h
			})), i.d(t, "j", (function() {
				return b
			})), i.d(t, "p", (function() {
				return g
			})), i.d(t, "e", (function() {
				return k
			})), i.d(t, "b", (function() {
				return x
			})), i.d(t, "i", (function() {
				return v
			})), i.d(t, "a", (function() {
				return w
			})), i.d(t, "h", (function() {
				return f
			})), i.d(t, "l", (function() {
				return j
			})), i.d(t, "n", (function() {
				return N
			})), i.d(t, "o", (function() {
				return E
			}));
			var s = i("./src/reddit/models/SubredditWikiPage/index.ts"),
				n = i("./src/reddit/selectors/telemetry.ts");
			const o = e => Object.assign({}, n.defaults(e), {
					subreddit: n.subreddit(e),
					userSubreddit: n.userSubreddit(e)
				}),
				a = () => e => Object.assign({
					source: "wiki",
					action: "click",
					noun: "edit"
				}, o(e)),
				r = () => e => Object.assign({
					source: "menu_links_bar",
					action: "click",
					noun: "wiki"
				}, o(e)),
				c = e => t => Object.assign({
					source: "wiki",
					action: "click",
					noun: e
				}, o(t)),
				d = function() {
					let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
					return c(e ? "create_wiki_page" : "save_wiki_page")
				},
				l = c("compare_wiki_pages"),
				m = c("revert_wiki_page"),
				u = c("view_wiki_page"),
				p = c("view_source"),
				h = c("add_wiki_page_contributor"),
				b = c("remove_wiki_page_contributor"),
				g = c("save_wiki_page_settings"),
				k = c("copy_url"),
				x = c("add_wiki_subreddit_contributor"),
				v = c("remove_wiki_subreddit_contributor"),
				w = c("ban_wiki_contributor"),
				f = c("unban_wiki_contributor"),
				j = e => c(e ? "show_wiki_revision" : "hide_wiki_revision"),
				O = {
					[s.a.Inherit]: "subreddit_wiki_perms",
					[s.a.Contributors]: "only_wiki_contributors",
					[s.a.Mods]: "only_mods"
				},
				N = e => t => Object.assign({}, o(t), {
					source: "wiki",
					action: "click",
					noun: "hide_show_page",
					actionInfo: n.actionInfo(t, {
						settingValue: e ? "show" : "hide"
					})
				}),
				E = e => t => Object.assign({}, o(t), {
					source: "wiki",
					action: "click",
					noun: "editing_permissions",
					actionInfo: n.actionInfo(t, {
						settingValue: O[e]
					})
				})
		},
		"./src/reddit/icons/svgs/Hide/index.tsx": function(e, t, i) {
			"use strict";
			var s = i("./node_modules/react/index.js"),
				n = i.n(s);
			t.a = e => n.a.createElement("svg", {
				className: e.className,
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, n.a.createElement("g", null, n.a.createElement("path", {
				d: "M10,16.25 C8.728,16.25 7.544,15.867 6.556,15.212 L15.212,6.556 C15.867,7.544 16.25,8.728 16.25,10 C16.25,13.4465 13.446,16.25 10,16.25 M3.75,10 C3.75,6.5535 6.554,3.75 10,3.75 C11.272,3.75 12.456,4.133 13.444,4.788 L4.788,13.444 C4.133,12.456 3.75,11.272 3.75,10 M10,1.25 C5.1675,1.25 1.25,5.1675 1.25,10 C1.25,14.8325 5.1675,18.75 10,18.75 C14.8325,18.75 18.75,14.8325 18.75,10 C18.75,5.1675 14.8325,1.25 10,1.25"
			})))
		}
	}
]);
//# sourceMappingURL=SubredditWiki~reddit-components-Wiki-ModHubWikiManagement.9cd09366615d54ff2fd3.js.map